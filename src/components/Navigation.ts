export function createNavigation() {
  const nav = document.getElementById('navigation')
  if (!nav) return

  nav.className = 'fixed top-0 left-0 right-0 z-50 transition-all duration-300'
  nav.innerHTML = `
    <div class="container-custom">
      <div class="flex items-center justify-between py-4">
        <a href="#hero" class="text-xl font-heading font-bold gradient-text hover:scale-105 transition-transform duration-200">
          Zihad Shariar
        </a>
        
        <div class="hidden md:flex items-center space-x-8">
          <a href="#about" class="nav-link">About</a>
          <a href="#skills" class="nav-link">Skills</a>
          <a href="#projects" class="nav-link">Projects</a>
          <a href="#contact" class="nav-link">Contact</a>
          <a href="/resume.pdf" target="_blank" class="btn-primary">
            Resume
          </a>
        </div>
        
        <button id="mobile-menu-toggle" class="md:hidden p-2 rounded-component hover:bg-surface transition-colors duration-200" aria-label="Toggle mobile menu">
          <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>
          </svg>
        </button>
      </div>
      
      <div id="mobile-menu" class="md:hidden hidden pb-4">
        <div class="flex flex-col space-y-4">
          <a href="#about" class="nav-link">About</a>
          <a href="#skills" class="nav-link">Skills</a>
          <a href="#projects" class="nav-link">Projects</a>
          <a href="#contact" class="nav-link">Contact</a>
          <a href="/resume.pdf" target="_blank" class="btn-primary w-fit">
            Resume
          </a>
        </div>
      </div>
    </div>
  `

  // Add navigation styles
  const style = document.createElement('style')
  style.textContent = `
    .nav-link {
      @apply text-text-secondary hover:text-accent-blue transition-colors duration-200 font-medium;
      @apply relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5;
      @apply after:bg-accent-blue after:transition-all after:duration-200;
      @apply hover:after:w-full;
    }
  `
  document.head.appendChild(style)

  // Mobile menu toggle
  const mobileMenuToggle = document.getElementById('mobile-menu-toggle')
  const mobileMenu = document.getElementById('mobile-menu')
  
  mobileMenuToggle?.addEventListener('click', () => {
    mobileMenu?.classList.toggle('hidden')
  })

  // Close mobile menu when clicking on links
  mobileMenu?.addEventListener('click', (e) => {
    if (e.target instanceof HTMLAnchorElement) {
      mobileMenu.classList.add('hidden')
    }
  })

  // Smooth scroll for navigation links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault()
      const target = document.querySelector(this.getAttribute('href') || '')
      if (target) {
        target.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        })
      }
    })
  })
}