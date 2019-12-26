const prevPageRefs = {
  pagPage: document.querySelector('.pagination__page'),
};

function prevPage() {
  clearList();
  if (findSettings.serchQuery.length >= 1) {
    findSettings.page -= 1;
    prevPageRefs.pagPage.textContent = findSettings.page;
    findSettings.searchFromDB(findSettings.serchQuery);
  } else {
    if (popularFilmsData.page > 1) {
      clearList();
      popularFilmsData.page -= 1;
      popularityRefs.pagPage.textContent = popularFilmsData.page;
      popularFilmsData.getDataPopularFilms();
    } else return;
  }
}
