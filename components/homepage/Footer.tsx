'use client'
import React from 'react'
import PixelButton from '../Button';
import Image from 'next/image';
import Link from 'next/link';

const MenuFooter = [
    { title: 'About', link: '#' },
    { title: 'Certificate', link: '#' },
    { title: 'Project', link: '#' },
    { title: 'Contact', link: '#' },
]

const SocialFooter = [
    { title: 'Web Portfolio', icon: "www-svg.svg", link: '#' },
    { title: 'Github', icon: "github-svg.svg", link: '#' },
    { title: 'Linkedin', icon: "linkedin-svg.svg", link: '#' },
]

interface FooterProps {
    title: string;
    link: string;
    icon?: string;
    alt?: string;
}

function Footer() {
    return (
        <>
            <div className="h-[20vh] bg-[url('/assets/img/landlight.png')] w-full bg-[-6px_-4px]" />
            <div className="container flex flex-col relative mx-auto max-w-none w-full bg-[url('/assets/img/About-LightMode.png')] bg-[-11px_-6px]">
                <div className="footer justify-between overflow-hidden w-full h-full text-white py-10">
                    <div className="flex flex-col gap-4">
                        <a className="text-4xl font-changa gap-0 drop-shadow-[3px_3px_0_#000]">
                            Zki
                            <span className="text-[#0092ca]">
                                Str.
                            </span>
                        </a>
                        <div className="text-lg space-x-0 md:max-w-60">
                            <p className="">Thank you for visiting!</p>
                            <p className="">Feel free to reach out for the collabotations.</p>
                        </div>
                    </div>
                    <div className="flex flex-col items-end justify-between h-full pr-1">
                        <ul className="inline-flex gap-6">
                            {
                                MenuFooter.map((menu: FooterProps, index: number) => (
                                    <li key={index} className="my-2 hover:-translate-y-1 duration-300 transition-all">
                                        <a href={menu.link}
                                            className="py-2.5 px-4 text-xs font-press-start drop-shadow-[3px_3px_0_#000] rounded-md">
                                            {menu.title}
                                        </a>
                                    </li>
                                ))
                            }
                        </ul>
                        <ul className="inline-flex gap-6">
                            {
                                SocialFooter.map((menu: FooterProps, index: number) => (
                                    <li key={index} className="text-xs font-press-start">
                                        <PixelButton className="px-1" variant="ghost" size='xs'>
                                            <Image
                                                src={`/assets/icons/${menu.icon}` || ''}
                                                alt={menu.title}
                                                width={24}
                                                height={24}
                                                className="w-4 h-4"
                                            />
                                        </PixelButton>
                                    </li>
                                ))
                            }
                        </ul>
                    </div>
                </div>
                <div className="inline-flex items-center justify-center w-full text-white py-2 font-jersey-20 gap-x-1.5">
                    [C]2024. Made with
                    <Image
                        src="/assets/icons/heart-svg.svg"
                        alt="heart"
                        width={16}
                        height={16}
                        className="w-4 h-4"
                    />
                    by
                    <Link href="/" className="hover:text-primary">
                        ZakiStr
                    </Link>
                </div>
            </div>
        </>
    )
}

export default Footer
