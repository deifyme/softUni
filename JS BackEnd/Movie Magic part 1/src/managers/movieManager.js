const dataMovies = require('../config/database.json');

exports.getAll = () => dataMovies.slice();

exports.create = (movieData) => {
  dataMovies.push(movieData);
  return dataMovies;
};

exports.findOne = (movieId) => {
  const movie = dataMovies.find((movie) => movie.id === movieId);
  return movie;
}