import React from "react";
import { Link } from 'react-scroll';


const NavBar = () => {
    return(
    <div className="navbar fixed top-0 bg-neutral text-neutral-content">
        <button className="btn btn-ghost text-xl">daisyUI</button>
        <div className=" flex gap-6 flex-1 justify-center">
            <Link to='Home' smooth='true' duration={300} className="cursor-pointer">Home</Link>
            <Link to='About Me' smooth='true' duration={300} className="cursor-pointer">About Me</Link>
            <Link to='Skills' smooth='true' duration={300} className="cursor-pointer">Skills</Link>
            <Link to='Projects' smooth='true' duration={300} className="cursor-pointer">Projects</Link>
            <Link to='Exp' smooth='true' duration={300} className="cursor-pointer">Experience</Link>
            <Link to='Contact' smooth='true' duration={300} className="cursor-pointer">Contact</Link>
        </div>
    </div>


    )
}

export default NavBar;