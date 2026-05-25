'use client'

import { FiMail, FiPhone, FiMapPin, FiFacebook, FiTwitter, FiLinkedin, FiInstagram } from 'react-icons/fi'

export default function Footer() {
  return (
    <footer className="bg-darkCard border-t border-gold/10">
      {/* Main Footer */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          {/* About */}
          <div>
            <div className="flex items-center space-x-2 mb-6">
              <div className="w-8 h-8 bg-gradient-to-br from-gold to-lightGold rounded-lg flex items-center justify-center">
                <span className="text-dark font-bold text-sm">JAI</span>
              </div>
              <span className="font-bold">JAI Software</span>
            </div>
            <p className="text-gray-400 text-sm">
              Delivering innovative AI and software solutions that transform businesses.
            </p>
            <div className="flex gap-4 mt-6">
              <a href="#" className="w-10 h-10 bg-gold/10 hover:bg-gold/20 rounded-lg flex items-center justify-center text-gold transition">
                <FiFacebook size={18} />
              </a>
              <a href="#" className="w-10 h-10 bg-gold/10 hover:bg-gold/20 rounded-lg flex items-center justify-center text-gold transition">
                <FiTwitter size={18} />
              </a>
              <a href="#" className="w-10 h-10 bg-gold/10 hover:bg-gold/20 rounded-lg flex items-center justify-center text-gold transition">
                <FiLinkedin size={18} />
              </a>
              <a href="#" className="w-10 h-10 bg-gold/10 hover:bg-gold/20 rounded-lg flex items-center justify-center text-gold transition">
                <FiInstagram size={18} />
              </a>
            </div>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-bold mb-6">COMPANY</h3>
            <ul className="space-y-3 text-gray-400 text-sm">
              <li><a href="#" className="hover:text-gold transition">About Us</a></li>
              <li><a href="#" className="hover:text-gold transition">Services</a></li>
              <li><a href="#" className="hover:text-gold transition">Portfolio</a></li>
              <li><a href="#" className="hover:text-gold transition">Blog</a></li>
              <li><a href="#" className="hover:text-gold transition">Careers</a></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-bold mb-6">SERVICES</h3>
            <ul className="space-y-3 text-gray-400 text-sm">
              <li><a href="#" className="hover:text-gold transition">AI Automation</a></li>
              <li><a href="#" className="hover:text-gold transition">Custom Solutions</a></li>
              <li><a href="#" className="hover:text-gold transition">Process Optimization</a></li>
              <li><a href="#" className="hover:text-gold transition">Consulting</a></li>
              <li><a href="#" className="hover:text-gold transition">Support</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-bold mb-6">CONTACT</h3>
            <div className="space-y-4 text-gray-400 text-sm">
              <div className="flex gap-3">
                <FiMail className="text-gold flex-shrink-0 mt-1" />
                <div>
                  <p className="font-semibold text-white">Email</p>
                  <a href="mailto:info@jaisoftware.com" className="hover:text-gold">
                    info@jaisoftware.com
                  </a>
                </div>
              </div>
              <div className="flex gap-3">
                <FiPhone className="text-gold flex-shrink-0 mt-1" />
                <div>
                  <p className="font-semibold text-white">Phone</p>
                  <a href="tel:+918765432100" className="hover:text-gold">
                    +91 8765432100
                  </a>
                </div>
              </div>
              <div className="flex gap-3">
                <FiMapPin className="text-gold flex-shrink-0 mt-1" />
                <div>
                  <p className="font-semibold text-white">Location</p>
                  <p>Bangalore, India</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gold/10 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-gray-400 text-sm">
            <p>&copy; 2024 JAI Software Solutions. All rights reserved.</p>
            <div className="flex gap-6">
              <a href="#" className="hover:text-gold transition">Privacy Policy</a>
              <a href="#" className="hover:text-gold transition">Terms of Service</a>
              <a href="#" className="hover:text-gold transition">Sitemap</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
