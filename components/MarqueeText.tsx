import React from 'react';
import { motion } from 'framer-motion';

interface MarqueeTextProps {
    children: React.ReactNode;
    rotate: string;
    delay?: number;
}

function MarqueeText({ children, rotate, delay = 0 }: MarqueeTextProps) {
    return (
        <div
            className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 ${rotate} w-[120%] h-10 bg-white overflow-hidden flex items-center`}
        >
            <motion.div
                initial={{ x: "-10%" }}
                animate={{ x: ["0%", "calc(-50% + 50vw)", "0%"] }}
                transition={{
                    duration: 15,
                    ease: "easeInOut",
                    repeat: Infinity,
                    repeatType: "reverse",
                    delay: delay
                }}
                className="whitespace-nowrap flex items-center text-black font-medium"
            >
                {children}
            </motion.div>
        </div>
    );
}

export default MarqueeText;