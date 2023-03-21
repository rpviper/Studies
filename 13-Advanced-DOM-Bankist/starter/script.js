'use strict';

///////////////////////////////////////
// Modal window

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');

const section1 = document.querySelector('#section--1');
const allSections = document.querySelectorAll('.section');
const tabs = document.querySelectorAll('.operations__tab');
const tabsContainer = document.querySelector('.operations__tab-container');
const tabsContent = document.querySelectorAll('.operations__content');

const nav = document.querySelector('.nav');

const dotsContainer = document.querySelector('.dots');

const openModal = function (e) {
  e.preventDefault();
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

btnsOpenModal.forEach(btn => btn.addEventListener('click', openModal)); // Same as the for loop down

// for (let i = 0; i < btnsOpenModal.length; i++)
//   btnsOpenModal[i].addEventListener('click', openModal);

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});

// Cookie message
const header = document.querySelector('.header'); // To select just one class
const messageDiv = document.createElement('div'); // Creating an element
messageDiv.classList.add('cookie-message'); // Search from css file
// messageDiv.textContent = 'We use cookies';
messageDiv.innerHTML =
  'We use cookies for improved functionality and analytics. <button class="btn btn--close-cookie">Got it!</button>'; // An actual HTML code
header.prepend(messageDiv); // Now we attach the messageDiv to the const header we did before
document
  .querySelector('.btn--close-cookie')
  .addEventListener('click', function () {
    messageDiv.remove();
  });

messageDiv.style.backgroundColor = '#37383d';
messageDiv.style.width = '120%';
messageDiv.style.height = // We want to change the messageDiv height, but we don't know the browser set height
  Number.parseFloat(getComputedStyle(messageDiv).height) + 25 + 'px';

// Scrolling
// const btnScrollTo = document.querySelector('.btn--scroll-to'); // Learn more in index.html
// const section1 = document.querySelector('#section--1'); // Features in index.html
// btnScrollTo.addEventListener('click', function () {
//   // Smoothly scroll into the beginning
//   section1.scrollIntoView({ behavior: 'smooth' });
// });

// Nav links
// This works, but it does the event handler to all 3 links, but what if you have 1000s of links, then bad bad
// document.querySelectorAll('.nav__link').forEach(function (el) {
//   // forEach since there are 3 links
//   el.addEventListener('click', function (e) {
//     e.preventDefault(); // Prevents the links following html logic, it's only done so because we want to implement smooth scrolling
//     const id = this.getAttribute('href'); // this.href won't work here, because we only want the section--1 part
//     document.querySelector(id).scrollIntoView({ behavior: 'smooth' });
//   });
// });

// Add event lsitener to common parent element instead
document.querySelector('.nav__links').addEventListener('click', function (e) {
  e.preventDefault();

  // Matching strategy
  if (e.target.classList.contains('nav__link')) {
    const id = e.target.getAttribute('href');
    document.querySelector(id).scrollIntoView({ behavior: 'smooth' });
  }
});

// Tabs
tabsContainer.addEventListener('click', function (e) {
  const buttonClicked = e.target.closest('.operations__tab');
  // e.target.closest was needed here because the button consists of span and button, and if you press on span it is confused

  if (!buttonClicked) return;
  tabs.forEach(tab => tab.classList.remove('operations__tab--active'));
  // Style where button moves down again, foreach is needed to shuffle between buttons
  tabsContent.forEach(content =>
    content.classList.remove('operations__content--active')
  ); // So the content gets hidden and appears when needed
  buttonClicked.classList.add('operations__tab--active'); // Style where clicked button moves up a little, the ORDER does matter

  // Activate content area
  document
    .querySelector(`.operations__content--${buttonClicked.dataset.tab}`) // This comes from HTML line 144 etc
    .classList.add('operations__content--active'); // This comes fromm CSS line 325
});

// Menu fade animation
const handleHover = function (e) {
  // console.log(this);
  if (e.target.classList.contains('nav__link')) {
    const linkClicked = e.target;
    const siblings = linkClicked.closest('.nav').querySelectorAll('.nav__link'); // Basically want to make them all fade
    const logo = linkClicked.closest('.nav').querySelector('img');

    siblings.forEach(el => {
      if (el !== linkClicked) el.style.opacity = this; // if to check if the sibling is not the link itself clicked
    });
    logo.style.opacity = this;
  }
};
nav.addEventListener('mouseover', handleHover.bind(0.5)); // This is where the opacity is written
nav.addEventListener('mouseout', handleHover.bind(1));

// Sticky navigation: Intersection Observer API
const navHeight = nav.getBoundingClientRect().height; // It gets the nav height dynamically
const stickyNav = function (entries) {
  const [entry] = entries;
  // console.log(entry);
  if (!entry.isIntersecting)
    nav.classList.add('sticky'); // Sticky comes from CSS
  // .isIntersecting part comes from console actually, if it's not interescting add the nav class
  else nav.classList.remove('sticky');
};
const headerObserver = new IntersectionObserver(stickyNav, {
  root: null,
  threshold: 0, // The whole nav bar needs to be not visible (means 0 visible)
  rootMargin: `-${navHeight}px`, // 90 px is the navbar itself
  // There is a line right after section1, so it comes before the line -90px, if it would be after it would be +90px
});
headerObserver.observe(header);

