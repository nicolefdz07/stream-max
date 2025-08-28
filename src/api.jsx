const API_KEY = import.meta.env.VITE_API_KEY;

const getTrendingCarrousel = async() => {
  const endpoint = `https://api.themoviedb.org/3/trending/all/week?api_key=${API_KEY}`;
  try{
    const response = await fetch(endpoint)
    const data = await response.json()


    return data.results.splice(0, 6)

  }catch(error){
    console.log(error)
    return []
  }
}
export {getTrendingCarrousel};