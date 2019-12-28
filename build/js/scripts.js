"use strict";

var popularityRefs = {
  filmsList: document.querySelector('.films-list'),
  btnPrev: document.querySelector('.pagination__btn--prev'),
  pagPage: document.querySelector('.pagination__page'),
  btnNext: document.querySelector('.pagination__btn--next')
};
var popularityFilms = 'https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=bd2cd46f09d0c01b4fe8699d010953c1&language=ru';
var popularFilmsData = {
  page: 1,
  getDataPopularFilms: function getDataPopularFilms() {
    fetch("".concat(popularityFilms, "&page=").concat(this.page)).then(function (response) {
      return response.json();
    }).then(function (data) {
      return parseData(data.results);
    }).catch(function (error) {
      return console.error(error);
    });
  }
};
document.addEventListener('DOMContentLoaded', popularFilmsData.getDataPopularFilms());
popularityRefs.btnPrev.addEventListener('click', prevPage);
popularityRefs.btnNext.addEventListener('click', nextPage);
"use strict";

var serchUrl = 'https://api.themoviedb.org/3/search/movie?api_key=bd2cd46f09d0c01b4fe8699d010953c1&language=ru&query=';
var serchRefs = {
  input: document.querySelector('.searchform__field__input'),
  output: document.querySelector('.films-list')
};
var findSettings = {
  page: 1,
  serchQuery: '',
  searchFromDB: function searchFromDB(serchQuery) {
    fetch("".concat(serchUrl).concat(serchQuery, "&page=").concat(this.page)).then(function (response) {
      return response.json();
    }).then(function (data) {
      return parseData(data.results);
    }).catch(function (error) {
      return console.error(error);
    });
  }
};

function getInputValue(e) {
  e.preventDefault();
  var inputValue = e.srcElement.value;
  findSettings.serchQuery = inputValue;

  if (findSettings.serchQuery.length === 0) {
    popularFilmsData.getDataPopularFilms();
    return;
  }

  findSettings.searchFromDB(inputValue);
}

function renderFilmSerchList(data) {
  serchRefs.output.insertAdjacentHTML('afterbegin', data);
}

serchRefs.input.addEventListener('input', getInputValue);
"use strict";

var pageRefs = {
  pagPage: document.querySelector('.pagination__page')
};

function prevPage() {
  if (findSettings.page > 1) {
    findSettings.page -= 1;
    pageRefs.pagPage.textContent = findSettings.page;
    findSettings.searchFromDB(findSettings.serchQuery);
  } else return;

  if (popularFilmsData.page > 1) {
    popularFilmsData.page -= 1;
    popularityRefs.pagPage.textContent = popularFilmsData.page;
    popularFilmsData.getDataPopularFilms();
  } else return;
}

function nextPage() {
  if (findSettings.serchQuery.length >= 1) {
    findSettings.page += 1;
    pageRefs.pagPage.textContent = findSettings.page;
    findSettings.searchFromDB(findSettings.serchQuery);
  } else {
    popularFilmsData.page += 1;
    pageRefs.pagPage.textContent = popularFilmsData.page;
    popularFilmsData.getDataPopularFilms();
  }
}
"use strict";

var refsFilmData = {
  userInput: document.querySelector('.films-list'),
  modal: document.querySelector('.modal'),
  modalGuts: document.querySelector('.modal-guts'),
  body: document.querySelector('body')
};

function getUserInput(e) {
  if (e.target === e.currentTarget) return;
  console.log(e.target.id);
  var filmID = e.target.id;
  getData(filmID);
}

console.log(refsFilmData.userInput);
refsFilmData.userInput.addEventListener('click', getUserInput);
var baseUrl = 'https://api.themoviedb.org/3/movie/';
var apiKey = '?api_key=bd2cd46f09d0c01b4fe8699d010953c1&language=ru';
var imgFilmUrl = 'https://image.tmdb.org/t/p/w200';

function getData(filmId) {
  fetch("".concat(baseUrl).concat(filmId).concat(apiKey)).then(function (response) {
    return response.json();
  }).then(function (data) {
    return parseFilmData(data);
  }).catch(function (error) {
    return console.error(error);
  });
}

function parseFilmData(data) {
  var element = "<section class=\"detailsPage\">\n  <div class=\"detailsPage__container\">\n  <figure>\n  <img class=\"poster\" src=\"".concat(imgFilmUrl).concat(data.poster_path, "\" alt=\"film-poster\" />\n  </figure>\n  <h2 class=\"title\">").concat(data.title, "</h2>\n  <table>\n  <tr>\n  <td>vote / votes</td>\n  <td>").concat(data.vote_average, " / ").concat(data.vote_count, "</td>\n  </tr>\n  <tr>\n  <td>original title</td>\n  <td>").concat(data.original_title, "</td>\n  </tr>\n  <tr>\n  <td>popularity</td>\n  <td>").concat(data.popularity, "</td>\n  </tr>\n  <tr>\n  <td>genre</td>\n  <td>").concat(data.genres[0].name, "</td>\n  </tr>\n  </table>\n  <h2 class=\"title\">About</h2>\n  <p class=\"text\">\n  ").concat(data.overview, "\n  </p>\n  </div>\n  </section>");
  var objToString = element.toString();
  openModalWindow();
  renderListElement(objToString);
}

function openModalWindow() {
  refsFilmData.modal.classList.add('visible');
}

function renderListElement(data) {
  refsFilmData.modalGuts.innerHTML = '';
  refsFilmData.modalGuts.insertAdjacentHTML('afterbegin', data);
}

function closeModal(e) {
  if (e.target !== e.currentTarget) {
    refsFilmData.modal.classList.remove('visible');
  }
}

refsFilmData.modal.addEventListener('click', closeModal);
"use strict";

var refs = {
  filmsList: document.querySelector('.films-list')
};

function clearList() {
  refs.filmsList.innerHTML = '';
}
"use strict";

var imgUrl = 'https://image.tmdb.org/t/p/w200';

function parseData(data) {
  console.log(data);
  var elements = data.map(function (e) {
    return "<li \" class=\"films-list__item\">\n        <a id=\"".concat(e.id, "\" class=\"films-list__item__block\" href=\"#\">\n          <img\n          class=\"films-list__image\"\n            src=\"").concat(imgUrl).concat(e.poster_path ? e.poster_path : e.backdrop_path, "\"\n            alt=\"Here's how it looks!\"\n            width=\"298\"\n            height=\"156\"\n          />\n          <p class=\"films-list__item__block__filmname\">").concat(e.title, "</p>\n        </a>\n      </li>");
  }).join('');
  renderList(elements);
}
"use strict";

function renderList(data) {
  clearList();
  popularityRefs.filmsList.insertAdjacentHTML('afterbegin', data);
}