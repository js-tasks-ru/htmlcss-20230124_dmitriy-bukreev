const buttons = document.querySelectorAll('[data-theme-changer]');

for (let button of buttons) {
  button.onchange = function () {
    document.documentElement.toggleAttribute('data-theme-dark');
    for (button of buttons) {
      button.checked = this.checked;
    }
  };
}
