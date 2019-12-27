const options = {
    header: {
      ContentType: 'application/json;charset=utf-8'
    },
  };
  
  function getData() {
    fetch(baseUrl, options)
      .then(response => response.json())
      .then(data => parseFilmData(data));
  }
  
  function parseFilmData(data) {
      console.log(data);
    const element = `<div>
          <img src="${imgUrl}${data.poster_path}" alt="" />
          <div>
          <h1>${data.title}</h1>
          <span>Vote / Votes: ${data.vote_average} / ${data.vote_count}</span>
          <span>Popularity: ${data.popularity}</span>
          <span>Original title: ${data.original_title}</span>
          <span>Genre: ${data.genres[0].name}</span>
          </div>
          <div>
          <h2>About</h2>
          <span>${data.overview}</span>
          </div>
          </div>`;
  
    console.log(element);
    renderFilmData(element);
  }
  
  function renderFilmData(element) {
    refs.output.insertAdjacentHTML('afterbegin', element);
  }
  
//   getData();