# connect-multiparty

[![NPM Version][npm-image]][npm-url]
[![NPM Downloads][downloads-image]][downloads-url]
[![Build Status][travis-image]][travis-url]
[![Test Coverage][coveralls-image]][coveralls-url]

[connect](https://github.com/senchalabs/connect/) middleware for
[multiparty](https://github.com/andrewrk/node-multiparty/).

I actually recommend against using this module. It's cleaner to use the
multiparty API directly.

This middleware will create temp files on your server and never clean them
up. Thus you should not add this middleware to all routes; only to the ones
in which you want to accept uploads. And in these endpoints, be sure to
delete all temp files, even the ones that you don't use.

## Usage

```js
var multipart = require('connect-multiparty');
var multipartMiddleware = multipart();
app.post('/upload', multipartMiddleware, function(req, resp) {
  console.log(req.body, req.files);
  // don't forget to delete all req.files when done
});
```

If you pass options to `multipart()`, they are passed directly into
multiparty.

## License

[MIT](LICENSE)

[coveralls-image]: https://img.shields.io/coveralls/expressjs/connect-multiparty/master.svg
[coveralls-url]: https://coveralls.io/r/expressjs/connect-multiparty?branch=master
[downloads-image]: https://img.shields.io/npm/dm/connect-multiparty.svg
[downloads-url]: https://npmjs.org/package/connect-multiparty
[npm-image]: https://img.shields.io/npm/v/connect-multiparty.svg
[npm-url]: https://npmjs.org/package/connect-multiparty
[travis-image]: https://img.shields.io/travis/expressjs/connect-multiparty/master.svg
[travis-url]: https://travis-ci.org/expressjs/connect-multiparty
