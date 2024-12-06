// OVERLAY


// Get elements
// const openCardBtn = document.getElementById('openCardBtn');
// const overlay = document.getElementById('overlay');
// const closeCardBtn = document.getElementById('closeCardBtn');

// Open overlay when button is clicked
// openCardBtn.addEventListener('click', () => {
//   overlay.style.display = 'flex';
// });

// Close overlay when close button is clicked
// closeCardBtn.addEventListener('click', () => {
//   overlay.style.display = 'none';
// });


// Get elements
const openCardBtn = document.getElementById('openCardBtn');
const overlay = document.getElementById('overlay');
const closeCardBtn = document.getElementById('closeCardBtn');
const sideNavBar = document.querySelector('.menu-btn-container'); // Side nav-bar container
const Header = document.querySelector('.header');
const Footer = document.querySelector('.footer');
const Boxer = document.getElementById('boxer');
const Work = document.getElementById('work'); 
const Article = document.querySelector('.article');
const Skills = document.querySelector('.skills');
const Client = document.querySelector('.client');
const aboutMe = document.querySelector('.about-me');
const Contact = document.querySelector('.contact');
const Recommendations = document.querySelector('.recommendations');


// Open overlay and hide the side nav-bar when button is clicked
openCardBtn.addEventListener('click', () => {
  overlay.style.display = 'flex';
  overlay.style.zIndex= 2000;
  sideNavBar.style.display = 'none';
  Footer.style.display = 'none';
  Header.style.display = 'none';
  Boxer.style.display = 'none';
  Work.style.display = 'none';
  Article.style.display = 'none';
  Client .style.display = 'none';
  aboutMe.style.display = 'none';
  Skills.style.display = 'none';
  Contact .style.display = 'none';
  Recommendations.style.display = 'none';

});

// Close overlay and show the side nav-bar when close button is clicked
closeCardBtn.addEventListener('click', () => {
  overlay.style.display = 'none';
  sideNavBar.style.display = 'block'; // Show side nav-bar again
});
