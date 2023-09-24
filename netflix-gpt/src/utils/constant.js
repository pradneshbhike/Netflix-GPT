export const LOGO = "https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png";

export const BG_IMG = "https://assets.nflxext.com/ffe/siteui/vlv3/dc1cf82d-97c9-409f-b7c8-6ac1718946d6/14a8fe85-b6f4-4c06-8eaf-eccf3276d557/IN-en-20230911-popsignuptwoweeks-perspective_alpha_website_large.jpg";

export const API_OPTIONS = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer ' + process.env.REACT_APP_TMDB_API_SECRET_KEY
    }
  };

  export const IMG_CMD = "https://image.tmdb.org/t/p/w500/"


  export const now_playing_endpoint = "https://api.themoviedb.org/3/movie/now_playing";

  export const popular_movies_endpoint = "https://api.themoviedb.org/3/movie/popular?page=1";

  export const top_rated_movies_endpoint = "https://api.themoviedb.org/3/movie/top_rated";

  export const upcoming_movies_endpoint = "https://api.themoviedb.org/3/movie/upcoming";


  export const languagesAvailable = {
    English:{  
        search: "search",
        gptSearchPlaceholder: "what would you like to watch today?"
    },
    Hindi:{
        search: "खोज",
        gptSearchPlaceholder: "आज आप क्या देखना चाहेंगे?"
    },
    Marathi:{
        search: "शोध",
        gptSearchPlaceholder: "तुम्हाला आज काय बघायला आवडेल?"
    },
    German:{
        search: "suchen",
        gptSearchPlaceholder: "Was möchtest du heute sehen?"
    }
  }


  export const OPEN_API_KEY = process.env.REACT_APP_OPEN_AI_API_KEY