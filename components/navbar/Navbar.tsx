'use client'
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence, Variants } from 'framer-motion';
import { navLinks } from './Navlink';
import ToggleTheme from '../toggleTheme/ToggleTheme';
import PixelButton from '../Button';

const Navbar: React.FC = () => {
    const [scrolled, setScrolled] = useState<boolean>(false);
    const [isOpen, setIsOpen] = useState<boolean>(false);

    useEffect(() => {
        const handleScroll = () => {
            const isScrolled = window.scrollY > 10;
            if (isScrolled !== scrolled) {
                setScrolled(isScrolled);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [scrolled]);

    // Animation variants
    const logoVariants: Variants = {
        hidden: { opacity: 0, x: -20 },
        visible: {
            opacity: 1,
            x: 0,
            transition: {
                duration: 0.5,
                delay: 0.2
            }
        }
    };

    const navItemVariants: Variants = {
        hidden: { opacity: 0, y: -10 },
        visible: (i) => ({
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.3,
                delay: 0.1 * i
            }
        })
    };

    const buttonVariants: Variants = {
        hidden: { opacity: 0, scale: 0.8 },
        visible: {
            opacity: 1,
            scale: 1,
            transition: {
                duration: 0.4,
                delay: 0.6
            }
        },
        hover: {
            scale: 1.05,
            transition: {
                duration: 0.2,
                yoyo: Infinity,
                repeatDelay: 0.5
            }
        }
    };

    const mobileMenuVariants: Variants = {
        closed: {
            opacity: 0,
            scale: 0.95,
            transition: {
                duration: 0.2
            }
        },
        open: {
            opacity: 1,
            scale: 1,
            transition: {
                duration: 0.3,
                staggerChildren: 0.1,
                delayChildren: 0.2
            }
        }
    };

    const mobileItemVariants: Variants = {
        closed: { opacity: 0, x: -10 },
        open: { opacity: 1, x: 0 }
    };

    return (
        <motion.div
            className={`navbar w-full h-fit px-8 sticky top-0 transition-all duration-300 z-[99] ${scrolled ? 'backdrop-blur-sm bg-base-100/70 shadow-md' : 'bg-transparent'
                }`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
        >
            <div className="navbar-start">
                <div className="dropdown">
                    <motion.div
                        tabIndex={0}
                        role="button"
                        className="btn btn-ghost lg:hidden"
                        whileTap={{ scale: 0.9 }}
                        onClick={() => setIsOpen(!isOpen)}
                    >
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
                    </motion.div>
                    <AnimatePresence>
                        {isOpen && (
                            <motion.ul
                                tabIndex={0}
                                className="menu menu-sm dropdown-content bg-base-100 rounded-box mt-3 w-52 p-2 shadow"
                                variants={mobileMenuVariants}
                                initial="closed"
                                animate="open"
                                exit="closed"
                            >
                                {navLinks.map((link, index) => (
                                    link.submenu ? (
                                        <motion.li
                                            key={index}
                                            className="dropdown dropdown-hover"
                                            variants={mobileItemVariants}
                                            whileHover={{ scale: 1.03 }}
                                        >
                                            <div tabIndex={0} role="button">
                                                {link.name}
                                            </div>
                                            <ul className="menu-dropdown-show p-2">
                                                {link.submenu.map((subLink, subIndex) => (
                                                    <motion.li
                                                        key={subIndex}
                                                        whileHover={{ scale: 1.03, x: 3 }}
                                                    >
                                                        <a href={subLink.href}>{subLink.name}</a>
                                                    </motion.li>
                                                ))}
                                            </ul>
                                        </motion.li>
                                    ) : (
                                        <motion.li
                                            key={index}
                                            variants={mobileItemVariants}
                                            whileHover={{ scale: 1.03 }}
                                        >
                                            <a href={link.href}>{link.name}</a>
                                        </motion.li>
                                    )
                                ))}
                            </motion.ul>
                        )}
                    </AnimatePresence>
                </div>
                <motion.a
                    className="btn btn-ghost text-xl font-changa gap-0"
                    variants={logoVariants}
                    initial="hidden"
                    animate="visible"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                >
                    Zki
                    <motion.span
                        className="text-[#0092ca]"
                        animate={{
                            opacity: [1, 0.8, 1],
                            scale: [1, 1.02, 1]
                        }}
                        transition={{
                            duration: 2,
                            repeat: Infinity,
                            repeatType: "reverse"
                        }}
                    >
                        Str.
                    </motion.span>
                </motion.a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1 font-press-start text-xs">
                    {navLinks.map((link, index) => (
                        link.submenu ? (
                            <motion.li
                                key={index}
                                custom={index}
                                variants={navItemVariants}
                                initial="hidden"
                                animate="visible"
                                whileHover={{ y: -2 }}
                            >
                                <details className="dropdown">
                                    <summary>{link.name}</summary>
                                    <ul className="p-2">
                                        {link.submenu.map((subLink, subIndex) => (
                                            <motion.li
                                                key={subIndex}
                                                whileHover={{ x: 3, backgroundColor: "rgba(0,146,202,0.1)" }}
                                                transition={{ type: "spring", stiffness: 300 }}
                                            >
                                                <a href={subLink.href}>{subLink.name}</a>
                                            </motion.li>
                                        ))}
                                    </ul>
                                </details>
                            </motion.li>
                        ) : (
                            <motion.li
                                key={index}
                                custom={index}
                                variants={navItemVariants}
                                initial="hidden"
                                animate="visible"
                                whileHover={{ y: -2 }}
                            >
                                <a href={link.href}>{link.name}</a>
                            </motion.li>
                        )
                    ))}
                </ul>
            </div>
            <div className="navbar-end gap-4">
                <motion.div
                    variants={buttonVariants}
                    initial="hidden"
                    animate="visible"
                    whileHover="hover"
                >
                    <PixelButton className="hidden w-fit px-2 py-2.5 font-press-start text-xs text-[0.6rem] md:flex">
                        Download CV
                    </PixelButton>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, rotate: -180 }}
                    animate={{
                        opacity: 1,
                        rotate: 0,
                        transition: { duration: 0.5, delay: 0.7 }
                    }}
                    whileHover={{
                        rotate: 15,
                        transition: { duration: 0.2 }
                    }}
                >
                    <ToggleTheme />
                </motion.div>
            </div>
        </motion.div>
    );
};

export default Navbar;