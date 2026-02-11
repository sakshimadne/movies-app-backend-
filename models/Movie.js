const mongoose = require('mongoose');

const movieSchema = new mongoose.Schema({
    name: { type: String, required: true },
    genre: { type: String, required: true },
    releaseYear: { type: Number, required: true },
    rating: { type: Number, required: true },
    imageUrl: { type: String, required: false, default: '' }
}, {
    timestamps: true,
});

module.exports = mongoose.model('Movie', movieSchema);
