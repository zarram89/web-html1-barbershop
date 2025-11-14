export function onEsc(callback) {
  return function handleEsc(evt) {
    if (evt.key === "Escape") {
      callback();
    }
  };
}

export function onClickOutside(element, callback) {
  return function handleClick(evt) {
    if (!element.contains(evt.target)) {
      callback();
    }
  };
}
