import * as cheerio from 'cheerio';
import { JSDOM } from 'jsdom';
import { getActiveResourcesInfo } from 'process';

async function fetchData() {
  const url = await fetch(
    'https://memegen-link-examples-upleveled.netlify.app/',
  );

  const htmlText = await url.text();
  const dom = new JSDOM(htmlText);

  const document = dom.window.document;

  let imgs = document.getElementsByTagName('img');
  let imgSrcs = [];

  for (let i = 0; i < imgs.length; i++) {
    imgSrcs.push(imgs[i].src);
    if (i > 8) {
      break;
    }
  }
  for (let x = 0; x < imgSrcs.length; x++) {
    let blob = new Blob([imgSrcs[x]]);
    let file = new File([blob], `0${x}.jpg`, { type: 'image/jpg' });
    console.log(file);
  }

  console.log(imgSrcs[0]);
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
