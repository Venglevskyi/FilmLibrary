window.onload = function() {
  const refsFilmData = {
    userSelectFilm: document.querySelector('.films-list__image'),
  };
  console.log(refsFilmData.userSelectFilm);
};

const baseUrl =
  'https://api.themoviedb.org/3/movie/343611?api_key=bd2cd46f09d0c01b4fe8699d010953c1';
const imgUrl = 'https://image.tmdb.org/t/p/w200';

function getData() {
  fetch(baseUrl)
    .then(response => response.json())
    .then(data => parseFilmData(data));
}

function parseFilmData(data) {
  console.log(data);
  const element = `<section class="detailsPage">
  <div class="detailsPage__container">
  <figure>
  <img class="poster" src="${imgUrl}${data.poster_path}" alt="film-poster" />
  </figure>
  <h2 class="title">${data.title}</h2>
  <table>
  <tr>
  <td>vote / votes</td>
  <td>${data.vote_average} / ${data.vote_count}</td>
  </tr>
  <tr>
  <td>original title</td>
  <td>${data.original_title}</td>
  </tr>
  <tr>
  <td>popularity</td>
  <td>${data.popularity}</td>
  </tr>
  <tr>
  <td>genre</td>
  <td>${data.genres[0].name}</td>
  </tr>
  </table>
  <h2 class="title">About</h2>
  <p class="text">
  ${data.overview}
  </p>
  </div>
  </section>`;
}

getData();
