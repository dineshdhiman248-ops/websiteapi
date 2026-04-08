
import { Link } from "react-router-dom";
 

function Footer() {
    return (
        <footer className="bg-black text-white text-center p-4">
            © 2026 MySite. All rights reserved. 
            
            <Link 
                to="/privacy" onClick={() => window.scrollTo(0, 0)}
                className="text-blue-400 hover:underline ml-2"
            >
                Privacy Policy
            </Link>
        </footer>
    );
};

export default Footer;