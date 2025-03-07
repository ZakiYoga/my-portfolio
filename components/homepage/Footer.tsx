'use client'
import React from 'react'

const MenuFooter = [
    { title: 'Home', link: '#' },
    { title: 'About', link: '#' },
    { title: 'Services', link: '#' },
    { title: 'Contact', link: '#' },
]

interface MenuFooter {
    title: string;
    link: string;
}

function Footer() {
    return (
        <div className="footer container mx-auto max-w-none">
            <div className="flex item-start">
                <div className="w-1/4">
                    <h3 className="text-2xl font-bold">About Us</h3>
                    <p className="mt-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. In vel semper odio. Suspendisse potenti. Nullam auctor, nunc nec ultricies.</p>
                </div>
                <div className="w-1/4">
                    <ul className="mt-4">
                        {
                            MenuFooter.map((menu: MenuFooter, index: number) => (
                                <li key={index} className="mb-2">
                                    <a href={menu.link} className="">{menu.title}</a>
                                </li>
                            ))
                        }
                    </ul>
                </div>
                <div className="w-1/4">
                    <h3 className="text-2xl font-bold">Contact Us</h3>
                    <ul className="mt-4">
                        <li className="mb-2">123, Main Road, New City</li>
                        <li className="mb-2">
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Footer
