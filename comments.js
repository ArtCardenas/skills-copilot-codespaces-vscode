// Create web server
// 1. Create a web server
// 2. Create a route for the home page
// 3. Create a route for a post
// 4. Create a route for a comment

// 1. Create a web server
// 1.1 Import http module
const http = require('http');

// 1.2 Create web server
const server = http.createServer();

// 1.3 Start web server
server.listen(3000);

// 2. Create a route for the home page
// 2.1 Register a request event listener
server.on('request', (req, res) => {
  // 2.2 Set response header
  res.writeHead(200, {
    'Content-Type': 'text/html',
  });

  // 2.3 Set response body
  res.write('<h2>Home page</h2>');

  // 2.4 End response
  res.end();
});

// 3. Create a route for a post
// 3.1 Register a request event listener
server.on('request', (req, res) => {
  // 3.2 Check request url
  if (req.url === '/post') {
    // 3.3 Set response header
    res.writeHead(200, {
      'Content-Type': 'text/html',
    });

    // 3.4 Set response body
    res.write('<h2>Post page</h2>');

    // 3.5 End response
    res.end();
  }
});

// 4. Create a route for a comment
// 4.1 Register a request event listener
server.on('request', (req, res) => {
  // 4.2 Check request url
  if (req.url === '/comment') {
    // 4.3 Set response header
    res.writeHead(200, {
      'Content-Type': 'text/html',
    });

    // 4.4 Set response body
    res.write('<h2>Comment page</h2>');

    // 4.5 End response
    res.end();
  }
});