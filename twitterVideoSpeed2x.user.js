// ==UserScript==
// @name         Twitter/X Video Speed 2x
// @namespace    Violentmonkey Scripts
// @homepage     https://github.com/fahim-ahmed05/violentmonkey-userscripts
// @version      1.5
// @description  Automatically sets Twitter/X video speed to 2x
// @author       Fahim Ahmed
// @match        https://twitter.com/*
// @match        https://x.com/*
// @downloadURL  https://github.com/fahim-ahmed05/violentmonkey-userscripts/raw/main/twitterVideoSpeed2x.user.js
// @updateURL    https://github.com/fahim-ahmed05/violentmonkey-userscripts/raw/main/twitterVideoSpeed2x.user.js
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    function isLive() {
        // Check if the current URL indicates a live broadcast
        return window.location.href.includes('/i/broadcasts/');
    }

    function isGif(video) {
        // Check if the video is a GIF by looking for specific indicators
        // Twitter GIFs are typically labeled as such in their data attributes or classes
        return video.closest('.PlayableMedia--gif') !== null || video.closest('[data-testid="tweetPhoto"]') !== null;
    }

    function setMediaSpeed() {
        // Only set the media speed if it's not a live video
        if (!isLive()) {
            const videos = document.querySelectorAll('video');
            const audios = document.querySelectorAll('audio');

            videos.forEach(video => {
                if (!isGif(video)) {
                    video.playbackRate = 2;
                }
            });

            audios.forEach(audio => {
                audio.playbackRate = 2;
            });
        }
    }

    // Set media speed when the page loads
    window.addEventListener('load', setMediaSpeed);

    // Set media speed when new media are loaded (e.g., scrolling, AJAX content)
    const observer = new MutationObserver(setMediaSpeed);
    observer.observe(document, { childList: true, subtree: true });

    // Also set media speed if the user clicks on a video or audio
    document.addEventListener('click', setMediaSpeed, true);
})();