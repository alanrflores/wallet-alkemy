const express = require('express');
const userRouter = require('./users')
const accountRouter = require('./accounts')
const transactionsRouter = require('./transactions')
const roleRouter = require('./roles');
const authRouter = require('./auth')

function routerApi(app) {
  const router = express.Router();
  app.use('', router);

  router.use('/user', userRouter);
  router.use('/account', accountRouter);
  router.use('/transaction', transactionsRouter);
  router.use('/role', roleRouter);
  router.use('/auth', authRouter);
}

module.exports = routerApi;
