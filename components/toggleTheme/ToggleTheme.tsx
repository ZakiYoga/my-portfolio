'use client'
import React, { useEffect, useState } from 'react'
import Image from 'next/image'

function ToggleTheme() {
    const [theme, setTheme] = useState(() => {
        if (typeof window !== 'undefined') {
            return localStorage.getItem('theme') || 'mytheme'
        }
        return 'mytheme'
    })

    useEffect(() => {
        localStorage.setItem('theme', theme)
        document.documentElement.setAttribute('data-theme', theme)
    }, [theme])

    const handleToggle = (e: React.ChangeEvent<HTMLInputElement>) => {
        setTheme(e.target.checked ? 'dark' : 'mytheme')
    }

    return (
        <label className="swap swap-rotate min-h-0 h-auto px-2.5 py-1.5 btn-link border-[1px] hover:border-base-200 border-base-200 active:border-[1px] transition-transform duration-2000 grid place-items-center rounded-md shadow-[4px_4px_0px_#212121] active:translate-x-[3px] active:translate-y-[3px] active:shadow-none">
            <input
                type="checkbox"
                className="theme-controller"
                checked={theme === 'dark'}
                onChange={handleToggle}
            />

            <Image
                src="/assets/icons/cloudy.png"
                alt="Sun Icon"
                className="swap-off h-6 w-6 fill-current"
                width={64}
                height={64}
            />
            <Image
                src="/assets/icons/cloudy-night.png"
                alt="Moon Icon"
                className="swap-on h-6 w-6 fill-current"
                width={72}
                height={72}
            />
        </label>
    )
}

export default ToggleTheme