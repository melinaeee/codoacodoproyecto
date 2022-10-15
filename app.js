const marvel = {
  render:() => {
    const urlAPI =
        'https://gateway.marvel.com/v1/public/comics?ts=1&apikey=355f893457528ddd08f7af34185d8070&hash=d2127930619322312ee2ba3a9e6d889a';
    const container = document.querySelector('#marvel-row');
    let contentHTML = '';

    fetch(urlAPI)
      .then((res) => res.json())
      .then((json) => {
        for (const hero of json.data.results) {
          let urlHero = hero.urls[0].url;
          contentHTML+=
                <div class="col"
        }
      });
  },
};

marvel.render();
