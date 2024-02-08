// List of Genre ID's
// {
//     "genres": [
//         {
//             "id": 28,
//             "name": "Action"
//         },
//         {
//             "id": 12,
//             "name": "Adventure"
//         },
//         {
//             "id": 16,
//             "name": "Animation"
//         },
//         {
//             "id": 35,
//             "name": "Comedy"
//         },
//         {
//             "id": 80,
//             "name": "Crime"
//         },
//         {
//             "id": 99,
//             "name": "Documentary"
//         },
//         {
//             "id": 18,
//             "name": "Drama"
//         },
//         {
//             "id": 10751,
//             "name": "Family"
//         },
//         {
//             "id": 14,
//             "name": "Fantasy"
//         },
//         {
//             "id": 36,
//             "name": "History"
//         },
//         {
//             "id": 27,
//             "name": "Horror"
//         },
//         {
//             "id": 10402,
//             "name": "Music"
//         },
//         {
//             "id": 9648,
//             "name": "Mystery"
//         },
//         {
//             "id": 10749,
//             "name": "Romance"
//         },
//         {
//             "id": 878,
//             "name": "Science Fiction"
//         },
//         {
//             "id": 10770,
//             "name": "TV Movie"
//         },
//         {
//             "id": 53,
//             "name": "Thriller"
//         },
//         {
//             "id": 10752,
//             "name": "War"
//         },
//         {
//             "id": 37,
//             "name": "Western"
//         }
//     ]
// }


// query list of movies by genre




const options = {
    method: 'GET',
    headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0ODY0Njc0ZTgyZTM0ZmI2OWZmY2M1OWU5YWE4MTE1MiIsInN1YiI6IjY1YmIwZjgxMWZkMzZmMDE3ZDcyNTBjMyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.bMg42C8e5ddc38-ZLr6hNsMSxXlHspaELs7ubZBQImo'
    }
};


var queryResult = [];

//added function to generate random page number for query results W.K via B.M. 
var pageNumber = Math.floor(Math.random() * (10 - 1));
fetch('https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page='+ pageNumber +'&sort_by=popularity.desc&with_genres=28', options)
    .then(response => response.json())
    .then(response => console.log(response))
    // .then(response => queryResult[response])
    .catch(err => console.error(err));










// pick random page number 1-10 for results in genres


function randomPageNumber() {
    console.log(Math.floor(Math.random() * (10 - 1)));
};


randomPageNumber();