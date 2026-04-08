import React from "react";
import Bannersection from "../components/Banner";
import Team from "../components/Team";
import Userlist from "../components/Userlist";
import Usera from "../components/Usera";
import Acfdata from "../components/Acfdata";

const bannerabout = {
    title: "About Us",
    text: "Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print.",
    image: "/images/Trustimg.jpg",
    button: "Contact Us",
    url: "/contact",
};

const teamData = [
    {
        name: "Leslie Alexander",
        role: "Co-Founder / CEO",
        image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330"
    },
    {
        name: "Michael Foster",
        role: "Co-Founder / CTO",
        image: "https://images.unsplash.com/photo-1519244703995-f4e0f30006d5"
    },
    {
        name: "Dries Vincent",
        role: "Business Relations",
        image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d"
    },
    {
        name: "Lindsay Walton",
        role: "Front-end Developer",
        image: "https://images.unsplash.com/photo-1517841905240-472988babdf9"
    },
    {
        name: "Courtney Henry",
        role: "Designer",
        image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80"
    },
    {
        name: "Tom Cook",
        role: "Director of Product",
        image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e"
    }
];

function About() {
    return (
        <div className="About-section">
            <Bannersection banerdata={bannerabout} />
            <Team teamData={teamData} />
            <Userlist/>
            <Usera/>
             
           <Acfdata/>

        </div>
    );
}

export default About;




