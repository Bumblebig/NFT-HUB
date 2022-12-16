'use strict';

const navLinks = document.querySelectorAll('.nav-links');
const allSections = document.querySelectorAll('section');

// Nav smooth scrolling
navLinks.forEach(el => {
  el.addEventListener('click', function (e) {
    e.preventDefault();
    // console.log(e.target.getAttribute('href'));

    // document.querySelector('.menu-wrap').style.display = 'none';
    const id = e.target.getAttribute('href');
    document.querySelector(id).scrollIntoView({ behavior: 'smooth' });
  });
});

//Reveal on scroll
const revealSection = function (entries, observer) {
  const [entry] = entries;
  if (!entry.isIntersecting) return;

  entry.target.classList.remove('section--hidden');
  observer.unobserve(entry.target);
};

const sectionObserver = new IntersectionObserver(revealSection, {
  root: null,
  threshold: 0.15,
});

allSections.forEach(section => {
  sectionObserver.observe(section);
});
