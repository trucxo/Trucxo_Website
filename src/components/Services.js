import React from 'react';
import img from '../images/web.svg'; 
import img2 from '../images/app.svg';
import img3 from '../images/hosting.svg';
import img4 from '../images/consultation.svg';

const Services = () => {

    return (
        <div id="services" className="bg-gray-100 py-12" >
            <section data-aos="zoom-in-down">
                    <div className="my-4 py-4">
                        <h2 className="my-2 text-center text-3xl text-black-900 uppercase font-bold">services</h2>
                        
                        <div className='flex justify-center'>
                            <div className='w-24 border-b-4 border-black'></div>
                        </div>
                        <h2 className="mt-4 mx-12 text-center text-xl lg:text-2xl font-semibold text-black-900">How We Help You Succeed</h2>
                    </div>

                    <div className="px-12" data-aos="fade-down" data-aos-delay="600">
                        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
                            
                            <div className="bg-white transition-all ease-in-out duration-400  overflow-hidden text-gray-700 hover:bg-gray-500 hover:text-white rounded-lg shadow-2xl p-3 group">
                                <div className="m-2 text-justify text-sm">
                                <img alt="card img" className="rounded-t group-hover:scale-[1.15] transition duration-1000 ease-in-out" src={img} />
                                    <h2 className="font-semibold my-4 text-2xl text-center">Seamless Load Matching</h2>
                                    <p className="text-md font-medium">
                                    We eliminate the hassle of finding the right transportation for your goods. Trucxo’s load matching feature effortlessly connects factories with truck operators, ensuring that shipments are matched with the most suitable vehicles in real-time. Whether you need a small delivery or a full truckload, our platform helps you find the perfect match, saving both time and resources.
                                    </p>
                                </div>
                            </div>

                            <div className="bg-white transition-all ease-in-out duration-400  overflow-hidden text-gray-700 hover:bg-gray-500 hover:text-white rounded-lg shadow-2xl p-3 group">
                                <div className="m-2 text-justify text-sm">
                                <img alt="card img" className="rounded-t group-hover:scale-[1.15] transition duration-1000 ease-in-out" src={img2} />
                                    <h2 className="font-semibold my-4 text-2xl text-center">Real-Time Tracking</h2>
                                    <p className="text-md font-medium">
                                    Tracking your shipments has never been easier. With Trucxo, you can monitor the status of your goods from dispatch to delivery, all in real-time. Our platform allows both factory owners and truck operators to access live tracking, ensuring transparency and timely deliveries. This helps eliminate surprises and keeps all stakeholders informed at every step of the journey.
                                    </p>
                                </div>
                            </div>

                            <div className="bg-white transition-all ease-in-out duration-400  overflow-hidden text-gray-700 hover:bg-gray-500 hover:text-white rounded-lg shadow-2xl p-3 group">
                                <div className="m-2 text-justify text-sm">
                                    <img alt="card img" className="rounded-t group-hover:scale-[1.15] transition duration-1000 ease-in-out" src={img3} />
                                    <h2 className="font-semibold my-4 text-2xl text-center "> Cost Optimization</h2>
                                    <p className="text-md font-medium">
                                    Logistics can be a significant cost for any business. Trucxo is designed to help you optimize transportation expenses by minimizing inefficiencies and reducing delays. With intelligent route planning, better load matching, and real-time updates, we ensure that you get the most value for every shipment. This ultimately reduces your overall logistics costs and helps your business grow more sustainably.
                                    </p>
                                </div>
                            </div>

                            <div className="bg-white transition-all ease-in-out duration-400  overflow-hidden text-gray-700 hover:bg-gray-500 hover:text-white rounded-lg shadow-2xl p-3 group">
                                <div className="m-2 text-justify text-sm">
                                <img alt="card img" className="rounded-t group-hover:scale-[1.15] transition duration-1000 ease-in-out" src={img4} />
                                    <h2 className="font-semibold my-4 text-2xl text-center ">Simplified Communication</h2>
                                    <p className="text-md font-medium">
                                    We understand the importance of clear and quick communication in logistics. Trucxo provides seamless channels for communication between factory owners and truck operators, ensuring that everyone involved is on the same page. No more back-and-forth calls and messages—our platform makes it easy to collaborate and stay updated on shipment statuses.
                                    </p>
                                </div>
                            </div>                    
                        </div>
                    </div>
            </section>

        </div>
    )
}

export default Services;