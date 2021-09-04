// ==UserScript==
// @name        Sidebar
// @namespace   https://github.com/epiccakeking/userscripts
// @match       https://discord.com/*
// @grant       none
// @version     1.0
// @author      epiccakeking
// @description Discord collapsing sidebar
// @license     MIT
// ==/UserScript==
document.head.appendChild(document.createElement('style')).textContent=`
[class*="guilds-"] + * [class^="sidebar-"]{
  position: absolute;
  height: 100%;
  z-index: 1000;
}

[class*="guilds-"]:not(:hover) + * [class^="sidebar-"]:not(:hover){
  display: none;
}
`;
