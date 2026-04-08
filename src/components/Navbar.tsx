import { useState } from "react";
import { NavLink } from "react-router-dom";

const navlinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Services", path: "/service" },
    { name: "Contact", path: "/contact" },
    { name: "Faq", path: "/faq" },
    { name: "Blogs", path: "/blog" },
];

function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    return (
       <nav className="bg-blue-500 text-white w-full relative z-50">

  <div className="container mx-auto px-4">

    <div className="flex flex-col md:flex-row md:justify-between md:items-center py-4">

      <div className="flex justify-between items-center w-full md:w-auto">
        <h2 className="text-xl font-bold">MySite</h2>

        <button
          className="md:hidden p-2"
          onClick={() => setIsOpen(!isOpen)}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {isOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
            )}
          </svg>
        </button>
      </div>

      <ul className={`${isOpen ? "flex" : "hidden"} flex-col md:flex md:flex-row gap-6 mt-4 md:mt-0`}>
        {navlinks.map((link, index) => (
          <li key={index}>
            <NavLink to={link.path}>
              {link.name}
            </NavLink>
          </li>
        ))}
      </ul>

    </div>
  </div>
</nav>
    );
}

export default Navbar;