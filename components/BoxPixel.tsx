import React from 'react'

function BoxPixel({ children }: { children: React.ReactNode }) {
    return (
        <div className="w-96 h-[300px] relative flex items-center justify-center bg-blend-soft-light bg-transparent border-2 -z-10">
            <div className="absolute -top-12 left-0 right-0 flex justify-center h-fit w-full">
                <div className="flex flex-col gap-6">
                    <div className=""></div>
                    <div className=""></div>
                </div>
            </div>
            <div className="flex items-center justify-center w-full">
                {children}
            </div>
            <div className="absolute -left-4 top-[2.5%] w-5 h-[95%] bg-transparent border-x-2 border-y-2 border-r-0 z-10"></div>
            <div className="absolute -right-4 top-[2.5%] w-5 h-[95%] bg-transparent border-x-2 border-y-2 border-l-0 z-10"></div>
        </div>
    )
}

export default BoxPixel
