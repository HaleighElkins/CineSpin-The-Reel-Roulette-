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
  getMovies();
})

async function getMovies() {
  var pageNumber = Math.floor(Math.random() * (10 - 1)+1);
  var response = await fetch('https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=' + pageNumber + '&sort_by=popularity.desc&with_genres='+ userChoiceId, options);
  movies = await response.json();
  console.log(movies);
  console.log(movies.results[0].id)
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

//function to push movie data into data variable
function pushSpinner() {
for (let i=0; i<10; i++){
  data[i].label = (movies.results[i].title);
  data[i].question = (movies.results[i].overview);
}
console.log(data);
}


 