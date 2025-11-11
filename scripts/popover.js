import { onEsc, onClickOutside } from "./utils.js";

export function initPopover() {
  const cartButton = document.querySelector(".navigation-link-cart");
  const popover = document.querySelector(".popover");
  const closeButton = popover.querySelector(".popover-close-button");

  if (!cartButton || !popover) return;

  let escHandler;
  let clickOutsideHandler;

  function openPopover() {
    popover.classList.add("popover-open");

    escHandler = onEsc(closePopover);
    clickOutsideHandler = onClickOutside(popover, closePopover);

    document.addEventListener("keydown", escHandler);
    document.addEventListener("click", clickOutsideHandler);
  }

  function closePopover() {
    popover.classList.remove("popover-open");

    document.removeEventListener("keydown", escHandler);
    document.removeEventListener("click", clickOutsideHandler);
  }

  function togglePopover(evt) {
    evt.preventDefault();
    popover.classList.contains("popover-open") ? closePopover() : openPopover();
  }

  cartButton.addEventListener("click", togglePopover);
  closeButton.addEventListener("click", closePopover);
}
