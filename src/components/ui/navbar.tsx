
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { Button } from "./button";
import { useState } from "react";

export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navigation = [
    { name: "Home", path: "/" },
    { name: "Courses", path: "/courses" },
    { name: "Student Experience", path: "/experience" },
    { name: "Schedule Call", path: "/schedule" },
  ];

  return (
    <nav className="bg-white fixed w-full z-20 top-0 left-0 border-b border-gray-200">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <Link to="/" className="flex items-center">
          <span className="self-center text-2xl font-semibold whitespace-nowrap text-purple-600">Bitopia</span>
        </Link>
        
        <div className="flex md:hidden">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="p-2 text-gray-700 rounded-lg hover:bg-gray-100"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        <div className={`${isMenuOpen ? 'flex' : 'hidden'} w-full md:block md:w-auto`}>
          <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white">
            {navigation.map((item) => (
              <li key={item.name}>
                <Link 
                  to={item.path}
                  className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-purple-600 md:p-0"
                >
                  {item.name}
                </Link>
              </li>
            ))}
            <li>
              <Button
                asChild
                className="bg-purple-600 hover:bg-purple-700 text-white"
              >
                <Link to="/schedule">Start Learning</Link>
              </Button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
