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
  };

  // http://ahrengot.com/tutorials/greensock-javascript-animation

var $circle = $('.circle');

  function moveCircle(e) {
    TweenLite.to($circle, 0.3, {
      css: {
        left: e.pageX + 12.5,
        top: e.pageY + 12.5
      }
    });
  }

  $(window).on('mousemove', moveCircle);
});