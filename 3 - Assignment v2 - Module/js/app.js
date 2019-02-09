import data from '/data/movies.js';
import {readData,displayMovies} from '/js/main.js';


const detailTemplate = document.getElementById("movie-info-template").innerHTML;
const viewport = document.getElementById("viewport");

const moviearray = readData(data);
displayMovies(moviearray,detailTemplate,viewport);
