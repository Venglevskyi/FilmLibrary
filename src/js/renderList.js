function renderList(data) {
  clearList();

  popularityRefs.filmsList.insertAdjacentHTML('afterbegin', data);
}

function renderDetailsFilm(data) {
  clearList();
  popularityRefs.detailsPage.insertAdjacentHTML('afterbegin', data);
  popularityRefs.homePage.classList.add('hidden');
  popularityRefs.detailsPage.classList.toggle('hidden');
  popularityRefs.libraryPage.classList.add('hidden');
}
