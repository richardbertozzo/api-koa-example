const Router = require('koa-router');
const { getAnimals } = require('../controllers/animals-controller');

const router = new Router();

router.get('/animals', getAnimals);

module.exports = router.routes();
