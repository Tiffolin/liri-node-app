//All the requires ================================================================================
require("dotenv").config();
let axios = require("axios");
var keys = require("./keys.js");
let Spotify = require('node-spotify-api');
let input = process.argv.slice(3).join("+");
let fs = require("fs");

//concertThis function================================================================================
function concertThis(){
// console.log(input);
let queryUrl = "https://rest.bandsintown.com/artists/" + input + "/events?app_id=codingbootcamp"
// console.log(queryUrl);
axios.get(queryUrl).then(
  function(response) {
// console.log(response.data[0]);
console.log("\n-------------\n");
    console.log("Name of venue" + " " + ":" + " " + response.data[0].venue.name);
    console.log("Venue location" + " " + ":" + " " +  response.data[0].venue.country + response.data[0].venue.region + response.data[0].venue.city);
    console.log("Date of Event" + " " + ":" + " " + response.data[0].datetime); //(use moment to format this as "MM/DD/YYYY")
    console.log("\n-------------\n");
  },

  function(error) {
    if (error.response) {
      console.log(error.response.data);
      console.log(error.response.status);
      console.log(error.response.headers);
    } else if (error.request) {
      console.log(error.request);
    } else {
      console.log("Error", error.message);
    }
    console.log(error.config);
  }
);

}

//spotifyThisSong function==========================================================================================================
function spotifyThisSong(){

var spotify = new Spotify(keys.spotify);

if (input === ""){ 
    input = "Immortals"}
else(input = process.argv.slice(3).join("+"));


spotify
  .search({ type: 'track', query: input })
  .then(function(response) {
    console.log("\n-------------\n");
    console.log("Artist(s)" + " " + ":" + " " + response.tracks.items[0].artists[0].name);
    console.log("Song's Name" + " " + ":" + " " + response.tracks.items[0].name);
    console.log("preview url" + " " + ":" + " " + response.tracks.items[0].preview_url);
    console.log("\n-------------\n");
  })
  .catch(function(err) {
    console.log(err);
  });
    
};

//movieThis function================================================================================================================
function movieThis(){
//setting default search result
if (input === ""){ 
    input = "Mr. Nobody"}
else(input = process.argv.slice(3).join("+"));
// console.log(input);
let queryUrl = "http://www.omdbapi.com/?t=" + input + "&y=&plot=short&apikey=trilogy";
// console.log(queryUrl);   

axios.get(queryUrl).then(
function(response) {
  console.log("\n-------------\n");
    console.log("Movie Title" + " " + ":" + " " + response.data.Title);
    console.log("Year the movie came out" + " " + ":" + " " + response.data.Year);
    console.log("IMDB Rating of the movie" + " " + ":" + " " + response.data.Rated);
    console.log("Rotten Tomatoes Rating" + " " + ":" + " " + response.data.Ratings[1].Value);
    console.log("Country where the movie was produced" + " " + ":" + " " + response.data.Country);
    console.log("Language of the movie" + " " + ":" + " " + response.data.Language);
    console.log("Plot of the movie" + " " + ":" + " " + response.data.Plot);
    console.log("Actors in the movie" + " " + ":" + " " + response.data.Actors);
    console.log("\n-------------\n");
},
 //If the user doesn't type a movie in, the program will output data for the movie 'Mr. Nobody.' 

function(error) {
    if (error.response) {
        console.log(error.response.data);
        console.log(error.response.status);
        console.log(error.response.headers);
  } else if (error.request) {
        console.log(error.request);
  } else {
        console.log("Error", error.message);
  }
        console.log(error.config);
}
);   
}


function doWhatItSays(){
  fs.readFile("random.txt", "utf8", function(error, data) {

    if (error) {
      return console.log(error);
    }
    // console.log(data);
    // console.log(data);
  
    let dataArr = data.split(",");
    // console.log(dataArr);

    let op = dataArr[0];
    switch (op){
        case"concert-this":
        concertThis(dataArr[1]);
        break;
    
        case"spotify-this-song":
        spotifyThisSong(dataArr[1]);
        break;
    
        case"movie-this":
        movieThis(dataArr[1]);
        break;
    };


  });
};


let op = process.argv[2];
    switch (op){
        case"concert-this":
        concertThis();
        break;
    
        case"spotify-this-song":
        spotifyThisSong();
        break;
    
        case"movie-this":
        movieThis();
        break;
    
        case"do-what-it-says":
        doWhatItSays();
        break;

        default:
        console.log(keys)
    }

          // // Append showData, print showData to the console
          // fs.appendFile("log.txt", showData, function(err) {
          //   if (err) throw err;
          //   console.log(showData);