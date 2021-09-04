// ==UserScript==
// @name        Explainxkcd
// @namespace   https://github.com/epiccakeking/userscripts
// @match       https://xkcd.com/*
// @grant       none
// @version     1.0
// @author      epiccakeking
// @description Adds an explain xkcd link to xkcd
// @license     MIT
// ==/UserScript==
let middle_container = document.getElementById('middleContainer')
if (middle_container){
  let explanation_link = document.createElement('a')
  explanation_link.href = window.location.href.replace(window.location.hostname, 'explainxkcd.com');
  explanation_link.innerText = 'explain';
  middle_container.appendChild(document.createElement('br'));
  middle_container.appendChild(explanation_link);
}
