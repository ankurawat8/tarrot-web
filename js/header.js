// menu function
let navRGhtL = document.querySelector(".nav-rght-l");
let menu = document.querySelector(".menu");
let rmMenu = document.querySelector(".rm-menu");
function menuBar() {
  menu.style.display = "none";
  navRGhtL.style.display = "flex";
  rmMenu.style.display = "block";
}
function removeMenu() {
  menu.style.display = "flex";
  navRGhtL.style.display = "none";
  rmMenu.style.display = "none";
}
let videoconAnimation = function () {
  let videocon = document.querySelector(".video-container");
  let playciracl = document.querySelector(".play-circal");
  videocon.addEventListener("mouseenter", function () {
    gsap.to(playciracl, {
      opacity: 1,
      scale: 1,
    });
  });
  videocon.addEventListener("mouseleave", function () {
    gsap.to(playciracl, {
      opacity: 0,
      scale: 0,
    });
  });
  videocon.addEventListener("mousemove", function (dets) {
    gsap.to(playciracl, {
      left: dets.x - 70,
      top: dets.y - 50,
    });
  });
};
videoconAnimation();
function videoconLoadAnimationn() {
  gsap.from(".part1 .heading h1", {
    y: 100,
    delay: 0.5,
    opacity: 1,
    duration: 0.9,
    stagger: 0.3,
  });
  gsap.from(".video-container", {
    scale: 0.9,
    delay: 1.3,
    opacity: 0,
    duration: 0.3,
  });
}
videoconLoadAnimationn();
