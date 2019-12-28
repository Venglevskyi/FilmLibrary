function renderList(data) {
  popularFilmsData.copyDomElement = popularityRefs.filmsList.cloneNode(true)
  console.log(popularFilmsData.copyDomElement)
  
  clearList();
  popularityRefs.filmsList.insertAdjacentHTML('afterbegin', data);

  if(popularFilmsData.flag){
    popularityRefs.pagPage.classList.add('hidden'),
    popularityRefs.btnNext.classList.add('hidden')
  } 
}
