let one = document.querySelector(".onor");
let text = document.querySelector(".text");
let button = document.querySelector("button");
let ab = document.querySelector(".abb");
let abtext = document.querySelector(".abtextt");
let am = document.querySelector("#wh");
let abtext2 = document.querySelector(".abtext2");
let nav = document.querySelector("nav");
let whatWeOffer = document.querySelector("#abb");
let o = document.querySelector("#one");
let t = document.querySelector("#two");
let th = document.querySelector("#three");
let f = document.querySelector("#four");
let fi = document.querySelector("#five");
let s = document.querySelector("#sex");

let inv = document.querySelector(".inv");
let smart1 = document.querySelector(".smart");
let live = document.querySelector(".live");
let smart2 = document.querySelector(".smart2");

window.onload = function () {
  inv.style.opacity = "1";
  smart1.style.opacity = "1";
  live.style.opacity = "1";
  smart2.style.opacity = "1";
  setTimeout(() => {
    button.style.opacity = "1";
    button.style.transform = "scale(1) translate(-50%)";
  }, 1600);
};

// Check if element is in viewport
function isInViewport(el) {
  const rect = el.getBoundingClientRect();
  return rect.top < window.innerHeight - 100;
}

let lastScrollTop = 0;

window.onscroll = function () {
  let currentScroll = document.documentElement.scrollTop;

  // Hide/Show navbar on scroll
  if (currentScroll > lastScrollTop) {
    nav.style.top = "-120px";
  } else {
    nav.style.top = "0";
  }
  lastScrollTop = currentScroll <= 0 ? 0 : currentScroll;

  // Animation on scroll
  if (ab && isInViewport(ab)) {
    ab.style.opacity = "1";
    ab.style.transform = "scale(1.3) translate(0)";
  }

  if (abtext && isInViewport(abtext)) {
    abtext.style.opacity = "1";
    abtext.style.transform = "scale(1)";
  }

  if (am && isInViewport(am)) {
    am.style.opacity = "1";
    am.style.transform = "scale(1.3) translate(0)";
  }

  if (abtext2 && isInViewport(abtext2)) {
    abtext2.style.opacity = "1";
    abtext2.style.transform = "scale(1)";
  }

  if (whatWeOffer && isInViewport(whatWeOffer)) {
    whatWeOffer.style.opacity = "1";
    whatWeOffer.style.transform = "translate(0)";
  }
};













// في ملف service-worker.js
self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open('my-cache').then(function(cache) {
      return cache.addAll([
        '/',
        '/styles/main.css',
        '/scripts/main.js',
        // جميع الموارد التي تريد تخزينها
      ]);
    })
  );
});