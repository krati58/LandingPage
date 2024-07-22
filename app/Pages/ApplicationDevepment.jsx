import Image from 'next/image';
import React from 'react';

const stages = [
    {
        title: 'Analysis',
        description: 'We craft precise technical specs, aligning with your business, technology, and user requirements.',
        icon: '📊',
    },
    {
        title: 'Design',
        description: 'We adapt the customer’s corporate identity to the platform guidelines. We draw convenient and understandable interfaces.',
        icon: '🎨',
    },
    {
        title: 'Development',
        description: 'We create an extensible architecture, write clean and stable code. We integrate with customer technologies.',
        icon: '💻',
    },
    {
        title: 'Testing',
        description: 'We carry out functional testing and do bug fixes. We adapt the application to different phone resolutions.',
        icon: '🧪',
    },
    {
        title: 'Launching',
        description: 'We design the application page and publish it in the App Store and Google Play stores.',
        icon: '🚀',
    },
    {
        title: 'Support',
        description: 'We monitor the stability of the application, update it for new devices and versions of iOS and Android.',
        icon: '🛠️',
    },
];

const ApplicationDevepment = () => {
    return (
        <>

            <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-4">
                <h1 className="text-3xl font-bold mb-8">Application Development Stages</h1>
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 w-full max-w-6xl">

                    <div className="flex flex-col space-y-6">
                        {stages.slice(0, 3).map((stage, index) => (
                            <div key={index} className="bg-white shadow-md rounded-lg p-6">
                                <div className="flex items-center text-4xl mb-4">{stage.icon}
                                    <h2 className="text-2xl font-bold mb-2">{stage.title}</h2></div>

                                <p className="text-gray-700">{stage.description}</p>
                            </div>
                        ))}
                    </div>

                    <div className="flex items-center justify-center">
                        <Image
                            src="/images/hope-gif1.png"
                            alt="Next.js Logo"
                            width={1900}
                            height={800}
                            priority
                        />
                        {/* <img src="path_to_your_image.png" alt="App Screenshot" className="w-full h-auto" /> */}
                    </div>

                    <div className="flex flex-col space-y-6">
                        {stages.slice(3).map((stage, index) => (
                            <div key={index} className="bg-white shadow-md rounded-lg p-6">
                                <div className="flex items-center  text-4xl mb-4">{stage.icon}
                                    <h2 className="text-2xl font-bold mb-2">{stage.title}</h2>
                                </div>

                                <p className="text-gray-700">{stage.description}</p>
                            </div>
                        ))}
                    </div>

                </div>
            </div>



        </>
    );
}

export default ApplicationDevepment;
