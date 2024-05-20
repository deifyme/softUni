const http = require('http');
const url = require('url');

const { fileReader } = require('./fileReader.js');

const fileRoutes = {
  css: './content/styles/',
  icon: './content/images/',
  views: './views/',
};

http
  .createServer((req, res) => {
    const path = url.parse(req.url).pathname;
    const catId = path.slice(-1);
    let content;
    switch (path) {
      case '/':
        content = '{{catContent}}';
        fileReader(fileRoutes.views + 'home.html', res, content);
        break;
      case '/styles/site.css':
        fileReader(fileRoutes.css + 'site.css', res);
        break;
      case '/content/images/pawprint.ico':
        fileReader(fileRoutes.icon + 'pawprint.ico', res);
        break;
      case '/cats/add-breed':
        fileReader(fileRoutes.views + 'addBreed.html', res);
        break;
      case '/cats/add-cat':
        fileReader(fileRoutes.views + 'addCat.html', res);
        break;
      case '/edit/cat/' + catId:
        content = '{{catInfoContent}}';
        fileReader(fileRoutes.views + 'editCat.html', res, content, catId);
        break;
      default:
        res.writeHead(404, { 'Content-Type': 'text/plain' });
        res.write('404 Not Found');
        res.end();
    }
  })
  .listen(3000, () => {
    console.log('Server is running on port 3000...');
  });
