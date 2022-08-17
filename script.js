"use strict";

const modal = document.querySelector(".modal").classList;
const overlay = document.querySelector(".overlay").classList;

const openModal = () => {
  modal.remove("hidden");
  overlay.remove("hidden");
};

const closeModal = () => {
  modal.add("hidden");
  overlay.add("hidden");
};

const closeModalOnKeydown = (e) => {
  if (modal.contains("hidden") === false && e.key === "Escape") {
    closeModal();
  }
};

document.querySelectorAll(".show-modal").forEach((element) => {
  element.addEventListener("click", openModal);
});

document.querySelector(".close-modal").addEventListener("click", closeModal);

document.addEventListener("keydown", closeModalOnKeydown);
