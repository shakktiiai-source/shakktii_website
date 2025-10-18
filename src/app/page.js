'use client'
import { useState, useEffect } from 'react'
import Image from 'next/image'

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isDark, setIsDark] = useState(false)

  // Detect system dark mode preference
  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)')
    setIsDark(mediaQuery.matches)
    
    // Apply dark class to html element
    if (mediaQuery.matches) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }

    // Listen for changes in system preference
    const handleChange = (e) => {
      setIsDark(e.matches)
      if (e.matches) {
        document.documentElement.classList.add('dark')
      } else {
        document.documentElement.classList.remove('dark')
      }
    }

    mediaQuery.addEventListener('change', handleChange)
    return () => mediaQuery.removeEventListener('change', handleChange)
  }, [])

  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' })
    setIsMenuOpen(false)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-blue-900 transition-colors duration-300">
      {/* Header */}
      <header className="fixed top-0 w-full bg-white/90 dark:bg-gray-900/90 backdrop-blur-md shadow-sm z-50 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center space-x-2">
              <div className="w-13 h-13 relative">
                <Image
                  src="/file.jpg"
                  alt="Shakktii AI Logo"
                  width={100}
                  height={100}
                  className="w-full h-full object-contain border border-white rounded-full"
                />
              </div>
              <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Shakktii AI
              </span>
            </div>
            
            {/* Desktop Navigation */}
            <nav className="hidden md:flex space-x-8">
              <button onClick={() => scrollToSection('about')} className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">About</button>
              <button onClick={() => scrollToSection('products')} className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Products</button>
              <button onClick={() => scrollToSection('problems')} className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Solutions</button>
              <button onClick={() => scrollToSection('team')} className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Team</button>
              <button onClick={() => scrollToSection('contact')} className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Contact</button>
            </nav>
            
            <div className="hidden md:flex items-center space-x-4">
              <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-2 rounded-lg hover:shadow-lg transition-all duration-300">
                Partner With Us
              </button>
            </div>
            
            {/* Mobile menu button */}
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2"
            >
              <div className="w-6 h-6 flex flex-col justify-center items-center">
                <span className={`bg-gray-600 dark:bg-gray-300 block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm ${isMenuOpen ? 'rotate-45 translate-y-1' : '-translate-y-0.5'}`}></span>
                <span className={`bg-gray-600 dark:bg-gray-300 block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm my-0.5 ${isMenuOpen ? 'opacity-0' : 'opacity-100'}`}></span>
                <span className={`bg-gray-600 dark:bg-gray-300 block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm ${isMenuOpen ? '-rotate-45 -translate-y-1' : 'translate-y-0.5'}`}></span>
              </div>
            </button>
          </div>
          
          {/* Mobile Navigation */}
          <div className={`md:hidden ${isMenuOpen ? 'block' : 'hidden'} pb-4`}>
            <div className="flex flex-col space-y-3">
              <button onClick={() => scrollToSection('about')} className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors text-left">About</button>
              <button onClick={() => scrollToSection('products')} className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors text-left">Products</button>
              <button onClick={() => scrollToSection('problems')} className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors text-left">Solutions</button>
              <button onClick={() => scrollToSection('team')} className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors text-left">Team</button>
              <button onClick={() => scrollToSection('contact')} className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors text-left">Contact</button>
              <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-2 rounded-lg hover:shadow-lg transition-all duration-300 w-fit">
                Partner With Us
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="pt-32 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent">
              Unlimited Strength by AI
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
            Shakktii builds a futuristic ecosystem of AI platforms empowering education, enterprise, governance, and culture.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={() => scrollToSection('products')}
              className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1"
            >
              Explore Products
            </button>
            <button 
              onClick={() => scrollToSection('about')}
              className="border-2 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 px-8 py-4 rounded-lg text-lg font-semibold hover:border-blue-600 hover:text-blue-600 dark:hover:border-blue-400 dark:hover:text-blue-400 transition-all duration-300"
            >
              Partner With Us
            </button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-white/50 dark:bg-gray-800/50">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 dark:text-gray-100 mb-6">
            About <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Shakktii</span>
          </h2>
          <div className="max-w-4xl mx-auto mb-8">
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-4">
              Shakktii isn't just a company — it's a movement. We harness Artificial Intelligence to solve real-world challenges across education, business, and governance while shaping a smarter, stronger generation.
            </p>
            <p className="text-lg font-semibold text-gray-700 dark:text-gray-200 mb-2">
              <strong>Vision:</strong> To build AI-first platforms that are ahead of time and ahead of market.
            </p>
            <p className="text-lg text-gray-600 dark:text-gray-300">
              <strong>Values:</strong> Innovation • Simplicity • Inclusivity • Foresight
            </p>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section id="products" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 dark:text-gray-100 mb-6">
              Our <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Products</span>
            </h2>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* MockMingle */}
            <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 dark:border-gray-700">
            <img 
              src="/mockmingle_logo.png" 
              alt="MockMingle Logo"
              className="w-50 h-50 object-contain justify-center mx-auto"
            />
            <h3 className="text-2xl font-bold text-gray-800 dark:text-gray-100 mb-3 text-center">MockMingle</h3>
            <p className="text-gray-600 dark:text-gray-300 mb-4 text-center">AI-powered mock interviews, psychometric diagnostics, and skill testing — helping students and institutions bridge the employability gap.</p>
            <p className="text-center italic text-purple-500 mb-4">→ Let's Test. Let's Train. Let's Transform.</p>
            <div className="text-center">
              <span className="inline-block bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 px-3 py-1 rounded-full text-sm font-medium">Education</span>
            </div>
          </div>

            
           {/* SwiftSync */}
