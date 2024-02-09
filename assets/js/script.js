//event listener for buttons W.K.
var genreBtn = document.querySelector(".buttons")
var userChoice = "";
var userChoiceId = "";
var movies = "";
genreBtn.addEventListener('click', function(event){
    if(event.target.tagName === "BUTTON"){
    console.log(event.target); 
    userChoice = event.target.dataset.genre;
    userChoiceId = event.target.id;
    document.getElementById("user-choice").textContent = userChoice;
    }
});



document.querySelector(".is-success").addEventListener('click', function(event){
  var pageNumber = Math.floor(Math.random() * (10 - 1));
  fetch('https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page='+ pageNumber +'&sort_by=popularity.desc&with_genres=' + userChoice, options)
    .then(response => response.json())
    .then(response => console.log(response))
    // .then(response => queryResult[response])
    .catch(err => console.error(err));
  // document.location.replace("spinner.html")
})

async function getMovies() {
  var pageNumber = Math.floor(Math.random() * (10 - 1)+1);
  var response = await fetch('https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=' + pageNumber + '&sort_by=popularity.desc&with_genres='+ userChoiceId, options);
  movies = await response.json();
  console.log(movies);
  console.log(movies.results[0].title)
  pushSpinner();
  arcs.append("text").attr("transform", function (d) {
    d.innerRadius = 0;
    d.outerRadius = r;
    d.angle = (d.startAngle + d.endAngle) / 2;
    return "rotate(" + (d.angle * 180 / Math.PI - 90) + ")translate(" + (d.outerRadius - 10) + ")";
})
    .attr("text-anchor", "end")
    .text(function (d, i) {
        return data[i].label;
    });
}





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

 