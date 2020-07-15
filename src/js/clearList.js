const refs = {
  filmsList: document.querySelector('.films-list'),
};

function clearList() {
  refs.filmsList.innerHTML = '';
  pageRefs.detailsPage.innerHTML = '';
}
