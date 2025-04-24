import React from 'react';
import { Link } from 'react-router-dom';

const Homepage = () => {
    return (
        <div className="min-h-screen bg-white">
            {/* Hero Section */}
            <section className="relative h-[600px] bg-gray-100">
                <div className="absolute inset-0">
                    <img
                        src="/images/homepage-2.jpg"
                        alt="Professional Help Center"
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-black/40"></div>
                </div>
                <div className="relative container mx-auto px-4 h-full flex items-center">
                    <div className="text-white max-w-2xl">
                        <h1 className="text-5xl font-bold mb-6">Who Are We?</h1>
                        <p className="text-xl mb-8">
                            For 19 years we have been helping our patients care for their mental health
                        </p>
                        <Link to="/contact" className="bg-white text-gray-900 px-8 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors">
                            Contact Us
                        </Link>
                    </div>
                </div>
            </section>

            {/* Team Section */}
            <section className="py-20">
                <div className="container mx-auto px-4">
                    <h2 className="text-4xl font-bold text-center mb-12">Meet Our Specialists</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {/* Team members will be mapped here */}
                    </div>
                </div>
            </section>

            {/* Services Section */}
            <section className="py-20 bg-gray-50">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                        <div className="text-center">
                            <div className="mb-6">
                                <img src="/icons/diagnosis.svg" alt="Diagnosis" className="w-16 h-16 mx-auto" />
                            </div>
                            <h3 className="text-2xl font-bold mb-4">Psychological diagnosis</h3>
                            <p className="text-gray-600">
                                Professional psychological assessment and diagnosis to help identify your needs and create an effective treatment plan.
                            </p>
                        </div>
                        <div className="text-center">
                            <div className="mb-6">
                                <img src="/icons/therapy.svg" alt="Therapy" className="w-16 h-16 mx-auto" />
                            </div>
                            <h3 className="text-2xl font-bold mb-4">Therapy and Treatment</h3>
                            <p className="text-gray-600">
                                Various forms of therapy tailored to your individual needs, including individual, group, and family therapy.
                            </p>
                        </div>
                        <div className="text-center">
                            <div className="mb-6">
                                <img src="/icons/business.svg" alt="For Companies" className="w-16 h-16 mx-auto" />
                            </div>
                            <h3 className="text-2xl font-bold mb-4">For companies</h3>
                            <p className="text-gray-600">
                                Professional psychological support programs for employees and organizations.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20 bg-primary text-white">
                <div className="container mx-auto px-4 text-center">
                    <h2 className="text-4xl font-bold mb-8">Book your first visit today!</h2>
                    <p className="text-xl mb-8">Join over 15,000 satisfied patients!</p>
                    <div className="flex justify-center gap-6">
                        <Link to="/contact" className="bg-white text-primary px-8 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors">
                            Contact Us
                        </Link>
                        <Link to="/book-meeting" className="border-2 border-white px-8 py-3 rounded-lg font-medium hover:bg-white/10 transition-colors">
                            Book Online
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Homepage;