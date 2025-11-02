function handleHeaderScroll() {
  const header = document.querySelector('.header');
  let lastScrollTop = 0;

  const currentScrollTop = window.pageYOffset || document.documentElement.scrollTop;

  if (currentScrollTop > 100) {
    header.dataset.active = 'true';
  } else {
    header.dataset.active = 'false';
  }

  window.addEventListener('scroll', function () {
    const updatedScrollTop = window.pageYOffset || document.documentElement.scrollTop;

    if (updatedScrollTop > 100) {
      header.dataset.active = 'true';
    } else {
      header.dataset.active = 'false';
    }

    lastScrollTop = updatedScrollTop;
  });
}

function handleNavMenuDrawerButton() {
  const body = document.body;
  const navMenuDrawerButton = document.getElementById('nav-menu-button');
  const navMenuDrawer = document.getElementById('nav-menu-drawer');
  const navMenuDrawerBackdrop = document.getElementById('nav-menu-drawer-backdrop');

  navMenuDrawerButton.addEventListener('click', function () {
    body.classList.toggle('no-scroll');
    const isDrawerOpened = navMenuDrawer.dataset.active === 'true';
    navMenuDrawer.dataset.active = isDrawerOpened ? 'false' : 'true';
  });

  navMenuDrawerBackdrop.addEventListener('click', function () {
    body.classList.toggle('no-scroll');
    const isDrawerOpened = navMenuDrawer.dataset.active === 'true';
    navMenuDrawer.dataset.active = isDrawerOpened ? 'false' : 'true';
  });
}

document.addEventListener('DOMContentLoaded', function () {
  handleHeaderScroll();
  handleNavMenuDrawerButton();
});
