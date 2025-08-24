import '../style.css'
import { initializeApp } from './app'

// Initialize the application
document.addEventListener('DOMContentLoaded', () => {
  initializeApp()
})

// Handle reduced motion preferences
const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)')

if (prefersReducedMotion.matches) {
  document.documentElement.style.setProperty('--animation-duration', '0.01ms')
}