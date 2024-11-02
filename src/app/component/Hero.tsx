import React from 'react'

const Hero = () => {
  return (
    
<div className="flex flex-wrap gap-4 justify-center border-b mb-10">
  {[
    { src: "dev1.png", alt: "Image 1", text: "Click Here" },
    { src: "dev2.png", alt: "Image 2", text: "Click Here" },
    { src: "dev3.png", alt: "Image 3", text: "Click Here" },
    { src: "dev4.png", alt: "Image 4", text: "Click Here" },
    { src: "dev5.png", alt: "Image 5", text: "Click Here" },
    { src: "dev6.png", alt: "Image 6", text: "Click Here" },
    { src: "dev7.png", alt: "Image 7", text: "Click Here" },
    { src: "dev8.png", alt: "Image 8", text: "Click Here" },
    { src: "dev9.png", alt: "Image 9", text: "Click Here" },
    { src: "dev10.png", alt: "Image 10", text: "Click Here" },
  ].map(({ src, alt, text }, index) => (
    <div key={index} className="relative  w-full sm:w-1/2 md:w-1/3 lg:w-1/6 h-auto group ">
      <img
        src={src}
        alt={alt}
        width={1920}
        height={100}
        className="w-full  h-full object-cover transition-transform duration-300 ease-in-out transform group-hover:scale-105 group-hover:shadow-xl"
      />
      <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out">
        <span className="text-lg font-semibold">{text}</span>
      </div>
    </div>
  ))}
</div>


  )
}

export default Hero