const router = require('express').Router();
const {
    getMovies,
    getMovieById,
    createMovie,
    updateMovie,
    deleteMovie
} = require('../controllers/movieController');

router.route('/').get(getMovies).post(createMovie);
router.route('/:id').get(getMovieById).put(updateMovie).delete(deleteMovie);

module.exports = router;
