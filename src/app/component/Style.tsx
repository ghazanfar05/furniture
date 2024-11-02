'use client';

import React from 'react';
import { Home, Bed, Bath, Warehouse } from 'lucide-react';

const Style = () => {
  return (
    <div
        className="relative h-screen lg:h-[70vh] bg-fixed bg-cover bg-center"
        style={{ backgroundImage: 'url(dev18.png)' }}
      >
    <section className="max-w-6xl mx-auto px-4 sm:px-6  lg:px-8 text-center my-10">
      {/* Heading */}
      <h2 className="text-3xl md:text-5xl  font-bold mb-8 text-white">
        Home Information and Amenities
      </h2>

      {/* Icons with Descriptions */}
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-8 mb-10">
        {/* Living Room */}
        <div className="text-center">
          <Home className="w-16 h-16 md:w-20 md:h-20 text-white mx-auto mb-3" />
          <p className="text-lg font-semibold text-white">1 Living Room</p>
        </div>

        {/* Bedrooms */}
        <div className="text-center">
          <Bed className="w-16 h-16 md:w-20 md:h-20 text-white mx-auto mb-3" />
          <p className="text-lg font-semibold text-white">2 Bedrooms</p>
        </div>

        {/* Bathrooms */}
        <div className="text-center">
          <Bath className="w-16 h-16 md:w-20 md:h-20 text-white mx-auto mb-3" />
          <p className="text-lg font-semibold text-white">2 Bathrooms</p>
        </div>

        {/* Garage */}
        <div className="text-center">
          <Warehouse className="w-16 h-16 md:w-20 md:h-20 text-white mx-auto mb-3" />
          <p className="text-lg font-semibold text-white">1 Garage</p>
        </div>
      </div>

      {/* Paragraph */}
      <p className="text-white text-base md:text-lg leading-relaxed max-w-3xl mx-auto">
        Welcome to your future home! This is where comfort meets style. Explore spacious
        living areas, modern amenities, and everything you need to feel right at home. 
        Perfect for relaxing or entertaining guests.
      </p>
    </section>
    </div>
  );
};

export default Style
