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
                  src="/file.jpg" // or "/logo.png" - match your file name
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
              <button onClick={() => scrollToSection('team')} className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Team</button>
              <button onClick={() => scrollToSection('mission')} className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Mission</button>
              <button onClick={() => scrollToSection('contact')} className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Contact</button>
            </nav>
            
            <div className="hidden md:flex items-center space-x-4">
              <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-2 rounded-lg hover:shadow-lg transition-all duration-300">
                Get Started
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
              <button onClick={() => scrollToSection('team')} className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors text-left">Team</button>
              <button onClick={() => scrollToSection('mission')} className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors text-left">Mission</button>
              <button onClick={() => scrollToSection('contact')} className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors text-left">Contact</button>
              <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-2 rounded-lg hover:shadow-lg transition-all duration-300 w-fit">
                Get Started
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
        <br></br>
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent">
              Empowering Society
            </span>
            <br />
            <span className="text-gray-800 dark:text-gray-100">Through AI Innovation</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
            We are building a multi-product ecosystem of AI-driven solutions that empower education, business, governance, and commerce.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={() => scrollToSection('products')}
              className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1"
            >
              Explore Our Products
            </button>
            <button 
              onClick={() => scrollToSection('about')}
              className="border-2 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 px-8 py-4 rounded-lg text-lg font-semibold hover:border-blue-600 hover:text-blue-600 dark:hover:border-blue-400 dark:hover:text-blue-400 transition-all duration-300"
            >
              Learn More
            </button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 px-4 sm:px-6 lg:px-8 bg-white/50 dark:bg-gray-800/50"><br></br>
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 dark:text-gray-100 mb-6">
              Multi-Product <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">AI Ecosystem</span>
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              From students preparing for interviews to global exporters scaling operations, our products help people make smarter decisions, bridge skill gaps, and unlock growth.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-2xl">🎯</span>
              </div>
              <h3 className="text-xl font-semibold mb-2 text-gray-800 dark:text-gray-100">Democratic AI</h3>
              <p className="text-gray-600 dark:text-gray-300">Making AI accessible and beneficial for everyone, regardless of location or background.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-2xl">🌐</span>
              </div>
              <h3 className="text-xl font-semibold mb-2 text-gray-800 dark:text-gray-100">Multi-Industry Impact</h3>
              <p className="text-gray-600 dark:text-gray-300">Spanning education, business, governance, and commerce with tailored solutions.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-indigo-500 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-2xl">🚀</span>
              </div>
              <h3 className="text-xl font-semibold mb-2 text-gray-800 dark:text-gray-100">Behavioral Science</h3>
              <p className="text-gray-600 dark:text-gray-300">Blending AI with behavioral science and decision intelligence for better outcomes.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section id="products" className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 dark:text-gray-100 mb-6">
              Our <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Product Ventures</span>
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Five innovative ventures driving transformation across different sectors
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* MockMingle */}
            <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 dark:border-gray-700">
              <div className="w-16 h-16 bg-gradient-to-r from-green-400 to-blue-500 rounded-2xl flex items-center justify-center mb-6">
                <span className="text-3xl">🎓</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-800 dark:text-gray-100 mb-3">MockMingle</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">AI-powered Skill Assessment & LMS platform for students, institutions, and enterprises.</p>
              <span className="inline-block bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 px-3 py-1 rounded-full text-sm font-medium">Education</span>
            </div>
            
            {/* SwiftSync */}
            <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 dark:border-gray-700">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-400 to-indigo-500 rounded-2xl flex items-center justify-center mb-6">
                <span className="text-3xl">💼</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-800 dark:text-gray-100 mb-3">SwiftSync</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">Finance/ERP automation for accountants & SMEs.</p>
              <span className="inline-block bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 px-3 py-1 rounded-full text-sm font-medium">Business</span>
            </div>
            
            {/* Sailorr */}
            <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 dark:border-gray-700">
              <div className="w-16 h-16 bg-gradient-to-r from-cyan-400 to-teal-500 rounded-2xl flex items-center justify-center mb-6">
                <span className="text-3xl">🚢</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-800 dark:text-gray-100 mb-3">Sailorr</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">Digital trade-tech for exporters, CHAs, logistics, and freight.</p>
              <span className="inline-block bg-cyan-100 dark:bg-cyan-900 text-cyan-800 dark:text-cyan-200 px-3 py-1 rounded-full text-sm font-medium">Commerce</span>
            </div>
            
            {/* DesiQ */}
            <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 dark:border-gray-700">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-400 to-pink-500 rounded-2xl flex items-center justify-center mb-6">
                <span className="text-3xl">🧠</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-800 dark:text-gray-100 mb-3">DesiQ</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">AI-driven decision-making & self-coaching for Gen Z.</p>
              <span className="inline-block bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200 px-3 py-1 rounded-full text-sm font-medium">Personal Development</span>
            </div>
            
            {/* PoliSage */}
            <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 dark:border-gray-700 md:col-span-2 lg:col-span-1">
              <div className="w-16 h-16 bg-gradient-to-r from-red-400 to-orange-500 rounded-2xl flex items-center justify-center mb-6">
                <span className="text-3xl">🏛️</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-800 dark:text-gray-100 mb-3">PoliSage</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">Political intelligence & sentiment analysis and a AI first PoliTech.</p>
              <span className="inline-block bg-red-100 dark:bg-red-900 text-red-800 dark:text-red-200 px-3 py-1 rounded-full text-sm font-medium">Governance</span>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership Team Section */}
      <section id="team" className="py-16 px-4 sm:px-6 lg:px-8 bg-white/50 dark:bg-gray-800/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 dark:text-gray-100 mb-6">
              Leadership <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Team</span>
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Meet the visionaries driving AI innovation across multiple verticals
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* CEO/Founder */}
            <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 dark:border-gray-700 text-center">
              <div className="w-24 h-24 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-white text-3xl font-bold">CEO</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-800 dark:text-gray-100 mb-2">Founder & CEO</h3>
              <p className="text-blue-600 dark:text-blue-400 font-semibold mb-3">Chief Executive Officer</p>
              <p className="text-gray-600 dark:text-gray-300 mb-4">Visionary leader driving the multi-product AI ecosystem strategy. Expert in scaling tech ventures across diverse industries.</p>
              <div className="flex justify-center space-x-3">
                <div className="w-8 h-8 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center">
                  <span className="text-blue-600 dark:text-blue-400 text-sm">💼</span>
                </div>
                <div className="w-8 h-8 bg-purple-100 dark:bg-purple-900 rounded-full flex items-center justify-center">
                  <span className="text-purple-600 dark:text-purple-400 text-sm">🔗</span>
                </div>
              </div>
            </div>

            {/* CTO */}
            <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 dark:border-gray-700 text-center">
              <div className="w-24 h-24 bg-gradient-to-r from-green-500 to-teal-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-white text-3xl font-bold">CTO</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-800 dark:text-gray-100 mb-2">Chief Technology Officer</h3>
              <p className="text-green-600 dark:text-green-400 font-semibold mb-3">Technology & AI Innovation</p>
              <p className="text-gray-600 dark:text-gray-300 mb-4">Leading AI development across all ventures. Specializes in machine learning, behavioral science integration, and scalable tech architecture.</p>
              <div className="flex justify-center space-x-3">
                <div className="w-8 h-8 bg-green-100 dark:bg-green-900 rounded-full flex items-center justify-center">
                  <span className="text-green-600 dark:text-green-400 text-sm">⚡</span>
                </div>
                <div className="w-8 h-8 bg-teal-100 dark:bg-teal-900 rounded-full flex items-center justify-center">
                  <span className="text-teal-600 dark:text-teal-400 text-sm">🔗</span>
                </div>
              </div>
            </div>

            {/* Head of Product */}
            <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 dark:border-gray-700 text-center">
              <div className="w-24 h-24 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-white text-3xl font-bold">HPD</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-800 dark:text-gray-100 mb-2">Head of Product</h3>
              <p className="text-purple-600 dark:text-purple-400 font-semibold mb-3">Product Strategy & Design</p>
              <p className="text-gray-600 dark:text-gray-300 mb-4">Orchestrating product development across MockMingle, SwiftSync, Sailorr, DesiQ, and PoliSage with user-centric design principles.</p>
              <div className="flex justify-center space-x-3">
                <div className="w-8 h-8 bg-purple-100 dark:bg-purple-900 rounded-full flex items-center justify-center">
                  <span className="text-purple-600 dark:text-purple-400 text-sm">🎨</span>
                </div>
                <div className="w-8 h-8 bg-pink-100 dark:bg-pink-900 rounded-full flex items-center justify-center">
                  <span className="text-pink-600 dark:text-pink-400 text-sm">🔗</span>
                </div>
              </div>
            </div>

            {/* Head of Business Development */}
            <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 dark:border-gray-700 text-center">
              <div className="w-24 h-24 bg-gradient-to-r from-orange-500 to-red-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-white text-3xl font-bold">BD</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-800 dark:text-gray-100 mb-2">Head of Business Development</h3>
              <p className="text-orange-600 dark:text-orange-400 font-semibold mb-3">Growth & Partnerships</p>
              <p className="text-gray-600 dark:text-gray-300 mb-4">Building strategic partnerships across education, enterprise, government, and commerce sectors to scale our AI solutions globally.</p>
              <div className="flex justify-center space-x-3">
                <div className="w-8 h-8 bg-orange-100 dark:bg-orange-900 rounded-full flex items-center justify-center">
                  <span className="text-orange-600 dark:text-orange-400 text-sm">🤝</span>
                </div>
                <div className="w-8 h-8 bg-red-100 dark:bg-red-900 rounded-full flex items-center justify-center">
                  <span className="text-red-600 dark:text-red-400 text-sm">🔗</span>
                </div>
              </div>
            </div>

            {/* Head of Data Science */}
            <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 dark:border-gray-700 text-center">
              <div className="w-24 h-24 bg-gradient-to-r from-indigo-500 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-white text-3xl font-bold">DS</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-800 dark:text-gray-100 mb-2">Head of Data Science</h3>
              <p className="text-indigo-600 dark:text-indigo-400 font-semibold mb-3">AI Research & Analytics</p>
              <p className="text-gray-600 dark:text-gray-300 mb-4">Leading research in decision intelligence, behavioral analytics, and predictive modeling to power our AI-driven solutions.</p>
              <div className="flex justify-center space-x-3">
                <div className="w-8 h-8 bg-indigo-100 dark:bg-indigo-900 rounded-full flex items-center justify-center">
                  <span className="text-indigo-600 dark:text-indigo-400 text-sm">📊</span>
                </div>
                <div className="w-8 h-8 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center">
                  <span className="text-blue-600 dark:text-blue-400 text-sm">🔗</span>
                </div>
              </div>
            </div>

            {/* Head of Operations */}
            <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 dark:border-gray-700 text-center">
              <div className="w-24 h-24 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-white text-3xl font-bold">OPS</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-800 dark:text-gray-100 mb-2">Head of Operations</h3>
              <p className="text-cyan-600 dark:text-cyan-400 font-semibold mb-3">Operations & Scaling</p>
              <p className="text-gray-600 dark:text-gray-300 mb-4">Ensuring seamless operations across all ventures, from student assessments to enterprise automation and policy analysis platforms.</p>
              <div className="flex justify-center space-x-3">
                <div className="w-8 h-8 bg-cyan-100 dark:bg-cyan-900 rounded-full flex items-center justify-center">
                  <span className="text-cyan-600 dark:text-cyan-400 text-sm">⚙️</span>
                </div>
                <div className="w-8 h-8 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center">
                  <span className="text-blue-600 dark:text-blue-400 text-sm">🔗</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section id="mission" className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-50 to-purple-50 dark:from-gray-800 dark:to-blue-900">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 dark:text-gray-100 mb-8">
            Our <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Mission</span>
          </h2>
          <div className="max-w-4xl mx-auto">
            <p className="text-xl md:text-2xl text-gray-700 dark:text-gray-200 leading-relaxed mb-8">
              Shakktii AI isn't just a company—it's a collective of products and ideas aimed at upgrading society with AI. By blending behavioral science, decision intelligence, and automation, we're proving that AI can be both democratic and transformational.
            </p>
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
              Helping a student in a small town, an MSME in Pune, or a policymaker in Delhi alike.
            </p>
            <div className="grid md:grid-cols-3 gap-8 mt-12">
              <div className="text-center">
                <div className="text-4xl mb-4">🎯</div>
                <h3 className="text-xl font-semibold mb-2 text-gray-800 dark:text-gray-100">Democratic AI</h3>
                <p className="text-gray-600 dark:text-gray-300">Accessible to everyone, everywhere</p>
              </div>
              <div className="text-center">
                <div className="text-4xl mb-4">🔬</div>
                <h3 className="text-xl font-semibold mb-2 text-gray-800 dark:text-gray-100">Science-Driven</h3>
                <p className="text-gray-600 dark:text-gray-300">Behavioral science meets AI</p>
              </div>
              <div className="text-center">
                <div className="text-4xl mb-4">🌍</div>
                <h3 className="text-xl font-semibold mb-2 text-gray-800 dark:text-gray-100">Transformational</h3>
                <p className="text-gray-600 dark:text-gray-300">Upgrading society through technology</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 px-4 sm:px-6 lg:px-8 bg-white dark:bg-gray-900">
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
          <div className="flex justify-center space-x-6 text-gray-500 dark:text-gray-400">
            <span>📧 hello@shakktii.ai</span>
            <span>📍 India</span>
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
                  src="/file.jpg" // or "/logo.png"
                  alt="Shakktii AI Logo"
                  width={100}
                  height={100}
                  className="w-full h-full object-contain border border-white rounded-full"
                />
              </div>
              <span className="text-xl font-bold">Shakktii AI</span>
            </div>
            <div className="text-sm text-gray-400 dark:text-gray-500">
              © 2025 Shakktii AI. All rights reserved.
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
