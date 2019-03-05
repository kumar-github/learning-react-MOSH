import * as genresAPI from "./FakeGenreService";

const movies = [
  {
    _id: "98892995fbc4d2a84a5d",
    title: "Django Unchained",
    genre: { _id: "9b45958d211c7c444266", name: "Western" },
    numberInStock: 6,
    dailyRentalRate: 2.5,
    publishDate: "2018-01-03"
  },
  {
    _id: "90b665494ef7a1b67622",
    title: "Lost Highway",
    genre: { _id: "407e9814b53eec2feddc", name: "Mystery" },
    numberInStock: 2,
    dailyRentalRate: 3.5,
    publishDate: "2018-01-03"
  },
  {
    _id: "7b6ea1831fc887317678",
    title: "The Hateful Eight",
    genre: { _id: "298cbe0d47040f4c134b", name: "Western" },
    numberInStock: 2,
    dailyRentalRate: 5,
    publishDate: "2018-01-03"
  },
  {
    _id: "7e59c6763c531ce67b2e",
    title: "Terminator 2",
    genre: { _id: "", name: "Action" },
    numberInStock: 10,
    dailyRentalRate: 5,
    publishDate: "2018-01-03"
  },
  {
    _id: "4bcdbba0b885ef112b4c",
    title: "Casino",
    genre: { _id: "447a1acb5a64bd10e439", name: "Mystery" },
    numberInStock: 20,
    dailyRentalRate: 2,
    publishDate: "2018-01-03"
  },
  {
    _id: "59efe10ac13fa4c3147a",
    title: "Corpse Bride",
    genre: { _id: "5230e8dddedfb3cef7a2", name: "Action" },
    numberInStock: 5,
    dailyRentalRate: 6,
    publishDate: "2018-01-03"
  },
  {
    _id: "776f3374e2637ee4aa8b",
    title: "Django Unchained",
    genre: { _id: "1660c9362ed0b6d620ab", name: "Mystery" },
    numberInStock: 5,
    dailyRentalRate: 2,
    publishDate: "2018-01-03"
  },
  {
    _id: "f52952a321565723f850",
    title: "Taxi Driver",
    genre: { _id: "9b6af7e32bc4a960a082", name: "Action" },
    numberInStock: 4,
    dailyRentalRate: 6,
    publishDate: "2018-01-03"
  },
  {
    _id: "1599d68c01d7eae5a222",
    title: "The Hateful Eight",
    genre: { _id: "aa2f021c568b057f4d7d", name: "Western" },
    numberInStock: 8,
    dailyRentalRate: 5,
    publishDate: "2018-01-03"
  },
  {
    _id: "0f847efdde5ab94a05b4",
    title: "Raging Bull",
    genre: { _id: "d43a679a0d0705a5c1cc", name: "Western" },
    numberInStock: 20,
    dailyRentalRate: 2,
    publishDate: "2018-01-03"
  }
];

export function getMovies() {
  return movies;
}

export function getMovieByID(id) {
  return movies.find(aMovie => aMovie._id === id);
}

export function saveMovie(movie) {
  const movieInDB = movies.find(aMovie => aMovie._id === movie._id) || {};
  movieInDB.name = movie.name;
  movieInDB.genre = genresAPI.genres.find(g => g._id === movie.genreId);
  movieInDB.numberInStock = movie.numberInStock;
  movieInDB.dailyRentalRate = movie.dailyRentalRate;

  if (!movieInDB._id) {
  }
}
