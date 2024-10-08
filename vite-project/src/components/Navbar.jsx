import { NavLink } from "react-router-dom"


const Navbar = () => {
  return (
   <header className="header">
    <NavLink to="/" className="w-40 h-10 rounded-lg bg-white items-center justify-center flex font-bold shadow-md">
    <p className="green-gradient_text">ConstantinCoding</p>
    </NavLink>
    <nav className="flex text-lg gap-7 font-medium">
        <NavLink to="/about" className={({isActive}) => isActive ? 'text-green-500' : 'text-darkgreen-500' }>
            About
        </NavLink>
        <NavLink to="/projects" className={({isActive}) => isActive ? 'text-green-500' : 'text-darkgreen-500' }>
            Projects
        </NavLink>
        

    </nav>

   </header>
  )
}

export default Navbar