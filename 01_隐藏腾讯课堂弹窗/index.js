// ==UserScript==
// @name         隐藏腾讯课堂正在观看提示
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  利用CSS隐藏腾讯课堂正在观看提示*2022-07-26*
// @author       Debbl
// @match        https://ke.qq.com/webcourse/*
// @icon         https://ke.qq.com/favicon.ico
// @license      MIT
// @grant        none
// ==/UserScript==

(function () {
  "use strict";
  var styleEl = document.createElement("style");
  var textNode = document.createTextNode(
    "div[class^='player-marquee'], .marquee {opacity: 0 !important;}"
  );
  styleEl.appendChild(textNode);
  document.querySelector("head").appendChild(styleEl);
})();
