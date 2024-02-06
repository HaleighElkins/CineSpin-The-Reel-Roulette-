//event listener for buttons W.K.
var genreBtn = document.querySelector(".buttons")
genreBtn.addEventListener('click', function(event){
    if(event.target.tagName === "BUTTON"){
    console.log(event.target.id); 
    }
});

// TMDb API fetch H.E
const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0ODY0Njc0ZTgyZTM0ZmI2OWZmY2M1OWU5YWE4MTE1MiIsInN1YiI6IjY1YmIwZjgxMWZkMzZmMDE3ZDcyNTBjMyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.bMg42C8e5ddc38-ZLr6hNsMSxXlHspaELs7ubZBQImo'
  }
};

fetch('https://api.themoviedb.org/3/authentication', options)
  .then(response => response.json())
  .then(response => console.log(response))
  .catch(err => console.error(err));

 