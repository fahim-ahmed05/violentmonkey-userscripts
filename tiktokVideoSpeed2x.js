// ==UserScript==
// @name         TikTok Video Speed 2x
// @namespace    Violentmonkey Scripts
// @homepage     https://github.com/fahim-ahmed05/violentmonkey-userscripts
// @version      1.0
// @description  Automatically sets TikTok video speed to 2x
// @author       Fahim Ahmed
// @match        *://*.tiktok.com/*
// @downloadURL  
// @updateURL    
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    function setSpeed() {
        // Find the video element
        let video = document.querySelector('video');
        if (video) {
            // Set the playback speed to 2x
            video.playbackRate = 2.0;
        }
    }

    // Observe for changes in the document to catch new videos being loaded dynamically
    let observer = new MutationObserver((mutations) => {
        mutations.forEach((mutation) => {
            if (mutation.addedNodes.length) {
                setSpeed();
            }
        });
    });

    observer.observe(document.body, { childList: true, subtree: true });

    // Initial speed set for the currently loaded video
    setSpeed();
})();
