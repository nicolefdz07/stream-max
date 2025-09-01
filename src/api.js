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
  const endpoint = `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=${id}&sort_by=popularity.desc&page=1`;
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
  const endpoint = `https://api.themoviedb.org/3/discover/tv?api_key=${API_KEY}&with_genres=${id}&sort_by=popularity.desc&page=1`;
  try {
    const res = await fetch(endpoint);
    const data = await res.json();
    return data.results;
  } catch (error) {
    console.log(error);
    return [];
  }
}
const getProgramsResults = async(searchTerm)=>{
  
  const endpointMovies = `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}`
  const endpointSeries = `https://api.themoviedb.org/3/discover/tv?api_key=${API_KEY}`
  try {
    
    const [resMovies, resSeries] = await Promise.all([
      fetch(endpointMovies),
      fetch(endpointSeries)
    ]);

    const dataMovies = await resMovies.json();
    const dataSeries = await resSeries.json();

    
    const movieMatch = dataMovies.results.find(movie => movie.title.toLowerCase().includes(searchTerm.toLowerCase()));
    const seriesMatch = dataSeries.results.find(tv => tv.name.toLowerCase().includes(searchTerm.toLowerCase()));

    
    const filteredMovies = dataMovies.results.filter(movie => movie.title.toLowerCase() !== searchTerm.toLowerCase());
    const filteredSeries = dataSeries.results.filter(tv => tv.name.toLowerCase() !== searchTerm.toLowerCase());

    
    const sortedMovies = movieMatch ? [movieMatch, ...filteredMovies] : filteredMovies;
    const sortedSeries = seriesMatch ? [seriesMatch, ...filteredSeries] : filteredSeries;

    
    return [...sortedSeries, ...sortedMovies];
    
  } catch (error) {
    console.log(error);
    return [];
  }

  

}
  

const getProgramById = async(id, type)=>{
  const programEndpoint = `https://api.themoviedb.org/3/${type}/${id}?api_key=${API_KEY}`;
  

  try{
    const res = await fetch(programEndpoint);
    const data = await res.json();
    return data;
  }catch(error){
    console.log(error);
    return null;
  } 
}
const getCast = async(id, type)=>{
    const castEndpoint = `https://api.themoviedb.org/3/${type}/${id}/credits?api_key=${API_KEY}`;
    try {
      const res = await fetch(castEndpoint);
      const data = await res.json();
      return data.cast.map(member => member.name);
    } catch (error) {
      console.log(error);
      return [];
    }
  }
const getGenreById = async(id, type)=>{
    const endpoint = `https://api.themoviedb.org/3/${type}/${id}?api_key=${API_KEY}&language=es-ES`;

  try {
    const res = await fetch(endpoint);
    const data = await res.json();
    return data.genres.map(genre => genre.name); 
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
  getSeriesGenre,
  getProgramsResults,
  getProgramById, 
  getCast,
  getGenreById

};
