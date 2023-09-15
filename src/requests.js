const key = "ffa229b9bd22ecd8a5cb292da9cd612b";

const requests = {
  getPopular: `https://api.themoviedb.org/3/movie/popular?api_key=${key}&language=en-US&page=1`,
  getMovies: `https://api.themoviedb.org/3/movie/top_rated?api_key=${key}&language=en-US&page=1`,
};

export default requests;
