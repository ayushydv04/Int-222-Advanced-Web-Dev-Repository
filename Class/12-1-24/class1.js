var http = require('http');

http.createServer(function (req, res){
    res.writeHead(200,{'Content-Type': 'text/html'});
    res.end('Hello World');

}).listen(8080);
// 0,1,
/* 1->0, 2-1->1, 2-1->1, 1L, 1->0=2, 1->2, 1 
12 R  2
13 R  2
14 R  L 1
15 R  2
17 G  2
18 R  2
19 R  L  1
20 R  L  1
22 R  L  1
23 R  2
25 R  2
26 R  2
100


*/

// 1     4
// 1     6
// 1
// 1
// 1



// 6