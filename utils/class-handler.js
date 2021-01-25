export const classHandler = (containerClass, buttonMode) => {
  let btns = document.querySelector('.btns').querySelectorAll('input'),
      dirs = document.querySelector('.dir').querySelectorAll('input'),
      container = document.querySelector(containerClass);
  let extra;
      if (buttonMode === 'EXTRA') {
        extra = document.querySelector('.extra');
      }

  for (let i of btns) {
    (function(i) {
      i.addEventListener('click', function() {
        if (buttonMode === 'TOGGLE') {
          container.classList.toggle(i.value);
        }
        else if (buttonMode === 'EXTRA') {
          clearClasses(extra, btns);
          extra.classList.add(i.value);
        }
        else {
          clearClasses(container, btns);
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

  function clearClasses (el, cl) {
    for (let i of cl) {
      el.classList.remove(i.value);
    }
  }
}
