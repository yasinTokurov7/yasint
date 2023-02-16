let table = document.querySelector(".container");

const API = "https://www.omdbapi.com/?apikey=b6003d8a&s=All";

fetch(API)
  .then((res) => res.json())
  .then((data) =>
    data.Search.forEach((item) => {
      table.innerHTML += `<div class="idish">
      <img src=${item.Poster} alt="" class='img'>
      <h3>${item.Title}</h3>
      <p>Year: ${item.Year}</p>
      </div>`;
    })
  );
