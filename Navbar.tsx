'use client'

import { FiArrowRight, FiChevronDown } from 'react-icons/fi'

export default function Hero() {
  return (
    <section id="home" className="min-h-screen pt-20 flex items-center justify-center relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-dark via-darkCard to-dark opacity-50"></div>
      
      {/* Animated background spheres */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-br from-blue/20 to-gold/20 rounded-full blur-3xl animate-pulse"></div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-6">
            <div className="space-y-2">
              <p className="text-sm text-gold uppercase tracking-widest">TRANSFORMING IDEAS INTO REALITY</p>
              <h1 className="text-5xl md:text-6xl font-bold leading-tight">
                AI & SOFTWARE
                <span className="block gradient-text">SOLUTIONS</span>
              </h1>
            </div>

            <p className="text-gray-400 text-lg leading-relaxed">
              We build intelligent systems that automate complex workflows and drive real business results. End-to-end solutions for your digital transformation.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <button className="px-8 py-3 bg-gradient-to-r from-gold to-lightGold text-dark font-bold rounded-lg flex items-center justify-center gap-2 hover:shadow-lg hover:shadow-gold/50 transition">
                EXPLORE SERVICES
                <FiArrowRight />
              </button>
              <button className="px-8 py-3 border-2 border-gold text-gold rounded-lg hover:bg-gold/10 transition">
                LEARN MORE
              </button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 pt-8 border-t border-gold/20">
              <div>
                <p className="text-2xl font-bold text-gold">5+</p>
                <p className="text-sm text-gray-400">Years Experience</p>
              </div>
              <div>
                <p className="text-2xl font-bold text-gold">100+</p>
                <p className="text-sm text-gray-400">Projects Delivered</p>
              </div>
              <div>
                <p className="text-2xl font-bold text-gold">50+</p>
                <p className="text-sm text-gray-400">Happy Clients</p>
              </div>
            </div>
          </div>

          {/* Right Side - Animated Sphere */}
          <div className="hidden md:flex items-center justify-center">
            <div className="relative w-80 h-80">
              <div className="absolute inset-0 bg-gradient-to-br from-blue/40 to-gold/40 rounded-full blur-2xl animate-pulse"></div>
              <div className="absolute inset-8 bg-gradient-to-br from-lightGold to-blue rounded-full opacity-20 animate-pulse" style={{animationDelay: '1s'}}></div>
              <div className="absolute inset-16 border-2 border-gold/30 rounded-full"></div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce">
          <p className="text-sm text-gray-400">SCROLL TO EXPLORE</p>
          <FiChevronDown className="text-gold" size={20} />
        </div>
      </div>
    </section>
  )
}
