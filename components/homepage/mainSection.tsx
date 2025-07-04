'use client'
import React from 'react'
import Image from 'next/image'
import { TypeAnimation } from 'react-type-animation';
import PixelButton from '../Button';
import { motion } from 'framer-motion';

interface SocialIconProps {
    name: string;
    imgSrc: string;
}

const socialMedia: SocialIconProps[] = [
    { name: "www", imgSrc: "/assets/icons/www-svg.svg" },
    { name: "facebook", imgSrc: "/assets/icons/facebook-svg.svg" },
    { name: "twitter", imgSrc: "/assets/icons/twitter-svg.svg" },
    { name: "instagram", imgSrc: "/assets/icons/instagram-svg.svg" },
    { name: "linkedin", imgSrc: "/assets/icons/linkedin-svg.svg" },
    { name: "github", imgSrc: "/assets/icons/github-svg.svg" },
];

function MainSection() {
    const [image, setImage] = React.useState(false)

    const changeImage = () => {
        setImage(!image)
    }

    // Animasi untuk teks
    const textVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 }
    };

    // Animasi untuk hero image
    const imageVariants = {
        hidden: { scale: 0.8, opacity: 0 },
        visible: {
            scale: 1,
            opacity: 1,
            transition: {
                duration: 0.6,
                ease: "easeOut"
            }
        },
        hover: {
            y: -10,
            transition: {
                duration: 0.3,
                ease: "easeInOut"
            }
        }
    };

    // Animasi untuk background elements
    const cloudVariants = {
        initial: { x: -100, opacity: 0 },
        animate: {
            x: 0,
            opacity: 1,
            transition: {
                duration: 1.5,
                ease: "easeOut"
            }
        }
    };

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="container bg-gradient-custom max-w-full flex items-center justify-center relative overflow-y-hidden h-fit lg:min-h-screen"
        >
            <div className="flex items-start justify-center w-full my-20 mt-12 z-10">
                <div className="hero-content justify-between flex-col w-full lg:flex-row-reverse gap-x-20 p-0">
                    <motion.div
                        className="max-w-[280px] relative w-full flex items-center justify-center hover:cursor-pointer m-1 py-2"
                        initial="hidden"
                        whileInView="visible"
                        whileHover="hover"
                        viewport={{ once: true, amount: 0.2 }}
                        variants={imageVariants}
                    >
                        <Image
                            src={
                                image ?
                                    "/assets/img/hero-2.png" : "/assets/img/hero-1.png"}
                            alt={"hero-image"}
                            width={600}
                            height={400}
                            loading='lazy'
                            onClick={changeImage}
                            className="p-2 px-3 w-full object-cover"
                        />
                        <motion.div
                            className="absolute w-[95%] h-full bg-base-200/40 blur-[1px] -z-10 border-[1px] border-base-100"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.3, duration: 0.5 }}
                        />
                        <motion.div
                            className="absolute w-full h-[95%] bg-base-100/30 blur-[1px] -z-10 border-[1px] border-base-100"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.5, duration: 0.5 }}
                        />
                        <motion.div
                            className="absolute right-5 w-[5%] h-[10%] top-5 -z-10 flex flex-col gap-1"
                            initial={{ opacity: 0, x: 10 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.7, duration: 0.5 }}
                        >
                            <div className="w-full h-[40%] bg-base-100/60" />
                            <div className="w-full h-[60%] bg-base-100/60" />
                        </motion.div>
                    </motion.div>
                    <div className="flex flex-col justify-center items-center max-w-xl lg:items-start gap-2">
                        <div className="flex flex-col items-center lg:items-start gap-2">
                            <motion.div
                                initial={{ x: '-100%', opacity: 0 }}
                                animate={{ x: 0, opacity: 1 }}
                                transition={{ duration: 0.5 }}
                                className="flex items-center">
                                <div className="w-6 h-[1px] bg-[#0092ca] dark:bg-red-500 mr-2" />
                                <h4 className='font-jersey-10 text-xl'>
                                    Welcome to {" "}
                                    <span className="text-[#0092ca]">MyPortfolio</span>
                                </h4>
                            </motion.div>
                            <motion.h1
                                className="text-5xl font-bold drop-shadow-text-sm"
                                variants={textVariants}
                                initial="hidden"
                                animate="visible"
                                transition={{ delay: 0.3, duration: 0.6 }}
                            >
                                Hi, I&apos;m Zaki Satria P.
                            </motion.h1>
                            <motion.div
                                variants={textVariants}
                                initial="hidden"
                                animate="visible"
                                transition={{ delay: 0.5, duration: 0.6 }}
                            >
                                <TypeAnimation
                                    sequence={[
                                        'a FullStack Developer',
                                        1000,
                                        'a UI/UX Designer',
                                        1000,
                                        'a IT Support',
                                        1000,
                                    ]}
                                    speed={50}
                                    className="drop-shadow-text-xs"
                                    style={{ fontSize: '2em' }}
                                    repeat={Infinity}
                                />
                            </motion.div>
                            <motion.p
                                className="py-2 text-foreground text-center lg:text-left text-lg lg:text-xl"
                                variants={textVariants}
                                initial="hidden"
                                animate="visible"
                                transition={{ delay: 0.7, duration: 0.6 }}
                            >
                                Explore this portfolio to discover my best work, showcasing my skills and creativity. Feel free to reach out if you&apos;re interested in collaborating or discussing new opportunities!
                            </motion.p>
                        </div>
                        <motion.div
                            className="flex flex-col gap-2"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.9, duration: 0.6 }}
                        >
                            <h4 className="font-jersey-15 text-xl drop-shadow-text-xs text-center lg:text-left">Find with me</h4>
                            <motion.div
                                initial={{ x: -100, opacity: 0 }}
                                whileInView={{ x: 0, opacity: 1 }}
                                transition={{ duration: 0.8 }}
                                viewport={{ once: true, amount: 0.2 }}
                                className="flex gap-x-4">
                                {socialMedia.map((social, index) => (
                                    social.name == 'github' ? 
                                                                        <motion.div
                                        key={social.name}
                                        initial={{ opacity: 0, x: 50 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        transition={{ duration: 0.5, delay: 1 + (index * 0.1) }}
                                        viewport={{ once: true }}
                                        whileHover={{
                                            scale: 1.1,
                                            transition: { duration: 0.2 }
                                        }}
                                        whileTap={{ scale: 0.9 }}
                                    >
                                        <PixelButton size='xs'>
                                            <Image
                                            className='dark:invert'
                                                src={social.imgSrc}
                                                alt={`${social.name}Icon`}
                                                width={24}
                                                height={24}
                                            />
                                        </PixelButton>
                                    </motion.div>
                                    :
                                    <motion.div
                                        key={social.name}
                                        initial={{ opacity: 0, x: 50 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        transition={{ duration: 0.5, delay: 1 + (index * 0.1) }}
                                        viewport={{ once: true }}
                                        whileHover={{
                                            scale: 1.1,
                                            transition: { duration: 0.2 }
                                        }}
                                        whileTap={{ scale: 0.9 }}
                                    >
                                        <PixelButton size='xs'>
                                            <Image
                                                src={social.imgSrc}
                                                alt={`${social.name}Icon`}
                                                width={24}
                                                height={24}
                                            />
                                        </PixelButton>
                                    </motion.div>
                                ))}
                            </motion.div>
                        </motion.div>
                    </div>
                </div>
            </div>
            <motion.div
                className="absolute -bottom-16 left-0 w-full overflow-hidden h-fit"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.2, duration: 0.8 }}
            >
                <motion.div
    variants={cloudVariants}
    initial="initial"
    animate="animate"
    className="relative w-full flex justify-center items-center"
>
    <Image
        src="/assets/img/wood-light.gif"
        alt="landlight"
        width={120}
        height={120}
        className='-mb-0.5'
        unoptimized
    />
</motion.div>
                <motion.div
                    className="h-[20vh] bg-[url('/assets/img/landlight.png')] w-full bg-left-top lg:bottom-0 md:-bottom-12 sm:-bottom-18"
                    initial={{ y: 100, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 1.4, duration: 0.8 }}
                />
            </motion.div>
        </motion.div>
    )
}

export default MainSection