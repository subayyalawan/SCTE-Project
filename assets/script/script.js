// /////////////////////////////////////////////////////////////
// for mobile nevigation
////////////////////////////////////////////////////////////////

const menuOpenBtn = document.querySelector(".hamburger");
const insideNavigation = document.querySelector(".inside-navigation");
const menuCloseBtn = document.querySelector(".closeBtn");

menuOpenBtn.addEventListener("click", () => {
  insideNavigation.style.display = "block";
});

menuCloseBtn.addEventListener("click", () => {
  insideNavigation.style.display = "none";
});

// /////////////////////////////////////////////////////////////
// for mobile membersBar btn
////////////////////////////////////////////////////////////////

let membersBarHead = document.querySelector(".membersBar-menu-head");
let membersBarMenu = document.querySelector(".memberBar-menu");
let membersBarMenuBtn = document.querySelector(".membersBar-menu-btn");

membersBarHead.addEventListener("click", () => {
  if (membersBarMenuBtn.classList.contains("fa-angle-down")) {
    membersBarMenu.style.display = "block";
    membersBarMenuBtn.classList.add("fa-angle-up");
    membersBarMenuBtn.classList.remove("fa-angle-down");
  } else {
    membersBarMenu.style.display = "none";
    membersBarMenuBtn.classList.add("fa-angle-down");
    membersBarMenuBtn.classList.remove("fa-angle-up");
  }
});
