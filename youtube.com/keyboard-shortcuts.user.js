// ==UserScript==
// @name        Keyboard Shortcuts for YouTube
// @namespace   https://github.com/epiccakeking/userscripts
// @match       https://www.youtube.com/*
// @grant       none
// @version     1.0
// @author      epiccakeking
// @description Like, dislike, reset using the [, ], \ keys respectively.
// @run-at      document-start
// @license     MIT
// ==/UserScript==
let get_button = name => {for (let button of document.querySelector('.ytd-video-primary-info-renderer').querySelectorAll('.ytd-toggle-button-renderer')) if (button.iconName_ == name) return button;};
let send_click = el => el.dispatchEvent(new MouseEvent('click', {
  view: window,
  bubbles: true,
  cancelable: true,
}));
document.addEventListener('keyup', e=>{
  if (document.querySelector('.focused')) return;
  let button;
  switch (e.code){
    case 'BracketLeft':
      button = get_button('like');
      break;
    case 'BracketRight':
      button = get_button('dislike');
      break;
    case 'Backslash':
      button = get_button('like-filled') || get_button('dislike-filled');
      break;
  }
  if (button) send_click(button);
});
