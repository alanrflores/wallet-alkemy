const express = require('express');
const ctrlUser = require('../../controllers/users');
const router = express.Router();
const {
  authenticateUser,
  checkRole,
} = require('../../middlewares/authentication.middleware');

router.get(
  '/all',
  authenticateUser,
  checkRole([1, 3]),
  async (req, res, next) => {
    const query = req.query;
    try {
      let users = await ctrlUser.getAll(query);
      return res.status(200).send(users);
    } catch (error) {
      next(error);
    }
  }
);

router.get(
  '/:id',
  authenticateUser,
  checkRole([1, 3]),
  async (req, res, next) => {
    const { id } = req.params;
    const query = req.query;
    try {
      let user = await ctrlUser.get(id, query);
      return res.status(200).send(user);
    } catch (error) {
      next(error);
    }
  }
);

router.get('/', authenticateUser, async (req, res, next) => {
  const { limit, offset } = req.query;
  const id = req.user.sub;
  try {
    let user = await ctrlUser.get(id, limit, offset);
    return res.status(200).send(user);
  } catch (error) {
    next(error);
  }
});

router.post('/', async (req, res, next) => {
  let schema = req.body; // if the body will be validate by a middleware we already expect an object with valid info.
  // user as a account
  // user as a roleId
  try {
    let user = await ctrlUser.post(schema);
    res.status(201).send(user);
  } catch (error) {
    next(error);
  }
});

router.delete(
  '/:id',
  authenticateUser,
  checkRole([1, 3]),
  async (req, res, next) => {
    const { id } = req.params;

    try {
      await ctrlUser.delete(id);
      res.status(202).send('deleted');
    } catch (error) {
      next(error);
    }
  }
);

router.put('/', authenticateUser, async (req, res, next) => {
  try {
    const { newValue, img } = req.body;
    const schema = {
      ...newValue,
      image: img,
    };
    const updated = await ctrlUser.put(schema, req.user.sub);
    res.status(200).send(updated);
  } catch (error) {
    next(error);
  }
});

router.delete('/', authenticateUser, async (req, res, next) => {
  const id = req.user.sub;

  try {
    await ctrlUser.delete(id);
    res.status(200).send('deleted');
  } catch (error) {
    next(error);
  }
});

module.exports = router;
