import React from 'react'
import Image from 'next/image'

function ToggleTheme() {
    return (
        <label className="swap swap-rotate px-2.5 py-1.5 bg-primary transition-transform duration-2000 grid place-items-center rounded-md shadow-[4px_4px_0px_#212121] active:translate-x-[3px] active:translate-y-[3px] active:shadow-none">
            <input type="checkbox" className="theme-controller" value="mytheme" />

            <Image
                src={"/assets/icons/2.svg"}
                alt="Sun Icon"
                className="swap-off h-6 w-6 fill-current"
                width={64}
                height={64}
            />
            <Image
                src={"assets/icons/1.svg"}
                alt="Moon Icon"
                className="swap-on h-6 w-6 fill-current"
                width={72}
                height={72}
            />
        </label>
    )
}

export default ToggleTheme
