import { NavLink} from "react-router-dom"
import logo from "../assets/planes-manager-logo.png"
import Searchbar from "./Searchbar.jsx"
 

export default function Navbar() {
  return (
    <div>

        <div className="bg-[#101218] text-white h-[4.2em] flex items-center space-x-4 justify-between p-4 ">

            <div className="w-max">
                <img src={logo} alt="" className="z-40 w-20" />
            </div>

            <div className="space-x-4 flex flex-grow justify-center text-center ml-37">
            <NavLink to="/">
                Home
            </NavLink>
            <NavLink to="/form">
                Form
            </NavLink>
            <NavLink to="/topic">
                Topic
            </NavLink>
            
            </div>

            <Searchbar/>
        </div>
    
    </div>
  )
}
