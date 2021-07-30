const DrawerInitiator = {
  init({ button, drawer, body, menus }) {
    button.addEventListener('click', (event) => {
      this._toggleDrawer(event, drawer);
    });

    body.addEventListener('click', (event) => {
      this._closeDrawer(event, drawer);
    });

    menus.forEach((menu) => {
      menu.addEventListener('click', (event) => {
        this._closeDrawer(event, drawer);
      });
    });
  },

  _toggleDrawer(event, drawer) {
    event.stopPropagation();
    drawer.classList.toggle('open');
  },

  _closeDrawer(event, drawer) {
    event.stopPropagation();
    drawer.classList.remove('open');
  },
};

export default DrawerInitiator;