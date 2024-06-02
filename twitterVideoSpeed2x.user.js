// ==UserScript==
// @name         Twitter/X Video Speed 2x
// @namespace    Violentmonkey Scripts
// @homepage     https://github.com/fahim-ahmed05/violentmonkey-userscripts
// @version      1.0
// @description  Automatically sets Twitter/X video speed to 2x
// @author       Fahim Ahmed
// @match        https://twitter.com/*
// @match        https://x.com/*
// @downloadURL  https://raw.githubusercontent.com/fahim-ahmed05/violentmonkey-userscripts/main/twitterVideoSpeed2x.user.js
// @updateURL    https://raw.githubusercontent.com/fahim-ahmed05/violentmonkey-userscripts/main/twitterVideoSpeed2x.user.js
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    function setVideoSpeed() {
        const videos = document.querySelectorAll('video');
        videos.forEach(video => {
            video.playbackRate = 2;
        });
    }

    // Set video speed when the page loads
    window.addEventListener('load', setVideoSpeed);

    // Set video speed when new videos are loaded (e.g., scrolling, AJAX content)
    const observer = new MutationObserver(setVideoSpeed);
    observer.observe(document, { childList: true, subtree: true });

    // Also set video speed if the user clicks on a video
    document.addEventListener('click', setVideoSpeed, true);
})();
