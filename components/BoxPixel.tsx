import Image from 'next/image'
import React, { ReactNode } from 'react'

// Define size variants
const sizeVariants = {
    sm: { width: 200, height: 150 },
    md: { width: 300, height: 200 },
    lg: { width: 400, height: 250 },
    xl: { width: 500, height: 350 }
}

// Define orientation types
type ShadowSides = 'right' | 'left'
type Orientation = 'horizontal' | 'vertical'

// Component props interface
interface BoxPixelProps extends React.HTMLAttributes<HTMLDivElement> {
    children?: ReactNode
    size?: keyof typeof sizeVariants
    imageSrc?: string
    imageAlt: string
    orientation?: Orientation
    overlay?: boolean
    hoverEffect?: boolean
    shadowSide?: ShadowSides
    className?: string
}

const BoxPixel: React.FC<BoxPixelProps> = ({
    children,
    size = 'md',
    imageSrc,
    imageAlt,
    orientation = 'horizontal',
    overlay = true,
    hoverEffect = true,
    shadowSide = 'right',
    className,
    ...rest
}) => {
    // Determine dimensions based on orientation
    const sizeConfig = sizeVariants[size]
    const dimensions = orientation === 'horizontal'
        ? { width: sizeConfig.width, height: sizeConfig.height }
        : { width: sizeConfig.height, height: sizeConfig.width }

    return (
        <div
            className={`
        relative 
        flex 
        items-center 
        justify-center
        ${hoverEffect ? 'hover:cursor-pointer hover:-translate-y-1 transition-all duration-300' : ''} 
        my-2 
        py-2 
        ${orientation === 'vertical' ? 'rotate-90' : ''}
        ${className || ''}
      `}
            style={{
                minWidth: `${dimensions.width}px`,
                minHeight: `${dimensions.height}px`
            }}
            {...rest}
        >
            {/* Content container */}
            <div className="relative flex items-center justify-center">
                {/* Image or children content */}
                {imageSrc ? (
                    <Image
                        src={imageSrc}
                        alt={imageAlt}
                        width={dimensions.width}
                        height={dimensions.height}
                        className={`
              p-2 
              w-full
              object-cover
            `}
                    />
                ) : (
                    children
                )}

                {/* Overlay layers */}
                {overlay && (
                    <>
                        <div className={`absolute w-[95%] h-full bg-base-100 -z-10 ${shadowSide === 'right' ? 'shadow-[4px_4px_0px]' : 'shadow-[-4px_4px_0px]'} shadow-black `} />
                        <div className={`absolute w-full h-[95%] bg-base-100 -z-10 ${shadowSide === 'right' ? 'shadow-[4px_0px_0px]' : 'shadow-[-4px_0px_0px]'} shadow-black`} />
                        <div className="absolute right-3 top-3 w-[3%] h-[3%] bg-accent  -z-10" />
                    </>
                )}
            </div>
        </div>
    )
}

export default BoxPixel