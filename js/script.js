'use strict';

const yearEl = document.querySelector('.year');
const currentYear = new Date();

yearEl.textContent = currentYear.getFullYear();

///////////////////////////////////////////////////////////
// Make mobile nav

// const iconmenuEl = document.querySelector('.icon-nav-menu');
// const iconcloseEl = document.querySelector('.icon-nav-close');

// iconmenuEl.addEventListener('click', () => {
//   headerEl.classList.add('nav-open');
// });
// iconcloseEl.addEventListener('click', () => {
//   headerEl.classList.remove('nav-open');
// });
const headerEl = document.querySelector('.header');
const btnnavEl = document.querySelector('.btn-mobile-nav');
btnnavEl.addEventListener('click', () => {
  headerEl.classList.toggle('nav-open');
});

///////////////////////////////////////////////////////////

// smooth scrolling
const allLinks = document.querySelectorAll('a:link');
allLinks.forEach((link) => {
  link.addEventListener('click', (e) => {
    e.preventDefault();
    const href = link.getAttribute('href');
    console.log(href);
    // scroll back to the Top
    // if (href === '#header') {
    //   window.scrollTo({
    //     top: 0,
    //     behavior: 'smooth',
    //   });
    // }
    if (href.startsWith('#')) {
      const sectionEl = document.querySelector(href);
      console.log(sectionEl);
      sectionEl.scrollIntoView({ behavior: 'smooth' });
    }
    // close mobile nav
    if (link.classList.contains('main-nav-link')) {
      headerEl.classList.toggle('nav-open');
    }
  });
});

///////////////////////////////////////////////////////////
//Sticky navigation
const sectionheroEl = document.querySelector('.section-hero');
const obs = new IntersectionObserver(
  function (entries) {
    const enst = entries[0];
    if (enst.isIntersecting === false) {
      document.body.classList.add('sticky');
    }
    if (enst.isIntersecting) {
      document.body.classList.remove('sticky');
    }
  },
  {
    root: null,
    thresold: 0,
    rootMargin: '-80px',
  }
);
obs.observe(sectionheroEl);

///////////////////////////////////////////////////////////
// Fixing flexbox gap property missing in some Safari versions
function checkFlexGap() {
  var flex = document.createElement('div');
  flex.style.display = 'flex';
  flex.style.flexDirection = 'column';
  flex.style.rowGap = '1px';

  flex.appendChild(document.createElement('div'));
  flex.appendChild(document.createElement('div'));

  document.body.appendChild(flex);
  let isSupported = flex.scrollHeight === 1;
  flex.parentNode.removeChild(flex);
  //   console.log(isSupported);

  if (!isSupported) document.body.classList.add('no-flexbox-gap');
}
checkFlexGap();

// Uncomment these to check your work!
// ADD CODE HERE
function intersection(arr) {
  console.log(
    arr.map((value) => {
      return (
        value.reduce((acc, value) => {
          const set = new Set(value);
          console.log(set);
        }),
        value[0]
      );
    })
  );
}
// Uncomment these to check your work!
const apicall = 'https://api.mobula.io/api/1/market/multi-data';

async function getApi() {
  try {
    const request = await fetch(apicall);
    const response = await request.json();
    console.log(response);
  } catch (error) {
    console.log(error);
  }
}
getApi();
