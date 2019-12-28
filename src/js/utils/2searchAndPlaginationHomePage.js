const serchUrl =
  'https://api.themoviedb.org/3/search/movie?api_key=bd2cd46f09d0c01b4fe8699d010953c1&language=ru&query=';

const serchRefs = {
  input: document.querySelector('.searchform__field__input'),
  output: document.querySelector('.films-list'),
};

const findSettings = {
  page: 1,
  serchQuery: '',

  searchFromDB(serchQuery) {
    fetch(`${serchUrl}${serchQuery}&page=${this.page}`)
      .then(response => response.json())
      .then(data => parseData(data.results))
      .catch(error => console.error(error));
  },
};

function getInputValue(e) {
  e.preventDefault();
  const inputValue = e.srcElement.value;
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
