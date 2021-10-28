// <---- Closing & opening the modal ----> //

const modalButton = document.getElementById("modalButton");
const modal = document.getElementById("modalWrapper");
const close = document.getElementById("times");
const sumbitclose1 = document.getElementsByClassName("submit__close")[0];
const submitclose2 = document.getElementsByClassName("submit__close")[1];

modalButton.onclick = () => {
  modal.classList.remove("modalsubmit");
  modal.style.animationPlayState = "running";
  modal.style.webkitAnimationPlayState = "running";
  modal.style.display = "flex";
}
close.onclick = () => modal.classList.add("modalsubmit");
sumbitclose1.onclick = () => modal.classList.add("modalsubmit");
submitclose2.onclick = () => modal.classList.add("modalsubmit");
window.onclick = (click) => {
  if (click.target == modal) {
    modal.classList.add("modalsubmit");
  }
}