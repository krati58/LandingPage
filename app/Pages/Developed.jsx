import React from 'react';

const industries = [
    { name: "Social media", icon: "📞" },
    { name: "Education", icon: "🎓" },
    { name: "AR technology", icon: "🕶️" },
    { name: "Fitness and sport", icon: "🏀" },
    { name: "Auto, transport", icon: "🚗" },
    { name: "TV series", icon: "📺" },
    { name: "Bank", icon: "🏦" },
    { name: "Medicine, health", icon: "❤️" },
    { name: "Startups", icon: "💼" },
    { name: "Construction", icon: "🏗️" },
    { name: "Restaurants, food delivery", icon: "🍽️" },
    { name: "Religion", icon: "✝️" },
    { name: "Game projects", icon: "🎮" },
    { name: "Marketplaces", icon: "🏷️" },
    { name: "Online courses", icon: "📚" },
];

const Developed = () => {
    return (
        <div className="max-w-7xl mx-auto bg-gray-100  ">
            <h2 className="text-3xl font-bold  mb-8">
                Developed more than <span className="text-green-600">100</span>  <br/> projects in<span className="text-green-600">15</span> industries
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
                {industries.map((industry, index) => (
                    <div key={index} className="flex p-4 ">
                        <div className="text-3xl mr-4 bg-white items-center rounded-lg shadow-md">{industry.icon}</div>
                        <div className="text-lg">{industry.name}</div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Developed;
