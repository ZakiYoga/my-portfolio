'use client'
import React from 'react'
import PixelButton from '../Button'
import Image from 'next/image'
import { motion } from 'framer-motion'
import BoxPixel from '../BoxPixel'
// import { useRouter } from 'next/navigation'
// import BoxPixel from '../BoxPixel'
// import MarqueeText from '../MarqueeText';

// const techItems = [
//     { text: "JAVASCRIPT", icon: "/assets/icons/coin-svg.png", alt: "coinIcon" },
//     { text: "REACT", icon: "/assets/icons/star-svg.png", alt: "starIcon" },
//     { text: "VUE", icon: "/assets/icons/coin-svg.png", alt: "coinIcon" },
//     { text: "PHP", icon: "/assets/icons/star-svg.png", alt: "starIcon" },
//     { text: "NODEJS", icon: "/assets/icons/coin-svg.png", alt: "coinIcon" },
//     { text: "NEXTJS", icon: "/assets/icons/star-svg.png", alt: "starIcon" },
//     { text: "NUXTJS", icon: "/assets/icons/coin-svg.png", alt: "coinIcon" },
//     { text: "LARAVEL", icon: "/assets/icons/star-svg.png", alt: "starIcon" },
// ];

function ProjectSection() {
    // const router = useRouter();
    const [isLoading, setIsLoading] = React.useState(false)

    const handleViewProject = () => {
        setIsLoading(true)
        setTimeout(() => {
            setIsLoading(false);
        }, 5000);
    }

    // const onClick = () => {
    //     console.log("clicked")
    // }

    return (
        <div id="project" className="container min-h-screen flex flex-col items-center justify-start w-full h-fit max-w-none">
            <div className="flex items-center justify-start flex-col w-full h-fit mt-14 pb-36 lg:pb-40 z-10 gap-12">
                <h1 className="font-press-start text-xl uppercase drop-shadow-text-sm">My Recent Projects</h1>
                <div className="flex flex-col gap-44">
                    <div className="relative flex items-center flex-col-reverse md:flex-row justify-between gap-8 w-full h-full max-h-lg">
                        <motion.div
                            className="flex flex-col items-center md:items-start gap-4 max-w-lg">
                            <h1 className="font-jersey-20 text-2xl uppercase drop-shadow-text-xs font-bold tracking-wider">Project 1</h1>
                            <p className="text-center md:text-left">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius eum, ea explicabo perferendis consequuntur eaque inventore vel hic nihil non illo, quae odio earum cum, placeat unde repudiandae assumenda similique.
                            </p>
                            <div className="flex w-full items-center md:items-start flex-col gap-2">
                                <h4>Build Using :</h4>
                                <div className="inline-flex items-center gap-3">
                                    <Image
                                        src="/assets/projects/icons/react.png"
                                        alt="coinIcon"
                                        width={50}
                                        height={50}
                                        className="hover:border-[1px] rounded-xl border-base-content transition-all duration-300 hover:cursor-help hover:-translate-y-1 active:translate-y-0"
                                    />
                                    <Image
                                        src="/assets/projects/icons/ts.png"
                                        alt="coinIcon"
                                        width={50}
                                        height={50}
                                        className="hover:border-[1px] rounded-xl border-base-content transition-all duration-300 hover:cursor-help hover:-translate-y-1 active:translate-y-0"
                                    />
                                    <Image
                                        src="/assets/projects/icons/tailwind.png"
                                        alt="coinIcon"
                                        width={50}
                                        height={50}
                                        className="hover:border-[1px] rounded-xl border-base-content transition-all duration-300 hover:cursor-help hover:-translate-y-1 active:translate-y-0"
                                    />
                                </div>
                            </div>
                            <div className="flex flex-wrap gap-4">
                                <PixelButton variant="ghost" onClick={handleViewProject} isLoading={isLoading} loadingText="Loading ..." className='w-fit'>
                                    View Project
                                </PixelButton>
                                <PixelButton variant="ghost" size="xs" className="group px-0.5">
                                    <Image
                                        src={"/assets/icons/github-svg.svg"}
                                        alt="githubButton"
                                        width={30}
                                        height={30}
                                        className="mx-1"
                                    />
                                </PixelButton>

                            </div>
                        </motion.div>
                        <div className="relative w-full h-full grid place-content-center md:place-content-end place-items-center group hover:cursor-pointer hover:-translate-y-1 transition-all duration-300">
                            <BoxPixel
                                imageSrc="/assets/img/2.png"
                                imageAlt="Project1"
                                size="lg"
                                className="w-full h-full"
                            />
                        </div>
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                            whileHover={{ scale: 1.03 }}
                            whileTap={{ scale: 0.98 }}
                            className="absolute -right-10 -top-6 -z-20 max-w-[120px] sm:max-w-[130px] lg:max-w-[150px]">
                            <Image
                                src="/assets/img/cloud.png"
                                alt="landfly"
                                width={180}
                                height={180}
                            />
                        </motion.div>
                        <Image
                            src="/assets/img/landfly.png"
                            alt="landfly"
                            width={380}
                            height={160}
                            className="absolute -bottom-[23%] md:right-[1%]  md:-bottom-[40%] lg:right-[2%] lg:-bottom-[45%] -z-20"
                        />
                    </div>
                    <div className="relative flex items-center flex-col-reverse md:flex-row-reverse justify-between gap-8 w-full h-full max-h-lg">
                        <motion.div
                            className="flex flex-col items-center md:items-start gap-4 max-w-lg">
                            <h1 className="font-jersey-20 text-2xl uppercase drop-shadow-text-xs font-bold tracking-wider">Project 1</h1>
                            <p className="text-center md:text-left">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius eum, ea explicabo perferendis consequuntur eaque inventore vel hic nihil non illo, quae odio earum cum, placeat unde repudiandae assumenda similique.
                            </p>
                            <div className="flex w-full items-center md:items-start flex-col gap-2">
                                <h4>Build Using :</h4>
                                <div className="inline-flex items-center gap-3">
                                    <Image
                                        src="/assets/projects/icons/react.png"
                                        alt="coinIcon"
                                        width={50}
                                        height={50}
                                        className="hover:border-[1px] rounded-xl border-base-content transition-all duration-300 hover:cursor-help hover:-translate-y-1 active:translate-y-0"
                                    />
                                    <Image
                                        src="/assets/projects/icons/ts.png"
                                        alt="coinIcon"
                                        width={50}
                                        height={50}
                                        className="hover:border-[1px] rounded-xl border-base-content transition-all duration-300 hover:cursor-help hover:-translate-y-1 active:translate-y-0"
                                    />
                                    <Image
                                        src="/assets/projects/icons/tailwind.png"
                                        alt="coinIcon"
                                        width={50}
                                        height={50}
                                        className="hover:border-[1px] rounded-xl border-base-content transition-all duration-300 hover:cursor-help hover:-translate-y-1 active:translate-y-0"
                                    />
                                </div>
                            </div>
                            <div className="flex flex-wrap gap-4">
                                <PixelButton variant="ghost" onClick={handleViewProject} isLoading={isLoading} loadingText="Loading ..." className='w-fit'>
                                    View Project
                                </PixelButton>
                                <PixelButton variant="ghost" size="xs" className="group px-0.5">
                                    <Image
                                        src={"/assets/icons/github-svg.svg"}
                                        alt="githubButton"
                                        width={30}
                                        height={30}
                                        className="mx-1"
                                    />
                                </PixelButton>

                            </div>
                        </motion.div>
                        <div className="relative w-full h-full grid place-content-center md:place-content-start place-items-center group hover:cursor-pointer hover:-translate-y-1 transition-all duration-300">
                            <BoxPixel
                                imageSrc="/assets/img/2.png"
                                imageAlt="Project1"
                                size="lg"
                                className="w-full h-full"
                            />
                        </div>
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                            whileHover={{ scale: 1.03 }}
                            whileTap={{ scale: 0.98 }}
                            className="absolute -left-10 -top-6 -z-20 max-w-[120px] sm:max-w-[130px] lg:max-w-[150px]">
                            <Image
                                src="/assets/img/cloud.png"
                                alt="landfly"
                                width={180}
                                height={180}
                            />
                        </motion.div>
                        <Image
                            src="/assets/img/landfly.png"
                            alt="landfly"
                            width={380}
                            height={160}
                            className="absolute -bottom-[23%] md:left-[1%]  md:-bottom-[40%] lg:left-[2%] lg:-bottom-[45%] -z-20"
                        />
                    </div>
                    <div className="relative flex items-center flex-col-reverse md:flex-row justify-between gap-8 w-full h-full max-h-lg">
                        <motion.div
                            className="flex flex-col items-center md:items-start gap-4 max-w-lg">
                            <h1 className="font-jersey-20 text-2xl uppercase drop-shadow-text-xs font-bold tracking-wider">Project 1</h1>
                            <p className="text-center md:text-left">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius eum, ea explicabo perferendis consequuntur eaque inventore vel hic nihil non illo, quae odio earum cum, placeat unde repudiandae assumenda similique.
                            </p>
                            <div className="flex w-full items-center md:items-start flex-col gap-2">
                                <h4>Build Using :</h4>
                                <div className="inline-flex items-center gap-3">
                                    <Image
                                        src="/assets/projects/icons/react.png"
                                        alt="coinIcon"
                                        width={50}
                                        height={50}
                                        className="hover:border-[1px] rounded-xl border-base-content transition-all duration-300 hover:cursor-help hover:-translate-y-1 active:translate-y-0"
                                    />
                                    <Image
                                        src="/assets/projects/icons/ts.png"
                                        alt="coinIcon"
                                        width={50}
                                        height={50}
                                        className="hover:border-[1px] rounded-xl border-base-content transition-all duration-300 hover:cursor-help hover:-translate-y-1 active:translate-y-0"
                                    />
                                    <Image
                                        src="/assets/projects/icons/tailwind.png"
                                        alt="coinIcon"
                                        width={50}
                                        height={50}
                                        className="hover:border-[1px] rounded-xl border-base-content transition-all duration-300 hover:cursor-help hover:-translate-y-1 active:translate-y-0"
                                    />
                                </div>
                            </div>
                            <div className="flex flex-wrap gap-4">
                                <PixelButton variant="ghost" onClick={handleViewProject} isLoading={isLoading} loadingText="Loading ..." className='w-fit'>
                                    View Project
                                </PixelButton>
                                <PixelButton variant="ghost" size="xs" className="group px-0.5">
                                    <Image
                                        src={"/assets/icons/github-svg.svg"}
                                        alt="githubButton"
                                        width={30}
                                        height={30}
                                        className="mx-1"
                                    />
                                </PixelButton>

                            </div>
                        </motion.div>
                        <div className="relative w-full h-full grid place-content-center md:place-content-end place-items-center group hover:cursor-pointer hover:-translate-y-1 transition-all duration-300">
                            <BoxPixel
                                imageSrc="/assets/img/2.png"
                                imageAlt="Project1"
                                size="lg"
                                className="w-full h-full"
                            />
                        </div>
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                            whileHover={{ scale: 1.03 }}
                            whileTap={{ scale: 0.98 }}
                            className="absolute -right-10 -top-6 -z-20 max-w-[120px] sm:max-w-[130px] lg:max-w-[150px]">
                            <Image
                                src="/assets/img/cloud.png"
                                alt="landfly"
                                width={180}
                                height={180}
                            />
                        </motion.div>
                        <Image
                            src="/assets/img/landfly.png"
                            alt="landfly"
                            width={380}
                            height={160}
                            className="absolute -bottom-[23%] md:right-[1%]  md:-bottom-[40%] lg:right-[2%] lg:-bottom-[45%] -z-20"
                        />
                    </div>
                    <div className="relative flex items-center flex-col-reverse md:flex-row-reverse justify-between gap-8 w-full h-full max-h-lg">
                        <motion.div
                            className="flex flex-col items-center md:items-start gap-4 max-w-lg">
                            <h1 className="font-jersey-20 text-2xl uppercase drop-shadow-text-xs font-bold tracking-wider">Project 1</h1>
                            <p className="text-center md:text-left">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius eum, ea explicabo perferendis consequuntur eaque inventore vel hic nihil non illo, quae odio earum cum, placeat unde repudiandae assumenda similique.
                            </p>
                            <div className="flex w-full items-center md:items-start flex-col gap-2">
                                <h4>Build Using :</h4>
                                <div className="inline-flex items-center gap-3">
                                    <Image
                                        src="/assets/projects/icons/react.png"
                                        alt="coinIcon"
                                        width={50}
                                        height={50}
                                        className="hover:border-[1px] rounded-xl border-base-content transition-all duration-300 hover:cursor-help hover:-translate-y-1 active:translate-y-0"
                                    />
                                    <Image
                                        src="/assets/projects/icons/ts.png"
                                        alt="coinIcon"
                                        width={50}
                                        height={50}
                                        className="hover:border-[1px] rounded-xl border-base-content transition-all duration-300 hover:cursor-help hover:-translate-y-1 active:translate-y-0"
                                    />
                                    <Image
                                        src="/assets/projects/icons/tailwind.png"
                                        alt="coinIcon"
                                        width={50}
                                        height={50}
                                        className="hover:border-[1px] rounded-xl border-base-content transition-all duration-300 hover:cursor-help hover:-translate-y-1 active:translate-y-0"
                                    />
                                </div>
                            </div>
                            <div className="flex flex-wrap gap-4">
                                <PixelButton variant="ghost" onClick={handleViewProject} isLoading={isLoading} loadingText="Loading ..." className='w-fit'>
                                    View Project
                                </PixelButton>
                                <PixelButton variant="ghost" size="xs" className="group px-0.5">
                                    <Image
                                        src={"/assets/icons/github-svg.svg"}
                                        alt="githubButton"
                                        width={30}
                                        height={30}
                                        className="mx-1"
                                    />
                                </PixelButton>

                            </div>
                        </motion.div>
                        <div className="relative w-full h-full grid place-content-center md:place-content-start place-items-center group hover:cursor-pointer hover:-translate-y-1 transition-all duration-300">
                            <BoxPixel
                                imageSrc="/assets/img/2.png"
                                imageAlt="Project1"
                                size="lg"
                                className="w-full h-full"
                            />
                        </div>
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                            whileHover={{ scale: 1.03 }}
                            whileTap={{ scale: 0.98 }}
                            className="absolute -left-10 -top-6 -z-20 max-w-[120px] sm:max-w-[130px] lg:max-w-[150px]">
                            <Image
                                src="/assets/img/cloud.png"
                                alt="landfly"
                                width={180}
                                height={180}
                            />
                        </motion.div>
                        <Image
                            src="/assets/img/landfly.png"
                            alt="landfly"
                            width={380}
                            height={160}
                            className="absolute -bottom-[23%] md:left-[1%]  md:-bottom-[40%] lg:left-[2%] lg:-bottom-[45%] -z-20"
                        />
                    </div>
                    <div className="relative flex items-center flex-col-reverse md:flex-row justify-between gap-8 w-full h-full max-h-lg">
                        <motion.div
                            className="flex flex-col items-center md:items-start gap-4 max-w-lg">
                            <h1 className="font-jersey-20 text-2xl uppercase drop-shadow-text-xs font-bold tracking-wider">Project 1</h1>
                            <p className="text-center md:text-left">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius eum, ea explicabo perferendis consequuntur eaque inventore vel hic nihil non illo, quae odio earum cum, placeat unde repudiandae assumenda similique.
                            </p>
                            <div className="flex w-full items-center md:items-start flex-col gap-2">
                                <h4>Build Using :</h4>
                                <div className="inline-flex items-center gap-3">
                                    <Image
                                        src="/assets/projects/icons/react.png"
                                        alt="coinIcon"
                                        width={50}
                                        height={50}
                                        className="hover:border-[1px] rounded-xl border-base-content transition-all duration-300 hover:cursor-help hover:-translate-y-1 active:translate-y-0"
                                    />
                                    <Image
                                        src="/assets/projects/icons/ts.png"
                                        alt="coinIcon"
                                        width={50}
                                        height={50}
                                        className="hover:border-[1px] rounded-xl border-base-content transition-all duration-300 hover:cursor-help hover:-translate-y-1 active:translate-y-0"
                                    />
                                    <Image
                                        src="/assets/projects/icons/tailwind.png"
                                        alt="coinIcon"
                                        width={50}
                                        height={50}
                                        className="hover:border-[1px] rounded-xl border-base-content transition-all duration-300 hover:cursor-help hover:-translate-y-1 active:translate-y-0"
                                    />
                                </div>
                            </div>
                            <div className="flex flex-wrap gap-4">
                                <PixelButton variant="ghost" onClick={handleViewProject} isLoading={isLoading} loadingText="Loading ..." className='w-fit'>
                                    View Project
                                </PixelButton>
                                <PixelButton variant="ghost" size="xs" className="group px-0.5">
                                    <Image
                                        src={"/assets/icons/github-svg.svg"}
                                        alt="githubButton"
                                        width={30}
                                        height={30}
                                        className="mx-1"
                                    />
                                </PixelButton>

                            </div>
                        </motion.div>
                        <div className="relative w-full h-full grid place-content-center md:place-content-end place-items-center group hover:cursor-pointer hover:-translate-y-1 transition-all duration-300">
                            <BoxPixel
                                imageSrc="/assets/img/2.png"
                                imageAlt="Project1"
                                size="lg"
                                className="w-full h-full"
                            />
                        </div>
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                            whileHover={{ scale: 1.03 }}
                            whileTap={{ scale: 0.98 }}
                            className="absolute -right-10 -top-6 -z-20 max-w-[120px] sm:max-w-[130px] lg:max-w-[150px]">
                            <Image
                                src="/assets/img/cloud.png"
                                alt="landfly"
                                width={180}
                                height={180}
                            />
                        </motion.div>
                        <Image
                            src="/assets/img/landfly.png"
                            alt="landfly"
                            width={380}
                            height={160}
                            className="absolute -bottom-[23%] md:right-[1%]  md:-bottom-[40%] lg:right-[2%] lg:-bottom-[45%] -z-20"
                        />
                    </div>
                    <div className="relative flex items-center flex-col-reverse md:flex-row-reverse justify-between gap-8 w-full h-full max-h-lg">
                        <motion.div
                            className="flex flex-col items-center md:items-start gap-4 max-w-lg">
                            <h1 className="font-jersey-20 text-2xl uppercase drop-shadow-text-xs font-bold tracking-wider">Project 1</h1>
                            <p className="text-center md:text-left">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius eum, ea explicabo perferendis consequuntur eaque inventore vel hic nihil non illo, quae odio earum cum, placeat unde repudiandae assumenda similique.
                            </p>
                            <div className="flex w-full items-center md:items-start flex-col gap-2">
                                <h4>Build Using :</h4>
                                <div className="inline-flex items-center gap-3">
                                    <Image
                                        src="/assets/projects/icons/react.png"
                                        alt="coinIcon"
                                        width={50}
                                        height={50}
                                        className="hover:border-[1px] rounded-xl border-base-content transition-all duration-300 hover:cursor-help hover:-translate-y-1 active:translate-y-0"
                                    />
                                    <Image
                                        src="/assets/projects/icons/ts.png"
                                        alt="coinIcon"
                                        width={50}
                                        height={50}
                                        className="hover:border-[1px] rounded-xl border-base-content transition-all duration-300 hover:cursor-help hover:-translate-y-1 active:translate-y-0"
                                    />
                                    <Image
                                        src="/assets/projects/icons/tailwind.png"
                                        alt="coinIcon"
                                        width={50}
                                        height={50}
                                        className="hover:border-[1px] rounded-xl border-base-content transition-all duration-300 hover:cursor-help hover:-translate-y-1 active:translate-y-0"
                                    />
                                </div>
                            </div>
                            <div className="flex flex-wrap gap-4">
                                <PixelButton variant="ghost" onClick={handleViewProject} isLoading={isLoading} loadingText="Loading ..." className='w-fit'>
                                    View Project
                                </PixelButton>
                                <PixelButton variant="ghost" size="xs" className="group px-0.5">
                                    <Image
                                        src={"/assets/icons/github-svg.svg"}
                                        alt="githubButton"
                                        width={30}
                                        height={30}
                                        className="mx-1"
                                    />
                                </PixelButton>

                            </div>
                        </motion.div>
                        <div className="relative w-full h-full grid place-content-center md:place-content-start place-items-center group hover:cursor-pointer hover:-translate-y-1 transition-all duration-300">
                            <BoxPixel
                                imageSrc="/assets/img/2.png"
                                imageAlt="Project1"
                                size="lg"
                                className="w-full h-full"
                            />
                        </div>
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                            whileHover={{ scale: 1.03 }}
                            whileTap={{ scale: 0.98 }}
                            className="absolute -left-10 -top-6 -z-20 max-w-[120px] sm:max-w-[130px] lg:max-w-[150px]">
                            <Image
                                src="/assets/img/cloud.png"
                                alt="landfly"
                                width={180}
                                height={180}
                            />
                        </motion.div>
                        <Image
                            src="/assets/img/landflylast.png"
                            alt="landfly"
                            width={380}
                            height={160}
                            className="absolute -bottom-[28%] md:left-[1%] md:-bottom-[45%] lg:left-[2%] lg:-bottom-[60%] -z-20"
                        />
                    </div>
                </div>
            </div>
        </div >
    )
}

export default ProjectSection
