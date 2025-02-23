'use client'
import React, { useEffect, useState } from 'react'
import Image from 'next/image'

function ToggleTheme() {
    const [theme, setTheme] = useState(() => {
        if (typeof window !== 'undefined') {
            return localStorage.getItem('theme') || 'light'
        }
        return 'light'
    })

    useEffect(() => {
        localStorage.setItem('theme', theme)
        document.documentElement.setAttribute('data-theme', theme)
    }, [theme])

    const handleToggle = (e: React.ChangeEvent<HTMLInputElement>) => {
        setTheme(e.target.checked ? 'dark' : 'light')
    }

    return (
        <label className="swap swap-rotate relative group min-h-0 h-auto px-2.5 py-1.5 btn-link border-[1px] hover:bg-slate-100 hover:border-slate-600 border-slate-600 active:border-[1px] transition-transform duration-2000 grid place-items-center shadow-[4px_4px_0px_#212121] active:translate-x-[3px] active:translate-y-[3px] active:shadow-none">
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
            <div className="absolute -left-3.5 -top-0.5 w-1 h-[90%] bg-white group-hover:bg-slate-100 border-y-[1px] border-l-[1px] border-slate-600" />
            <div className="absolute -right-1 -top-0.5 w-1 h-[90%] bg-white group-hover:bg-slate-100 border-y-[1px] border-r-[1px] border-slate-600 [box-shadow:4px_4px_0px_#000] group-active:shadow-none z-10" />
        </label>
    )
}

export default ToggleTheme