(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
document.addEventListener('DOMContentLoaded', () => {
  let changeThemeTrigger = document.getElementById('change-theme');
  let selectedUserTheme = 'dark';
  changeThemeTrigger.addEventListener('click', () => {
    if (document.body.getAttribute('data-theme') == 'dark') {
      document.body.setAttribute('data-theme', '')
      selectedUserTheme = 'light'
    } else {
      document.body.setAttribute('data-theme', 'dark');
      selectedUserTheme = 'dark'
    }
  });

  let skillBars = document.getElementsByClassName('skill-bar');
  
  for (let i = 0; i < skillBars.length; i++) {
    let skillBar = skillBars[i];
    let value = skillBars[i].getAttribute('value');
    console.log(value);
    let skillBarFill = skillBar.querySelector('.skill-level');
    let formated = 'calc(' + value + '% - 2px)';
    skillBarFill.style.width = formated;
  }
});
},{}]},{},[1]);
