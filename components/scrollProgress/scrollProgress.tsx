'use client'
import React, { useEffect, useState } from 'react';
import { FaArrowUp } from 'react-icons/fa6';

const ScrollProgress = () => {
    const [isVisible, setIsVisible] = useState(false);
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            // Calculate scroll progress
            const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
            const currentProgress = (window.scrollY / totalHeight) * 100;
            setProgress(currentProgress);

            // Show/hide button based on scroll position
            setIsVisible(window.scrollY > 300);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    return (
        <button
            onClick={scrollToTop}
            className={`btn btn-circle fixed btn-lg bottom-8 right-8 transition-all duration-300 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-16 opacity-0'
                }`}
            style={{
                background: `conic-gradient(hsl(var(--p)) ${progress}%, hsl(var(--b2)) 0%)`,
            }}
        >
            <div className="absolute inset-[3px] rounded-full bg-base-100 hover:bg-base-200 flex items-center justify-center">
                <FaArrowUp className="w-6 h-6 text-primary" />
            </div>
        </button>
    );
};

export default ScrollProgress;