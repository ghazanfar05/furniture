import React from 'react'
import { ArrowRight, Maximize2 } from "lucide-react"

const Slider = () => {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="grid md:grid-cols-2 gap-8 items-center">
        <div className="relative group">
          <img
            src="/dev22.png"
            alt="Innovative furniture design in a styled interior setting"
            className="w-full h-auto rounded-lg shadow-lg"
          />
          <button className="absolute top-4 right-4 bg-white/80 p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" aria-label="View full size image">
            <Maximize2 className="w-6 h-6 text-gray-800" />
          </button>
          <div className="absolute bottom-4 left-4 right-4 bg-white/80 p-4 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <h2 className="text-xl font-semibold text-gray-800">Harmony Lounge Chair</h2>
            <p className="text-sm text-gray-600">Crafted with sustainable materials and ergonomic design</p>
          </div>
        </div>
        <div className="space-y-6">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900">Discover Our Latest Creation</h1>
          <p className="text-lg text-gray-700">
            Introducing the Harmony Lounge Chair, a perfect blend of comfort and style. Its unique curved form and
            sustainable materials showcase our commitment to innovative design and eco-friendly craftsmanship.
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
              Transform your space with our innovative furniture designs that blend style and functionality.
              Explore our collection and find the perfect piece to elevate your home.
            </p>
            <button className='w-full sm:w-auto font-thin '> next</button>
          </div>
        </div>
      </div>
    </div>
  )
}
export default Slider