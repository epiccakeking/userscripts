// ==UserScript==
// @name        Likes/Views
// @namespace   https://github.com/epiccakeking/userscripts
// @match       https://www.youtube.com/*
// @grant       none
// @version     1.3
// @author      epiccakeking
// @description Calculates the ratio of likes to views
// @run-at      document-start
// @license     MIT
// ==/UserScript==
new MutationObserver(() => {
  let video_info = document.querySelector('.ytd-video-primary-info-renderer');
  if (!video_info) return;
  let like_label, likes;
  for (x of video_info.querySelectorAll('.ytd-toggle-button-renderer')) {
    let label = x.getAttribute('aria-label');
    if (label && label.endsWith(' likes')){
      like_label=x;
      likes=Number(label.replace(' likes', '').replaceAll(',', ''));
      break;
    }
  }
  let view_label = video_info.querySelector('.view-count');
  if (!(like_label && view_label)) return;
  let views = Number(view_label.innerText.replace(' views', '').replaceAll(',', ''));
  if (!views) return;
  let ratio = likes / views;
  new_text = `${likes.toLocaleString()} (${ratio.toLocaleString(undefined, { style: 'percent', minimumFractionDigits: 2 })})`
  if (like_label.innerText != new_text) like_label.innerText = new_text;
}).observe(document.documentElement, { childList: true, subtree: true });
