# LIRI-Bot

<!--
*** Thanks for checking out this README Template. If you have a suggestion that would
*** make this better, please fork the repo and create a pull request or simply open
*** an issue with the tag "enhancement".
*** Thanks again! Now go create something AMAZING! :D
***
***
***
*** To avoid retyping too much info. Do a search and replace for the following:
*** github_username, repo, twitter_handle, email
-->

<!-- PROJECT SHIELDS -->
<!--
*** I'm using markdown "reference style" links for readability.
*** Reference links are enclosed in brackets [ ] instead of parentheses ( ).
*** See the bottom of this document for the declaration of the reference variables
*** for contributors-url, forks-url, etc. This is an optional, concise syntax you may use.
*** https://www.markdownguide.org/basic-syntax/#reference-style-links
-->

[![Contributors][contributors-shield]][contributors-url]
[![Forks][forks-shield]][forks-url]
[![Stargazers][stars-shield]][stars-url]
[![Issues][issues-shield]][issues-url]

<!-- PROJECT LOGO -->
<br />
<p align="center">
  <h3 align="center">LIRI-Bot</h3>
    <a href="https://github.com/Alayendecker/LIRI-Bot"><strong>Documentation and Repo Link</strong></a>
    <br />
  </p>
</p>

<!-- TABLE OF CONTENTS -->

## Table of Contents

- [About the Project](#about-the-project)
  - [Built With](#built-with)
  - [Organization](#Organization)
- [Getting Started](#getting-started)
  - [Installation](#installation)
- [Usage](#usage)
- [Contact](#contact)
- [Acknowledgements](#acknowledgements)

<!-- ABOUT THE PROJECT -->

## About The Project

This app will let a user query multiple sets of data from different APIs.

- This app could be used as one stop shop for specific searches regarding the most recent upcoming concert for an artist. See - [Band In Town](#concert-this)

- A spotify search based off song name. See - [Spotify](#spotify-this-song)

* A movie search based off movie title. See - [OMDB](#movie-this)

### Built With

- [Node](https://nodejs.org/en/)
- [Node Package - Axios](https://www.npmjs.com/package/axios)
- [Node Package - DotEnv](https://www.npmjs.com/package/dotenv)
- [Node Package - Moment](https://www.npmjs.com/package/moment)
- [Node Package - API - Spotify API](https://www.npmjs.com/package/node-spotify-api)
- [API - OMDB](http://www.omdbapi.com)
- [API - Bands In Town](http://www.artists.bandsintown.com/bandsintown-api)
- [othneildrew - Best README Template](https://github.com/othneildrew/Best-README-Template)

<!-- Organization -->

## Organization

Requires are located at the top of the liri.js file along with an instanciated spotify and user input global variable.

All functions are called through a switch case wrapped into a function for logging. Each of the four commands used in this app have their own functions.

`concert-this`

`spotify-this-song`

`movie-this`

`do-what-it-says`

The functions themselves are created in the bottom half of the liri.js file.

<!-- GETTING STARTED -->

## Getting Started

To get a local copy up and running follow these simple steps.

### Installation

1. Clone the repo

```sh
git clone https:://github.com/Alayendecker/LIRI-Bot.git
```

2. Install NPM packages

```sh
npm install
```

3. Create an `.env` to hide your own API keys you will need to run this app.

```sh
# Spotify API keys
SPOTIFY_ID= (ID here)
SPOTIFY_SECRET= (Secret here)
```

<!-- USAGE EXAMPLES -->

## Usage

To use liri with node run `node liri.js <your command> <search term>`

You can find some example images in the [images folder](https://github.com/Alayendecker/LIRI-Bot/tree/master/assets/images) `assets>images`

### Commands

| App Command         | Short Description                                 |
| ------------------- | ------------------------------------------------- |
| `concert-this`      | Searches Bands in Town API for an artist's events |
| `spotify-this-song` | Searches Spotify for info about a band or artist  |
| `movie-this`        | Searches for info about the movie you entered     |
| `do-what-it-says`   | Runs the cmd text and search term in random.txt   |

#### `concert-this (artistName)`

This will search the Bands in Town Artist Events API for an artist and render the following information about each event to the terminal:

- Name of the venue
- Venue location
- Date of the Event (use moment to format this as "MM/DD/YYYY")

#### `spotify-this-song (songName)`

This will show the following information about the song in your terminal/bash window

- Artist(s):
- The song's name:
- A preview link of the song from Spotify:
- The album that the song is from:

#### `movie-this (movieName)`

This will output the following information to your terminal/bash window:

- Title of the movie.
- Year the movie came out.
- IMDB Rating of the movie.
- Rotten Tomatoes Rating of the movie.
- Country where the movie was produced.
- Language of the movie.
- Plot of the movie.
- Actors in the movie.

#### `do-what-it-says`

LIRI will take the text inside of random.txt and then use it to call one of LIRI's commands.

- It should run `spotify-this-song` for `"I Want it That Way,"` as follows the random text in `random.txt` file.
- Edit the text in random.txt to test out the feature for `movie-this`, `spotify-this-song` and `concert-this`.

<!-- CONTACT -->

## Contact

Role Lead Developer for LIRI Bot ALayendecker

Project Link: [https://github.com/Alayendecker/LIRI-Bot](https://github.com/Alayendecker/LIRI-Bot)

Special Thanks to - [jtsai972 - For assistance with README's Thanks!](https://github.com/jtsai972)

<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->

[contributors-shield]: https://img.shields.io/github/contributors/Alayendecker/LIRI-Bot.svg?style=flat-square
[contributors-url]: https://github.com/Alayendecker/LIRI-Bot/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/Alayendecker/LIRI-Bot.svg?style=flat-square
[forks-url]: https://github.com/Alayendecker/LIRI-Bot/network/members
[stars-shield]: https://img.shields.io/github/stars/Alayendecker/LIRI-Bot.svg?style=flat-square
[stars-url]: https://github.com/Alayendecker/LIRI-Bot/stargazers
[issues-shield]: https://img.shields.io/github/issues/Alayendecker/LIRI-Bot.svg?style=flat-square
[issues-url]: https://github.com/Alayendecker/LIRI-Bot/issues
