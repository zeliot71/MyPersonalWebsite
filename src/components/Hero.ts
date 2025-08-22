export function createHero() {
  const hero = document.getElementById('hero')
  if (!hero) return

  hero.className = 'min-h-screen flex items-center justify-center relative overflow-hidden'
  hero.innerHTML = `
    <div class="absolute inset-0 bg-gradient-to-br from-accent-blue/5 via-transparent to-accent-green/5"></div>
    <div class="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(79,143,247,0.1),transparent_50%)]"></div>
    <div class="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(48,225,150,0.1),transparent_50%)]"></div>
    
    <div class="container-custom relative z-10">
      <div class="text-center animate-fade-in">
        <div class="mb-6">
          <span class="inline-block px-4 py-2 bg-surface border border-accent-blue/30 rounded-full text-accent-blue text-sm font-medium mb-4">
            Available for new opportunities
          </span>
        </div>
        
        <h1 class="text-hero font-heading font-bold mb-6 text-balance">
          Hi, I'm <span class="gradient-text">Zihad Shariar</span>
        </h1>
        
        <p class="text-xl md:text-2xl text-text-secondary mb-4 font-heading font-medium">
          Web Developer & SEO Enthusiast
        </p>
        
        <p class="text-lg text-text-secondary max-w-2xl mx-auto mb-8 leading-relaxed">
          I build fast, accessible, growth-focused web experiences—and share what I learn with the community.
        </p>
        
        <div class="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
          <a href="#projects" class="btn-primary">
            View Portfolio
          </a>
          <a href="#contact" class="btn-ghost">
            Get In Touch
          </a>
        </div>
        
        <div class="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-2xl mx-auto">
          <div class="text-center">
            <div class="text-2xl font-bold text-accent-green mb-1">90+</div>
            <div class="text-sm text-text-secondary">PageSpeed Score</div>
          </div>
          <div class="text-center">
            <div class="text-2xl font-bold text-accent-blue mb-1">100%</div>
            <div class="text-sm text-text-secondary">Accessibility</div>
          </div>
          <div class="text-center">
            <div class="text-2xl font-bold text-accent-magenta mb-1">5+</div>
            <div class="text-sm text-text-secondary">Years Experience</div>
          </div>
        </div>
      </div>
    </div>
    
    <div class="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
      <a href="#about" class="text-text-secondary hover:text-accent-blue transition-colors duration-200" aria-label="Scroll to about section">
        <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
        </svg>
      </a>
    </div>
  `
}