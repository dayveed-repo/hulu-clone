import request from "./request";

 const initialState = {
    NavOption: request.fetchTrending,
    Active: "Trending",
    MovieResults: [],
    SelectedMovie: "yes",
}

const huluReducer = (state = initialState, action) =>{
        switch(action.type){
            case "FETCH":
                return {
                    ...state,
                    NavOption: action.payload.url,
                    Active: action.payload.name 
                }
            case "GETRESULTS":
                return {
                    ...state,
                    MovieResults: action.payload
                }
            default: 
                return state;
        }
}

export default huluReducer