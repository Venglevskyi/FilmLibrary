const popularityRefs = {
  filmsList: document.querySelector('.films-list'),
  btnPrev: document.querySelector('.pagination__btn--prev'),
  pagPage: document.querySelector('.pagination__page'),
  btnNext: document.querySelector('.pagination__btn--next'),
};

const popularityFilms =
  'https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=bd2cd46f09d0c01b4fe8699d010953c1&language=ru';

const popularFilmsData = {
  page: 1,
  getDataPopularFilms() {
    fetch(`${popularityFilms}&page=${this.page}`)
      .then(response => response.json())
      .then(data => parseData(data.results));
  },
};

function renderList(data) {
  popularityRefs.filmsList.insertAdjacentHTML('afterbegin', data);
}

document.addEventListener(
  'DOMContentLoaded',
  popularFilmsData.getDataPopularFilms(),
);
popularityRefs.btnPrev.addEventListener('click', prevPage);
popularityRefs.btnNext.addEventListener('click', nextPage);
