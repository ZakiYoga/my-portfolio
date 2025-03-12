'use client'
import React from 'react'
import Image from 'next/image'
import { TypeAnimation } from 'react-type-animation';
import PixelButton from '../Button';
import { motion } from 'framer-motion';

interface SocialIconProps {
    name: string,
    imgSrc: string,
}

const socialMedia: SocialIconProps = [
    { name: "www", imgSrc: "/assets/img/www-svg.svg" },
    { name: "facebook", imgSrc: "/assets/img/facebook-svg.svg" },
    { name: "twitter", imgSrc: "/assets/img/twitter-svg.svg" },
    { name: "instagram", imgSrc: "/assets/img/instagram-svg.svg" },
    { name: "linkedin", imgSrc: "/assets/img/linkedin-svg.svg" },
    { name: "github", imgSrc: "/assets/img/github-svg.svg" },
]

function MainSection() {
    const [image, setImage] = React.useState(false)

    const changeImage = () => {
        setImage(!image)
    }

    return (
        <div className="container bg-gradient-custom max-w-full flex items-center justify-center relative overflow-y-hidden h-fit lg:min-h-screen">
            <div className="flex items-start justify-center w-full my-20 mt-12 z-10">
                <div className="hero-content justify-between flex-col w-full lg:flex-row-reverse gap-x-20 p-0">
                    <div className="max-w-[280px] relative w-full flex items-center justify-center hover:cursor-pointer hover:-translate-y-1 transition-all duration-300 m-1 py-2">
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
                        <div className="absolute w-[95%] h-full bg-base-200/40 blur-[1px] -z-10 border-[1px] border-base-100" />
                        <div className="absolute w-full h-[95%] bg-base-100/30 blur-[1px] -z-10 border-[1px] border-base-100" />
                        <div className="absolute right-5 w-[5%] h-[10%] top-5 -z-10 flex flex-col gap-1">
                            <div className="w-full h-[40%] bg-neutral-50/80" />
                            <div className="w-full h-[60%] bg-neutral-50/80" />
                        </div>
                    </div>
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
                            <h1 className="text-5xl font-bold drop-shadow-text-sm">Hi, I&apos;m Zaki Satria P.</h1>
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
                            <p className="py-2 text-foreground text-center lg:text-left text-lg lg:text-xl">
                                Explore this portfolio to discover my best work, showcasing my skills and creativity. Feel free to reach out if you&apos;re interested in collaborating or discussing new opportunities!
                            </p>
                        </div>
                        <div className="flex flex-col gap-2">
                            <h4 className="font-jersey-15 text-xl drop-shadow-text-xs text-center lg:text-left">Find with me</h4>
                            <motion.div
                                initial={{ x: -100, opacity: 0 }}
                                whileInView={{ x: 0, opacity: 1 }}
                                transition={{ duration: 0.8, staggerChildren: 0.1 }}
                                viewport={{ once: true, amount: 0.2 }}
                                className="flex gap-x-4">
                                <motion.div
                                    initial={{ opacity: 0, x: 50 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    transition={{ duration: 0.5, delay: 0.1 }}
                                    viewport={{ once: true }}
                                    className="">
                                    <PixelButton size='xs'>
                                        <Image
                                            src="/assets/icons/www-svg.svg"
                                            alt="wwwIcon"
                                            width={24}
                                            height={24}
                                        />
                                    </PixelButton>
                                </motion.div>
                                <motion.div
                                    initial={{ opacity: 0, x: 50 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    transition={{ duration: 0.5, delay: 0.2 }}
                                    viewport={{ once: true }}
                                    className="">
                                    <PixelButton size='xs'>
                                        <Image
                                            src="/assets/icons/facebook-svg.svg"
                                            alt="facebookIcon"
                                            width={24}
                                            height={24}
                                        />
                                    </PixelButton>s1
                                </motion.div>
                                <PixelButton size='xs'>
                                    <Image
                                        src="/assets/icons/twitter-svg.svg"
                                        alt="twitterIcon"
                                        width={24}
                                        height={24}
                                    />
                                </PixelButton>
                                <PixelButton size='xs'>
                                    <Image
                                        src="/assets/icons/instagram-svg.svg"
                                        alt="instagramIcon"
                                        width={24}
                                        height={24}
                                    />
                                </PixelButton>
                                <PixelButton size='xs'>
                                    <Image
                                        src="/assets/icons/linkedin-svg.svg"
                                        alt="linkedinIcon"
                                        width={24}
                                        height={24}
                                    />
                                </PixelButton>
                                <PixelButton size='xs'>
                                    <Image
                                        src="/assets/icons/github-svg.svg"
                                        alt="githubIcon"
                                        width={24}
                                        height={24}
                                    />
                                </PixelButton>
                            </motion.div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="absolute -bottom-16 left-0 w-full overflow-hidden h-fit">
                <motion.div
                    initial={{ x: 0 }}
                    style={{ x: '100%', opacity: 1 }}
                >
                    <Image
                        src="/assets/img/cloud.png"
                        alt="landlight"
                        width={80}
                        height={80}
                        className='-mb-1'
                    />
                </motion.div>
                <div className="h-[20vh] bg-[url('/assets/img/landlight.png')] w-full bg-left-top lg:bottom-0 md:-bottom-12 sm:-bottom-18" />
            </div>
        </div >
    )
}

export default MainSection
