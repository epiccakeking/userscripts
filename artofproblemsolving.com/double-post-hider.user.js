// ==UserScript==
// @name        Double post combiner
// @namespace   https://github.com/epiccakeking/userscripts
// @match       https://artofproblemsolving.com/*
// @grant       none
// @version     1.0
// @author      epiccakeking
// @description Script that visually combines double posts.
// @run-at      document-start
// @license     MIT
// ==/UserScript==

new MutationObserver(mutations => {
  for (mutation of mutations) {
    if (mutation.target.nodeType != 1) continue;
    for (e of mutation.target.getElementsByClassName('cmty-post')) {
      let cmp = e.previousSibling;
      if (cmp && cmp.querySelector('.cmty-post-username > a').href == e.querySelector('.cmty-post-username > a').href) {
        cmp.querySelector('.cmty-post-middle').appendChild(e.querySelector('.cmty-post-body'));
        e.remove();
      }
    }
  }
}).observe(document, { childList: true, subtree: true })
