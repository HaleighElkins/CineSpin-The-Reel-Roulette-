var padding = { top: 20, right: 40, bottom: 0, left: 0 },
    w = 500 - padding.left - padding.right,
    h = 500 - padding.top - padding.bottom,
    r = Math.min(w, h) / 2,
    rotation = 0,
    oldrotation = 0,
    picked = 100000,
    oldpick = [],
    color = d3.scale.category20();

var data = [
    { "label": "", "value": 1, "question": "" },
    { "label": "", "value": 2, "question": "" },
    { "label": "", "value": 3, "question": "" },
    { "label": "", "value": 4, "question": "" },
    { "label": "", "value": 5, "question": "" },
    { "label": "", "value": 6, "question": "" },
    { "label": "", "value": 7, "question": "" },
    { "label": "", "value": 8, "question": "" },
    { "label": "", "value": 9, "question": "" },
    { "label": "", "value": 10, "question": "" },
];


// Updated Start H.E ----------------------


async function getPlot(movieTitle) {
    try {
        var searchResults = await fetch('https://www.omdbapi.com/?apikey=6eeaf74d&s=' + encodeURIComponent(movieTitle));
        var searchData = await searchResults.json();

        if (searchData.Response === 'False' || !searchData.Search || searchData.Search.length === 0) {
            throw new Error('Movie not found or API error. Search API response:', searchData);
        }

        // Assuming you want the details for the first result
        var imdbID = searchData.Search[0].imdbID;

        var getDetails = await fetch('https://www.omdbapi.com/?apikey=6eeaf74d&i=' + imdbID);
        var details = await getDetails.json();

        if (details.Response === 'False') {
            throw new Error('Error fetching movie details. Details API response:', details);
        }

        console.log('OMDb API details response:', details);
        return details.Plot;
    } catch (error) {
        console.error(error.message);
        throw error;
    }
}

// Updated End H.E -----------------

var svg = d3.select('#chart')
    .append("svg")
    .data([data])
    .attr("width", w + padding.left + padding.right)
    .attr("height", h + padding.top + padding.bottom);
var container = svg.append("g")
    .attr("class", "chartholder")
    .attr("transform", "translate(" + (w / 2 + padding.left) + "," + (h / 2 + padding.top) + ")");
var vis = container
    .append("g");

var pie = d3.layout.pie().sort(null).value(function (d) { return 1; });
// declare an arc generator function
var arc = d3.svg.arc().outerRadius(r);
// select paths, use arc generator to draw
var arcs = vis.selectAll("g.slice")
    .data(pie)
    .enter()
    .append("g")
    .attr("class", "slice");

arcs.append("path")
    .attr("fill", function (d, i) { return color(i); })
    .attr("d", function (d) { return arc(d); });
// add the text
// arcs.append("text").attr("transform", function (d) {
//     d.innerRadius = 0;
//     d.outerRadius = r;
//     d.angle = (d.startAngle + d.endAngle) / 2;
//     return "rotate(" + (d.angle * 180 / Math.PI - 90) + ")translate(" + (d.outerRadius - 10) + ")";
// })
//     .attr("text-anchor", "end")
//     .text(function (d, i) {
//         return data[i].label;
//     });
container.on("click", spin);

function spin(d) {
    container.on("click", null);

    var ps = 360 / data.length,
        rng = Math.floor((Math.random() * 1440) + 360);

    rotation = (Math.round(rng / ps) * ps);

    picked = Math.round(data.length - (rotation % 360) / ps);
    picked = picked >= data.length ? (picked % data.length) : picked;

    rotation += 90 - Math.round(ps / 2);

        vis.transition()
        .duration(3000)
        .attrTween("transform", rotTween)
        .each("end", async function () {
        //mark question as seen
        d3.select(".slice:nth-child(" + (picked + 1) + ") path")
            .attr("fill", "#111");
        //populate question
        d3.select("#question h1")
            .text(data[picked].question);
        oldrotation = rotation;

        /* Get the result value from object "data" */
        console.log(data[picked].value)
     

        // Updated Start H.E ---------------

// Fetch the movie description from OMDb API
try {
    var selectedMovieTitle = data[picked].label; 
    var description = await getPlot(selectedMovieTitle);

    // Display the movie description
    console.log(description);

    d3.select("#description h1")
        .text(description);
} catch (error) {
    // Handle the error
    console.error('Error fetching movie description:', error);

    console.log('Selected element:', d3.select("#description h1"));
d3.select("#description h1").text(description);

}        
        // Updated End H.E ---------------

        /* Comment the below line for restrict spin to sngle time */
        container.on("click", spin);
})}


//make arrow
svg.append("g")
    .attr("transform", "translate(" + (w + padding.left + padding.right) + "," + ((h / 2) + padding.top) + ")")
    .append("path")
    .attr("d", "M-" + (r * .15) + ",0L0," + (r * .05) + "L0,-" + (r * .05) + "Z")
    .style({ "fill": "black" });
//draw spin circle
container.append("circle")
    .attr("cx", 0)
    .attr("cy", 0)
    .attr("r", 60)
    .style({ "fill": "white", "cursor": "pointer" });
//spin text
container.append("text")
    .attr("x", 0)
    .attr("y", 15)
    .attr("text-anchor", "middle")
    .text("SPIN")
    .style({ "font-weight": "bold", "font-size": "30px" });


function rotTween(to) {
    var i = d3.interpolate(oldrotation % 360, rotation);
    return function (t) {
        return "rotate(" + i(t) + ")";
    };
}


function getRandomNumbers() {
    var array = new Uint16Array(1000);
    var scale = d3.scale.linear().range([360, 1440]).domain([0, 100000]);
    if (window.hasOwnProperty("crypto") && typeof window.crypto.getRandomValues === "function") {
        window.crypto.getRandomValues(array);
        console.log("works");
    } else {
        //no support for crypto, get crappy random numbers
        for (var i = 0; i < 1000; i++) {
            array[i] = Math.floor(Math.random() * 100000) + 1;
        }

    } 
    return array;

}