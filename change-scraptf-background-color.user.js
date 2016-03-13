// ==UserScript==
// @name         Change Scrap.tf Background Color
// @namespace    http://oddball.tf/
// @version      1.0
// @description  Changes the scrap.tf background color
// @author       The Oddball
// @include      /^http?://.*\.?scrap\.tf/.*$/
// @include      /^https?://.*\.?scrap\.tf/.*$/
// @downloadURL  https://theoddball.github.io/change-scraptf-background-color.user.js
// @updateURL    https://theoddball.github.io/change-scraptf-background-color.meta.js
// @grant        none
// ==/UserScript==
function changeColor(document){
    $('body').each(function () {
        this.style.setProperty('background-color', '#aa0000');
    }
               )};
changeColor();