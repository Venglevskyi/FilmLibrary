const pageRefs = {
  pagPage: document.querySelector('.pagination__page span'),
  detailsPage: document.querySelector('.detailsPage'),
};

function prevPage() {
  if (popularFilmsData.flag) {
    clearList();
    // popularFilmsData.flag = false;
    pageRefs.detailsPage.classList.toggle('hidden');
    popularityRefs.homePage.classList.toggle('hidden');
    popularFilmsData.getDataPopularFilms();
  }
  if (findSettings.page > 1) {
    findSettings.page -= 1;
    pageRefs.pagPage.textContent = findSettings.page;
    findSettings.searchFromDB(findSettings.serchQuery);
  }
  if (popularFilmsData.page > 1) {
    popularFilmsData.page -= 1;
    pageRefs.pagPage.textContent = popularFilmsData.page;
    popularFilmsData.getDataPopularFilms();
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'auto',
    });
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
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'auto',
    });
  }
}

function toLibrary(event) {
  event.preventDefault();
  popularityRefs.homePage.classList.add('hidden');
  popularityRefs.detailsPage.classList.add('hidden');
  popularityRefs.libraryPage.classList.remove('hidden');

  const library = localStorage.getItem('library');

  if (!library) return;

  const libraryIds = library.split(',').filter(id => id !== '');

  const baseUrl = 'https://api.themoviedb.org/3/movie/';
  const apiKey = '?api_key=bd2cd46f09d0c01b4fe8699d010953c1&language=ru';
  const imgFilmUrl = 'https://image.tmdb.org/t/p/w200';

  Promise.all(
    libraryIds.map(id => {
      return fetch(`${baseUrl}${id}${apiKey}`).then(response =>
        response.json(),
      );
    }),
  ).then(res => {
    renderLibrary(res);
    document.querySelector('.library__empty-list').remove();
  });
}

pageRefs.detailsPage.addEventListener('click', prevPage);
