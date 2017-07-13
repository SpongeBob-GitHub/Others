// web_http.js

var http = require('http');
var querystring = require('querystring');
var server = http.createServer(function(req, res) {
var post = '';
req.on('data', function(chunk) { post += chunk;
});
req.on('end', function() {
post = querystring.parse(post);
        res.write(post.title);
        res.write(post.text);
        res.end();
}); }).listen(3000);


/*
Node.js 由于不需要另外的 HTTP 服务器,因此减少了一层抽象,给性能带来不少提升,
但同时也因此而提高了开发难度。举例来说,我们要实现一个 POST 数据的表单,例如:
<form method="post" action="http://localhost:3000/"> <input type="text" name="title" />
<textarea name="text"></textarea>
<input type="submit" />
</form>
这个表单包含两个字段:title 和 text,提交时以 POST 的方式将请求发送给 http://localhost:3000/。假设我们要实现的功能是将这两个字段的东西原封不动地返回给用户, PHP只需写两行代码,储存为 index.php 放在网站根目录下即可:
    echo $_POST['title'];
    echo $_POST['text'];
*/