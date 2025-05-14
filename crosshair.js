// ==UserScript==
// @name         GeoFS Static Crosshair
// @namespace    http://tampermonkey.net/
// @version      24.7
// @description  Adds a static crosshair in the middle of the screen in GeoFS with toggle functionality (key: L).
// @author       PreciseScorpion
// @match        *://www.geo-fs.com/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    // Create crosshair element
    const crosshair = document.createElement('div');
    crosshair.style.position = 'absolute';
    crosshair.style.top = '50%';
    crosshair.style.left = '50%';
    crosshair.style.width = '1cm';
    crosshair.style.height = '1cm';
    crosshair.style.backgroundColor = 'rgba(128, 128, 128, 0.5)';
    crosshair.style.zIndex = '10000';
    crosshair.style.transform = 'translate(-50%, -50%)';
    crosshair.style.display = 'block';

    // Append crosshair to the document
    document.body.appendChild(crosshair);

    // Toggle crosshair with 'L' key
    document.addEventListener('keydown', function(event) {
        if (event.key.toLowerCase() === 'l') {
            crosshair.style.display = (crosshair.style.display === 'none') ? 'block' : 'none';
        }
    });
})();
