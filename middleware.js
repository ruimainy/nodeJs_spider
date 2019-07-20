var express = require('express');
var http = require('http');
var fs = require("fs");
var cheerio = require('cheerio');
var app = express();


http.get('http://www.laoshang01.com/', function (res) {
	var data = '';
	
	res.on('data',function(_d){
		data += _d;
	});

	res.on('end',function(_d){
		var $ = cheerio.load( data );
		// console.log( $ );
		var _txt = '';

		$('#main article').each(function (index, el) {
			var _title = $(el).find('h2.entry-title a').text();
			var _summary = $(el).find('div.entry-summary p').eq(0).text();
			// console.log( _title );
			// console.log( _summary );
			// console.log( '----------------' );
			_txt += '<p>' 
					+ _title 
					+ '</p><div>' 
					+ _summary 
					+ '</div>';

			var writerStream = fs.createWriteStream('xxx123.html');
			writerStream.write(_txt,'UTF8');

			writerStream.end();
			
			writerStream.on('finish', function() {
			    // console.log("写入完成。");
			});
		});
	});
});

app.listen(3366, function () {
	console.log("nodeJs爬虫 中间件 已经启动");
});
