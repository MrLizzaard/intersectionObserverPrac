"use strict";

const option = {
  rootMargin: "100px",
  threshold: 0,
};
const callback = (entries, observer) => {
  entries.forEach((entry) => {
    console.log(entry);
    console.log(observer);
    if (entry.isIntersecting) {
      entry.target.classList.add("active");
    } else {
      entry.target.classList.remove("active");
    }
  });
};

const observer = new IntersectionObserver(callback, option);

const target = document.querySelectorAll(".box");
target.forEach((item) => {
  observer.observe(item);
});
