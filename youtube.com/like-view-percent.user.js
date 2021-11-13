// ==UserScript==
// @name        Likes/Views
// @namespace   https://github.com/epiccakeking/userscripts
// @match       https://www.youtube.com/*
// @grant       none
// @version     1.0
// @author      epiccakeking
// @description Inefficient likes to views percent calculator script
// @run-at      document-start
// @license     MIT
// ==/UserScript==
function get_likes(video_info){
    for (x of video_info.querySelectorAll('.ytd-toggle-button-renderer')){
      let label=x.getAttribute('aria-label');
      if (label && label.includes(' likes')) return [x, Number(label.replace(' likes','').replaceAll(',',''))];
    }
  }
  function get_views(video_info){
    let view_counter = video_info.querySelector('.view-count');
    return [view_counter, Number(view_counter.innerText.replace(' views','').replaceAll(',',''))];
  }
  new MutationObserver(()=>{
    let video_info=document.querySelector('.ytd-video-primary-info-renderer');
    if (!video_info) return;
    let [like_label,likes]=get_likes(video_info);
    let [view_label, views]=get_views(video_info);
    let ratio=likes/views;
    new_text=`${likes.toLocaleString()} (${ratio.toLocaleString(undefined,{style: 'percent', minimumFractionDigits:2})})`
    if(like_label.innerText != new_text) like_label.innerText = new_text;
  }).observe(document.documentElement, {childList:true, subtree: true});
  