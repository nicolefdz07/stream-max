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
const getMoviesGenre = async (id) => {
  const endpoint = `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=${id}&sort_by=popularity.desc&page=1`;
  try {
    const res = await fetch(endpoint);
    const data = await res.json();
    return data.results;
  } catch (error) {
    console.log(error);
    return [];
  }
};
const getSeriesGenre = async (id) => {
  const endpoint = `https://api.themoviedb.org/3/discover/tv?api_key=${API_KEY}&with_genres=${id}&sort_by=popularity.desc&page=1`;
  try {
    const res = await fetch(endpoint);
    const data = await res.json();
    return data.results;
  } catch (error) {
    console.log(error);
    return [];
  }
};
const getProgramsResults = async (searchTerm) => {
  const endpointMovies = `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${encodeURIComponent(searchTerm)}`;

  const endpointSeries = `https://api.themoviedb.org/3/search/tv?api_key=${API_KEY}&query=${encodeURIComponent(searchTerm)}`;

  try {
    const [resMovies, resSeries] = await Promise.all([
      fetch(endpointMovies),
      fetch(endpointSeries),
    ]);

    const dataMovies = await resMovies.json();
    const dataSeries = await resSeries.json();

    
    const moviesWithType = dataMovies.results.map((movie) => ({
      ...movie,
      type: "movie",
    }));
    const seriesWithType = dataSeries.results.map((tv) => ({
      ...tv,
      type: "tv",
    }));

    
    return [...seriesWithType, ...moviesWithType];
  } catch (error) {
    console.log(error);
    return [];
  }
};

const getProgramById = async (id, type) => {
  const programEndpoint = `https://api.themoviedb.org/3/${type}/${id}?api_key=${API_KEY}`;

  try {
    const res = await fetch(programEndpoint);
    const data = await res.json();
    return data;
  } catch (error) {
    console.log(error);
    return null;
  }
};
const getCast = async (id, type) => {
  const castEndpoint = `https://api.themoviedb.org/3/${type}/${id}/credits?api_key=${API_KEY}`;
  try {
    const res = await fetch(castEndpoint);
    const data = await res.json();
    return data.cast.map((member) => member.name);
  } catch (error) {
    console.log(error);
    return [];
  }
};
const getGenreById = async (id, type) => {
  const endpoint = `https://api.themoviedb.org/3/${type}/${id}?api_key=${API_KEY}&language=es-ES`;

  try {
    const res = await fetch(endpoint);
    const data = await res.json();
    return data.genres.map((genre) => genre.name);
  } catch (error) {
    console.log(error);
    return [];
  }
};
const getTrailerUrl = async (id, type) => {
  const endpoint = `https://api.themoviedb.org/3/${type}/${id}/videos?api_key=${API_KEY}`;

  try {
    const res = await fetch(endpoint);
    const data = await res.json();
    console.log("Trailer API response:", data);

    if (!data.results || data.results.length === 0) {
      return null;
    }
    const trailer = data.results.find(
      (vid) => vid.type === "Trailer" && vid.site === "YouTube"
    );

    if (!trailer) return null;

    const link = `https://www.youtube.com/watch?v=${trailer.key}`;
    return link;
  } catch (error) {
    console.log("Trailer fetch error:", error);
    return null;
  }
};

export {
  AiringToday,
  getCast,
  getFeaturedMovies,
  getFeaturedPrograms,
  getFeaturedSeries,
  getGenreById,
  getGenresMovieList,
  getGenresSeriesList,
  getMoviesCarrousel,
  getMoviesGenre,
  getProgramById,
  getProgramsResults,
  getSeriesCarrousel,
  getSeriesGenre,
  getTrailerUrl,
  getTrendingCarrousel,
  NowPlaying,
  Top10Movies,
  Top10Series,
};
