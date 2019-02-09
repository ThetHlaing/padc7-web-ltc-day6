import {readData,displayMovies} from '/js/main.js';

const detailTemplate = document.getElementById("movie-info-template").innerHTML;
const viewport = document.getElementById("viewport");

fetch('/data/movies.json')
    .then(res => res.json())
    .then(data => readData(data))
    .then((moviearray) => displayMovies(moviearray,detailTemplate,viewport));
