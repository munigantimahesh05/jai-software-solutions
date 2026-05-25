'use client'

import { useState } from 'react'
import { FiMenu, FiX } from 'react-icons/fi'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="fixed top-0 w-full bg-dark/95 backdrop-blur z-50 border-b border-gold/10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-br from-gold to-lightGold rounded-lg flex items-center justify-center">
              <span className="text-dark font-bold">JAI</span>
            </div>
            <span className="text-xl font-bold gradient-text">JAI Software</span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#home" className="hover:text-gold transition">HOME</a>
            <a href="#services" className="hover:text-gold transition">SERVICES</a>
            <a href="#process" className="hover:text-gold transition">PROCESS</a>
            <a href="#about" className="hover:text-gold transition">ABOUT</a>
            <button className="px-6 py-2 border border-gold text-gold rounded-lg hover:bg-gold hover:text-dark transition">
              CONTACT
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden pb-4 space-y-2">
            <a href="#home" className="block py-2 hover:text-gold">HOME</a>
            <a href="#services" className="block py-2 hover:text-gold">SERVICES</a>
            <a href="#process" className="block py-2 hover:text-gold">PROCESS</a>
            <a href="#about" className="block py-2 hover:text-gold">ABOUT</a>
            <button className="w-full px-6 py-2 border border-gold text-gold rounded-lg hover:bg-gold hover:text-dark transition">
              CONTACT
            </button>
          </div>
        )}
      </div>
    </nav>
  )
}