<div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 dark:border-gray-700">
  
    <img 
      src="/swiftsync_logo.png" 
      alt="SwiftSync Logo"
      className="w-50 h-50 object-contain justify-center mx-auto"
    />
  
  <h3 className="text-2xl font-bold text-gray-800 dark:text-gray-100 mb-3 text-center">SwiftSync</h3>
  <p className="text-gray-600 dark:text-gray-300 mb-4 text-center">Your AI co-pilot for accountants and SMEs — automating invoices, ledgers, and financial reports effortlessly.</p>
  <div className="text-center">
    <span className="inline-block bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 px-3 py-1 rounded-full text-sm font-medium">Business</span>
  </div>
</div>

{/* GoSailorr */}
<div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 dark:border-gray-700">
    <img 
      src="/sailorr_logo.png" 
      alt="GoSailorr Logo"
      className="w-50 h-50 object-contain justify-center mx-auto"
    />
  <h3 className="text-2xl font-bold text-gray-800 dark:text-gray-100 mb-3 text-center">Sailorr</h3>
  <p className="text-gray-600 dark:text-gray-300 mb-4 text-center">An all-in-one export–import platform uniting CHA, logistics, insurance, and payments — simplifying the entire trade journey.</p>
  <div className="text-center">
    <span className="inline-block bg-cyan-100 dark:bg-cyan-900 text-cyan-800 dark:text-cyan-200 px-3 py-1 rounded-full text-sm font-medium">Commerce</span>
  </div>
</div>

{/* PoliSage */}
<div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 dark:border-gray-700">
  <div className="w-32 h-32 bg-gradient-to-r from-red-400 to-orange-500 rounded-2xl flex items-center justify-center mb-6 mx-auto">
    <img 
      src="/polisage_logo.png" 
      alt="PoliSage Logo"
      className="w-24 h-24 object-contain"
    />
  </div>
  <h3 className="text-2xl font-bold text-gray-800 dark:text-gray-100 mb-3 text-center">PoliSage</h3>
  <p className="text-gray-600 dark:text-gray-300 mb-4 text-center">AI-powered political intelligence and sentiment analytics — turning data into actionable strategy for leaders.</p>
  <div className="text-center">
    <span className="inline-block bg-red-100 dark:bg-red-900 text-red-800 dark:text-red-200 px-3 py-1 rounded-full text-sm font-medium">Governance</span>
  </div>
