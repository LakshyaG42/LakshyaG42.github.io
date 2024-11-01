// ---
const hamMenuBtn = document.querySelector('.header__main-ham-menu-cont')
const smallMenu = document.querySelector('.header__sm-menu')
const headerHamMenuBtn = document.querySelector('.header__main-ham-menu')
const headerHamMenuCloseBtn = document.querySelector(
  '.header__main-ham-menu-close'
)
const headerSmallMenuLinks = document.querySelectorAll('.header__sm-menu-link')

hamMenuBtn.addEventListener('click', () => {
  if (smallMenu.classList.contains('header__sm-menu--active')) {
    smallMenu.classList.remove('header__sm-menu--active')
  } else {
    smallMenu.classList.add('header__sm-menu--active')
  }
  if (headerHamMenuBtn.classList.contains('d-none')) {
    headerHamMenuBtn.classList.remove('d-none')
    headerHamMenuCloseBtn.classList.add('d-none')
  } else {
    headerHamMenuBtn.classList.add('d-none')
    headerHamMenuCloseBtn.classList.remove('d-none')
  }
})

for (let i = 0; i < headerSmallMenuLinks.length; i++) {
  headerSmallMenuLinks[i].addEventListener('click', () => {
    smallMenu.classList.remove('header__sm-menu--active')
    headerHamMenuBtn.classList.remove('d-none')
    headerHamMenuCloseBtn.classList.add('d-none')
  })
}

// ---
const headerLogoConatiner = document.querySelector('.header__logo-container')

headerLogoConatiner.addEventListener('click', () => {
  location.href = './'
})

function toggleFeatureUpdates() {
  const panel = document.getElementById('featureUpdatesPanel');
  panel.classList.toggle('feature-updates__panel');
  panel.classList.toggle('feature-updates__panel--active');


  const links = panel.querySelectorAll('.feature-updates__link');
  links.forEach(link => {
    link.classList.toggle('feature-updates__link--active');
  });

  const content = document.querySelector('.project-cs-hero__content');
  content.classList.toggle('project-cs-hero__content--panel-open');
}

function toggleDemoLinks() {
  // var demoLinks = document.querySelector('.demo-links-accordion');
  // if (demoLinks.style.display === 'none' || demoLinks.style.display === '') {
  //   demoLinks.style.display = 'block';
  // } else {
  //   demoLinks.style.display = 'none';
  // }
  var demoLinks = document.querySelector('.demo-links-accordion');
  if (demoLinks.classList.contains('open')) {
    demoLinks.classList.remove('open');
  } else {
    demoLinks.classList.add('open');
  }
}

function toggleProjectsMenu() {
  var links = document.getElementById('hamburgerLinks');
  if (links.style.maxHeight) {
    links.style.maxHeight = null;
  } else {
    links.style.maxHeight = links.scrollHeight + "px";
  }
  if (links.style.visibility === 'visible') {
    links.style.visibility = 'hidden';
  } else {
    links.style.visibility = 'visible';
  }
}