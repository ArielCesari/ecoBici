
const elements = document.querySelectorAll('.fade-in');

function fadeInOnScroll() {
  elements.forEach((element) => {
    const elementTop = element.getBoundingClientRect().top;
    const elementBottom = element.getBoundingClientRect().bottom;

    const isVisible = (elementTop < window.innerHeight && elementBottom >= 0);

    if (isVisible) {
      element.classList.add('fade-in-active');
    }
  });
}

window.addEventListener('load', fadeInOnScroll);
window.addEventListener('scroll', fadeInOnScroll);
