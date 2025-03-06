import { NavLink } from "react-router-dom"
import logo from "../assets/planes-manager-logo.png"

export default function Navbar() {
  return (
    <nav className="bg-[#101218] shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0">
            <img src={logo} alt="Planes Manager Logo" className="w-24 h-auto" />
          </div>
          
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-6">
              <NavLink 
                to="/" 
                className={({ isActive }) => 
                  isActive 
                    ? "text-white bg-[#1a1d27] px-4 py-2 rounded-md text-sm font-medium"
                    : "text-gray-300 hover:text-white hover:bg-[#1a1d27] px-4 py-2 rounded-md text-sm font-medium transition-colors duration-200"
                }
              >
                Inicio
              </NavLink>
              <NavLink 
                to="/form" 
                className={({ isActive }) => 
                  isActive 
                    ? "text-white bg-[#1a1d27] px-4 py-2 rounded-md text-sm font-medium"
                    : "text-gray-300 hover:text-white hover:bg-[#1a1d27] px-4 py-2 rounded-md text-sm font-medium transition-colors duration-200"
                }
              >
                Añadir Avión
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}