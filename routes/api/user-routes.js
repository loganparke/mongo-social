const router = require('express').Router();
const {
  getAllUsers,
  getUserById,
  createUser,
  updateUser,
  deleteUser
} = require('../../controllers/user-controllers');

// /api/users    ALL WORK
router
  .route('/')
  .get(getAllUsers)
  .post(createUser);

// /api/users/:id  ALL WORK
router
  .route('/:id')
  .get(getUserById)
  .put(updateUser)
  .delete(deleteUser)
  
// /api/users/:userId/friends/:friendId
router
  .route('/:userId/friends/:friendId')
  .post()
  .delete();

module.exports = router;