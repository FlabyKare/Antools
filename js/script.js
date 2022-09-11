// Плавное появление блоков
function onEntry(entry) {
   entry.forEach((change) => {
      if (change.isIntersecting) {
         change.target.classList.add("element-show");
      } else {
         change.target.classList.remove("element-show");
      }
   });
}
let options = { threshold: [1] };
let observer = new IntersectionObserver(onEntry, options);
let elements = document.querySelectorAll(".element-animation");
for (let elm of elements) {
   observer.observe(elm);
}

//Плавность якорных ссылок
const anchors = document.querySelectorAll('a[href*="#"]');
for (let anchor of anchors) {
   anchor.addEventListener("click", function (e) {
      e.preventDefault();

      const blockID = anchor.getAttribute("href").substr(1);

      document.getElementById(blockID).scrollIntoView({
         behavior: "smooth",
         block: "start",
      });
   });
}

// Выпадающий список в шапке сайта

const list_link = document.querySelector(".list_link");

list_link.addEventListener("click", () => {
   list_link.classList.toggle("active_list");
});

// Меню

const menu_btn = document.querySelector(".burger");
const menu_wrapper = document.querySelector(".menu_wrapper");
const body_hidden = document.querySelectorAll(".mobile_opened");
const menuLinks = document.querySelectorAll(".links .menu_link");
const mobile_nav = document.querySelector(".mobile_nav");

const navClassAppend = () => {
   mobile_nav.classList.toggle("nav_100");
};
const menuWrapper = () => {
   menu_wrapper.classList.toggle("right_0");
};
const appenedClasses = () => {
   body_hidden.forEach((item) => {
      item.classList.toggle("body_hide");
   });
};
function toggleMenu() {
   menuWrapper();
   appenedClasses();
   navClassAppend();
}

menu_btn.addEventListener("click", toggleMenu);
menuLinks.forEach((link) => link.addEventListener("click", toggleMenu));

// Добавленеие цвета при нажатии ( избранное, закладки во 2 секции )
const hearts = document.querySelectorAll(".heart_svg");
const stars = document.querySelectorAll(".star_svg");
const heartAppendClass = () => {
   heart.addEventListener("click", () => {
      heart.classList.toggle("red_heart");
   });
};
const starAppendClass = () => {
   star.addEventListener("click", () => {
      star.classList.toggle("gold_star");
   });
};

for (const heart_ of hearts) {
    heart_.addEventListener("click", () => {
        heart_.classList.toggle("red_heart");
   });
}
for (const star_ of stars) {
    star_.addEventListener("click", () => {
        star_.classList.toggle("gold_star");
   });
}
