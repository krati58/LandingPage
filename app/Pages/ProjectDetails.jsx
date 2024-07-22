import React from 'react';

const ProjectDetails = ({ project }) => {
    return (

        <div className="flex flex-col lg:flex-row lg:space-x-8">
            <div className="lg:w-1/2">
                <h3 className="text-2xl font-bold mb-4">{project.title}</h3>
                <p className="mb-4">{project.description}</p>
                <div className="mb-4">
                    {project.tags.map((tag, index) => (
                        <span key={index} className="text-yellow-500 mr-2">
                            {tag}
                            {index < project.tags.length - 1 && ' / '}
                        </span>
                    ))}
                </div>
                <div className="flex items-center mb-4">
                    <span className="text-yellow-500 mr-2">📍 {project.location}</span>
                    <span className="text-yellow-500">🏢 {project.industry}</span>
                </div>
                <div className="flex items-center mb-4">
                    <span className="mr-4"><strong>{project.growth}</strong> User Growth</span>
                    <span><strong>{project.users}</strong> Active Users</span>
                </div>
                <div className="flex space-x-4 mb-4">
                    <a href="#" className="bg-black text-white px-4 py-2 rounded-full">App Store</a>
                    <a href="#" className="bg-black text-white px-4 py-2 rounded-full">Google Play</a>
                </div>
            </div>
            <div className="lg:w-1/2 flex justify-center lg:justify-end mt-4 lg:mt-0">
                <div className="space-x-4 flex">
                    <img src={project.image1} alt="App screenshot 1" className="w-1/2 rounded-lg shadow-md" />
                    {/* <img src={project.image2} alt="App screenshot 2" className="w-1/2 rounded-lg shadow-md" /> */}
                </div>
            </div>
        </div>
    );
};

export default ProjectDetails;
