'use client'
import React from 'react';

interface SubscriptionPlanProps {
  logo: string;
  name: string;
  description: string;
  price: string;
  onClick: () => void;
}

const SubscriptionPlan: React.FC<SubscriptionPlanProps> = ({ logo, name, description, price, onClick }) => (
  <div className="bg-white rounded-lg shadow-md p-6 transform transition duration-300 hover:scale-105">
    <img src={logo} alt={`${name} logo`} className="h-12 w-auto mb-4" />
    <h3 className="text-lg font-bold mb-2">{name}</h3>
    <p className="text-gray-600">{description}</p>
    <p className="text-xl font-bold mt-4">{price}</p>
    <button 
      onClick={onClick}
      className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded mt-6"
    >
      Add to cart
    </button>
  </div>
);

interface Plan {
  logo: string;
  name: string;
  description: string;
  price: string;
}

const About: React.FC = () => {
  const plans: Plan[] = [
    {
      logo: 'sofa.png',
      name: 'Luxury Sofa Set',
      description: 'A high-end, 4-piece set made from premium materials, perfect for modern living spaces.',
      price: '$899/month',
    },
    {
      logo: 'table.png',
      name: 'Solid Oak Dining Table',
      description: 'A solid oak dining table with a rustic finish, seating up to 6 people.',
      price: '$450/month',
    },
    {
      logo: 'bed.png',
      name: 'Queen Size Bed',
      description: 'An ultra-comfortable queen bed with memory foam and luxurious bed frame.',
      price: '$299/month',
    },
  ];

  return (
    <div className="container mx-auto py-12">
      <h1 className="text-3xl font-bold text-center mb-8">
        Explore Our Exclusive Furniture Subscription Plans
      </h1>
      <p className="text-gray-600 text-center mb-12">
        Stylish and comfortable furniture, delivered right to your home. Choose the plan that suits your style, and enjoy free installation and pickup.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {plans.map((plan, index) => (
          <SubscriptionPlan key={index} {...plan} onClick={() => {}} />
        ))}
      </div>
      <div className="text-center mt-8">
        <button className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded">
          See all furniture plans
        </button>
      </div>
    </div>
  );
};

export default About;
