const nav = document.querySelector('#header nav')
const toggle = document.querySelectorAll('nav .toggle')

for (const element of toggle) {
  element.addEventListener('click', function () {
    nav.classList.toggle('show')
  })
}

/* fechar menu */
const links = document.querySelectorAll('nav ul li a')

for (const link of links) {
  link.addEventListener('click', function () {
    nav.classList.remove('show')
  })
}

/* ===== MUDAR O HEADER DA PAGINA QUANDO DER O SCROL ======= */
const header = document.querySelector('#header')
const navHeight = header.offsetHeight

function changeHeaderWhenScroll() {
  if (window.scriLLY >= navHeight) {
    header.classList.add('scroll')
  } else {
    header.classList.remove('scroll')
  }
}

/* testimonials slider swiper */
const swiper = new Swiper('.swiper-container', {
  slidePerView: 1,
  pagination: {
    el: '.swiper-pagination'
  },
  mousewheel: true,
  keyboard: true,
  breakpoints: {
    767: {
      slidePerView: 2,
      setWrapperSize: true
    }
  }
})

/* ===== SCROLL REVIEW mostrar elementos */
const scrollReveal = ScrollReveal({
  origin: 'top',
  distance: '30px',
  duration: 700,
  reset: true
})

scrollReveal.reveal(
  `#home .image, 
  #home .text, 
  #about .image, 
  #about .text, 
  #services header, 
  #services .card, 
  #testimonials header, 
  #testimonials .testimonials, 
  #contact .text, 
  #contact .links

`,
  { interval: 100 }
)

/* BACK TO TOP */
const backToTopButton = document.querySelector('.back-to-top')

function backToTop() {
  if (window.scrollY >= 560) {
    backToTopButton.classList.add('show-button')
  } else {
    backToTopButton.classList.remove('show-button')
  }
}

/* Menu ativo conforme a seção visivel na pagina */
const sectionn = document.querySelectorAll('section[id]')
function activateMenuAtCurrentSections() {
  const checkpoint = (window.pageYOffset = (window.innerHeight / 8) * 4)

  for (const section of sections) {
    const sectionTop = section.offsetTop
    const sectionHeight = section.offsetHeight
    const sectionId = section.getAttribute('id')

    const checkpointStart = checkpoint >= sectionTop
    const checkpointEnd = checkpoint <= sectionTop + sectionHeight

    if (checkpointStart && checkpointEnd) {
      document
        .querySelector('nav ul li a[href*=' + sectionId + ']')
        .classList.add('active')
    } else {
      document
        .querySelector('nav ul li a[href*=' + sectionId + ']')
        .classList.remove('active')
    }
  }
}

/* when scroll */
window.addEventListener('scroll', function () {
  changeHeaderWhenScroll()
  backToTop()
  activateMenuAtCurrentSection()
})
