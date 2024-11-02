import React from 'react'
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";

const Contact = () => {
    return (
        <div id="Contact" className="h-auto bg-gray-900 relative  ">
            {/* SVG for wave effect */}
            <svg
                data-name="Layer 1"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 1200 120"
                preserveAspectRatio="none"
                className="w-full"
            >
                <path
                    d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
                    className="shape-fill fill-white"
                ></path>
            </svg>

            {/* Grid layout for content */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 p-8 md:p-16 text-white gap-8">
                {/* Texture Section */}
                <div className="flex flex-col gap-5">
                    <h2 className="text-3xl md:text-4xl font-bold">TEXTURE</h2>
                    <p className="text-sm md:text-base cursor-se-resize">
                        Textures and Patterns: Incorporate various materials and patterns to add depth and interest,
                        combining functionality with aesthetics for a comfortable and practical design.
                    </p>
                </div>

                {/* Products Section */}
                <div className="flex flex-col gap-5">
                    <h2 className="text-3xl md:text-4xl font-bold">PRODUCTS</h2>
                    <p className="text-sm md:text-base cursor-se-resize">
                        1. LuxeCraft Leather Sofa <br />
                        2. UrbanElegance Dining Table <br />
                        3. Serenity Memory Foam Mattress <br />
                        4. CoastalBreeze Outdoor Lounge Chair
                    </p>
                </div>

                {/* Useful Links Section */}
                <div className="flex flex-col gap-5">
                    <h2 className="text-3xl md:text-4xl font-bold">USEFUL LINKS</h2>
                    <p className="text-sm md:text-base  cursor-se-resize">
                        YOUR ACCOUNTS <br />
                        SHIPPING RATES <br />
                        DELIVERY & PRICING <br />
                        HELP
                    </p>
                </div>

                {/* Contact Us Section */}
                <div className="flex flex-col gap-5">
                    <h2 className="text-3xl md:text-4xl font-bold">CONTACT US</h2>
                    <p className="text-sm md:text-base cursor-se-resize">
                        PHONE NUMBER <br />
                        INFO@gmail.COM <br />
                        REGISTRATION <br />
                        AREAS
                    </p>
                </div>
            </div>
            <footer className="bg-gray-400 py-4 text-center text-black border-t">
        <div className="container mx-auto px-4">
          <p>&copy; All rights reserved &copy;</p>
          <ul className="flex justify-center mt-2 space-x-4">
            <li>
              <a href="#" className="hover:text-gray-300 text-xl">
                <FaFacebookF />
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-300 text-xl">
                <FaTwitter />
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-300 text-xl">
                <FaInstagram />
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-300 text-xl">
                <FaLinkedinIn />
              </a>
            </li>
          </ul>
        </div>
      </footer>
        </div>
    )
}

export default Contact;
