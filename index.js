// toggle icon-navbar-----------
let menuIcon = document.querySelector('#menu-icon')
let navBar = document.querySelector('.navbar')

menuIcon.addEventListener('click', () => {
  menuIcon.classList.toggle('bx-x')
  navBar.classList.toggle('active')
})

//* scroll sections---------

let sections = document.querySelectorAll('section')
// let navLinks = document.querySelectorAll(".navbar a")

function sectionfn(entries) {
  const [entry] = entries
  //   console.log(entry.target.classList)

  const selectedNav = document.querySelector(`[href = "#${entry.target.id}"]`)

  if (entry.isIntersecting == true) {
    selectedNav.classList.add('active')
    console.log(entry.target)
    entry.target.style.opacity = 1
    entry.target.style.transform = 'translateY(0)'
    // entry.target.classList.remove('hidden')
  } else {
    selectedNav.classList.remove('active')
  }
}

const sectionObserver = new IntersectionObserver(sectionfn, {
  root: null,
  threshold: 0.6,
})

sections.forEach((section) => {
  section.classList.add('hidden')
  sectionObserver.observe(section)
})
