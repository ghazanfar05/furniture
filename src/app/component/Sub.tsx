import React from 'react'
import { ArrowRight, Maximize2 } from "lucide-react"

const Sub = () => {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="grid md:grid-cols-2 gap-8 items-center">
        <div className="relative group">
          <img
            src="/dev23.png"
            alt="Innovative furniture design in a styled interior setting"
            className="w-full h-auto rounded-lg shadow-lg"
          />
          <button className="absolute top-4 right-4 bg-white/80 p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" aria-label="View full size image">
            <Maximize2 className="w-6 h-6 text-gray-800" />
          </button>
          <div className="absolute bottom-2 left-4 right-4 bg-white/80 p-4 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <h2 className="text-xl font-semibold text-gray-800">Harmony Lounge Chair</h2>
            <p className="text-sm text-gray-600">Crafted with sustainable materials and ergonomic design</p>
          </div>
        </div>
        <div className="space-y-2">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900">Interior Design Features:
          </h1>
          <p className="text-lg text-gray-700">
            Open Floor Plans: Creates a sense of spaciousness and encourages interaction by combining the kitchen, dining, and living areas.<br /><br />
            Natural Light: Large windows, skylights, and glass doors allow natural light to flood the space, making it feel airy and bright.<br /><br />
            Smart Home
          </p>
          <ul className="space-y-2">
            {["Ergonomic design for ultimate comfort", "Crafted from sustainable bamboo and recycled fabrics", "Customizable colors to match your decor", "Built to last with a 10-year warranty"].map((feature, index) => (
              <li key={index} className="flex items-center space-x-2">
                <ArrowRight className="w-5 h-5 text-primary" />
                <span>{feature}</span>
              </li>
            ))}
          </ul>
          <div className="pt-4">
            <p className="text-xl  text-gray-900 mb-4">
              Technology: Integrates devices like smart thermostats, lighting systems, and security cameras for convenience and energy efficiency.<br /><br />
              High Ceilings: Adds a sense of grandeur and can make spaces feel more open and inviting.
            </p>
            <button className='   rounded-xl sm:w-auto font-thin'> next</button>
          </div>
        </div>
      </div>
    </div>
  )
}
export default Sub