</div>

{/* DesiQ */}
<div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 dark:border-gray-700">
  <div className="w-32 h-32 bg-gradient-to-r from-purple-400 to-pink-500 rounded-2xl flex items-center justify-center mb-6 mx-auto">
    <img 
      src="/desiq_logo.png" 
      alt="DesiQ Logo"
      className="w-24 h-24 object-contain"
    />
  </div>
  <h3 className="text-2xl font-bold text-gray-800 dark:text-gray-100 mb-3 text-center">DesiQ</h3>
  <p className="text-gray-600 dark:text-gray-300 mb-4 text-center">A decision-making and self-coaching platform for Gen Z — combining psychology, daily scenarios, and AI mentorship.</p>
  <div className="text-center">
    <span className="inline-block bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200 px-3 py-1 rounded-full text-sm font-medium">Personal Development</span>
  </div>
</div>

{/* MotoXtreme */}
<div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 dark:border-gray-700">
  
    <img 
      src="/Moto_logo.png" 
      alt="MotoXtreme Logo"
      className="w-50 h-50 object-contain justify-center mx-auto"
    />

  <h3 className="text-2xl font-bold text-gray-800 dark:text-gray-100 mb-3 text-center">MotoXtreme</h3>
  <p className="text-gray-600 dark:text-gray-300 mb-4 text-center">A gamified platform for bikers and group rides — connecting riders, tracking journeys, and claiming streets with AI and community.</p>
  <div className="text-center">
    <span className="inline-block bg-yellow-100 dark:bg-yellow-900 text-yellow-800 dark:text-yellow-200 px-3 py-1 rounded-full text-sm font-medium">Mobility</span>
  </div>
