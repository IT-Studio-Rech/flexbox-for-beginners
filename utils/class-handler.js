export const classHandler = (containerClass, buttonMode) => {
  let buttons = document.querySelector('.buttons').querySelectorAll('input');
  let dirs = document.querySelector('.dir').querySelectorAll('input');
  let container = document.querySelector(containerClass);
  let extra;
      if (buttonMode === 'EXTRA') {
        extra = document.querySelector('.extra');
      }

  for (let i of buttons) {
    (function(i) {
      i.addEventListener('click', function() {
        if (buttonMode === 'TOGGLE') {
          container.classList.toggle(i.value);
        }
        else if (buttonMode === 'EXTRA') {
          clearClasses(extra, buttons);
          extra.classList.add(i.value);
        }
        else {
          clearClasses(container, buttons);
          container.classList.add(i.value);
        }
      }, false);
    })(i);
  }

  for (let i of dirs) {
    (function(i) {
      i.addEventListener('click', function() {
        clearClasses(container, dirs);
        container.classList.add(i.value);
      }, false);
    })(i);
  }

  function clearClasses (element, classes) {
    for (let clazz of classes) {
      element.classList.remove(clazz.value);
    }
  }
}
