import * as cheerio from 'cheerio';
import { JSDOM } from 'jsdom';
import { getActiveResourcesInfo } from 'process';

async function fetchData() {
  const url = await fetch(
    'https://memegen-link-examples-upleveled.netlify.app/',
    //'https://quotes.toscrape.com/',
  );

  const htmlText = await url.text();
  const dom = new JSDOM(htmlText);

  const document = dom.window.document;
  const getImg = document.querySelector('img');
  const getSrc = getImg.getAttribute('src');

  const emptyArr = [];
  emptyArr.push(getSrc);

  console.log(emptyArr);
}

fetchData();
/*
  const document = url.window.document;

  /*   let emptyArr = [];

  emptyArr.push(document.getElementById('img')); */

/* console.log(document.querySelector('img'));  */

/* console.log(url.window.document.querySelector('p').textContent); // "Hello world"
 */
/* const $ = cheerio.load('html');
const element = $('nav'); */

/* const promiseFetch = fetch(
  //'https://memegen-link-examples-upleveled.netlify.app/',
  'https://quotes.toscrape.com/',
)
  .then((response) => response.text())
  .then((body) => {
    console.log(body);
  }); */
/* .then((element) => {
    emptyArr.push(element);
  });

/* console.log(emptyArr.push('promiseFetch', 'ravid'));
 */

/*
JSDOM.fromURL(
  'https://memegen-link-examples-upleveled.netlify.app/',
); */
