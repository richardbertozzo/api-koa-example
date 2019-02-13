const Router = require('koa-router');

const router = new Router();

router.get('/animals', (ctx) => {
    ctx.body = { test: 'teste' };
});

module.exports = router.routes();
