import { createNavigation } from './components/Navigation'
import { createHero } from './components/Hero'
import { createAbout } from './components/About'
import { createSkills } from './components/Skills'
import { createProjects } from './components/Projects'
import { createContact } from './components/Contact'
import { createFooter } from './components/Footer'

export function initializeApp() {
  const app = document.getElementById('app')
  if (!app) return

  // Create main structure
  app.innerHTML = `
    <nav id="navigation"></nav>
    <main id="main-content">
      <section id="hero"></section>
      <section id="about"></section>
      <section id="skills"></section>
      <section id="projects"></section>
      <section id="contact"></section>
    </main>
    <footer id="footer"></footer>
  `

  // Initialize components
  createNavigation()
  createHero()
  createAbout()
  createSkills()
  createProjects()
  createContact()
  createFooter()

  // Initialize scroll effects
  initializeScrollEffects()
  
  // Initialize intersection observer for animations
  initializeAnimations()
}

function initializeScrollEffects() {
  const nav = document.getElementById('navigation')
  if (!nav) return

  let lastScrollY = window.scrollY

  window.addEventListener('scroll', () => {
    const currentScrollY = window.scrollY
    
    // Add/remove backdrop blur based on scroll position
    if (currentScrollY > 50) {
      nav.classList.add('backdrop-blur-md', 'bg-background/80', 'border-b', 'border-surface-secondary')
    } else {
      nav.classList.remove('backdrop-blur-md', 'bg-background/80', 'border-b', 'border-surface-secondary')
    }

    lastScrollY = currentScrollY
  })
}

function initializeAnimations() {
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  }

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('animate-slide-up')
        observer.unobserve(entry.target)
      }
    })
  }, observerOptions)

  // Observe elements with animation class
  document.querySelectorAll('.animate-on-scroll').forEach(el => {
    observer.observe(el)
  })
}