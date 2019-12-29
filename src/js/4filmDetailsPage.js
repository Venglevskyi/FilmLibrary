const refsFilmData = {
  userInput: document.querySelector('.films-list'),
  body: document.querySelector('body'),
};

const selectedToWatchFilms = [];
const selectedToQueueFilms = [];

function getUserInput(e) {
  const idSelectedFilm = e.path[2].children[0].id;
  const filmID = e.target.id;
  console.log(e);
  if (e.toElement.className === 'button but-watch') {
    getData(idSelectedFilm).then(data => selectedToWatchFilms.push(data));
    console.log('like ', selectedToWatchFilms);
  }
  if (e.toElement.className === 'button but-like') {
    getData(idSelectedFilm).then(data => selectedToQueueFilms.push(data));
    console.log('queue ', selectedToQueueFilms);
  }
  if (e.target.className === 'films-list__item__block') {
    getData(filmID).then(data => parseFilmData(data));
  }
}

refsFilmData.userInput.addEventListener('click', getUserInput);

const baseUrl = 'https://api.themoviedb.org/3/movie/';
const apiKey = '?api_key=bd2cd46f09d0c01b4fe8699d010953c1&language=ru';
const imgFilmUrl = 'https://image.tmdb.org/t/p/w200';

function getData(filmId) {
  return fetch(`${baseUrl}${filmId}${apiKey}`).then(response =>
    response.json(),
  );
}

function parseFilmData(data) {
  const element = `<section class="detailsPage">
    <div class="detailsPage__container">
    <figure>
    <img class="poster" src="${imgFilmUrl}${data.poster_path}" alt="film-poster" />
    </figure>
    <div class="film-info__container">
    <h2 class="title film-title">${data.title}</h2>
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
    </div>
    </section>`;
  const objToString = element.toString();
  popularFilmsData.flag = true;
  renderList(objToString);
}
