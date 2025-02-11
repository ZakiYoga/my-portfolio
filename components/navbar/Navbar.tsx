import React from 'react'
import { navLinks } from './Navlink'
import ToggleTheme from '../toggleTheme/ToggleTheme'

const Navbar = () => {
    return (
        <div className="navbar bg-base-100 px-8">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h8m-8 6h16" />
                        </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                        {navLinks.map((link, index) => (
                            link.submenu ? (
                                <li key={index}>
                                    <a>{link.name}</a>
                                    <ul className="p-2">
                                        {link.submenu.map((subLink, subIndex) => (
                                            <li key={subIndex}><a href={subLink.href}>{subLink.name}</a></li>
                                        ))}
                                    </ul>
                                </li>
                            ) : (
                                <li key={index}><a href={link.href}>{link.name}</a></li>
                            )
                        ))}
                    </ul>
                </div>
                <a className="btn btn-ghost text-xl font-changa gap-0">Zki<span className="text-primary">Str.</span></a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1 font-oxanium">
                    {navLinks.map((link, index) => (
                        link.submenu ? (
                            <li key={index}>
                                <details>
                                    <summary>{link.name}</summary>
                                    <ul className="p-2">
                                        {link.submenu.map((subLink, subIndex) => (
                                            <li key={subIndex}><a href={subLink.href}>{subLink.name}</a></li>
                                        ))}
                                    </ul>
                                </details>
                            </li>
                        ) : (
                            <li key={index}><a href={link.href}>{link.name}</a></li>
                        )
                    ))}
                </ul>
            </div>
            <div className="navbar-end">
                <ToggleTheme />
            </div>
        </div>
    )
}

export default Navbar
