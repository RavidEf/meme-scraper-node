import * as cheerio from 'cheerio';

let emptyArr = [];

const promiseFetch = fetch(
  //'https://memegen-link-examples-upleveled.netlify.app/',
  'https://quotes.toscrape.com/',
)
  .then((response) => response.text())
  .then((body) => {
    body.match(regex);
    emptyArr.push();
  });
