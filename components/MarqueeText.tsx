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
            className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 ${rotate} w-full h-10 bg-base-100 overflow-hidden flex items-center border-dashed-4 `}
        >
            <motion.div
                initial={{ x: "0%" }}
                animate={{ x: ["0%", "-110%", "0%"] }}
                transition={{
                    duration: 60,
                    repeat: Infinity,
                    repeatType: "mirror",
                    ease: "easeInOut",
                    delay: delay
                }}
                className="whitespace-nowrap flex font-medium w-full justify-start"
            >
                {children}
            </motion.div>
        </div>
    );
}

export default MarqueeText;