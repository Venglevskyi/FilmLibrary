const popularityRefs = {
  filmsList: document.querySelector('.films-list'),
  homePage: document.querySelector('.homepage'),
  libraryPage: document.querySelector('.library'),
  libraryList: document.querySelector('.library-btn'),
  libraryListLi: document.querySelector('.library-films-list'),
  btnPrev: document.querySelector('.pagination__btn--prev'),
  pagPage: document.querySelector('.pagination__page'),
  btnNext: document.querySelector('.pagination__btn--next'),
  homePageBtn: document.querySelector('.home-btn'),
};

const popularityFilms =
  'https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=bd2cd46f09d0c01b4fe8699d010953c1&language=ru';

const popularFilmsData = {
  page: 1,
  copyDomElement: '',
  flag: false,
  getDataPopularFilms() {
    fetch(`${popularityFilms}&page=${this.page}`)
      .then(response => response.json())
      .then(data => parseData(data.results))
      .catch(error => console.error(error));
  },
};

document.addEventListener(
  'DOMContentLoaded',
  popularFilmsData.getDataPopularFilms(),
);
popularityRefs.homePageBtn.addEventListener('click', () => location.reload());
popularityRefs.btnPrev.addEventListener('click', prevPage);
popularityRefs.btnNext.addEventListener('click', nextPage);
popularityRefs.libraryList.addEventListener('click', toLibrary);
