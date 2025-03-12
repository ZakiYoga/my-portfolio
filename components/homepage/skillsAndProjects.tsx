'use client'
import React from 'react';
import MarqueeText from '../MarqueeText';

function SkillsAndProjects() {
    const skills = [
        "React", "Next.js", "TypeScript", "Tailwind CSS", "Framer Motion",
        "Node.js", "Express", "MongoDB", "Firebase", "GraphQL",
        "Responsive Design", "UI/UX", "Git/GitHub", "Vercel", "AWS"
    ];

    return (
        <div className="relative min-h-60 overflow-hidden py-8">
            <MarqueeText rotate="-rotate-2">
                {skills.map((skill, index) => (
                    <span key={index} className="mx-6 text-lg">
                        {skill}
                    </span>
                ))}
            </MarqueeText>

            <MarqueeText rotate="rotate-3" delay={2}>
                {skills.slice().reverse().map((skill, index) => (
                    <span key={index} className="mx-6 text-lg">
                        {skill}
                    </span>
                ))}
            </MarqueeText>
        </div>
    );
}

export default SkillsAndProjects;