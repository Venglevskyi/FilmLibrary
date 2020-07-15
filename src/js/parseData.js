const imgUrl = 'https://image.tmdb.org/t/p/w500';

function parseData(data) {
  const elementsMarkup = data
    .map(e => {
      return `<li class="films-list__item">
          <img
          class="films-list__image"
            src="${imgUrl}/${e.poster_path}"
            data-id = "${e.id}"
            alt="Here's how it looks!"
          />
          <h2 class="films-list__title">${e.title}</h2>
          <span class="films-list__rate">${e.vote_average}</span>
      </li>`;
    })
    .join('');
  renderList(elementsMarkup);
}
