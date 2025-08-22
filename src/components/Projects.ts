export function createProjects() {
  const projects = document.getElementById('projects')
  if (!projects) return

  projects.className = 'section-padding bg-surface/30'
  projects.innerHTML = `
    <div class="container-custom">
      <div class="text-center mb-16 animate-on-scroll">
        <h2 class="text-h1 font-heading font-bold mb-6">Featured Projects</h2>
        <div class="w-20 h-1 bg-gradient-to-r from-accent-blue to-accent-green mx-auto mb-8"></div>
        <p class="text-lg text-text-secondary max-w-2xl mx-auto">
          A showcase of my recent work, focusing on performance, accessibility, and user experience
        </p>
      </div>
      
      <div class="mb-8 animate-on-scroll">
        <div class="flex flex-wrap justify-center gap-4">
          <button class="filter-btn active" data-filter="all">All Projects</button>
          <button class="filter-btn" data-filter="web">Web Apps</button>
          <button class="filter-btn" data-filter="opensource">Open Source</button>
          <button class="filter-btn" data-filter="tools">Tools</button>
        </div>
      </div>
      
      <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8" id="projects-grid">
        <div class="project-card animate-on-scroll" data-category="web">
          <div class="card group cursor-pointer h-full">
            <div class="relative overflow-hidden rounded-component mb-4">
              <img 
                src="https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=600" 
                alt="E-commerce Platform"
                class="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                loading="lazy"
              />
              <div class="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div class="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div class="flex gap-2">
                  <a href="#" class="btn-primary text-sm py-2 px-4">Live Demo</a>
                  <a href="#" class="btn-ghost text-sm py-2 px-4">Code</a>
                </div>
              </div>
            </div>
            <div class="space-y-3">
              <h3 class="text-xl font-heading font-semibold group-hover:text-accent-blue transition-colors duration-200">
                E-commerce Platform
              </h3>
              <p class="text-text-secondary text-sm">
                Full-stack e-commerce solution with advanced filtering, payment integration, and admin dashboard
              </p>
              <div class="flex flex-wrap gap-2">
                <span class="tag text-xs">React</span>
                <span class="tag text-xs">Node.js</span>
                <span class="tag text-xs">MongoDB</span>
                <span class="tag text-xs">Stripe</span>
              </div>
              <div class="flex items-center justify-between text-sm text-text-secondary">
                <span>PageSpeed: 94</span>
                <span>Accessibility: 100</span>
              </div>
            </div>
          </div>
        </div>
        
        <div class="project-card animate-on-scroll" data-category="tools">
          <div class="card group cursor-pointer h-full">
            <div class="relative overflow-hidden rounded-component mb-4">
              <img 
                src="https://images.pexels.com/photos/574071/pexels-photo-574071.jpeg?auto=compress&cs=tinysrgb&w=600" 
                alt="SEO Analyzer Tool"
                class="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                loading="lazy"
              />
              <div class="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div class="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div class="flex gap-2">
                  <a href="#" class="btn-primary text-sm py-2 px-4">Live Demo</a>
                  <a href="#" class="btn-ghost text-sm py-2 px-4">Code</a>
                </div>
              </div>
            </div>
            <div class="space-y-3">
              <h3 class="text-xl font-heading font-semibold group-hover:text-accent-blue transition-colors duration-200">
                SEO Analyzer Tool
              </h3>
              <p class="text-text-secondary text-sm">
                Comprehensive SEO analysis tool with Core Web Vitals monitoring and actionable recommendations
              </p>
              <div class="flex flex-wrap gap-2">
                <span class="tag text-xs">Next.js</span>
                <span class="tag text-xs">TypeScript</span>
                <span class="tag text-xs">Lighthouse API</span>
                <span class="tag text-xs">Chart.js</span>
              </div>
              <div class="flex items-center justify-between text-sm text-text-secondary">
                <span>Users: 1.2k+</span>
                <span>Performance: 98</span>
              </div>
            </div>
          </div>
        </div>
        
        <div class="project-card animate-on-scroll" data-category="opensource">
          <div class="card group cursor-pointer h-full">
            <div class="relative overflow-hidden rounded-component mb-4">
              <img 
                src="https://images.pexels.com/photos/1181263/pexels-photo-1181263.jpeg?auto=compress&cs=tinysrgb&w=600" 
                alt="React Component Library"
                class="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                loading="lazy"
              />
              <div class="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div class="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div class="flex gap-2">
                  <a href="#" class="btn-primary text-sm py-2 px-4">Documentation</a>
                  <a href="#" class="btn-ghost text-sm py-2 px-4">GitHub</a>
                </div>
              </div>
            </div>
            <div class="space-y-3">
              <h3 class="text-xl font-heading font-semibold group-hover:text-accent-blue transition-colors duration-200">
                React Component Library
              </h3>
              <p class="text-text-secondary text-sm">
                Accessible, customizable React components with TypeScript support and comprehensive documentation
              </p>
              <div class="flex flex-wrap gap-2">
                <span class="tag text-xs">React</span>
                <span class="tag text-xs">TypeScript</span>
                <span class="tag text-xs">Storybook</span>
                <span class="tag text-xs">Jest</span>
              </div>
              <div class="flex items-center justify-between text-sm text-text-secondary">
                <span>⭐ 245 stars</span>
                <span>📦 2.1k downloads</span>
              </div>
            </div>
          </div>
        </div>
        
        <div class="project-card animate-on-scroll" data-category="web">
          <div class="card group cursor-pointer h-full">
            <div class="relative overflow-hidden rounded-component mb-4">
              <img 
                src="https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=600" 
                alt="Task Management App"
                class="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                loading="lazy"
              />
              <div class="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div class="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div class="flex gap-2">
                  <a href="#" class="btn-primary text-sm py-2 px-4">Live Demo</a>
                  <a href="#" class="btn-ghost text-sm py-2 px-4">Code</a>
                </div>
              </div>
            </div>
            <div class="space-y-3">
              <h3 class="text-xl font-heading font-semibold group-hover:text-accent-blue transition-colors duration-200">
                Task Management App
              </h3>
              <p class="text-text-secondary text-sm">
                Collaborative task management with real-time updates, drag-and-drop interface, and team analytics
              </p>
              <div class="flex flex-wrap gap-2">
                <span class="tag text-xs">React</span>
                <span class="tag text-xs">Socket.io</span>
                <span class="tag text-xs">PostgreSQL</span>
                <span class="tag text-xs">Redis</span>
              </div>
              <div class="flex items-center justify-between text-sm text-text-secondary">
                <span>Teams: 50+</span>
                <span>Uptime: 99.9%</span>
              </div>
            </div>
          </div>
        </div>
        
        <div class="project-card animate-on-scroll" data-category="tools">
          <div class="card group cursor-pointer h-full">
            <div class="relative overflow-hidden rounded-component mb-4">
              <img 
                src="https://images.pexels.com/photos/270348/pexels-photo-270348.jpeg?auto=compress&cs=tinysrgb&w=600" 
                alt="Performance Monitor"
                class="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                loading="lazy"
              />
              <div class="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div class="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div class="flex gap-2">
                  <a href="#" class="btn-primary text-sm py-2 px-4">Live Demo</a>
                  <a href="#" class="btn-ghost text-sm py-2 px-4">Code</a>
                </div>
              </div>
            </div>
            <div class="space-y-3">
              <h3 class="text-xl font-heading font-semibold group-hover:text-accent-blue transition-colors duration-200">
                Performance Monitor
              </h3>
              <p class="text-text-secondary text-sm">
                Real-time web performance monitoring with alerts, historical data, and optimization suggestions
              </p>
              <div class="flex flex-wrap gap-2">
                <span class="tag text-xs">Node.js</span>
                <span class="tag text-xs">Express</span>
                <span class="tag text-xs">InfluxDB</span>
                <span class="tag text-xs">Grafana</span>
              </div>
              <div class="flex items-center justify-between text-sm text-text-secondary">
                <span>Sites: 100+</span>
                <span>Alerts: 24/7</span>
              </div>
            </div>
          </div>
        </div>
        
        <div class="project-card animate-on-scroll" data-category="opensource">
          <div class="card group cursor-pointer h-full">
            <div class="relative overflow-hidden rounded-component mb-4">
              <img 
                src="https://images.pexels.com/photos/1181298/pexels-photo-1181298.jpeg?auto=compress&cs=tinysrgb&w=600" 
                alt="Developer Tools Extension"
                class="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                loading="lazy"
              />
              <div class="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div class="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div class="flex gap-2">
                  <a href="#" class="btn-primary text-sm py-2 px-4">Chrome Store</a>
                  <a href="#" class="btn-ghost text-sm py-2 px-4">GitHub</a>
                </div>
              </div>
            </div>
            <div class="space-y-3">
              <h3 class="text-xl font-heading font-semibold group-hover:text-accent-blue transition-colors duration-200">
                Developer Tools Extension
              </h3>
              <p class="text-text-secondary text-sm">
                Browser extension for developers with code snippets, color picker, and performance insights
              </p>
              <div class="flex flex-wrap gap-2">
                <span class="tag text-xs">JavaScript</span>
                <span class="tag text-xs">Chrome APIs</span>
                <span class="tag text-xs">Webpack</span>
                <span class="tag text-xs">CSS</span>
              </div>
              <div class="flex items-center justify-between text-sm text-text-secondary">
                <span>⭐ 4.8/5 rating</span>
                <span>👥 5k+ users</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div class="text-center mt-12 animate-on-scroll">
        <a href="https://github.com/zihadshariar" target="_blank" class="btn-ghost">
          View All Projects on GitHub
        </a>
      </div>
    </div>
  `

  // Add filter functionality
  const filterButtons = document.querySelectorAll('.filter-btn')
  const projectCards = document.querySelectorAll('.project-card')

  // Add filter button styles
  const style = document.createElement('style')
  style.textContent = `
    .filter-btn {
      @apply px-4 py-2 rounded-component border border-surface-secondary text-text-secondary;
      @apply hover:border-accent-blue hover:text-accent-blue transition-all duration-200;
    }
    .filter-btn.active {
      @apply bg-accent-blue text-white border-accent-blue shadow-neon-blue/30;
    }
  `
  document.head.appendChild(style)

  filterButtons.forEach(button => {
    button.addEventListener('click', () => {
      const filter = button.getAttribute('data-filter')
      
      // Update active button
      filterButtons.forEach(btn => btn.classList.remove('active'))
      button.classList.add('active')
      
      // Filter projects
      projectCards.forEach(card => {
        const category = card.getAttribute('data-category')
        if (filter === 'all' || category === filter) {
          card.style.display = 'block'
          card.classList.add('animate-fade-in')
        } else {
          card.style.display = 'none'
        }
      })
    })
  })
}