export function createContact() {
  const contact = document.getElementById('contact')
  if (!contact) return

  contact.className = 'section-padding'
  contact.innerHTML = `
    <div class="container-custom">
      <div class="text-center mb-16 animate-on-scroll">
        <h2 class="text-h1 font-heading font-bold mb-6">Let's Work Together</h2>
        <div class="w-20 h-1 bg-gradient-to-r from-accent-blue to-accent-green mx-auto mb-8"></div>
        <p class="text-lg text-text-secondary max-w-2xl mx-auto">
          Have a project in mind? I'd love to hear about it and discuss how we can bring your ideas to life.
        </p>
      </div>
      
      <div class="grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
        <div class="animate-on-scroll">
          <div class="space-y-8">
            <div>
              <h3 class="text-2xl font-heading font-semibold mb-6">Get in Touch</h3>
              <p class="text-text-secondary mb-6">
                I'm always open to discussing new opportunities, interesting projects, 
                or just having a chat about web development and technology.
              </p>
            </div>
            
            <div class="space-y-6">
              <div class="flex items-center space-x-4">
                <div class="w-12 h-12 bg-accent-blue/20 rounded-component flex items-center justify-center">
                  <svg class="w-6 h-6 text-accent-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                  </svg>
                </div>
                <div>
                  <h4 class="font-semibold">Email</h4>
                  <a href="mailto:zihad.sn@writeme.com" class="text-accent-blue hover:text-accent-green transition-colors duration-200">
                    zihad.sn@writeme.com
                  </a>
                </div>
              </div>
              
              <div class="flex items-center space-x-4">
                <div class="w-12 h-12 bg-accent-green/20 rounded-component flex items-center justify-center">
                  <svg class="w-6 h-6 text-accent-green" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </div>
                <div>
                  <h4 class="font-semibold">LinkedIn</h4>
                  <a href="https://linkedin.com/in/md-zihad-291984181" target="_blank" class="text-accent-blue hover:text-accent-green transition-colors duration-200">
                    Connect with me
                  </a>
                </div>
              </div>
              
              <div class="flex items-center space-x-4">
                <div class="w-12 h-12 bg-accent-magenta/20 rounded-component flex items-center justify-center">
                  <svg class="w-6 h-6 text-accent-magenta" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                  </svg>
                </div>
                <div>
                  <h4 class="font-semibold">GitHub</h4>
                  <a href="https://github.com/zihadshariar" target="_blank" class="text-accent-blue hover:text-accent-green transition-colors duration-200">
                    View my code
                  </a>
                </div>
              </div>
            </div>
            
            <div class="pt-6">
              <h4 class="font-semibold mb-4">Response Time</h4>
              <p class="text-text-secondary text-sm">
                I typically respond to emails within 24 hours. For urgent matters, 
                feel free to reach out via LinkedIn for a faster response.
              </p>
            </div>
          </div>
        </div>
        
        <div class="animate-on-scroll">
          <form id="contact-form" class="card space-y-6">
            <div>
              <label for="name" class="block text-sm font-medium mb-2">Name *</label>
              <input 
                type="text" 
                id="name" 
                name="name" 
                required
                class="w-full px-4 py-3 bg-surface border border-surface-secondary rounded-component focus:border-accent-blue focus:ring-1 focus:ring-accent-blue transition-colors duration-200"
                placeholder="Your full name"
              />
            </div>
            
            <div>
              <label for="email" class="block text-sm font-medium mb-2">Email *</label>
              <input 
                type="email" 
                id="email" 
                name="email" 
                required
                class="w-full px-4 py-3 bg-surface border border-surface-secondary rounded-component focus:border-accent-blue focus:ring-1 focus:ring-accent-blue transition-colors duration-200"
                placeholder="your.email@example.com"
              />
            </div>
            
            <div>
              <label for="project-type" class="block text-sm font-medium mb-2">Project Type</label>
              <select 
                id="project-type" 
                name="project-type"
                class="w-full px-4 py-3 bg-surface border border-surface-secondary rounded-component focus:border-accent-blue focus:ring-1 focus:ring-accent-blue transition-colors duration-200"
              >
                <option value="">Select project type</option>
                <option value="web-development">Web Development</option>
                <option value="seo-optimization">SEO Optimization</option>
                <option value="performance-audit">Performance Audit</option>
                <option value="consulting">Consulting</option>
                <option value="other">Other</option>
              </select>
            </div>
            
            <div>
              <label for="budget" class="block text-sm font-medium mb-2">Budget Range</label>
              <select 
                id="budget" 
                name="budget"
                class="w-full px-4 py-3 bg-surface border border-surface-secondary rounded-component focus:border-accent-blue focus:ring-1 focus:ring-accent-blue transition-colors duration-200"
              >
                <option value="">Select budget range</option>
                <option value="under-5k">Under $5,000</option>
                <option value="5k-10k">$5,000 - $10,000</option>
                <option value="10k-25k">$10,000 - $25,000</option>
                <option value="25k-plus">$25,000+</option>
                <option value="discuss">Let's discuss</option>
              </select>
            </div>
            
            <div>
              <label for="message" class="block text-sm font-medium mb-2">Message *</label>
              <textarea 
                id="message" 
                name="message" 
                rows="5" 
                required
                class="w-full px-4 py-3 bg-surface border border-surface-secondary rounded-component focus:border-accent-blue focus:ring-1 focus:ring-accent-blue transition-colors duration-200 resize-vertical"
                placeholder="Tell me about your project, goals, and any specific requirements..."
              ></textarea>
            </div>
            
            <button type="submit" class="btn-primary w-full">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  `

  // Handle form submission
  const form = document.getElementById('contact-form') as HTMLFormElement
  form?.addEventListener('submit', (e) => {
    e.preventDefault()
    
    // Get form data
    const formData = new FormData(form)
    const data = Object.fromEntries(formData.entries())
    
    // Simple form validation and submission simulation
    const submitButton = form.querySelector('button[type="submit"]') as HTMLButtonElement
    const originalText = submitButton.textContent
    
    submitButton.textContent = 'Sending...'
    submitButton.disabled = true
    
    // Simulate form submission
    setTimeout(() => {
      alert('Thank you for your message! I\'ll get back to you soon.')
      form.reset()
      submitButton.textContent = originalText
      submitButton.disabled = false
    }, 1500)
  })
}