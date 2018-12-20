// ==UserScript==
// @name         youtuber
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Watch Youtube that's all
// @author       Makarov
// @match        https://www.youtube.com/*
// @match        https://www.google.com/*
// @require      http://code.jquery.com/jquery-3.3.1.min.js
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    $(document).ready(function(){
        setTimeout(function(){
            var videoLinks = document.querySelectorAll('a[href*="/watch?v="]');
            videoLinks.forEach(function(link){
                link.href+='&feature=youtu.be';
                //console.log(link.href);
            });
        }, 3000);
    });
})();
