import React from 'react'
import Image from 'next/image'
import { FaFacebook } from 'react-icons/fa';
import { FaTwitter } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import SocialIcon from '../socialIcon/socialIcon';
import { TypeAnimation } from 'react-type-animation';

function MainSection() {
    return (
        <div className="container hero min-h-screen">
            <div className="hero-content justify-between flex-col w-full lg:flex-row-reverse gap-x-20 p-0">
                <Image
                    src="https://img.daisyui.com/images/stock/photo-1635805737707-575885ab0820.webp"
                    width={500}
                    height={500}
                    alt="hero-image"
                    className="max-w-sm rounded-lg shadow-2xl" />
                <div className="flex flex-col justify-center items-center lg:items-start gap-2">
                    <div className="flex flex-col">
                        <h4>Welcome to my Portfolio</h4>
                        <h1 className="text-5xl font-bold">Hi, I&apos;m Zaki Satria P.</h1>
                        <TypeAnimation
                            sequence={[
                                // Same substring at the start will only be typed once, initially
                                'a FullStack Developer',
                                1000,
                                'a UI/UX Designer',
                                1000,
                            ]}
                            speed={50}
                            style={{ fontSize: '2em' }}
                            repeat={Infinity}
                        />
                        <p className="py-6">
                            Explore this portfolio to discover my best work, showcasing my skills and creativity. Feel free to reach out if you&apos;re interested in collaborating or discussing new opportunities!
                        </p>
                    </div>
                    <div className="flex flex-col gap-2">
                        <p>Find with me</p>
                        <div className="flex gap-x-4">
                            <SocialIcon Icon={FaFacebook} link="https://www.facebook.com/zaki.satria.p" />
                            <SocialIcon Icon={FaTwitter} link="https://twitter.com/zaki_satria_p" />
                            <SocialIcon Icon={FaInstagram} link="https://twitter.com/zaki_satria_p" />
                            <SocialIcon Icon={FaLinkedinIn} link="https://www.linkedin.com/in/zaki-satria-p-1b9b3a1b1/" />
                            <SocialIcon Icon={FaGithub} link="https://github/ZakiYoga" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MainSection
