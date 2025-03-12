'use client'
import React from 'react'
import { motion } from 'framer-motion'

function About() {
    return (
        <div className="min-h-screen bg-gradient-custom">
            <div className="container flex item-center justify-center flex-col w-full py-12 gap-8">
                <motion.h1
                    initial={{ y: '-100%', opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.5 }}
                    className="font-press-start text-center text-2xl uppercase drop-shadow-text-md">
                    About
                </motion.h1>
                <div className="flex flex-col gap-4">
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae nulla minus, laboriosam facilis beatae dolor necessitatibus odio et mollitia reprehenderit culpa. Blanditiis saepe possimus expedita? Doloremque enim repudiandae labore explicabo.
                        Exercitationem aliquam nemo, unde nisi blanditiis sit ut amet vitae consectetur repellat porro voluptatem velit error explicabo cum laboriosam quibusdam reprehenderit alias iste hic et, suscipit, sapiente neque eius. Eum!
                    </p>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae nulla minus, laboriosam facilis beatae dolor necessitatibus odio et mollitia reprehenderit culpa. Blanditiis saepe possimus expedita? Doloremque enim repudiandae labore explicabo.
                        Exercitationem aliquam nemo, unde nisi blanditiis sit ut amet vitae consectetur repellat porro voluptatem velit error explicabo cum laboriosam quibusdam reprehenderit alias iste hic et, suscipit, sapiente neque eius. Eum!
                    </p>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae nulla minus, laboriosam facilis beatae dolor necessitatibus odio et mollitia reprehenderit culpa. Blanditiis saepe possimus expedita? Doloremque enim repudiandae labore explicabo.
                        Exercitationem aliquam nemo, unde nisi blanditiis sit ut amet vitae consectetur repellat porro voluptatem velit error explicabo cum laboriosam quibusdam reprehenderit alias iste hic et, suscipit, sapiente neque eius. Eum!
                    </p>
                </div>
            </div>
        </div>
    )
}

export default About
