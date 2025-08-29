const API_KEY = import.meta.env.VITE_API_KEY;

const getTrendingCarrousel = async () => {
  const endpoint = `https://api.themoviedb.org/3/trending/all/day?api_key=${API_KEY}`;
  try {
    const response = await fetch(endpoint);
    const data = await response.json();

    return data.results.splice(0, 6);
  } catch (error) {
    console.log(error);
    return [];
  }
};
const getFeaturedPrograms = async () => {
  const endpoint = `https://api.themoviedb.org/3/trending/all/week?api_key=${API_KEY}`;
  try {
    const res = await fetch(endpoint);
    const data = await res.json();
    return data.results;
  } catch (error) {
    console.log(error);
    return [];
  }
};

const getSeriesCarrousel = async () => {
  const endPoint = `https://api.themoviedb.org/3/trending/tv/day?api_key=${API_KEY}`;
  try {
    const res = await fetch(endPoint);
    const data = await res.json();
    return data.results;
  } catch (error) {
    console.log(error);
    return [];
  }
};
const getFeaturedSeries = async () => {
  const endpoint = `https://api.themoviedb.org/3/trending/tv/week?api_key=${API_KEY}`;
  try {
    const res = await fetch(endpoint);
    const data = await res.json();
    return data.results;
  } catch (error) {
    console.log(error);
    return [];
  }
};

const getMoviesCarrousel = async () => {
  const endPoint = `https://api.themoviedb.org/3/trending/movie/day?api_key=${API_KEY}`;
  try {
    const res = await fetch(endPoint);
    const data = await res.json();
    return data.results.splice(6);
  } catch (error) {
    console.log(error);
    return [];
  }
};
const getFeaturedMovies = async () => {
  const endPoint = `https://api.themoviedb.org/3/trending/movie/week?api_key=${API_KEY}`;
  try {
    const res = await fetch(endPoint);
    const data = await res.json();
    return data.results;
  } catch (error) {
    console.log(error);
    return [];
  }
};
const Top10Movies = async () => {
  const endPoint = `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}`;
  try {
    const res = await fetch(endPoint);
    const data = await res.json();
    return data.results.splice(0, 10);
  } catch (error) {
    console.log(error);
    return [];
  }
};
const Top10Series = async () => {
  const endPoint = `https://api.themoviedb.org/3/tv/popular?api_key=${API_KEY}`;
  try {
    const res = await fetch(endPoint);
    const data = await res.json();
    return data.results.splice(0, 10);
  } catch (error) {
    console.log(error);
    return [];
  }
};
const NowPlaying = async () => {
  const endPoint = `https://api.themoviedb.org/3/movie/now_playing?api_key=${API_KEY}`;
  try {
    const res = await fetch(endPoint);
    const data = await res.json();
    return data.results;
  } catch (error) {
    console.log(error);
    return [];
  }
};
const AiringToday = async () => {
  const endPoint = `https://api.themoviedb.org/3/tv/airing_today?api_key=${API_KEY}`;
  try {
    const res = await fetch(endPoint);
    const data = await res.json();
    return data.results;
  } catch (error) {
    console.log(error);
    return [];
  }
};
const getGenresMovieList = async () => {
  const endpoint = `https://api.themoviedb.org/3/genre/movie/list?api_key=${API_KEY}`;
  try {
    const res = await fetch(endpoint);
    const data = await res.json();
    return data.genres;
  } catch (error) {
    console.log(error);
    return [];
  }
};
const getGenresSeriesList = async () => {
  const endpoint = `https://api.themoviedb.org/3/genre/tv/list?api_key=${API_KEY}`;
  try {
    const res = await fetch(endpoint);
    const data = await res.json();
    return data.genres;
  } catch (error) {
    console.log(error);
    return [];
  }
};
const getMoviesGenre = async(id)=>{
  const endpoint = `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&language=es-ES&with_genres=${id}&sort_by=popularity.desc&page=1`;
  try {
    const res = await fetch(endpoint);
    const data = await res.json();
    return data.results;
  } catch (error) {
    console.log(error);
    return [];
  }
}
const getSeriesGenre = async(id)=>{
  const endpoint = `https://api.themoviedb.org/3/discover/tv?api_key=${API_KEY}&language=es-ES&with_genres=${id}&sort_by=popularity.desc&page=1`;
  try {
    const res = await fetch(endpoint);
    const data = await res.json();
    return data.results;
  } catch (error) {
    console.log(error);
    return [];
  }
}

export {
  getTrendingCarrousel,
  getFeaturedPrograms,
  getSeriesCarrousel,
  getFeaturedSeries,
  getMoviesCarrousel,
  getFeaturedMovies,
  Top10Movies,
  Top10Series,
  NowPlaying,
  AiringToday,
  getGenresMovieList,
  getGenresSeriesList,
  getMoviesGenre,
  getSeriesGenre

};
