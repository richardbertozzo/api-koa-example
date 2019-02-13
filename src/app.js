require('dotenv').config();
const Koa = require('koa');
const koaLogger = require('koa-logger');
const bodyParser = require('koa-bodyparser');
const routes = require('./routes');
const errorHandler = require('./middleware/error-handler');
const logger = require('./lib/logger');

const app = new Koa();

app.use(koaLogger());
app.use(bodyParser());
app.use(errorHandler);

app.use(routes.routes());
app.use(routes.allowedMethods());

const port = process.env.PORT || 3000;
app.listen(port, () => {
    logger.info(`The server is running in: ${port}`);
});

module.exports = app;
