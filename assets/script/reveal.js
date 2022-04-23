////////////////////////////
// Scroll Reveal
const reveal = ScrollReveal();

reveal.reveal('.reveal', {
  reset: true,
  duration: 1500,
  delay: 400,
  distance: '60px',
});

console.log(reveal);
////////////////////////////
// Observer & Animate numbers
let target = document.querySelector('.about-store-section');

const obsCallBack = function (entries, observer) {
  const [entry] = entries;
  console.log(entry);
  if (!entry.isIntersecting) return;
  numbersAnimation();
};

const obsOptions = {
  root: null,
  threshold: 0.1,
};

const observer = new IntersectionObserver(obsCallBack, obsOptions);
observer.observe(target);

function numbersAnimation() {
  const counters = document.querySelectorAll('.value');
  const speed = 500;

  counters.forEach((counter) => {
    const animate = () => {
      const value = +counter.getAttribute('akhi');
      const data = +counter.innerText;
      const time = value / speed;
      if (data < value) {
        counter.innerText = Math.ceil(data + time);
        setTimeout(animate, 1);
      } else {
        counter.innerText = value;
      }
    };

    animate();
  });
}
