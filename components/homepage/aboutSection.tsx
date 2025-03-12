'use client'

import React from 'react'
import Image from 'next/image'
import PixelButton from '../Button'
import { motion } from 'framer-motion'

const Skills = [
    "HTML",
    "CSS",
    "JavaScript",
    "React",
    "Next.js",
    "Tailwind CSS",
    "PHP",
    "Laravel",
    "MySQL",
    "MongoDB",
    "Postgre"
]

function AboutSection() {
    return (
        <div id="about" className="container relative min-h-screen h-fit w-full bg-[url('/assets/img/About-LightMode.png')] bg-[-6px_0px] max-w-none overflow-scroll">
            <div className="flex item-center justify-center md:flex-row-reverse py-12 min-h-screen text-white pt-8 z-10 md:gap-16 lg:gap-[24%]">
                <motion.div
                    initial={{ opacity: 0, x: 100 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    viewport={{ once: true }}
                    className="flex md:justify-between items-start flex-col mt-8 gap-6 "
                >
                    <div className="flex flex-col md:text-right gap-3 z-10">
                        <motion.h1
                            initial={{ opacity: 0, y: -20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                            viewport={{ once: true }}
                            className="font-press-start text-2xl uppercase drop-shadow-[4px_4px_0_#000]"
                        >
                            About
                        </motion.h1>
                        <motion.p
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            transition={{ duration: 0.5, delay: 0.3 }}
                            viewport={{ once: true }}
                            className="tracking-wide lg:text-lg"
                        >
                            Hello, I&apos;m Zaki Satria Prayoga, a Fullstack Web Developer based in Surakarta. I&apos;m a recent graduate from the University of Surakarta with a Bachelor&apos;s degree in Informatics Engineering.
                        </motion.p>
                        <motion.p
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            transition={{ duration: 0.5, delay: 0.5 }}
                            viewport={{ once: true }}
                            className="tracking-wide lg:text-lg md:hidden"
                        >
                            Experienced full-stack developer with expertise in JavaScript, PHP, and Python. Proficient in Laravel, Next.js, React, and Vue.js for web application development, and skilled in managing MySQL, MongoDB, and PostgreSQL databases. Committed to continuous learning and collaborative innovation.
                        </motion.p>
                    </div>
                    <div className="grid place-content-center w-full md:hidden z-10">
                        <Image
                            src="/assets/img/AboutImage.png"
                            alt="Zaki Satria"
                            width={300}
                            height={300}
                            className="object-cover h-auto"
                        />
                    </div>
                    <div className="flex flex-col gap-3 z-10 md:items-end lg:items-start ">
                        <motion.h2
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.7, delay: 0.4 }}
                            viewport={{ once: true }}
                            className="uppercase font-jersey-20 text-2xl font-bold tracking-wider drop-shadow-[2px_2px_0_#000]">
                            Skills
                        </motion.h2>
                        <motion.div
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.7, delay: 0.6 }}
                            viewport={{ once: true }}
                            className="inline-flex flex-wrap gap-x-4 gap-y-6 md:justify-end lg:justify-start py-1">
                            {
                                Skills.map((skill, index) => (
                                    <motion.div
                                        key={index}
                                        initial={{ opacity: 0, scale: 0.8 }}
                                        whileInView={{ opacity: 1, scale: 1 }}
                                        transition={{ duration: 0.5, delay: 0.1 * index }}
                                        viewport={{ once: true }}
                                        whileHover={{ scale: 1.1, rotate: [-1, 1, -1, 0] }}
                                    >
                                        <PixelButton size="xs" variant="ghost">
                                            {skill}
                                        </PixelButton>
                                    </motion.div>
                                ))
                            }
                        </motion.div>
                    </div>
                </motion.div>
                <motion.div
                    initial={{ opacity: 0, x: -100 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    viewport={{ once: true }}
                    className="flex justify-between items-start flex-col mt-8 lg:pr-4 max-w-[40%] z-10"
                >
                    <motion.h1
                        initial={{ opacity: 0, y: -30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                        className="hidden md:flex font-press-start text-3xl tracking-[.4em] drop-shadow-[4px_4px_0_#000]"
                    >
                        ???
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 0.5, delay: 0.4 }}
                        viewport={{ once: true }}
                        className="hidden lg:text-right tracking-wide lg:text-lg md:flex mt-10 lg:mt-0 "
                    >
                        Experienced full-stack developer with expertise in JavaScript, PHP, and Python. Proficient in Laravel, Next.js, React, and Vue.js for web application development, and skilled in managing MySQL, MongoDB, and PostgreSQL databases. Committed to continuous learning and collaborative innovation.
                    </motion.p>
                </motion.div>
            </div>
            <div className="absolute top-[10%] left-0 lg:top-1/2 lg:left-1/2 lg:-translate-y-1/2 lg:-translate-x-1/2 w-full h-full flex items-center justify-center ">
                <motion.h1
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{
                        duration: 1.2,
                        type: "spring",
                        stiffness: 100
                    }}
                    viewport={{ once: true }}
                    className="font-press-start text-4xl tracking-wider xs:text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-white/15 uppercase transform scale-y-150 drop-shadow-[4px_4px_0_#000]"
                >
                    Zaki Satria
                </motion.h1>
            </div>
            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{
                    duration: 0.8,
                    delay: 0.3,
                }}
                className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-[calc(100vh-6rem)] w-auto md:flex hidden">
                <Image
                    src="/assets/img/AboutImage.png"
                    alt="Zaki Satria"
                    width={400}
                    height={400}
                    className="object-cover h-auto"
                />
            </motion.div>
        </div >
    )
}

export default AboutSection