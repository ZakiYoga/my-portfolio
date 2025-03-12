'use client'
import React from 'react'
import Image from 'next/image'
import { useTheme } from '../ThemeProvider'

function ToggleTheme() {
    const { theme, toggleTheme } = useTheme()

    const isDark = theme === 'dark'

    return (
        <label className="swap swap-rotate relative bg-secondary group min-h-0 h-auto px-2.5 py-1.5 btn-link border-[1px] hover:-translate-y-1 hover:bg-slate-100 hover:border-base-content border-base-content active:border-[1px] transition-transform duration-2000 grid place-items-center shadow-[4px_4px_0px_#000] active:translate-x-[3px] active:translate-y-[3px] active:shadow-none">
            <input
                type="checkbox"
                className="theme-controller"
                checked={isDark}
                onChange={() => toggleTheme()}
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
            <div className="absolute -left-3.5 -top-0.5 w-1 h-[90%] bg-secondary group-hover:bg-slate-100 border-y-[1px] border-l-[1px] border-base-content" />
            <div className="absolute -right-1 -top-0.5 w-1 h-[90%] bg-secondary group-hover:bg-slate-100 border-y-[1px] border-r-[1px] border-base-content [box-shadow:4px_4px_0px_#000] group-active:shadow-none z-10" />
        </label>
    )
}

export default ToggleTheme