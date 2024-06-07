const Movie = require('../models/Movie');

exports.getAll = () => Movie.find();
exports.create = (movieData) => Movie.create(movieData);
exports.findOne = (movieId) => Movie.findById(movieId);

exports.search = (title, genre, year) => {
  let query = {};

  if (title) {
    query.title = { $regex: new RegExp(title, 'i') };
  }

  if (genre) {
    query.genre = { $regex: new RegExp(genre, 'i') };
  }

  if (year) {
    const parsedYear = parseInt(year, 10);
    if (!isNaN(parsedYear)) {
      query.year = parsedYear;
    }
  }
  console.log(query);
  return Movie.find(query);
};
