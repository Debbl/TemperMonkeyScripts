// ==UserScript==
// @name         隐藏腾讯课堂正在观看提示
// @namespace    http://tampermonkey.net/
// @version      0.4
// @description  利用CSS隐藏腾讯课堂正在观看提示 *2022-09-08*
// @author       Debbl
// @match        https://ke.qq.com/webcourse/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=ke.qq.com
// @license      MIT
// @grant        none
// ==/UserScript==

// about https://aiwan.run/

(function () {
  "use strict";
  var styleEl = document.createElement("style");
  var textNode = document.createTextNode(
    "#video-container div:nth-of-type(2), .copyright-marquee-tips-container, {opacity: 0 !important;}"
  );
  styleEl.appendChild(textNode);
  document.querySelector("head").appendChild(styleEl);
})();
