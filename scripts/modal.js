import { onEsc, onClickOutside } from "./utils.js";

export function initModal() {
  const openButton = document.querySelector(".navigation-link-login");
  const modalContainer = document.querySelector(".modal-container");
  const modal = document.querySelector(".modal");
  const closeButton = document.querySelector(".modal-close-button");

  if (!openButton || !modal || !modalContainer) return;

  let escHandler;
  let clickOutsideHandler;

  function openModal(evt) {
    evt.preventDefault();
    modalContainer.classList.remove("modal-container-close");

    escHandler = onEsc(closeModal);
    clickOutsideHandler = onClickOutside(modal, closeModal);

    document.addEventListener("keydown", escHandler);
    modalContainer.addEventListener("click", clickOutsideHandler);

    // устанавливаем фокус в первое поле
    const firstField = modal.querySelector("input");
    if (firstField) firstField.focus();
  }

  function closeModal() {
    modalContainer.classList.add("modal-container-close");

    document.removeEventListener("keydown", escHandler);
    modalContainer.removeEventListener("click", clickOutsideHandler);
  }

  openButton.addEventListener("click", openModal);
  closeButton.addEventListener("click", closeModal);
}