</div>

          </div>

          <p className="text-center mt-12 text-gray-600 dark:text-gray-400 text-lg">
            <strong>Future Projects:</strong> VedX • Terraride • Ojavardhan
          </p>
        </div>
      </section>

      {/* Problems & Opportunities Section */}
      <section id="problems" className="py-20 px-4 sm:px-6 lg:px-8 bg-white/50 dark:bg-gray-800/50">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 dark:text-gray-100 mb-6">
            💡 The Problems We <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Solve</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-4xl mx-auto mb-16">
            AI that bridges India's biggest gaps — in education, enterprise, trade, governance, and youth engagement — with purpose-driven innovation.
          </p>

          {/* Opportunities Grid */}
          <h3 className="text-3xl font-bold text-gray-800 dark:text-gray-100 mb-8">Opportunities</h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg">
              <div className="text-2xl mb-3">🎓</div>
              <p className="text-white font-bold">Ed-Tech & Skilling</p>
              <p className="text-sm text-gray-600 dark:text-gray-300">$5B+ India market</p>
            </div>
            <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg">
              <div className="text-2xl mb-3">🛡️</div>
              <p className="text-white font-bold">Enterprise AI</p>
              <p className="text-sm text-gray-600 dark:text-gray-300">65M+ SMEs ready for automation</p>
            </div>
            <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg">
              <div className="text-2xl mb-3">🌐</div>
              <p className="text-white font-bold">Trade-Tech</p>
              <p className="text-sm text-gray-600 dark:text-gray-300">$775B+ export–import potential</p>
            </div>
            <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg">
              <div className="text-2xl mb-3">🏍️</div>
              <p className="text-white font-bold">Mobility & Community</p>
              <p className="text-sm text-gray-600 dark:text-gray-300">Rapidly growing passion economy</p>
            </div>
          </div>
        </div>
      </section>

      {/* Technology & Impact Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 dark:text-gray-100 mb-8">
          <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Technology</span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-4xl mx-auto mb-12">
            Built on the NexGen AI stack • Automated with n8n workflows • Secure cloud & blockchain integrations • Multilingual (English, Marathi, Hindi)
          </p>

          <h3 className="text-3xl font-bold text-gray-800 dark:text-gray-100 mb-6">🌍 Impact & Alignment</h3>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-4xl mx-auto">
            Aligned with NEP 2020, NAAC, UDISE+, NIRF, and major government missions for skill, MSME, women, and tribal empowerment.
          </p>
        </div>
      </section>

      {/* Partners Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/50 dark:bg-gray-800/50">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 dark:text-gray-100 mb-8">
            🤝 <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Partners</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            Schools • Universities • MSMEs • NGOs • CSR Foundations • Government Departments
          </p>
        </div>
      </section>

      {/* Team Section */}
      <section id="team" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 dark:text-gray-100 mb-8">
            👥 <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Team</span>
          </h2>
          
          <div className="max-w-2xl mx-auto mb-12">
            <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg border border-gray-100 dark:border-gray-700">
              <h3 className="text-2xl font-bold text-gray-800 dark:text-gray-100 mb-2">Pushkar Dharap</h3><p className="text-white">Founder & CEO</p> <br/>
              <p className="text-gray-600 dark:text-gray-300 mb-4">Visionary technologist building a multi-platform AI ecosystem for Bharat.</p>
            </div>
          </div>

          <div className="max-w-md mx-auto">
            <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg border border-gray-100 dark:border-gray-700">
              <h4 className="text-xl font-semibold text-gray-800 dark:text-gray-100 mb-2">Core Team:</h4>
              <p className="text-gray-600 dark:text-gray-300">Chinmay Dharap – CTO</p>
              <p className="text-gray-500 dark:text-gray-400 text-sm mt-2">and others...</p>
            </div>
          </div>
        </div>
      </section>

      {/* Media & Call to Action Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/50 dark:bg-gray-800/50">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 dark:text-gray-100 mb-8">
            📰 Media and <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Updates</span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 mb-16">
            Insights • Events • Collaborations • Product Launches • Civic Hackathons
          </p>

          <h3 className="text-3xl font-bold text-gray-800 dark:text-gray-100 mb-8">📣 Call to Action</h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {[
              '🎓 Students & Institutions → Try MockMingle',
              '💼 Accountants & SMEs → Explore SwiftSync', 
              '🌐 Exporters & CHAs → Join Sailorr',
              '🏍️ Riders & Clubs → Discover MotoXtreme',
              '🤝 Partners & Investors → Connect With Shakktii AI'
            ].map((cta, index) => (
              <div key={index} className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                <p className="font-medium text-gray-800 dark:text-gray-200">{cta}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 dark:text-gray-100 mb-8">
            Ready to <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Transform</span>?
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
            Join us in building the future of AI-driven solutions. Whether you're a student, business, or institution, we have something for you.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1">
              Get In Touch
            </button>
            <button 
              onClick={() => scrollToSection('products')}
              className="border-2 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 px-8 py-4 rounded-lg text-lg font-semibold hover:border-blue-600 hover:text-blue-600 dark:hover:border-blue-400 dark:hover:text-blue-400 transition-all duration-300"
            >
              View Products
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 dark:bg-black text-white py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-2 mb-4 md:mb-0">
              <div className="w-20 h-20 relative">
                <Image
                  src="/file.jpg"
                  alt="Shakktii AI Logo"
                  width={100}
                  height={100}
                  className="w-full h-full object-contain border border-white rounded-full"
                />
              </div>
              <span className="text-xl font-bold">Shakktii AI</span>
            </div>
            <div className="text-center md:text-right">
              <div className="text-sm text-gray-400 dark:text-gray-500 space-y-1">
                <p>Pune, India | 📞 +91 8956668867</p>
                <p>✉️ <a href="mailto:info@shakktii.in" className="underline hover:text-white">info@shakktii.in</a></p>
                <p>🌐 <a href="https://www.shakktii.in" className="underline hover:text-white">www.shakktii.in</a></p>
                <p className="mt-2">LinkedIn • Instagram • YouTube</p>
              </div>
              <div className="text-sm text-gray-400 dark:text-gray-500 mt-4">
                © 2025 Shakktii AI. All rights reserved.
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
