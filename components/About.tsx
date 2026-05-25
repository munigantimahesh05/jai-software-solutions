'use client'

import { FiArrowRight } from 'react-icons/fi'

export default function About() {
  return (
    <section id="about" className="py-20 bg-dark">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left - Content */}
          <div className="space-y-6">
            <div>
              <p className="text-sm text-gold uppercase tracking-widest mb-4">ABOUT JAI</p>
              <h2 className="text-4xl md:text-5xl font-bold mb-4">
                Building AI Solutions for a 
                <span className="block gradient-text">Smarter Tomorrow</span>
              </h2>
            </div>

            <p className="text-gray-400 text-lg leading-relaxed">
              At JAI Software Solutions, we combine innovation and intelligence to deliver automation solutions that empower businesses. We help organizations scale, reduce costs, and drive real results through cutting-edge AI and software development.
            </p>

            <div className="space-y-4">
              <div className="flex gap-4">
                <div className="w-8 h-8 bg-gradient-to-br from-gold to-lightGold rounded-lg flex items-center justify-center flex-shrink-0">
                  <span className="text-dark font-bold">✓</span>
                </div>
                <div>
                  <h3 className="font-bold mb-1">Expert Team</h3>
                  <p className="text-gray-400">Experienced professionals in AI, software development, and automation</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-8 h-8 bg-gradient-to-br from-gold to-lightGold rounded-lg flex items-center justify-center flex-shrink-0">
                  <span className="text-dark font-bold">✓</span>
                </div>
                <div>
                  <h3 className="font-bold mb-1">Custom Solutions</h3>
                  <p className="text-gray-400">Tailored to your specific business needs and challenges</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-8 h-8 bg-gradient-to-br from-gold to-lightGold rounded-lg flex items-center justify-center flex-shrink-0">
                  <span className="text-dark font-bold">✓</span>
                </div>
                <div>
                  <h3 className="font-bold mb-1">Proven Results</h3>
                  <p className="text-gray-400">100+ successful projects with measurable impact</p>
                </div>
              </div>
            </div>

            <button className="px-8 py-3 bg-gradient-to-r from-gold to-lightGold text-dark font-bold rounded-lg flex items-center gap-2 hover:shadow-lg hover:shadow-gold/50 transition w-fit">
              GET IN TOUCH
              <FiArrowRight />
            </button>
          </div>

          {/* Right - Features */}
          <div className="grid gap-6">
            <div className="glass-effect p-8 rounded-xl">
              <h3 className="text-xl font-bold mb-3 text-gold">Our Mission</h3>
              <p className="text-gray-400">
                To empower businesses with intelligent automation and innovative software solutions that drive growth and efficiency.
              </p>
            </div>

            <div className="glass-effect p-8 rounded-xl">
              <h3 className="text-xl font-bold mb-3 text-gold">Our Vision</h3>
              <p className="text-gray-400">
                To be the leading provider of AI and software solutions that transform how businesses operate and compete.
              </p>
            </div>

            <div className="glass-effect p-8 rounded-xl">
              <h3 className="text-xl font-bold mb-3 text-gold">Our Values</h3>
              <p className="text-gray-400">
                Innovation, Excellence, Integrity, and Customer-Centricity drive everything we do.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
