'use client'

import React from 'react'
import PixelButton from '../Button'
import Image from 'next/image'
import { motion } from 'framer-motion'
import BoxPixel from '../BoxPixel'

const ProjectItem = ({ project, index, isLoading, handleViewProject, handleViewGithub }: ProjectItemProps) => {

    const isEven = index % 2 !== 0;

    // Animasi untuk item proyek
    const itemVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.6,
                delay: index * 0.2,
                ease: "easeOut"
            }
        }
    };

    // Animasi untuk teks
    const textVariants = {
        hidden: { opacity: 0, x: isEven ? 30 : -30 },
        visible: {
            opacity: 1,
            x: 0,
            transition: {
                duration: 0.5,
                delay: (index * 0.2) + 0.3,
                ease: "easeOut"
            }
        }
    };

    // Icon teknologi
    const techIcons: { [key: string]: string } = {
        angular: "/assets/projects/icons/angular.png",
        korlin: "/assets/projects/icons/korlin.png",
        firebase: "/assets/projects/icons/firebase.png",
        flutter: "/assets/projects/icons/flutter.png",
        golang: "/assets/projects/icons/golang.png",
        mongo: "/assets/projects/icons/mongo-db.png",
        mysql: "/assets/projects/icons/mysql.png",
        sql: "/assets/projects/icons/sql.png",
        cSharp: "/assets/projects/icons/c-sharp.png",
        php: "/assets/projects/icons/php.png",
        html5: "/assets/projects/icons/html5.png",
        python: "/assets/projects/icons/python.png",
        vue: "/assets/projects/icons/vue.png",
        react: "/assets/projects/icons/react.png",
        nodejs: "/assets/projects/icons/nodejs.png",
        nextjs: "/assets/projects/icons/nextjs.png",
        laravel: "/assets/projects/icons/laravel.png",
        js: "/assets/projects/icons/js.png",
        ts: "/assets/projects/icons/ts.png",
        css: "/assets/projects/icons/css.png",
        tailwind: "/assets/projects/icons/tailwind.png",
    };

    return (
        <motion.div
            className={`relative flex items-center flex-col-reverse ${isEven ? 'md:flex-row-reverse' : 'md:flex-row'} justify-between gap-8 w-full h-full`}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={itemVariants}
        >
            <motion.div
                className="flex flex-col items-center md:items-start gap-2 max-w-lg"
                variants={textVariants}
            >
                <h1 className="font-jersey-20 text-2xl uppercase drop-shadow-text-xs font-bold tracking-wider">{`> ${project.title}`}</h1>
                <p className="text-center md:text-left">{`${project.description}`}</p>
                <div className="flex w-full items-center md:items-start flex-col gap-2">
                    <h4>Build Using :</h4>
                    <div className="inline-flex items-center gap-3">
                        {project.techStack.map((tech, i) => (
                            <motion.div
                                key={i}
                                whileHover={{ scale: 1.1, y: -5 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                <Image
                                    src={techIcons[tech]}
                                    alt={tech}
                                    width={50}
                                    height={50}
                                    className="hover:border-[1px] rounded-xl border-base-content transition-all duration-300 hover:cursor-help hover:-translate-y-1 active:translate-y-0"
                                />
                            </motion.div>
                        ))}
                    </div>
                </div>
                <div className="flex flex-wrap gap-4 mt-2">
                    <PixelButton variant="ghost" onClick={handleViewProject} isLoading={isLoading} loadingText="Loading ..." className='w-fit'>
                        View Project
                    </PixelButton>
                    <PixelButton variant="ghost" onClick={handleViewGithub} isLoading={isLoading} className="w-fit">
                        Documentation
                    </PixelButton>
                </div>
            </motion.div>

            <motion.div
                className={`relative w-full h-full grid place-content-center ${isEven ? 'md:place-content-start' : 'md:place-content-end'} place-items-center group hover:cursor-pointer transition-all duration-300`}
                whileHover={{ y: -10 }}
                transition={{ type: "spring", stiffness: 300 }}
            >
                <BoxPixel
                    imageSrc="/assets/img/2.png"
                    imageAlt={project.title}
                    size="lg"
                    className="w-full h-full"
                />
            </motion.div>

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                whileHover={{ scale: 1.03, rotate: isEven ? -5 : 5 }}
                whileTap={{ scale: 0.98 }}
                className={`absolute ${isEven ? '-left-10' : '-right-10'} -top-6 -z-20 max-w-[120px] sm:max-w-[130px] lg:max-w-[150px]`}
            >
                {/* <Image
            src="/assets/img/cloud.png"
            alt="cloud"
            width={180}
            height={180}
        /> */}
            </motion.div>

            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.3 }}
                viewport={{ once: true }}
                className={`absolute -bottom-[23%] ${isEven ? 'md:left-[1%] md:-bottom-[40%] lg:left-[2%] lg:-bottom-[45%]' : 'md:right-[1%] md:-bottom-[40%] lg:right-[2%] lg:-bottom-[45%]'} -z-20`}
            >
                <Image
                    src="/assets/img/landfly.png"
                    alt="landfly"
                    width={380}
                    height={160}
                />
            </motion.div>
        </motion.div>
    )
}

export default ProjectItem