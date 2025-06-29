
  /*=============== SHOW MENU ===============*/
  const navMenu = document.getElementById("nav-menu");
  const navToggle = document.getElementById("nav-toggle");
  const navClose = document.getElementById("nav-close");

  navToggle.addEventListener("click", showMenu)
  navClose.addEventListener("click", hideMenu)
  function showMenu() {
    navMenu.classList.add("show-menu");
  }
  function hideMenu() {
    navMenu.classList.remove("show-menu");
  }


  /*=============== REMOVE MENU MOBILE ===============*/
  const navLink = document.querySelectorAll(".nav__link");
  navLink.forEach((navlink) => {
    navlink.addEventListener("click" , hideMenu)
  })

  /*=============== SWIPER HOME ===============*/
  const swiperHome = new Swiper('.home__swiper', {
    loop: true,
    slidesPerView: 'auto',

    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    autoplay: {
      delay: 2000,
      disableOnIntaraction: false,
    },

  });

  /*=============== CHANGE BACKGROUND HEADER ===============*/
  const scrollHeader = document.getElementById("header");
  const navLogo = document.getElementById("nav-logo");
  const navTheme = document.getElementById('nav-theme');
  const navImage = document.getElementById('nav-image');
  window.addEventListener("scroll", () => {
    const backgroundHeight = window.pageYOffset;
    if (backgroundHeight > 200) {
      scrollHeader.classList.add("change__header");
      navLogo.classList.add("change__logo");
      navToggle.classList.add("change__toggle_btn");
      navTheme.classList.add("change__theme_btn");
      navImage.classList.add("change__nav_img")
    } else {
      scrollHeader.classList.remove("change__header");
      navLogo.classList.remove("change__logo");
      navToggle.classList.remove("change__toggle_btn");
      navTheme.classList.remove("change__theme_btn");
      navImage.classList.remove("change__nav_img");
    }
  })

  /*=============== SWIPER TESTIMONIAL ===============*/
  const swiperTestimonial = new Swiper('.testimonial__swiper', {
    loop: true,
    slidesPerView: 'auto',
    spaceBetween: 48,

    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    autoplay: {
      delay: 2000,
      disableOnIntaraction: false,
    },

  });

   /*=============== SHOW SCROLL UP ===============*/

  const navScroll = document.querySelectorAll('.nav__scroll')
  navScroll.forEach((el) =>{
    el.addEventListener('click', (e) => {
      e.preventDefault();
      const id = el.getAttribute('href').slice(1);
      const element = document.getElementById(id);
      const top = element.offsetTop;
      window.scrollTo({ top, behavior: 'smooth' });
    });
  })



  /*=============== SCROLL SECTIONS ACTIVE LINK ===============*/


  /*=============== DARK LIGHT THEME ===============*/
 /*=============== DARK LIGHT THEME ===============*/
const themeButton = document.getElementById('nav-theme')
const darkTheme = 'dark__theme'
const iconTheme = 'ri-sun-sun'


const selectedTheme = localStorage.getItem('selected-theme')
const selectedIcon = localStorage.getItem('selected-icon')


const getCurrentTheme = () => 
  document.body.classList.contains(darkTheme) ? 'dark' : 'light'
const getCurrentIcon = () => 
  themeButton.classList.contains(iconTheme) ? 'ri-moon-fill' : 'ri-sun-fill'

if (selectedTheme) {
  document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme)
  themeButton.classList[selectedIcon === 'ri-moon-fill' ? 'add' : 'remove'](iconTheme)
}

themeButton.addEventListener('click', () => {
    document.body.classList.toggle(darkTheme)
  
    themeButton.classList.toggle(iconTheme)
    localStorage.setItem('selected-theme', getCurrentTheme())
    localStorage.setItem('selected-icon', getCurrentIcon())
})

  /*=============== SCROLL REVEAL ANIMATION ===============*/
const sr = ScrollReveal({
  origin: 'top',
  distance: '60px',
  duration: 2000,
  delay: 300,
});

sr.reveal(`.home__container , .testimonial__container , .footer__container`)
sr.reveal(`.home__heading `, {delay:600})
sr.reveal(`.home__subheading `, {delay:800})
sr.reveal(`.home__btn `, {delay:1200})
sr.reveal(`.destination__card `, {interval:800})
sr.reveal(`.gallery__card `, {interval:300})
sr.reveal(`.join__data `,   {origin:'left'})
sr.reveal(`.join__image`, {origin:'right'})


