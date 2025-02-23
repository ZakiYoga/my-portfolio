'use client'
import React from 'react'
import Image from 'next/image'
import { TypeAnimation } from 'react-type-animation';
import PixelButton from '../Button';

function MainSection() {
    return (
        <div className="container bg-gradient-custom max-w-full flex flex-col relative overflow-y-hidden">
            <div className="hero min-h-screen">
                <div className="hero-content justify-between flex-col w-full lg:flex-row-reverse gap-x-20 p-0">
                    <Image
                        src="https://img.daisyui.com/images/stock/photo-1635805737707-575885ab0820.webp"
                        width={500}
                        height={500}
                        alt="hero-image"
                        className="max-w-sm rounded-lg shadow-2xl" />
                    <div className="flex flex-col justify-center items-center lg:items-start gap-2">
                        <div className="flex flex-col">
                            <div className="flex items-center">
                                <div className="w-6 h-[1px] bg-primary mr-2" />
                                <h4 className='font-jersey-10 text-xl'>
                                    Welcome to {" "}
                                    <span className="text-primary">MyPortfolio</span>
                                </h4>
                            </div>
                            <h1 className="text-5xl font-bold">Hi, I&apos;m Zaki Satria P.</h1>
                            <TypeAnimation
                                sequence={[
                                    'a FullStack Developer',
                                    1000,
                                    'a UI/UX Designer',
                                    1000,
                                    'a Freelance',
                                    1000,
                                ]}
                                speed={50}
                                style={{ fontSize: '2em' }}
                                repeat={Infinity}
                            />
                            <p className="py-2">
                                Explore this portfolio to discover my best work, showcasing my skills and creativity. Feel free to reach out if you&apos;re interested in collaborating or discussing new opportunities!
                            </p>
                        </div>
                        <div className="flex flex-col gap-2">
                            <p>Find with me</p>
                            <div className="flex gap-x-4">
                                <PixelButton size='xs'>
                                    <Image
                                        src="/assets/icons/www-svg.svg"
                                        alt="wwwIcon"
                                        width={24}
                                        height={24}
                                    />
                                </PixelButton>
                                <PixelButton size='xs'>
                                    <Image
                                        src="/assets/icons/facebook-svg.svg"
                                        alt="facebookIcon"
                                        width={24}
                                        height={24}
                                    />
                                </PixelButton>
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
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="absolute -bottom-12 left-0 right-0 flex justify-center h-fit w-full">
                <div className="relative w-full h-fit">
                    <Image src="/assets/img/BottomLight.png"
                        width={1200}
                        height={40}
                        alt="pixel-bottom"
                        className='w-full h-fit'
                    />
                </div>
            </div>
        </div >
    )
}

export default MainSection
