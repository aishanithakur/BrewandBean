const counters = document.querySelectorAll(".count");

const startCounter = (counter) => {
  counter.innerText = "0";

  const target = +counter.getAttribute("data-target");
  let count = 0;

  const step = Math.ceil(target / 200); // smoother speed

  const update = () => {
    count += step;

    if (count < target) {
      counter.innerText = count;
      requestAnimationFrame(update);
    } else {
      counter.innerText = target;
    }
  };

  update();
};
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      startCounter(entry.target);
      observer.unobserve(entry.target); // run only once
    }
  });
}, { threshold: 0.5 });

counters.forEach(counter => {
  observer.observe(counter);
});