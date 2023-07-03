let menubtnE1 = document.querySelector(".humbugger-menu");
let mobileNavEl = document.querySelector(".mobile-nav");

menubtnE1.addEventListener("click", () => {
  if (mobileNavEl.style.display == "none" || !mobileNavEl.style.display) {
    mobileNavEl.style.display = "block";
  } else {
    mobileNavEl.style.display = "none";
  }
});

document.querySelector(".closebtn").addEventListener("click", () => {
  mobileNavEl.style.display = "none";
});

// stop an event from getting en element's children
document.querySelector(".mobile-nav").addEventListener("click", (event) => {
  mobileNavEl.style.display = "none";
});
