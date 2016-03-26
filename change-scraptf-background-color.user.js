// ==UserScript==
// @name         Scrap.tf Dark Theme
// @namespace    http://oddball.tf/
// @version      1.1
// @description  Makes scrap.tf dark 
// @author       The Oddball
// @include      /^http?://.*\.?scrap\.tf/.*$/
// @include      /^https?://.*\.?scrap\.tf/.*$/
// @downloadURL  https://theoddball.github.io/change-scraptf-background-color.user.js
// @updateURL    https://theoddball.github.io/change-scraptf-background-color.meta.js
// @grant        none
// ==/UserScript==
function changeColor(document) {
    $('body').each(function () {
        this.style.setProperty('background-color', '#363636');
        this.style.setProperty('color', '#fff');
    }
                  );
}
function changeHeaderColor(document) {
    $('.navbar.yamm.navbar-default.navbar-fixed-top').each(function () {
        this.style.setProperty('background-color', '#363636');
    });
}
function changeDropdownColor(document) {
    $('.dropdown-menu.yamm-dropdown').each(function () {
        this.style.setProperty('background-color', '#202020');
    });
}
function changeBGColor(document) {
    $('.flat-slate').each(function () {
        this.style.setProperty('background-color', '#363636');
    });
}
function changeLogo(document) {
    $('.navbar-brand').each(function () {
        var $this = $(this);
        $this.attr('src', "http://i.oddball.tf/Gq5ty.png");
    });
}
function changeTextColor(document) {
    $('.navbar-nav').children().children().each(function () {
        this.style.setProperty('color', '#fff');
    });
}
function load() {
    changeColor();
    changeHeaderColor();
    changeBGColor();
    changeLogo();
    changeTextColor();
    changeDropdownColor();
}
load();