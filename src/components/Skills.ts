export function createSkills() {
  const skills = document.getElementById('skills')
  if (!skills) return

  skills.className = 'section-padding'
  skills.innerHTML = `
    <div class="container-custom">
      <div class="text-center mb-16 animate-on-scroll">
        <h2 class="text-h1 font-heading font-bold mb-6">Skills & Tools</h2>
        <div class="w-20 h-1 bg-gradient-to-r from-accent-blue to-accent-green mx-auto mb-8"></div>
        <p class="text-lg text-text-secondary max-w-2xl mx-auto">
          Technologies and tools I use to bring ideas to life
        </p>
      </div>
      
      <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div class="card animate-on-scroll">
          <div class="flex items-center mb-4">
            <div class="w-10 h-10 bg-accent-blue/20 rounded-component flex items-center justify-center mr-3">
              <svg class="w-5 h-5 text-accent-blue" fill="currentColor" viewBox="0 0 20 20">
                <path d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z"></path>
              </svg>
            </div>
            <h3 class="text-xl font-heading font-semibold">Languages</h3>
          </div>
          <div class="flex flex-wrap gap-2">
            <span class="tag">JavaScript</span>
            <span class="tag">TypeScript</span>
            <span class="tag">Python</span>
            <span class="tag">HTML5</span>
            <span class="tag">CSS3</span>
          </div>
        </div>
        
        <div class="card animate-on-scroll">
          <div class="flex items-center mb-4">
            <div class="w-10 h-10 bg-accent-green/20 rounded-component flex items-center justify-center mr-3">
              <svg class="w-5 h-5 text-accent-green" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M12.316 3.051a1 1 0 01.633 1.265l-4 12a1 1 0 11-1.898-.632l4-12a1 1 0 011.265-.633zM5.707 6.293a1 1 0 010 1.414L3.414 10l2.293 2.293a1 1 0 11-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0zm8.586 0a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 11-1.414-1.414L16.586 10l-2.293-2.293a1 1 0 010-1.414z" clip-rule="evenodd"></path>
              </svg>
            </div>
            <h3 class="text-xl font-heading font-semibold">Frontend</h3>
          </div>
          <div class="flex flex-wrap gap-2">
            <span class="tag">React</span>
            <span class="tag">Next.js</span>
            <span class="tag">Tailwind CSS</span>
            <span class="tag">Vite</span>
            <span class="tag">Framer Motion</span>
          </div>
        </div>
        
        <div class="card animate-on-scroll">
          <div class="flex items-center mb-4">
            <div class="w-10 h-10 bg-accent-magenta/20 rounded-component flex items-center justify-center mr-3">
              <svg class="w-5 h-5 text-accent-magenta" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M2 5a2 2 0 012-2h8a2 2 0 012 2v10a2 2 0 002 2H4a2 2 0 01-2-2V5zm3 1h6v4H5V6zm6 6H5v2h6v-2z" clip-rule="evenodd"></path>
                <path d="M15 7h1a2 2 0 012 2v5.5a1.5 1.5 0 01-3 0V9a1 1 0 00-1-1h-1v3a2 2 0 01-2 2H5a2 2 0 01-2-2V9a1 1 0 00-1 1v5.5a1.5 1.5 0 01-3 0V9a2 2 0 012-2h1V5a2 2 0 012-2h8a2 2 0 012 2v2z"></path>
              </svg>
            </div>
            <h3 class="text-xl font-heading font-semibold">Backend</h3>
          </div>
          <div class="flex flex-wrap gap-2">
            <span class="tag">Node.js</span>
            <span class="tag">Express</span>
            <span class="tag">REST APIs</span>
            <span class="tag">GraphQL</span>
            <span class="tag">Serverless</span>
          </div>
        </div>
        
        <div class="card animate-on-scroll">
          <div class="flex items-center mb-4">
            <div class="w-10 h-10 bg-accent-blue/20 rounded-component flex items-center justify-center mr-3">
              <svg class="w-5 h-5 text-accent-blue" fill="currentColor" viewBox="0 0 20 20">
                <path d="M3 12v3c0 1.657 3.134 3 7 3s7-1.343 7-3v-3c0 1.657-3.134 3-7 3s-7-1.343-7-3z"></path>
                <path d="M3 7v3c0 1.657 3.134 3 7 3s7-1.343 7-3V7c0 1.657-3.134 3-7 3S3 8.657 3 7z"></path>
                <path d="M17 5c0 1.657-3.134 3-7 3S3 6.657 3 5s3.134-3 7-3 7 1.343 7 3z"></path>
              </svg>
            </div>
            <h3 class="text-xl font-heading font-semibold">Databases</h3>
          </div>
          <div class="flex flex-wrap gap-2">
            <span class="tag">MongoDB</span>
            <span class="tag">PostgreSQL</span>
            <span class="tag">Firebase</span>
            <span class="tag">Supabase</span>
            <span class="tag">Redis</span>
          </div>
        </div>
        
        <div class="card animate-on-scroll">
          <div class="flex items-center mb-4">
            <div class="w-10 h-10 bg-accent-green/20 rounded-component flex items-center justify-center mr-3">
              <svg class="w-5 h-5 text-accent-green" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z" clip-rule="evenodd"></path>
              </svg>
            </div>
            <h3 class="text-xl font-heading font-semibold">DevOps & Tools</h3>
          </div>
          <div class="flex flex-wrap gap-2">
            <span class="tag">Git</span>
            <span class="tag">Docker</span>
            <span class="tag">Vercel</span>
            <span class="tag">AWS</span>
            <span class="tag">GitHub Actions</span>
          </div>
        </div>
        
        <div class="card animate-on-scroll">
          <div class="flex items-center mb-4">
            <div class="w-10 h-10 bg-accent-magenta/20 rounded-component flex items-center justify-center mr-3">
              <svg class="w-5 h-5 text-accent-magenta" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path>
              </svg>
            </div>
            <h3 class="text-xl font-heading font-semibold">Testing & Quality</h3>
          </div>
          <div class="flex flex-wrap gap-2">
            <span class="tag">Jest</span>
            <span class="tag">Playwright</span>
            <span class="tag">Cypress</span>
            <span class="tag">ESLint</span>
            <span class="tag">Prettier</span>
          </div>
        </div>
      </div>
    </div>
  `
}