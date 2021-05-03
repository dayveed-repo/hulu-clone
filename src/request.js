export const api_key = '4470e1a6bd8138ddac7e142315fd5fb5'

export default {
    fetchTrending: `https://api.themoviedb.org/3/trending/all/week?api_key=${api_key}&language=en-US`,
    fetchTopRated: `https://api.themoviedb.org/3/movie/top_rated?api_key=${api_key}&language=en-US`,
    fetchActionMovies: `https://api.themoviedb.org/3/discover/movie?api_key=${api_key}&with_genres=28`,
    fetchComedyMovies: `https://api.themoviedb.org/3/discover/movie?api_key=${api_key}&with_genres=35`,
    fetchHorrorMovies: `https://api.themoviedb.org/3/discover/movie?api_key=${api_key}&with_genres=27`,
    fetchRomanceMovies: `https://api.themoviedb.org/3/discover/movie?api_key=${api_key}&with_genres=10749`,
    fetchMysteryMovies: `https://api.themoviedb.org/3/discover/movie?api_key=${api_key}&with_genres=9648`,
    fetchSciFiMovies: `https://api.themoviedb.org/3/discover/movie?api_key=${api_key}&with_genres=878`,
    fetchWesternMovies: `https://api.themoviedb.org/3/discover/movie?api_key=${api_key}&with_genres=37`,
    fetchAnimationMovies: `https://api.themoviedb.org/3/discover/movie?api_key=${api_key}&with_genres=16`,
    fetchTvShows: `https://api.themoviedb.org/3/discover/movie?api_key=${api_key}&with_genres=10770`,
    searchMovie: `https://api.themoviedb.org/3/search/movie?api_key=${api_key}&language=en-US&query=BATMAN`
}