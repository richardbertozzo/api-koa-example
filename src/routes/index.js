const Router = require('koa-router');

const router = new Router();

const animals = require('./animals');

router.use(animals);

module.exports = router;
