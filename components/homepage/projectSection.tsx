'use client'
import React from 'react'
// import Image from 'next/image'
// import { useRouter } from 'next/navigation'
import PixelButton from '../Button'
import MarqueeText from '../MarqueeText';

const techItems = [
    { text: "JAVASCRIPT", icon: "/assets/icons/coin-svg.png", alt: "coinIcon" },
    { text: "REACT", icon: "/assets/icons/star-svg.png", alt: "starIcon" },
    { text: "VUE", icon: "/assets/icons/coin-svg.png", alt: "coinIcon" },
    { text: "PHP", icon: "/assets/icons/star-svg.png", alt: "starIcon" },
    { text: "NODEJS", icon: "/assets/icons/coin-svg.png", alt: "coinIcon" },
    { text: "NEXTJS", icon: "/assets/icons/star-svg.png", alt: "starIcon" },
    { text: "NUXTJS", icon: "/assets/icons/coin-svg.png", alt: "coinIcon" },
    { text: "LARAVEL", icon: "/assets/icons/star-svg.png", alt: "starIcon" },
];

function ProjectSection() {
    // const router = useRouter();
    const [isLoading, setIsLoading] = React.useState(false)

    const handleViewProject = () => {
        setIsLoading(true)
        setTimeout(() => {
            setIsLoading(false);
        }, 5000);
    }

    return (
        <>
            <div className="inline-flex items-center tracking-wider uppercase text-2xl w-full h-fit gap-8 py-4 bg-transparent overflow-x-hidden">
                <MarqueeText
                    items={techItems}
                    speed={15}
                    className="bg-base-200 rounded-lg"
                    textClassName="font-bold"
                    iconClassName="grid place-items-center"
                    direction="right"
                />
            </div>
            <div className="container h-screen flex flex-col items-center justify-start w-full max-w-none bg-gradient-custom overflow-x-hidden">
                <h2 className="font-press-start text-2xl">Recent Projects</h2>
                <div className="flex items-center justify-center gap-16">
                    <div className="flex flex-col gap-4">
                        <h1>Project 1</h1>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius eum, ea explicabo perferendis consequuntur eaque inventore vel hic nihil non illo, quae odio earum cum, placeat unde repudiandae assumenda similique.
                        </p>
                        <PixelButton onClick={handleViewProject} isLoading={isLoading} loadingText="Loading ..." className='w-fit'>
                            View Project
                        </PixelButton>
                    </div>
                    <div className="absolute">
                        <div className="">
                            {/* <Image src="/assets/img/landlight.png"
                            alt="project1"
                            width={300}
                            height={300}
                        /> */}
                        </div>
                        {/* <Image src="/assets/icons/coin-svg.png"
                            alt="coinIcon"
                            width={24}
                            height={24}
                            className="w-6 h-6 grid place-items-center"
                        /> */}
                    </div>
                </div>
            </div>
        </>
    )
}

export default ProjectSection
