//Add a lot of npm packages just in case I might need them
import { Buffer } from 'node:buffer';
import * as fs from 'node:fs';
import axios from 'axios';
import * as cheerio from 'cheerio';
import { JSDOM } from 'jsdom';
import * as from from 'node-fetch';
import path from 'path';
import { getActiveResourcesInfo } from 'process';

// make a fetch call to the meme website
async function fetchData() {
  const url = await fetch(
    'https://memegen-link-examples-upleveled.netlify.app/',
  );

  // make the url call a text file or string, not sure what it does
  //create a new instance of JSDOM which enables us to have a DOM manipulation capabilities
  // inside Nodejs
  const htmlText = await url.text();
  const dom = new JSDOM(htmlText);

  const document = dom.window.document;

  // get all the img elemnts with a document like method + create an empty array to hold all the src as strings

  let imgs = document.getElementsByTagName('img');
  let imgSrcs = [];

  //loop over the first 10 imgs variable and push the results to the empty array, and stop when it reaches to 10

  for (let i = 0; i < imgs.length; i++) {
    imgSrcs.push(imgs[i].src);

    if (i > 9) {
      break;
    }
  }

  // loop over the array with the url strings
  // define the items as array buffer (whatever that means) and then get the response
  // with the response use a method of fs. to save the files and name them with a 0 leading number to the right folder

  for (let z = 0; z < imgs.length; z++) {
    await axios
      .get(imgSrcs[z], { responseType: 'arraybuffer' })
      .then((response) => {
        fs.writeFileSync(`meme-folder/0${[z]}.jpg`, response.data);
      });
  }

  // print the array

  console.log(imgSrcs);
}

// call the fetch function so it is invoked and runs, otherwise it won't run.

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

/* for (let x = 0; x < imgSrcs.length; x++) {
  let blob = new Blob([imgSrcs[x]]);
  let file = new File([blob], `0${x}.jpg`, { type: 'image/jpg' });  */
/*
  const JSONToFile = (obj, filename) =>
    writeFileSync(`${file}.json`, JSON.stringify(obj, null, 2));

  fs.writeFile('/meme-folder', file, (err) => {
    if (err) {
      console.error(err);
    } else {
      // file written successfully
    }
  }); */

/*  fs.writeFile('./meme-folder', file, (err) => {
    if (err) {
      console.error(err);
    } else {
      // file written successfully
    }
  }); */
