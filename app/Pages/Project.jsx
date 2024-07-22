"use client";
import React, { useState } from 'react';
import ProjectDetails from '../Pages/ProjectDetails';
const projects = [
    {
        title: 'Project 1',
        description: 'Crafted an innovative rental property management app, seamlessly integrating secure login, absence registration, and a tenant notice board. Elevating the resident experience with user-friendly design and efficient communication channels.',
        tags: ['Business analysis', 'iOS', 'Android', 'QA', 'UI/UX Design'],
        location: 'India',
        industry: 'Real Estate',
        growth: '400%',
        users: '+ 200 000',
        image1: '/images/hope-gif1.png',
        image2: '/path/to/image2.png',
    },
    {
        title: 'Project 2',
        description: 'Developed a fitness tracking app that helps users to monitor their workouts and diet. The app features real-time analytics and social sharing capabilities.',
        tags: ['Business analysis', 'iOS', 'Android', 'QA', 'UI/UX Design'],
        location: 'USA',
        industry: 'Fitness',
        growth: '250%',
        users: '+ 150 000',
        image1: '/images/hope-gif1.png',
        image2: '/path/to/image2.png',
    },
    {
        title: 'Project 3',
        description: 'Crafted an innovative rental property management app, seamlessly integrating secure login, absence registration, and a tenant notice board. Elevating the resident experience with user-friendly design and efficient communication channels.',
        tags: ['Business analysis', 'iOS', 'Android', 'QA', 'UI/UX Design'],
        location: 'India',
        industry: 'Real Estate',
        growth: '400%',
        users: '+ 200 000',
        image1: '/images/hope-gif1.png',

        image2: '/path/to/image2.png',
    },
    {
        title: 'Project 4',
        description: 'Developed a fitness tracking app that helps users to monitor their workouts and diet. The app features real-time analytics and social sharing capabilities.',
        tags: ['Business analysis', 'iOS', 'Android', 'QA', 'UI/UX Design'],
        location: 'USA',
        industry: 'Fitness',
        growth: '250%',
        users: '+ 150 000',
        image1: '/images/hope-gif1.png',
        image2: '/path/to/image2.png',
    },
];

const Projects = () => {
    const [activeTab, setActiveTab] = useState(0);

    return (
        <div className="max-w-7xl mx-auto bg-gray-100 py-12 px-4">
            <h2 className="text-3xl font-bold  mb-4">Projects we are proud of</h2>
            <p className=" mb-8">
                Our software development company is truly proud of the wonderful clients we have <br />worked with. We enjoy a long-term partnership.
            </p>
            <div className="max-w-7xl mx-auto">
                <div className="flex  mb-8">
                    {projects.map((project, index) => (
                        <button
                            key={index}
                            className={`px-4 py-2 ${activeTab === index ? 'border-b-2 border-yellow-500' : ''}`}
                            onClick={() => setActiveTab(index)}
                        >
                            {`Project ${index + 1}`}
                        </button>
                    ))}
                </div>
                <ProjectDetails project={projects[activeTab]} />
            </div>
        </div>
    );
};

export default Projects;
