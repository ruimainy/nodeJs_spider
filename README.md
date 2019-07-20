适合新人学习node的最简单的nodeJs爬虫例子
======================

无论是什么爬虫程序，它的本质都是得到网页的html代码。
---------------

nodeJs要做爬虫程序，那么就要解决，如何用nodejs得到网页的html代码。
怎么做呢？
其实就是用发起 get 请求，得到res的返回值，

在本例子里，我使用的是nodeJs的http模块。
<!-- 有很多模块都可以做，express、request等 -->

middleware.js，所在的目录是middleware，
我把middleware目录放在了vue-cli里面，
它的安装的模块，都在node_modules目录里面。

<!-- cheerio -->
cheerio，就是服务器端的jQuery，
-----------------
去掉了jQuery的一些效果类和请求类等等功能后，
仅保留核心对dom操作的部分，
因此能够对dom进行和jQuery一样方便的操作。
它是我们筛选数据的利器——把多余的html标签去掉，只留下我们想要的内容的重要工具。

英文的官网：https://cheerio.js.org/
中文的文档：https://www.jianshu.com/p/629a81b4e013

<!--  -->
[nodeJs的Stream](https://www.runoob.com/nodejs/nodejs-stream.html)
---------------
看这个页面fs写入流的例子
