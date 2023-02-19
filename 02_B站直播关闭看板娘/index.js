// ==UserScript==
// @name         B站直播关闭看板娘
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  B站直播关闭看板娘，删除相关元素 *2023-02-19*
// @author       Debbl
// @match        https://live.bilibili.com/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=bilibili.com
// @license      MIT
// @grant        none
// ==/UserScript==

// repo https://github.com/Debbl/TemperMonkeyScripts

(function () {
  "use strict";
  var harunaEl = document.getElementById("my-dear-haruna-vm");
  if (harunaEl) harunaEl.remove();
})();
