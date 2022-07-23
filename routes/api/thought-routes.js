const router = require('express').Router();
const { getAllThoughts, GetThoughtById, createThoughts, updateThoughts, deleteThoughts, addReaction, deleteReaction} = require('../../controllers/thought-controller');

router
.route('/')
.get(getAllThoughts)
.post(createThoughts);

router
.route('/:id')
.get(GetThoughtById)
.put(updateThoughts)
.delete(deleteThoughts);

router
.route('/:thoughtId/reactions')
.post(addReaction);

router
.route('/:thoughtId/reactions/:reactionId')
.delete(deleteReaction);

module.exports = router;