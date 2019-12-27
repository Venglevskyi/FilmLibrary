const pageRefs = {
  pagPage: document.querySelector('.pagination__page'),
};

function prevPage() {
  if (findSettings.serchQuery.length > 1) {
    clearList();
    findSettings.page -= 1;
    pageRefs.pagPage.textContent = findSettings.page;
    findSettings.searchFromDB(findSettings.serchQuery);
  }
  if (popularFilmsData.page > 1) {
    clearList();
    popularFilmsData.page -= 1;
    popularityRefs.pagPage.textContent = popularFilmsData.page;
    popularFilmsData.getDataPopularFilms();
  } else return;
}

function nextPage() {
  clearList();
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
