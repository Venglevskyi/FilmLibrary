const pageRefs = {
  pagPage: document.querySelector('.pagination__page span'),
};

function prevPage() {
  if (popularFilmsData.flag) {
    clearList();
    popularFilmsData.flag = false;
    popularityRefs.pagPage.classList.remove('hidden'),
      popularityRefs.btnNext.classList.remove('hidden');
    popularityRefs.filmsList.appendChild(popularFilmsData.copyDomElement);
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
