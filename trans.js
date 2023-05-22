// ==UserScript==

// @name         New Userscript trans

// @namespace    https://viayoo.com/

// @version      0.1

// @description  try to take over the world!

// @author       You

// @run-at       document-start

// @match        *novel*

// @grant        none

// ==/UserScript==

(function() {

    'use strict';

function t() {

  const scripte = $("<script>")

    .attr("type", "text/javascript")

    .html(`function googleTranslateElementInit() {

      new google.translate.TranslateElement({pageLanguage: 'zh'});

    }`);

  $("head").append(scripte);

  const script = $("<script>")

    .attr("type", "text/javascript")

    .attr("src", "//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit");

  $("head").append(script);

}

t();

})();

