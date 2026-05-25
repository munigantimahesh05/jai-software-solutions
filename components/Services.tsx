'use client'

import { FiArrowRight } from 'react-icons/fi'
import { FiZap, FiCpu, FiTrendingUp, FiLock } from 'react-icons/fi'

export default function Services() {
  const services = [
    {
      icon: FiZap,
      title: 'AI Automation',
      description: 'Automate workflows, integrate apps, and eliminate repetitive manual tasks',
    },
    {
      icon: FiCpu,
      title: 'Custom AI Solutions',
      description: 'Build intelligent chatbots to improve customer experience and support',
    },
    {
      icon: FiTrendingUp,
      title: 'Process Optimization',
      description: 'Analyze and optimize your processes with AI-driven insights',
    },
    {
      icon: FiLock,
      title: 'Enterprise Solutions',
      description: 'Scalable, secure solutions designed to solve complex business problems',
    },
  ]

  return (
    <section id="services" className="py-20 bg-gradient-to-b from-dark via-darkCard to-dark">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-sm text-gold uppercase tracking-widest mb-4">OUR SERVICES</p>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            End-to-End AI & Software
            <span className="block gradient-text">Development Services</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            From strategy to deployment, we provide comprehensive solutions tailored to your business needs.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {services.map((service, index) => {
            const Icon = service.icon
            return (
              <div
                key={index}
                className="glass-effect p-8 rounded-xl card-hover group"
              >
                <div className="mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-gold/20 to-blue/20 rounded-lg flex items-center justify-center group-hover:from-gold/40 group-hover:to-blue/40 transition">
                    <Icon className="text-gold group-hover:text-lightGold transition" size={32} />
                  </div>
                </div>
                <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                <p className="text-gray-400 mb-6">{service.description}</p>
                <button className="flex items-center gap-2 text-gold hover:text-lightGold transition group/btn">
                  Learn More
                  <FiArrowRight className="group-hover/btn:translate-x-1 transition" />
                </button>
              </div>
            )
          })}
        </div>

        {/* View All Button */}
        <div className="text-center mt-12">
          <button className="px-8 py-3 border border-gold text-gold rounded-lg hover:bg-gold hover:text-dark transition font-bold flex items-center justify-center gap-2 mx-auto">
            VIEW ALL SERVICES
            <FiArrowRight />
          </button>
        </div>
      </div>
    </section>
  )
}
