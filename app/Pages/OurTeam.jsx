// App.js
"use client";
import React, { useState } from 'react';

const faqs = [
    {
        question: 'What is the cost of a mobile application?',
        answer: 'The cost of a mobile application depends on various factors including features, platforms, and development time. Contact us for a detailed quote.',
    },
    {
        question: 'Do you provide a guarantee for the mobile application?',
        answer: 'Yes, we provide a guarantee for our mobile applications. The cost of a mobile application depends on various factors including features Our team ensures the best quality and offers support for any issues that may arise.',
    },
    {
        question: 'How long will development take?',
        answer: 'Development terms directly depend on the requirements for the mobile application, the characteristics of the company, as well as the wishes of the customer. Average development time from start to finished application: Medium projects up to 3 months. Large projects about 4-6 months. To get a more accurate estimate of the project completion time, it is necessary to determine the main task of the application, think over its logic and functionality.',
    },
    {
        question: 'I will not tell my idea, do you guarantee confidentiality?',
        answer: 'Yes, we guarantee confidentiality. We can sign an NDA (Non-Disclosure Agreement) to ensure that your idea remains protected.',
    },
];

const OurTeam = () => {
    const [activeIndex, setActiveIndex] = useState(1);

    const toggleFAQ = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    return (
        // <div className="min-h-screen bg-gray-100 p-8">
        //     <div className="max-w-6xl mx-auto">
        //         <section className="p-8 rounded-lg mb-8 flex flex-col lg:flex-row items-center">
        //             <div className="lg:w-1/2 mb-8 lg:mb-0">
        //                 <h2 className="text-3xl font-bold mb-4">Our team</h2>
        //                 <p className="mb-6">Thousand is a full-cycle digital production company with its own product analytics, design, web and mobile development.</p>
        //                 <div className="flex space-x-8 mb-4">
        //                     <div>
        //                         <p className="text-4xl font-bold">28</p>
        //                         <p>team members</p>
        //                     </div>
        //                     <div>
        //                         <p className="text-4xl font-bold">+100</p>
        //                         <p>projects</p>
        //                     </div>
        //                     <div>
        //                         <p className="text-4xl font-bold">7 years</p>
        //                         <p>in IT sphere</p>
        //                     </div>
        //                 </div>
        //                 <p>All the necessary specialists - from a designer to a tester - are on our staff. We hire the best specialists in the market. It’s expensive but worth it.</p>
        //             </div>
        //             <div className="lg:w-1/2">
        //                 <img src="path_to_your_image.png" alt="Our team" className="rounded-lg" />
        //             </div>
        //         </section>

        //         <section className="bg-white p-8 rounded-lg">
        //             <h2 className="text-3xl font-bold mb-6">FAQ</h2>
        //             <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        //                 {faqs.map((faq, index) => (
        //                     <div key={index} className="mb-4">
        //                         <button
        //                             className="flex justify-between items-center w-full text-left p-4 border-b border-gray-200"
        //                             onClick={() => toggleFAQ(index)}
        //                         >
        //                             <span>{faq.question}</span>
        //                             <span>{activeIndex === index ? '✕' : '+'}</span>
        //                         </button>
        //                         {activeIndex === index && (
        //                             <div className="p-4 bg-gray-50 border border-gray-200">{faq.answer}</div>
        //                         )}
        //                     </div>
        //                 ))}
        //             </div>
        //         </section>
        //     </div>
        // </div>
        <>
            <div className="bg-gray-100">
                <div className="max-w-6xl mx-auto">
                    <section className="rounded-lg flex flex-col lg:flex-row items-center">
                        <div className="lg:w-1/2 lg:mb-0">
                            <h2 className="text-3xl font-bold mb-4">Our team</h2>
                            <p className="mb-6">Thousand is a full-cycle digital production company with its own product analytics, design, web and mobile development.</p>
                            <div className="flex space-x-8 mb-4">
                                <div>
                                    <p className="text-4xl font-bold">28</p>
                                    <p>team members</p>
                                </div>
                                <div>
                                    <p className="text-4xl font-bold">+100</p>
                                    <p>projects</p>
                                </div>
                                <div>
                                    <p className="text-4xl font-bold">7 years</p>
                                    <p>in IT sphere</p>
                                </div>
                            </div>
                            <p>All the necessary specialists - from a designer to a tester - are on our staff. We hire the best specialists in the market. Its expensive but worth it.</p>
                        </div>
                        <div className="lg:w-1/2">
                            <img src="path_to_your_image.png" alt="Our team" className="rounded-lg" />
                        </div>
                    </section>


                </div>
            </div>
            {/* <div className="min-h-screen bg-gray-100 "> */}
            <div className="pt-4" style={{ backgroundColor: "white", transform: "0.0.0.2" }}>
                <div className="max-w-6xl mx-auto">

                    <section className="p-8 rounded-lg">
                        <h2 className="text-3xl font-bold mb-6">FAQ</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {faqs.map((faq, index) => (
                                <div key={index} className="mb-4">
                                    <button
                                        className="flex justify-between items-center w-full text-left p-4 border-b border-gray-200"
                                        onClick={() => toggleFAQ(index)}
                                    >
                                        <span>{faq.question}</span>
                                        <span>{activeIndex === index ? '✕' : '+'}</span>
                                    </button>
                                    {activeIndex === index && (
                                        <div className="p-4 bg-gray-50 border border-gray-200">{faq.answer}</div>
                                    )}
                                </div>
                            ))}
                        </div>
                    </section>
                </div>

            </div>
        </>

    );
}

export default OurTeam;