// Reveal hidden sections
const revealSection = function (entries, observer) {
  const [entry] = entries;
  if (!entry.isIntersecting) return; // If entry is not intersecting simply return, and if it isn't, do next line
  entry.target.classList.remove('section--hidden'); // Target is from console, and it chooses the first target to show
  // So it doesn't show all sections at once, but one by one
  observer.unobserve(entry.target); // To stop the observing once we done
};
const sectionObserver = new IntersectionObserver(revealSection, {
  root: null,
  threshold: 0.15,
});
allSections.forEach(function (section) {
  sectionObserver.observe(section);
  section.classList.add('section--hidden'); // To add hidden class to all sections first
});

// Lazy-lodaing images, unblurring them
const imgTargets = document.querySelectorAll('img[data-src]'); // Selecting a specific type of image: data-source one
const loadImg = function (entries, observe) {
  const [entry] = entries;
  if (!entry.isIntersecting) return;
  entry.target.src = entry.target.dataset.src; // There are bad quality images which get swopped for good quality ones
  entry.target.addEventListener('load', function () {
    entry.target.classList.remove('lazy-img');
    // The idea is that the picture stays blurred until big picture is loaded, for slower connections
  });
};
const imgObserver = new IntersectionObserver(loadImg, {
  root: null,
  threshold: 0,
  rootMargin: '200px', // Approaching images already fully loaded
});
imgTargets.forEach(img => imgObserver.observe(img));

// Slides
const slides = document.querySelectorAll('.slide');
const btnLeft = document.querySelector('.slider__btn--left');
const btnRight = document.querySelector('.slider__btn--right');
let currentSlide = 0;
const maxSlide = slides.length; // So the slider don't just keep going till infinity
// TranslateX comes from moving the slides left or right // Slides are 0%, 100%, 200%, 300%
// 0% not seen, 100% in the view, 200% to the right and so on
// The dots
const createDots = function () {
  slides.forEach((_, i) => {
    dotsContainer.insertAdjacentHTML(
      'beforeend',
      `<button class="dots__dot" data-slide="${i}"></button>`
    );
  });
};
createDots();

// Active dot
const activateDot = function (slide) {
  document
    .querySelectorAll('.dots__dot')
    .forEach(dot => dot.classList.remove('dots__dot--active')); // To make a dot active, we first deactive them all
  document
    .querySelector(`.dots__dot[data-slide="${slide}"]`)
    .classList.add('dots__dot--active');
};
activateDot(0);

const goToSlide = function (slide) {
  slides.forEach(
    (s, i) => (s.style.transform = `translateX(${100 * (i - slide)}%)`) // s, i => slide, index
  );
};
goToSlide(0);

const nextSlide = function () {
  if (currentSlide === maxSlide - 1) {
    // If we reach the max slide number, we need minus 1 otherwise slider still moves one empty place (zero based)
    currentSlide = 0; // Return slide back to zero
  } else {
    currentSlide++;
  } // Else keep increasing slides by 1
  goToSlide(currentSlide);
  activateDot(currentSlide);
};

const previousSlide = function () {
  if (currentSlide === 0) {
    currentSlide = maxSlide - 1;
  } else {
    currentSlide--;
  }
  goToSlide(currentSlide);
  activateDot(currentSlide);
};

btnRight.addEventListener('click', nextSlide);
btnLeft.addEventListener('click', previousSlide);
// Pressing arrow right n left
document.addEventListener('keydown', function (e) {
  if (e.key === 'ArrowLeft') previousSlide(); // Both codes work the same
  e.key === 'ArrowRight' && nextSlide();
});

dotsContainer.addEventListener('click', function (e) {
  if (e.target.classList.contains('dots__dot')) {
    // const slide = e.target.dataset.slide  // Comes from line 1831
    const { slide } = e.target.dataset; // Restructured code
    goToSlide(slide);
    activateDot(slide);
  }
});

// ----------------------------------------------------------------------------------------------------------------------------------------------------
const timeFaster = function (time) {
  const result = (time * 60) / 1.25;
  const min = String(Math.trunc(result / 60)).padStart(2, 0);
  const sec = String(Math.trunc(result % 60)).padStart(2, 0);
  return console.log(`${min}:${sec}`);
};
timeFaster(14);

// const h1 = document.querySelector('h1'); // When we hover over the heading the alert gets triggered

// const alertH1 = function (e) {
//   alert('Great, hovered over the heading');
//   // h1.removeEventListener('mouseenter', alertH1);
// };
// h1.addEventListener('mouseenter', alertH1);
// setTimeout(() => h1.removeEventListener('mouseenter', alertH1), 3000);

// const randomInt = (min, max) =>
//   Math.floor(Math.random() * (max - min + 1) + min);
// const randomColor = () =>
//   `rgb(${randomInt(0, 255)},${randomInt(0, 255)},${randomInt(0, 255)})`;

// document.querySelector('.nav__link').addEventListener('click', function (e) {
//   this.style.backgroundColor = randomColor();
//   // console.log('LINK', e.target, e.currentTarget);
//   // console.log(e.currentTarget === this);

//   // Stop propagation
//   // e.stopPropagation();
// });

// document.querySelector('.nav__links').addEventListener('click', function (e) {
//   this.style.backgroundColor = randomColor();
//   // console.log('CONTAINER', e.target, e.currentTarget);
// });

// document.querySelector('.nav').addEventListener('click', function (e) {
//   this.style.backgroundColor = randomColor();
//   // console.log('NAV', e.target, e.currentTarget);
// });
