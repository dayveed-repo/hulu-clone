const fetchMovie = (movieCat) =>{
    return {
        type: "FETCH",
        payload: movieCat
    }
}

const getResults = (arr) =>{
    return {
        type: "GETRESULTS",
        payload: arr
    }
}


export default {
    fetchMovie,
    getResults,
}