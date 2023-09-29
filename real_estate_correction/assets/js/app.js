// change navbar state on windows scroll and close mobile navbar on scroll
const navbar = document.querySelector('.navbar-nav');
const navbarCollapseMenu = document.querySelector('.navbar_links_wrapper');

window.onscroll = () => {
  if (window.scrollY >= 60) {
    navbar.classList.add('navbar-scroll', 'shadow-sm');
    navbarCollapseMenu.classList.remove('nav_collapse_active');
  } else {
    navbar.classList.remove('navbar-scroll', 'shadow-sm');
  }
}

// toggle mobile display navbar
const navbarTogglerBtn = document.querySelector('.nav_toggler');

navbarTogglerBtn.onclick = () => {
  navbarCollapseMenu.classList.toggle('nav_collapse_active');
}