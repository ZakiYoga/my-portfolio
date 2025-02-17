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
                    <ul tabIndex={0} className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                        {navLinks.map((link, index) => (
                            link.submenu ? (
                                <li key={index} className="dropdown dropdown-hover">
                                    <div tabIndex={0} role="button">
                                        {link.name}
                                    </div>
                                    <ul className="menu-dropdown-show p-2">
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
                                <details className="dropdown">
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
            <div className="navbar-end gap-4">
                <button className="btn font-oxanium btn-primary min-h-0 h-auto px-2.5 py-2.5 
  transition-transform duration-200 grid place-items-center rounded-md !border-[1px] !border-base-200 hover:border-base-200
  shadow-[4px_4px_0px_#212121] !scale-100
  active:translate-x-[3px] active:translate-y-[3px] active:shadow-none !active:hover:animate-none">
                    Download CV
                </button>

                <ToggleTheme />
            </div>
        </div>
    )
}

export default Navbar
