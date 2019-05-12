const axios = require('axios');

export default class Desck {
  constructor () {
    // console.log('playersCount', playersCount);
    this.baseUrl = 'https://deckofcardsapi.com/api/deck';
    return (async () => {
      // this.config = await this.shuffle();
      Object.assign(this, await this.shuffle());
      // Object.assign(this, await this.draw(playersCount));
      return this;
    })();
  }

  // fetch (url) {
  //   return new Promise(resolve => {
  //     const http = new XMLHttpRequest();
  //     http.open('GET', url, true);
  //     http.onreadystatechange = function() {
  //       if (http.readyState === 4 && http.status === 200) {
  //         resolve(JSON.parse(http.responseText));
  //       }
  //     };
  //     http.send();
  //   });
  // }

  async draw(count) {
    const url = `${this.baseUrl}/${this.deck_id}/draw/?count=${count}`
    const data = (await axios(url)).data;
    this.remaining = data.remaining;
    return data.cards;
  }

  async shuffle() {
    return (await axios(`${this.baseUrl}/new/shuffle/`)).data;
  }
}
