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

  const moveCircle = (e) => {
    TweenLite.to($circle, 0.3, {
      css: {
        left: e.pageX + 12.5,
        top: e.pageY + 12.5
      }
    });
  }

  // $(window).on('mousemove', moveCircle);

  const mobileMenu = document.querySelector('.mobile-menu')
  const menuTrigger = document.querySelector('.mobile-menu-trigger');

  const onMobileLinkClick = (e) => {
    e.preventDefault();
    const clickedLinkID = e.target.getAttribute('data-target');
    navigateToSection(clickedLinkID);
    closeMobileMenu();

  }

  const navigateToSection = (sectionID) => {
    document.querySelector('#' + sectionID).scrollIntoView()
  }

  const openMobileMenu = () => {
    mobileMenu.classList.remove('hidden');
    menuTrigger.innerHTML = 'Close X';
    document.body.style.overflow = 'hidden';
  };

  const closeMobileMenu = () => {
    mobileMenu.classList.add('hidden');
    menuTrigger.innerHTML = 'Go To ->';
    document.body.style.overflow = 'auto';
  }

  const mobileLinks = document.querySelectorAll('.mobile-menu a');
  for (let i = 0; i < mobileLinks.length; i++) {
    mobileLinks[i].addEventListener('click', onMobileLinkClick);
  };

  menuTrigger.addEventListener('click', (e) => {
    e.preventDefault()
    if (mobileMenu.classList.contains('hidden')) {
      openMobileMenu()
    } else {
      closeMobileMenu()
    }
  });

  const getPDFFileButton = document.querySelector('#print');
  getPDFFileButton.addEventListener('click', () => {
    window.print();
  })

  // const links = document.querySelectorAll('a');
  // const circle = document.querySelector('.circle');

  // for (let i = 0; i < links.length; i++) {
  //   links[i].addEventListener('mouseover', (e) => {
  //     e.preventDefault();
  //     circle.classList.add('highlighted');
  //   });
  //   links[i].addEventListener('mouseout', (e) => {
  //     e.preventDefault();
  //     circle.classList.remove('highlighted');
  //   });
  // };
});