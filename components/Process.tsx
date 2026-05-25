'use client'

import { FiBarChart2, FiPenTool, FiCode, FiCheck } from 'react-icons/fi'

export default function Process() {
  const steps = [
    {
      number: '01',
      icon: FiBarChart2,
      title: 'Discover',
      description: 'We understand your business, goals, and unique challenges',
    },
    {
      number: '02',
      icon: FiPenTool,
      title: 'Design',
      description: 'We design the right AI solution tailored for you',
    },
    {
      number: '03',
      icon: FiCode,
      title: 'Develop',
      description: 'Our team builds and integrates the solution seamlessly',
    },
    {
      number: '04',
      icon: FiCheck,
      title: 'Deploy',
      description: 'We ensure seamless deployment and continuous optimization',
    },
  ]

  return (
    <section id="process" className="py-20 bg-dark">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-16">
          <p className="text-sm text-gold uppercase tracking-widest mb-4">OUR PROCESS</p>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            How We Work
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl">
            A proven process to build AI solutions that deliver measurable results.
          </p>
        </div>

        {/* Process Steps */}
        <div className="relative">
          {/* Connection Line */}
          <div className="hidden lg:block absolute top-24 left-0 right-0 h-1 bg-gradient-to-r from-gold/0 via-gold/50 to-gold/0"></div>

          <div className="grid md:grid-cols-4 gap-8">
            {steps.map((step, index) => {
              const Icon = step.icon
              return (
                <div key={index} className="relative">
                  {/* Step Card */}
                  <div className="glass-effect p-8 rounded-xl h-full flex flex-col">
                    {/* Number */}
                    <div className="text-5xl font-bold text-gold/20 mb-4">
                      {step.number}
                    </div>

                    {/* Icon */}
                    <div className="w-14 h-14 bg-gradient-to-br from-gold/20 to-blue/20 rounded-lg flex items-center justify-center mb-6">
                      <Icon className="text-gold" size={28} />
                    </div>

                    {/* Content */}
                    <h3 className="text-xl font-bold mb-3">{step.title}</h3>
                    <p className="text-gray-400 flex-grow">{step.description}</p>
                  </div>

                  {/* Arrow */}
                  {index < steps.length - 1 && (
                    <div className="hidden md:flex absolute -right-4 top-1/4 text-gold z-10">
                      <span className="text-2xl">→</span>
                    </div>
                  )}
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
