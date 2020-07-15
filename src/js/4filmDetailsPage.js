const refsFilmData = {
  userInput: document.querySelector('.films-list'),
  body: document.querySelector('body'),
};

function getUserInput(e) {
  if (e.target.dataset.id === e.currentTarget.dataset.id) return;
  const filmID = e.target.dataset.id;
  getData(filmID);
}

refsFilmData.userInput.addEventListener('click', getUserInput);

const baseUrl = 'https://api.themoviedb.org/3/movie/';
const apiKey = '?api_key=bd2cd46f09d0c01b4fe8699d010953c1&language=ru';
const imgFilmUrl = 'https://image.tmdb.org/t/p/w500';

function getData(filmId) {
  fetch(`${baseUrl}${filmId}${apiKey}`)
    .then(response => response.json())
    .then(data => parseFilmData(data))
    .catch(error => console.error(error));
}

function parseFilmData(data) {
  const element = `
    <div class="detailsPage-description container">

    <img class="poster" src="${imgFilmUrl}${data.poster_path}" alt="film-poster" />

    <div class="film-info">
    <h2 class="film-info__headline">${data.title}</h2>
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
    <p class="film-info__title">About</p>
    <p class="film-info__about">
    ${data.overview}
    </p>
    </div>
    </div>
    <div class="pagination container">
    <button class="pagination__btn--prev" type="button">
      <span>Back</span>
    </button>
    <button data-id="${data.id}" class="button button__add-to-library">Add to library</button>
  </div>`;
  const objToString = element.toString();
  popularFilmsData.flag = true;
  renderDetailsFilm(objToString);

  document
    .querySelector('.button__add-to-library')
    .addEventListener('click', addToLibrary);
}

function addToLibrary(event) {
  const filmId = event.target.getAttribute('data-id');
  const currentLibarary = localStorage.getItem('library') || '';
  const newLibarary = [filmId, ...currentLibarary.split(',')];

  localStorage.setItem('library', newLibarary);
}
