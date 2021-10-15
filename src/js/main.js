const options = {
  rootMargin: "-50px 200px",
  threshold: 1,
};

const callback = (entries, observer) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      let delay = entry.target.dataset.saDelay ? entry.target.dataset.saDelay : 0;
      setTimeout(() => {
        entry.target.classList.add("show");
      }, delay);
    }
  });
};

const observer = new IntersectionObserver(callback, options);

const saElementList = document.querySelectorAll(".sa");
saElementList.forEach((element) => observer.observe(element));
