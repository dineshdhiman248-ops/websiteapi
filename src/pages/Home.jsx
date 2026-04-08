import React from "react";
import Hero from "../components/Hero";
import Cta from "../components/Cta";
import Team from "../components/Team";

const teamData = [
    {
        name: "Leslie",
        role: "Co-Founder / CEO",
        image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330"
    },
    {
        name: "Michael",
        role: "Co-Founder / CTO",
        image: "https://images.unsplash.com/photo-1519244703995-f4e0f30006d5"
    },
    {
        name: "Dries",
        role: "Business Relations",
        image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d"
    },
    {
        name: "Lindsay ",
        role: "Front-end Developer",
        image: "https://images.unsplash.com/photo-1517841905240-472988babdf9"
    },
    {
        name: "Courtney",
        role: "Designer",
        image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80"
    },
    {
        name: "Tom Cook",
        role: "Director of Product",
        image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e"
    }
];

function Home() {
    return (
        <div className="Home-section">

            <Hero />
            <Cta />
            <Team teamData={teamData} />

            <section className="py-12 px-4">

                <div className="max-w-7xl mx-auto text-center mb-12">
                    <h1 className="text-4xl font-bold text-gray-800 mb-4">
                        Our Services
                    </h1>
                    <p className="text-gray-600">
                        We provide high quality services to grow your business 🚀
                    </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">

                    {/* Card 1 */}
                    <div className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl hover:-translate-y-2 transition duration-300">

                        <div className="overflow-hidden">
                            <img
                                src="https://images.unsplash.com/photo-1498050108023-c5249f4df085"
                                alt="Web Development"
                                className="w-full h-48 object-cover group-hover:scale-110 transition duration-500"
                            />
                        </div>

                        <div className="p-5 text-center">
                            <h3 className="text-xl font-semibold mb-2">
                                Web Development
                            </h3>
                            <p className="text-gray-600 text-sm mb-4">
                                Fast, modern and responsive websites.
                            </p>

                            <button className="bg-gradient-to-r from-indigo-500 to-purple-500 text-white px-5 py-2 rounded-full hover:from-purple-500 hover:to-indigo-500 transition duration-300">
                                Learn More
                            </button>
                        </div>
                    </div>

                    {/* Card 2 */}
                    <div className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl hover:-translate-y-2 transition duration-300">

                        <div className="overflow-hidden">
                            <img
                                src="https://images.unsplash.com/photo-1551650975-87deedd944c3"
                                alt="App Development"
                                className="w-full h-48 object-cover group-hover:scale-110 transition duration-500"
                            />
                        </div>

                        <div className="p-5 text-center">
                            <h3 className="text-xl font-semibold mb-2">
                                App Development
                            </h3>
                            <p className="text-gray-600 text-sm mb-4">
                                Android & iOS apps with best UI.
                            </p>

                            <button className="bg-gradient-to-r from-indigo-500 to-purple-500 text-white px-5 py-2 rounded-full hover:from-purple-500 hover:to-indigo-500 transition duration-300">
                                Learn More
                            </button>
                        </div>
                    </div>

                    {/* Card 3 */}
                    <div className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl hover:-translate-y-2 transition duration-300">

                        <div className="overflow-hidden">
                            <img
                                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f"
                                alt="UI UX Design"
                                className="w-full h-48 object-cover group-hover:scale-110 transition duration-500"
                            />
                        </div>

                        <div className="p-5 text-center">
                            <h3 className="text-xl font-semibold mb-2">
                                UI/UX Design
                            </h3>
                            <p className="text-gray-600 text-sm mb-4">
                                Creative and modern designs.
                            </p>

                            <button className="bg-gradient-to-r from-indigo-500 to-purple-500 text-white px-5 py-2 rounded-full hover:from-purple-500 hover:to-indigo-500 transition duration-300">
                                Learn More
                            </button>
                        </div>
                    </div>

                    {/* Card 4 */}
                    <div className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl hover:-translate-y-2 transition duration-300">

                        <div className="overflow-hidden">
                            <img
                                src="https://images.unsplash.com/photo-1460925895917-afdab827c52f"
                                alt="SEO Optimization"
                                className="w-full h-48 object-cover group-hover:scale-110 transition duration-500"
                            />
                        </div>

                        <div className="p-5 text-center">
                            <h3 className="text-xl font-semibold mb-2">
                                SEO Optimization
                            </h3>
                            <p className="text-gray-600 text-sm mb-4">
                                Rank higher on Google search.
                            </p>

                            <button className="bg-gradient-to-r from-indigo-500 to-purple-500 text-white px-5 py-2 rounded-full hover:from-purple-500 hover:to-indigo-500 transition duration-300">
                                Learn More
                            </button>
                        </div>
                    </div>

                </div>
            </section>

        </div>
    );
}

export default Home;
