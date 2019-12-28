const imgUrl = 'https://image.tmdb.org/t/p/w200';

function parseData(data) {
  console.log(data);
  const elements = data
    .map(e => {
      return `<li " class="films-list__item">
        <a id="${e.id}" class="films-list__item__block" href="#">
          <img
          class="films-list__image"
            src="${imgUrl}${e.poster_path ? e.poster_path : e.backdrop_path}"
            alt="Here's how it looks!"
            width="298"
            height="156"
          />
          <p class="films-list__item__block__filmname">${e.title}</p>
        </a>
      </li>`;
    })
    .join('');
  renderList(elements);
}
