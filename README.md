使用
Django https://www.djangoproject.com/
requests http://docs.python-requests.org/en/master/
Bootstrap http://getbootstrap.com/
Jquery https://jquery.com/
taobao IP 库 http://ip.taobao.com/instructions.php
实现以下要求
访问 http://127.0.0.1/ip-location/ 打开一个页面，页面正中间（竖直居中、水平居中）有一个输入框，
输入 ip 后无需点击任何按钮且不需刷新页面即可在输入框下方显示本机ip、本机IP地理位置、
所查询的ip 及 所查询 ip 的地理位置，输入框上方为所有用户最近十条的查询记录




由于无需点击任何按钮，代码的执行方法是通过监听input按钮的输入，所以可能会出现两个问题：



1：比如当我们要查找【113.32.3.12】 ,但当输入到 【113.32.3.1】 时，程序会检测出【113.32.3.1】为正确
   ip地址，所以也会将【113.32.3.1】这个地址查找出来，最后再查找【113.32.3.12】地址。


2：由于淘宝IP地址库有限制，如果在短时间内连续输入不同ip地址，由于前一个接口访问请求还没完成，又要执行
   下一个请求，可能会出现连接中断而找不到地址信息。


3：如果说用点击按钮的方法来查询，就不会出现上述问题。
