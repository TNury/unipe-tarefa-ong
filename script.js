function showToast(message, type) {
  const toastContainer = document.getElementById('toast-container');
  if (!toastContainer) return;

  const toast = document.createElement('div');
  toast.className = `toast toast-${type}`;

  const iconSvg =
    type === 'success'
      ? '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z" fill="currentColor"/></svg>'
      : '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z" fill="currentColor"/></svg>';

  toast.innerHTML = `
    <div class="toast-icon">${iconSvg}</div>
    <div class="toast-message">${message}</div>
    <button class="toast-close" aria-label="Fechar">
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" fill="currentColor"/>
      </svg>
    </button>
  `;

  const closeButton = toast.querySelector('.toast-close');
  closeButton.addEventListener('click', () => {
    hideToast(toast);
  });

  toastContainer.appendChild(toast);

  closeButton.focus();

  // setTimeout(() => {
  //   hideToast(toast);
  // }, 5000);
}

function hideToast(toast) {
  toast.classList.add('hiding');
  setTimeout(() => {
    if (toast.parentNode) {
      toast.parentNode.removeChild(toast);
    }
  }, 300);
}

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

function handleNavDropdownMobileToggle() {
  const dropdownToggleMobile = document.getElementById('nav-dropdown-toggle-mobile');
  if (dropdownToggleMobile) {
    dropdownToggleMobile.addEventListener('click', function () {
      const dropdown = document.getElementById('nav-dropdown-mobile');

      if (dropdown) {
        dropdown.classList.toggle('active');

        const dropdownItems = dropdown.querySelectorAll('.nav-dropdown-item');
        if (dropdown.classList.contains('active')) {
          dropdownItems.forEach((item) => {
            item.setAttribute('tabindex', '0');
          });
        } else {
          dropdownItems.forEach((item) => {
            item.setAttribute('tabindex', '-1');
          });
        }
      }
    });
  }
}

document.addEventListener('DOMContentLoaded', function () {
  handleHeaderScroll();
  handleNavMenuDrawerButton();
  handleNavDropdownMobileToggle();
});
