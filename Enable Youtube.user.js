// ==UserScript==
// @name         youtuber
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Watch Youtube that's all
// @author       Makarov
// @match        https://www.youtube.com/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    var videoLinks = document.querySelectorAll('a[href*="/watch?v="]');
    videoLinks.forEach(function(link){
        link.href+='&feature=youtu.be';
    });
})();