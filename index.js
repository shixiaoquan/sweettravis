const Koa = require('koa');
const app = module.exports = new Koa();

app.use(async function (ctx) {
  ctx.body = 'Hello World test travis';
});

if (!module.parent) app.listen(3000);