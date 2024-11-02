import React from 'react';

export const Services = () => {
  return (
    <section id='Services' className="bg-white py-16 px-4 sm:px-2 lg:px-8 sm:mt-6">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold text-black mb-6">Looking to the Future</h2>
        <p className="text-lg text-gray-700 mb-8">
          When designing a home, there are many features you might consider to enhance comfort, functionality, and style.
        </p>
        <div className="flex flex-wrap justify-center gap-6">
          {[
            {
              title: "Innovation",
              description: "Popular home design features for irrigation, reducing water bills and environmental impact."
            },
            {
              title: "Solutions",
              description: "Hardwood, tile, or high-quality laminate can add elegance and durability to different areas of the home."
            },
            {
              title: "Sustainability",
              description: "Features like rain showers, freestanding tubs, and double vanities offer a spa-like experience."
            },
            {
              title: "Excellence",
              description: "Includes features such as an island, ample counter space, and modern appliances for practicality."
            }
          ].map((service, index) => (
            <div key={index} className="w-full md:w-1/4 p-4">
              <div className="bg-gray-800 shadow-lg rounded-lg p-6 transition-transform transform hover:scale-105 hover:shadow-2xl duration-300">
                <h3 className="text-xl text-white font-semibold mb-4">{service.title}</h3>
                <p className="text-gray-300">{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Services;
