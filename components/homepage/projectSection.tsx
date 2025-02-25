'use client'
import React from 'react'
import Image from 'next/image'
// import { useRouter } from 'next/navigation'
import PixelButton from '../Button'

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
                <Image src="/assets/icons/coin-svg.png"
                    alt="coinIcon"
                    width={24}
                    height={24}
                    className="w-6 h-6 grid place-items-center"
                />
                <h2 className="">JAVASCRIPT</h2>
                <Image src="/assets/icons/star-svg.png"
                    alt="coinIcon"
                    width={24}
                    height={24}
                    className="w-6 h-6"
                />
                <h2>REACT</h2>
                <Image src="/assets/icons/coin-svg.png"
                    alt="coinIcon"
                    width={24}
                    height={24}
                    className="w-6 h-6 grid place-items-center"
                />
                <h2>VUE</h2>
                <Image src="/assets/icons/star-svg.png"
                    alt="coinIcon"
                    width={24}
                    height={24}
                    className="w-6 h-6"
                />
                <h2>PHP</h2>
                <Image src="/assets/icons/coin-svg.png"
                    alt="coinIcon"
                    width={24}
                    height={24}
                    className="w-6 h-6 grid place-items-center"
                />
                <h2>NODEJS</h2>
                <Image src="/assets/icons/star-svg.png"
                    alt="coinIcon"
                    width={24}
                    height={24}
                    className="w-6 h-6"
                />
                <h2>NEXTJS</h2>
                <Image src="/assets/icons/coin-svg.png"
                    alt="coinIcon"
                    width={24}
                    height={24}
                    className="w-6 h-6 grid place-items-center"
                />
                <h2>NUXTJS</h2>
                <Image src="/assets/icons/star-svg.png"
                    alt="coinIcon"
                    width={24}
                    height={24}
                    className="w-6 h-6"
                />
                <h2>LARAVEL</h2>
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
