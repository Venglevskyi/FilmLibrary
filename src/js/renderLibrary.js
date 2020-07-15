function renderLibrary(data) {
  const elements = data
    .map(e => {
      return `<li class="films-list__item">
            <img
            class="films-list__image"
              src="${imgUrl}${e.poster_path ? e.poster_path : e.backdrop_path}"
              alt="Here's how it looks!"
              width="298"
              height="156"/>
            <p class="films-list__title">${e.title}</p>
        </li>`;
    })
    .join('');

  popularFilmsData.copyDomElement = popularityRefs.libraryListLi.cloneNode(
    true,
  );

  popularityRefs.libraryListLi.insertAdjacentHTML('afterbegin', elements);
}
