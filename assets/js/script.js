//event listener for buttons W.K.
var genreBtn = document.querySelector(".buttons")
var userChoice = "";
genreBtn.addEventListener('click', function(event){
    if(event.target.tagName === "BUTTON"){
    console.log(event.target); 
    userChoice = event.target.id;
    document.getElementById("user-choice").textContent = userChoice;
    }
});



document.querySelector(".is-success").addEventListener('click', function(event){
  var pageNumber = Math.floor(Math.random() * (10 - 1));
  async function getMovies() {

    var response = await fetch('https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=' + pageNumber + '&sort_by=popularity.desc&with_genres='+userChoice, options);
    var movies = await response.json();
    console.log(movies);



    function pushData() {

      for (let i = 0; i < 10; i++) {
        data[i].label = movies.results[i].title;

      };
  

      console.log(data);

      return;

    };

    function pushDetails(){
      // need to set up the request to get the data for the 

    }
    
    
    
    
    
    
    pushData();


    




  }

  getMovies();

})


// TMDb API fetch H.E
var options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0ODY0Njc0ZTgyZTM0ZmI2OWZmY2M1OWU5YWE4MTE1MiIsInN1YiI6IjY1YmIwZjgxMWZkMzZmMDE3ZDcyNTBjMyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.bMg42C8e5ddc38-ZLr6hNsMSxXlHspaELs7ubZBQImo'
  }
};





//TMDb API fetch H.E
// var options = {
//   method: 'GET',
//   headers: {
//     accept: 'application/json',
//     Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0ODY0Njc0ZTgyZTM0ZmI2OWZmY2M1OWU5YWE4MTE1MiIsInN1YiI6IjY1YmIwZjgxMWZkMzZmMDE3ZDcyNTBjMyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.bMg42C8e5ddc38-ZLr6hNsMSxXlHspaELs7ubZBQImo'
//   }
// };

// fetch('https://api.themoviedb.org/3/authentication', options)
//   .then(response => response.json())
//   .then(response => console.log(response))
//   .catch(err => console.error(err));

 