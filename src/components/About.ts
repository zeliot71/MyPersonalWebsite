export function createAbout() {
  const about = document.getElementById('about')
  if (!about) return

  about.className = 'section-padding bg-surface/30'
  about.innerHTML = `
    <div class="container-custom">
      <div class="max-w-4xl mx-auto">
        <div class="text-center mb-16 animate-on-scroll">
          <h2 class="text-h1 font-heading font-bold mb-6">About Me</h2>
          <div class="w-20 h-1 bg-gradient-to-r from-accent-blue to-accent-green mx-auto mb-8"></div>
        </div>
        
        <div class="grid lg:grid-cols-2 gap-12 items-center">
          <div class="animate-on-scroll">
            <div class="relative">
              <div class="w-80 h-80 mx-auto relative">
                <div class="absolute inset-0 bg-gradient-to-br from-accent-blue/20 to-accent-green/20 rounded-component transform rotate-6"></div>
                <div class="absolute inset-0 bg-surface border border-accent-blue/30 rounded-component overflow-hidden">
                  <img 
                    src="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=400" 
                    alt="Zihad Shariar - Web Developer"
                    class="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>
              </div>
            </div>
          </div>
          
          <div class="animate-on-scroll">
            <div class="space-y-6">
              <p class="text-lg text-text-secondary leading-relaxed">
                I'm a passionate web developer with a strong focus on creating high-performance, 
                accessible web experiences that drive real business results. My expertise spans 
                modern frontend technologies, SEO optimization, and full-stack development.
              </p>
              
              <p class="text-lg text-text-secondary leading-relaxed">
                When I'm not coding, you'll find me contributing to open-source projects, 
                mentoring fellow developers, or sharing insights through technical blog posts. 
                I believe in the power of community and continuous learning.
              </p>
              
              <div class="grid grid-cols-2 gap-6 py-6">
                <div>
                  <h3 class="font-heading font-semibold text-accent-blue mb-2">Focus Areas</h3>
                  <ul class="space-y-2 text-text-secondary">
                    <li>• Performance Optimization</li>
                    <li>• SEO & Core Web Vitals</li>
                    <li>• Accessibility (WCAG)</li>
                    <li>• Modern Web Standards</li>
                  </ul>
                </div>
                <div>
                  <h3 class="font-heading font-semibold text-accent-green mb-2">Interests</h3>
                  <ul class="space-y-2 text-text-secondary">
                    <li>• Open Source</li>
                    <li>• Community Building</li>
                    <li>• Technical Writing</li>
                    <li>• Mentoring</li>
                  </ul>
                </div>
              </div>
              
              <div class="flex flex-wrap gap-4">
                <a href="/resume.pdf" target="_blank" class="btn-primary">
                  Download Resume
                </a>
                <a href="https://linkedin.com/in/md-zihad-291984181" target="_blank" class="btn-ghost">
                  LinkedIn Profile
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  `
}