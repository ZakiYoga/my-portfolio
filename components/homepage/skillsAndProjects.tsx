'use client'
import React from 'react';
import MarqueeText from '../MarqueeText';
import Image from 'next/image';

type Skill = string;

function SkillsAndProjects() {
    const skills: Skill[] = [
        "React", "Next.js", "Laravel", "Vue", "Nuxt", "Spring Boot", "Framer Motion",
        "Tailwind CSS", "DaisyUI", "Bootstrap", "SASS", "Shadcn", "Material UI", "Chakra UI",
        "Node.js", "Express", "MySQL", "MongoDB", "Postgre", "Firebase", "Docker",
        "Responsive Design", "UI/UX", "Git/GitHub", "Vercel", "Netlify",
    ];

    return (
        <div className="relative min-h-fit py-8">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -rotate-2 w-full h-10 bg-primary overflow-hidden flex items-center border-y-2 border-base-300">
                <div className="whitespace-nowrap flex items-center font-medium">
                </div>
            </div>

            <MarqueeText rotate="rotate-0" delay={0}>
                {skills.map((skill, index) => (
                    <span key={index} className="mx-6 text-lg flex gap-4 items-center">
                        {index % 2 !== 0 ? (
                            <Image
                                src="/assets/icons/computer.svg"
                                width={30}
                                height={30}
                                alt="computer-svg"
                            />
                        ) : (
                            <Image
                                src="/assets/icons/cup.svg"
                                width={30}
                                height={30}
                                alt="coffe-svg"
                            />
                        )}
                        <p>{skill}</p>
                    </span>
                ))}
            </MarqueeText>
        </div>
    );
}

export default SkillsAndProjects;