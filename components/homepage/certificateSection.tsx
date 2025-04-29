'use client'
import React, { useMemo } from 'react'
import BoxPixel from '../BoxPixel'
import { motion } from 'framer-motion'
import { certificates } from '@/app/DATA/certificateData'

function CertificateSection() {
    // Split the certificates array into two halves
    const { firstHalf, secondHalf } = useMemo(() => {
        const middleIndex = Math.ceil(certificates.length / 2);
        return {
            firstHalf: certificates.slice(0, middleIndex),
            secondHalf: certificates.slice(middleIndex)
        };
    }, []);

    return (
        <div className="container flex items-start justify-center relative overflow-y-hidden h-fit lg:min-h-screen">
            <div className="flex flex-col items-center justify-start w-full h-full mt-14 mb-4 z-10 overflow-x-hidden gap-8">
                <motion.h1
                    className="font-press-start text-xl uppercase drop-shadow-text-md"
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    My Certificate
                </motion.h1>

                {/* Animation scroll from left to right */}
                <motion.div
                    className="flex items-center justify-start w-full h-full gap-4 overflow-x-hidden"
                    initial={{ x: -100, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.8, staggerChildren: 0.1 }}
                    viewport={{ once: true, amount: 0.2 }}
                >
                    {firstHalf.map((data, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            viewport={{ once: true }}
                        >
                            <BoxPixel
                                imageSrc={data.imageSrc}
                                imageAlt={data.alt}
                                size="md"
                                shadowSide="right"
                                hoverEffect={false}
                            />
                        </motion.div>
                    ))}
                </motion.div>

                {/* Animation scroll from right to left */}
                <motion.div
                    className="flex w-full items-center justify-end gap-4 overflow-x-hidden"
                    initial={{ x: 100, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.8, staggerChildren: 0.1 }}
                    viewport={{ once: true, amount: 0.2 }}
                >
                    {secondHalf.map((data, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            viewport={{ once: true }}
                        >
                            <BoxPixel
                                imageSrc={data.imageSrc}
                                imageAlt={data.alt}
                                size="md"
                                shadowSide="right"
                                hoverEffect={false}
                            />
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </div>
    )
}

export default CertificateSection