const express = require('express');
const transactions = require('../../controllers/transactions');
const router = express.Router();
const {
  authenticateUser,
  // checkRole,
} = require('../../middlewares/authentication.middleware');
const dataValidator = require('../../middlewares/dataValidator');
const createTransaction = require('../../schemas/createTransaction');
const updatedTransaction = require('../../schemas/updateTransaction');

router.get('/paginate', authenticateUser, transactions.paginate);

router.get('/:id', authenticateUser, async (req, res, next) => {
  try {
    const { id } = req.params;
    const transaction = await transactions.get(id);
    res.status(200).send(transaction);
  } catch (error) {
    next(error);
  }
});

// router.get('/', authenticateUser, checkRole([1, 3]), async (req, res, next) => {
//   try {
//     const transaction = await transactions.getAll();
//     res.status(200).send(transaction);
//   } catch (error) {
//     next(error);
//   }
// });
router.get('/', async (req, res, next) => {
  try {
    const transaction = await transactions.getAll();
    res.status(200).send(transaction);
  } catch (error) {
    next(error);
  }
});

router.post(
  '/',
  dataValidator(createTransaction),
  authenticateUser,
  async (req, res, next) => {
    try {
      const body = req.body;
      const userId = req.user.sub;
      const newTransaction = await transactions.create(userId, body);
      res.status(201).send(newTransaction);
    } catch (error) {
      next(error);
    }
  }
);

router.put(
  '/:id',
  dataValidator(updatedTransaction),
  authenticateUser,
  async (req, res, next) => {
    try {
      const { id: transactionId } = req.params;
      const body = req.body;
      const userId = req.user.sub;
      const updatedTransaction = await transactions.update(
        userId,
        transactionId,
        body
      );
      res.status(201).send(updatedTransaction);
    } catch (error) {
      next(error);
    }
  }
);

router.delete('/:id', authenticateUser, async (req, res, next) => {
  try {
    const { id: transactionId } = req.params;
    const userId = req.user.sub;
    const rta = await transactions.delete(userId, transactionId);
    res.status(200).send(rta);
  } catch (error) {
    next(error);
  }
});

module.exports = router;
