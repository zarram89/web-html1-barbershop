const cartButton = document.querySelector(".navigation-link-cart");
const popover = document.querySelector(".popover");
const closeButton = document.querySelector(".popover-close-button");

function openPopover() {
  popover.classList.add("popover-open");
  document.addEventListener("keydown", onEscPress);
  document.addEventListener("click", onClickOutside);
}

function closePopover() {
  popover.classList.remove("popover-open");
  document.removeEventListener("keydown", onEscPress);
  document.removeEventListener("click", onClickOutside);
}

function togglePopover() {
  if (popover.classList.contains("popover-open")) {
    closePopover();
  } else {
    openPopover();
  }
}

function onEscPress(evt) {
  if (evt.key === "Escape") {
    closePopover();
  }
}

function onClickOutside(evt) {
  const isClickInside = popover.contains(evt.target) || cartButton.contains(evt.target);
  if (!isClickInside) {
    closePopover();
  }
}

cartButton.addEventListener("click", (evt) => {
  evt.preventDefault(); // Чтобы убрать переход по ссылке "#"
  togglePopover();
});

closeButton.addEventListener("click", (evt) => {
  evt.preventDefault();
  closePopover();
});
