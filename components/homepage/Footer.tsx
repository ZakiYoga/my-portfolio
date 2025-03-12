'use client'
import React from 'react'
import PixelButton from '../Button';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';

const MenuFooter = [
    { title: 'About', link: '#' },
    { title: 'Certificate', link: '#' },
    { title: 'Project', link: '#' },
    { title: 'Contact', link: '#' },
]

const SocialFooter = [
    { title: 'Web Portfolio', icon: "www-svg.svg", link: '#' },
    { title: 'Github', icon: "github-svg.svg", link: '#' },
    { title: 'Linkedin', icon: "linkedin-svg.svg", link: '#' },
]

interface FooterProps {
    title: string;
    link: string;
    icon?: string;
    alt?: string;
}

function Footer() {
    // Animasi untuk bagian yang berbeda
    const landVariants = {
        hidden: { opacity: 1, y: 100 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.8,
                ease: "easeOut"
            }
        }
    };

    const containerVariants = {
        hidden: { opacity: 1 },
        visible: {
            opacity: 1,
            transition: {
                duration: 0.5,
                staggerChildren: 0.2,
                delayChildren: 0.3
            }
        }
    };

    const itemVariants = {
        hidden: { y: 20, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: { duration: 0.5 }
        }
    };

    const logoVariants = {
        hidden: { x: -50, opacity: 0 },
        visible: {
            x: 0,
            opacity: 1,
            transition: {
                type: "spring",
                stiffness: 200,
                damping: 20
            }
        }
    };

    const menuItemVariants = {
        hidden: { y: -20, opacity: 0 },
        visible: (i: number) => ({
            y: 0,
            opacity: 1,
            transition: {
                delay: i * 0.1,
                duration: 0.5
            }
        })
    };

    const socialItemVariants = {
        hidden: { scale: 0, opacity: 0 },
        visible: (i: number) => ({
            scale: 1,
            opacity: 1,
            transition: {
                delay: 0.5 + (i * 0.1),
                type: "spring",
                stiffness: 300,
                damping: 15
            }
        })
    };

    const copyrightVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                delay: 1,
                duration: 0.8
            }
        }
    };

    const heartBeatVariants = {
        hidden: { scale: 0.8, opacity: 0 },
        visible: {
            scale: [1, 1.2, 1, 1.2, 1],
            opacity: 1,
            transition: {
                delay: 1.2,
                duration: 1.5,
                times: [0, 0.25, 0.5, 0.75, 1],
                repeat: Infinity,
                repeatDelay: 2
            }
        }
    };

    return (
        <div className="bg-sky">
            <motion.div
                className="bg-sky"
                variants={landVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false, amount: 0.3 }}
            >
                <div className="h-[20vh] bg-[url('/assets/img/landlight.png')] w-full bg-[-6px_-4px]"
                />
                <motion.div
                    className="container flex flex-col relative mx-auto max-w-none w-full bg-[url('/assets/img/About-LightMode.png')] bg-[-11px_-6px]"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: false, amount: 0.3 }}
                >
                    <div className="footer justify-between overflow-hidden w-full h-full text-white py-10">
                        <motion.div
                            className="flex flex-col gap-4"
                            variants={itemVariants}
                        >
                            <motion.a
                                className="text-4xl font-changa gap-0 drop-shadow-[3px_3px_0_#000]"
                                variants={logoVariants}
                            >
                                Zki
                                <motion.span
                                    className="text-[#0092ca]"
                                    initial={{ opacity: 0 }}
                                    whileInView={{ opacity: 1 }}
                                    transition={{ delay: 0.4, duration: 0.3 }}
                                    viewport={{ once: false }}
                                >
                                    Str.
                                </motion.span>
                            </motion.a>
                            <motion.div
                                className="text-lg space-x-0 md:max-w-60"
                                variants={itemVariants}
                            >
                                <motion.p
                                    className=""
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    transition={{ delay: 0.6, duration: 0.5 }}
                                    viewport={{ once: false }}
                                >
                                    Thank you for visiting!
                                </motion.p>
                                <motion.p
                                    className=""
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    transition={{ delay: 0.8, duration: 0.5 }}
                                    viewport={{ once: false }}
                                >
                                    Feel free to reach out for the collabotations.
                                </motion.p>
                            </motion.div>
                        </motion.div>
                        <div className="flex flex-col items-end justify-between h-full pr-1">
                            <motion.ul
                                className="inline-flex gap-6"
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                transition={{ duration: 0.5 }}
                                viewport={{ once: false }}
                            >
                                {
                                    MenuFooter.map((menu: FooterProps, index: number) => (
                                        <motion.li
                                            key={index}
                                            className="my-2 hover:-translate-y-1 duration-300 transition-all"
                                            custom={index}
                                            variants={menuItemVariants}
                                            initial="hidden"
                                            whileInView="visible"
                                            viewport={{ once: false }}
                                            whileHover={{ scale: 1.1 }}
                                            whileTap={{ scale: 0.95 }}
                                        >
                                            <a href={menu.link}
                                                className="py-2.5 px-4 text-xs font-press-start drop-shadow-[3px_3px_0_#000] rounded-md">
                                                {menu.title}
                                            </a>
                                        </motion.li>
                                    ))
                                }
                            </motion.ul>
                            <motion.ul
                                className="inline-flex gap-6"
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                transition={{ duration: 0.5, delay: 0.3 }}
                                viewport={{ once: false }}
                            >
                                {
                                    SocialFooter.map((menu: FooterProps, index: number) => (
                                        <motion.li
                                            key={index}
                                            className="text-xs font-press-start"
                                            custom={index}
                                            variants={socialItemVariants}
                                            initial="hidden"
                                            whileInView="visible"
                                            viewport={{ once: false }}
                                            whileHover={{
                                                rotate: [0, -10, 10, -10, 0],
                                                transition: { duration: 0.5 }
                                            }}
                                        >
                                            <PixelButton className="px-1" variant="ghost" size='xs'>
                                                <Image
                                                    src={`/assets/icons/${menu.icon}` || ''}
                                                    alt={menu.title}
                                                    width={24}
                                                    height={24}
                                                    className="w-4 h-4"
                                                />
                                            </PixelButton>
                                        </motion.li>
                                    ))
                                }
                            </motion.ul>
                        </div>
                    </div>
                    <motion.div
                        className="inline-flex items-center justify-center w-full text-white py-2 font-jersey-20 gap-x-1.5"
                        variants={copyrightVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: false, amount: 0.5 }}
                    >
                        [C]2024. Made with
                        <motion.div
                            variants={heartBeatVariants}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: false }}
                        >
                            <Image
                                src="/assets/icons/heart-svg.svg"
                                alt="heart"
                                width={16}
                                height={16}
                                className="w-4 h-4"
                            />
                        </motion.div>
                        by
                        <motion.div
                            whileHover={{ scale: 1.1, color: "#0092ca" }}
                            transition={{ duration: 0.2 }}
                        >
                            <Link href="/" className="hover:text-primary">
                                ZakiStr
                            </Link>
                        </motion.div>
                    </motion.div>
                </motion.div>
            </motion.div>
        </div>
    )
}

export default Footer