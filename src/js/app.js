const baseUrl =
  'https://api.themoviedb.org/3/movie/551?api_key=bd2cd46f09d0c01b4fe8699d010953c1';
const imgUrl = 'https://image.tmdb.org/t/p/w500';
const serchUrl =
  'https://api.themoviedb.org/3/search/movie?api_key=bd2cd46f09d0c01b4fe8699d010953c1&query=';

const refs = {
  output: document.querySelector('.render'),
  input: document.querySelector('.input'),
  btnNext: document.querySelector('.btnNext'),
  btnPrev: document.querySelector('.btnPrev'),
  thisPage: document.querySelector('.thisPage'),
};

const findSettings = {
  page: 1,
  serchQuery: '',

  searchFromDB(serchQuery) {
    fetch(`${serchUrl}${serchQuery}&page=${this.page}`)
      .then(response => response.json())
      .then(data => parseSerchData(data.results));
  },
};

function clearList (){
    refs.output.innerHTML = '';
}

function nextPage() {
    clearList();
  findSettings.page += 1;
  refs.thisPage.textContent = findSettings.page;
  findSettings.searchFromDB(findSettings.serchQuery);
}

function prevPage() {
    clearList();
  findSettings.page -= 1;
  refs.thisPage.textContent = findSettings.page;
  findSettings.searchFromDB(findSettings.serchQuery);
}

function getInputValue(e) {
  e.preventDefault();
  console.log(e.srcElement.value);
  const inputValue = e.srcElement.value;
  findSettings.serchQuery = inputValue;
  clearList();
  findSettings.searchFromDB(inputValue);
}

function parseSerchData(searchData) {
  const elements = searchData
    .map(e => {
      return `<div>
      <img class="imgPoster" src="${imgUrl}${e.poster_path}" alt="">
      <h1>${e.title}</h1>
    </div>`;
    })
    .join('');
  renderFilmSerchList(elements);
}

function renderFilmSerchList(data) {
  refs.output.insertAdjacentHTML('afterbegin', data);
}

refs.input.addEventListener('input', getInputValue);
refs.btnNext.addEventListener('click', nextPage);
refs.btnPrev.addEventListener('click', prevPage);
