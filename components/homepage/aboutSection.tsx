import Image from 'next/image'
import React from 'react'

function AboutSection() {
    return (
        <div className="flex flex-col items-start gap-4">
            <div className='flex items-center justify-center h-[60px] bg-white border-y-2 border-slate-300 w-full gap-8'>
                <Image src='/assets/icons/arrow-left.svg'
                    width={24}
                    height={24}
                    alt='arrowLeft'
                />
                <h4 className='font-press-start text-sm'>
                    Fullstack Developer
                </h4>
                <h4 className='font-press-start text-sm'>
                    UI/UX Designer
                </h4>
                <h4 className='font-press-start text-sm'>
                    Freelance
                </h4>
            </div>
            <div className="container min-h-[100vh] bg-gradient-custom max-w-full">
                <div className="flex items-center justify-center gap-4 w-full">
                    <Image src='/assets/icons/arrow-left.svg'
                        width={24}
                        height={24}
                        alt='imageAbout'
                    />
                    <div className="flex flex-col justify-center items-start">
                        <h1 className="text-3xl font-bold">About Me</h1>
                        <p className="">
                            Hi, I&apos;m Zaki Satria P. I&apos;m a Fullstack Developer and UI/UX Designer based in Indonesia. I have a passion for web development and love to create new things. I&apos;m always looking for opportunities to learn and grow.
                        </p>
                    </div>
                </div>
                <div className="">
                    skills
                </div>
            </div>
        </div>
    )
}

export default AboutSection
