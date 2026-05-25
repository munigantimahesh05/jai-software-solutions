'use client'

import { FiUsers, FiAward, FiTrendingUp, FiGlobe } from 'react-icons/fi'

export default function Stats() {
  const stats = [
    {
      icon: FiAward,
      number: '100+',
      label: 'Projects Delivered',
    },
    {
      icon: FiUsers,
      number: '50+',
      label: 'Happy Clients',
    },
    {
      icon: FiTrendingUp,
      number: '98%',
      label: 'Client Satisfaction',
    },
    {
      icon: FiGlobe,
      number: '20+',
      label: 'Countries Served',
    },
  ]

  return (
    <section className="py-16 bg-gradient-to-r from-darkCard via-dark to-darkCard border-y border-gold/10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8">
          {stats.map((stat, index) => {
            const Icon = stat.icon
            return (
              <div key={index} className="text-center">
                <div className="flex justify-center mb-4">
                  <Icon className="text-gold" size={40} />
                </div>
                <h3 className="text-3xl md:text-4xl font-bold text-gold mb-2">
                  {stat.number}
                </h3>
                <p className="text-gray-400">{stat.label}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
