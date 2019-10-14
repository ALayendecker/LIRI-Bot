//==============================
//JUNK

require("dotenv").config();
var keys = require("./keys.js");
var moment = require("moment");
var axios = require("axios");
var Spotify = require("node-spotify-api");
var spotify = new Spotify(keys.spotify);
var fs = require("fs");
var input = process.argv[2];
//===============================

function doWhat(input, userInput) {
  switch (input) {
    case "concert-this":
      bandsInTown(userInput);
      break;

    case "spotify-this-song":
      spotifyFn(userInput);
      break;

    case "movie-this":
      movie(userInput);
      break;

    case "do-what-it-says":
      theThingToDo();
      break;

    default:
      break;
  }
}

var userInput = process.argv.slice(3).join(" ");
doWhat(input, userInput);
//=================================================================================

// Function for   case "concert-this":
function bandsInTown(artist) {
  // var artist = process.argv[3];
  var queryUrl =
    "https://rest.bandsintown.com/artists/" +
    artist +
    "/events?app_id=codingbootcamp";
  axios.get(queryUrl).then(function(response) {
    console.log(`
        Venue: ${response.data[0].venue.name}
        Location ${
          response.data[0].venue.region
        } + ${response.data[0].venue.city}
        Date: ${moment(response.data[0].datetime).format("MM/DD/YYYY")}
        `);
  });
}
//=================================================================================

//=================================================================================

// Function for case "spotify-this-song":
function spotifyFn(songName) {
  // var songName = process.argv[3];
  spotify
    .search({ type: "track", query: songName, limit: 5 })
    .then(function(response) {
      var i = 0;
      for (var i = 0; i < 3; i++)
        console.log(`
        Artist(s): ${response.tracks.items[i].artists[0].name}
        Song Name: ${response.tracks.items[i].name}
        Preview: ${response.tracks.items[i].external_urls.spotify}
        Album: ${response.tracks.items[i].album.name}
        `);
    })
    .catch(function(err) {
      console.log(err);
    });
}

//=================================================================================

//=================================================================================

// Function for case "movie-this":
//======================================================================================
function movie(movieName) {
  // var movieName = process.argv[3];
  if (!movieName) {
    movieName = "Mr. Nobody";
    console.log(
      "If you haven't watched 'Mr.Nobody,' then you should: http://www.imdb.com/title/tt0485947/" +
        "It's on Netflix"
    );
  }
  var queryUrl =
    "http://www.omdbapi.com/?t=" + movieName + "&y=&plot=short&apikey=trilogy";
  axios
    .get(queryUrl)
    .then(function(response) {
      console.log(`
        Movie Title: ${response.data.Title}
        Release Year: ${response.data.Year}
        IMDB Rating: ${response.data.imdbRating}
        Rotten Tomatoes Rating: ${response.data.Ratings[1].Value}
        Country Produced: ${response.data.Country}
        Language: ${response.data.Language}
        Plot: ${response.data.Plot}
        Actors: ${response.data.Actors}
        `);
    })
    .catch(function(error) {
      if (error.response) {
        console.log("---------------Data---------------");
        console.log(error.response.data);
        console.log("---------------Status---------------");
        console.log(error.response.status);
        console.log("---------------Status---------------");
        console.log(error.response.headers);
      } else if (error.request) {
        // The request was made but no response was received
        // `error.request` is an object that comes back with details pertaining to the error that occurred.
        console.log(error.request);
      } else {
        // Something happened in setting up the request that triggered an Error
        console.log("Error", error.message);
      }
      console.log(error.config);
    });
}

//=================================================================================

//=================================================================================

function theThingToDo() {
  fs.readFile("random.txt", "utf8", function(error, data) {
    if (error) {
      return console.log(error);
    }

    var dataArr = data.split(",");

    console.log(dataArr);
    doWhat(dataArr[0], dataArr[1]);
  });
}
// Function for  case "do-what-it-says":

//=================================================================================
