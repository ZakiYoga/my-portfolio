'use client'
import React, { FC } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

interface MarqueeItemType {
    text: string;
    icon: string;
    alt: string;
}

interface MarqueeTextProps {
    items: MarqueeItemType[];
    speed?: number;
    className?: string;
    textClassName?: string;
    iconClassName?: string;
    direction?: 'left' | 'right';
}

const MarqueeText: FC<MarqueeTextProps> = ({
    items,
    speed = 20,
    className = "",
    textClassName = "",
    iconClassName = "",
    direction = 'right'
}) => {
    // Duplicate the items array to create a seamless loop
    const duplicatedItems = [...items, ...items];

    // Set the animation direction
    const directionMultiplier = direction === 'left' ? 1 : -1;

    return (
        <div className={`w-full h-fit py-4 overflow-hidden ${className}`}>
            <motion.div
                className="inline-flex items-center tracking-wider uppercase text-2xl gap-8"
                animate={{
                    x: directionMultiplier * -50 * items.length + '%'
                }}
                initial={{
                    x: 0
                }}
                transition={{
                    repeat: Infinity,
                    duration: items.length * speed,
                    ease: "linear",
                }}
            >
                {duplicatedItems.map((item, index) => (
                    <div key={`${item.text}-${index}`} className="flex items-center gap-8">
                        <Image
                            src={item.icon}
                            alt={item.alt}
                            width={24}
                            height={24}
                            className={`w-6 h-6 ${iconClassName}`}
                        />
                        <h2 className={textClassName}>{item.text}</h2>
                    </div>
                ))}
            </motion.div>
        </div>
    );
};

export default MarqueeText;