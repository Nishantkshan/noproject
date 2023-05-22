// ==UserScript==

// @name         shu99

// @namespace    https://viayoo.com/

// @version      0.1

// @description  try to take over the world!

// @author       You

// @run-at       document-start

// @match        *69shu*

// @grant        none

// @require https://ajax.googleapis.com/ajax/libs/jquery/3.6.3/jquery.min.js

// ==/UserScript==

(function() {

    'use strict';

    // Your code here...

//document.body.id = 'google_translate_element';

//alert(document.body.outerHTML);

function p() {

//allParagraphsText =document.body.outerHTML;

let allParagraphsText = document.querySelector('.txtnav').innerText;

allParagraphsText = allParagraphsText.replace(/  /g, "");

Text = allParagraphsText.split("\n");

allParagraphsText = [];

for (let i = 0; i < Text.length; i++) {

	allParagraphsText.push(Text[i]);	if ((i + 1) % 1 === 0) {

		allParagraphsText.push("\n");

	}

}

allParagraphsText =allParagraphsText.join("");

const totalNewLines = allParagraphsText.split("\n").length;

const numParts = 3; // You can adjust this number as needed

const linesPerPart = Math.ceil(totalNewLines / numParts);

const parts = [];

let startIndex = 0;

for (let i = 0; i < numParts; i++) {

  const endIndex = startIndex + linesPerPart;

  parts.push(allParagraphsText.split("\n").slice(startIndex, endIndex).join("\n"));

  startIndex = endIndex;

}

//alert("translate to english fast\n"+parts[3]);

alert("translate to english \n"+parts[2]+"");

alert("translate to english \n"+parts[1]+"");

alert("translate to english\n"+parts[0]+"");

document.querySelector('.txtnav').innerHTML ="";

}

function c() {

const con = document.querySelector('.txtnav');

  // Set up some initial styles

  //var backgroundColor = "";

  var font = "Arial, sans-serif";

  //content.style.backgroundColor = backgroundColor;

  con.style.marginLeft = "10px";

  con.style.marginRight = "10px";

  con.style.fontFamily = font;  con.style.fontSize = "16px";

  //paragraph.style.color = 'black';

con.innerHTML= con.innerHTML.replace(/  /g, "")

//alert(document.querySelector('.txtnav').textContent);

}

function d() {

let allParagraphsText = document.querySelector('.txtnav').innerText;

//Text = allParagraphsText.split("\n");

//allParagraphsText = [];

//for (let i = 0; i < Text.length; i++) {

//	allParagraphsText.push(Text[i]);

//	if ((i + 2) % 1 === 0) {

//	allParagraphsText.push("");

//	}

//}

//allParagraphsText =allParagraphsText.join("");

allParagraphsText = allParagraphsText.replace(/  /g, "");

alert("translate to english \n"+allParagraphsText);

//document.querySelector('.txtnav').innerHTML ="";

}

document.addEventListener("DOMContentLoaded", p);

})();
