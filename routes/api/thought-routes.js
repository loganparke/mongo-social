const router = require('express').Router();
const {
  addThought,
  getAllThoughts,
  getThoughtById,
  addReaction,
  removeThought,
  removeReaction
} = require('../../controllers/thought-controllers');

// /api/thoughts
router
  .route('/')
  .get(getAllThoughts)
  .post(addThought);

// /api/thoughts/:id
router
  .route('/:id')
  .get(getThoughtById)
  .put(addReaction)
  .delete(removeThought);

router
  .route('/:thoughtId/:reactionId')
  .put(removeReaction);

module.exports = router;