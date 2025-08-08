const http = require('http');
const port = process.env.PORT || 3000;

const requestHandler = (request, response) => {
  console.log(request.url);
  response.end('Hello from Node.js App!');
};

const server = http.createServer(requestHandler);

server.listen(port, (err) => {
  if (err) {
    return console.log('Something bad happened', err);
  }
  console.log(`Server is listening on ${port}`);
});
