import React from "react";
import NavBar from "./NavBar";
import Home from "./section/Home";
import AboutMe from "./section/AboutMe";
import Skills from "./section/Skills";
import Projects from "./section/Projects";
import Exp from "./section/Exp";
import Contact from "./section/Contact";
import logo from "./assets/logo.png"
import PillNav from "./PillNav";
import { Link } from "react-scroll";

export default function Smooth() {

    return(
        <>
        <PillNav
        logo={logo}
        logoAlt="Company Logo"
        items={[
            { label: 'Home', to: 'Home' },
            { label: 'About Me', to: 'About Me' },
            { label: 'Skills', to: 'Skills' },
            { label: 'Projects', to: 'Projects' },
            { label: 'Experience', to: 'Exp' },
            { label: 'Contact', to: 'Contact' }
        ]}
        activeHref="Home"
        className="custom-nav "
        ease="power2.easeOut"
        baseColor="#000000"
        pillColor="#ffffff"
        hoveredPillTextColor="#ffffff"
        pillTextColor="#000000"
        />

        <AboutMe />
        <Skills />
        <Projects />
        <Exp />
        <Contact />
        </>
    )
}