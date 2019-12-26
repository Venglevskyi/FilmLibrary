const nextPageRefs = {
    pagPage: document.querySelector('.pagination__page'),
}

function nextPage() {
  clearList();
  if (findSettings.serchQuery.length >= 1) {
    findSettings.page += 1;
    nextPageRefs.pagPage.textContent = findSettings.page;
    findSettings.searchFromDB(findSettings.serchQuery);
  } else {
    popularFilmsData.page += 1;
    nextPageRefs.pagPage.textContent = popularFilmsData.page;
    popularFilmsData.getDataPopularFilms();
  }
}

