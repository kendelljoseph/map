var connect = require('connect');

var server = connect()
    .use(connect.static('app'))
    .use(badRequestHandler)
    .listen(process.env.PORT);
    
function badRequestHandler(request,response){
    response.statusCode = 403;
    response.end("Bad Request");
}