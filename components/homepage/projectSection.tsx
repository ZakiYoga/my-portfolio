'use client'
import React from 'react'
import PixelButton from '../Button'
import Image from 'next/image'
import { motion } from 'framer-motion'
import BoxPixel from '../BoxPixel'

interface Project {
    id: number;
    title: string;
    description: string;
    linkProject: string;
    linkGithub: string;
    techStack: string[];
}

// Data proyek
export const ProjectsList = [
    {
        id: 1,
        title: "Project 1",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius eum, ea explicabo perferendis consequuntur eaque inventore vel hic nihil non illo, quae odio earum cum, placeat unde repudiandae assumenda similique.",
        linkProject: "",
        linkGithub: "#",
        techStack: ["react", "tailwind"]
    },
    {
        id: 2,
        title: "Project 2",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius eum, ea explicabo perferendis consequuntur eaque inventore vel hic nihil non illo, quae odio earum cum, placeat unde repudiandae assumenda similique.",
        linkProject: "",
        linkGithub: "#",
        techStack: ["react", "ts", "tailwind"]
    },
    {
        id: 3,
        title: "Project 3",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius eum, ea explicabo perferendis consequuntur eaque inventore vel hic nihil non illo, quae odio earum cum, placeat unde repudiandae assumenda similique.",
        linkProject: "",
        linkGithub: "#",
        techStack: ["react", "ts", "tailwind"]
    },
    {
        id: 4,
        title: "Project 4",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius eum, ea explicabo perferendis consequuntur eaque inventore vel hic nihil non illo, quae odio earum cum, placeat unde repudiandae assumenda similique.",
        linkProject: "",
        linkGithub: "#",
        techStack: ["react", "ts", "tailwind"]
    },
    {
        id: 5,
        title: "Project 5",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius eum, ea explicabo perferendis consequuntur eaque inventore vel hic nihil non illo, quae odio earum cum, placeat unde repudiandae assumenda similique.",
        linkProject: "",
        linkGithub: "#",
        techStack: ["react", "ts", "tailwind"]
    },
];

interface ProjectItemProps {
    project: Project;
    index: number;
    isLoading: boolean;
    handleViewProject: () => void;
}

const ProjectItem = ({ project, index, isLoading, handleViewProject }: ProjectItemProps) => {
    const isEven = index % 2 !== 0;

    // Animasi untuk item proyek
    const itemVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.6,
                delay: index * 0.2,
                ease: "easeOut"
            }
        }
    };

    // Animasi untuk teks
    const textVariants = {
        hidden: { opacity: 0, x: isEven ? 30 : -30 },
        visible: {
            opacity: 1,
            x: 0,
            transition: {
                duration: 0.5,
                delay: (index * 0.2) + 0.3,
                ease: "easeOut"
            }
        }
    };

    // Icon teknologi
    const techIcons: { [key: string]: string } = {
        react: "/assets/projects/icons/react.png",
        ts: "/assets/projects/icons/ts.png",
        tailwind: "/assets/projects/icons/tailwind.png"
    };

    return (
        <motion.div
            className={`relative flex items-center flex-col-reverse ${isEven ? 'md:flex-row-reverse' : 'md:flex-row'} justify-between gap-8 w-full h-full max-h-lg`}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={itemVariants}
        >
            <motion.div
                className="flex flex-col items-center md:items-start gap-4 max-w-lg"
                variants={textVariants}
            >
                <h1 className="font-jersey-20 text-2xl uppercase drop-shadow-text-xs font-bold tracking-wider">{project.title}</h1>
                <p className="text-center md:text-left">{project.description}</p>
                <div className="flex w-full items-center md:items-start flex-col gap-2">
                    <h4>Build Using :</h4>
                    <div className="inline-flex items-center gap-3">
                        {project.techStack.map((tech, i) => (
                            <motion.div
                                key={i}
                                whileHover={{ scale: 1.1, y: -5 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                <Image
                                    src={techIcons[tech]}
                                    alt={tech}
                                    width={50}
                                    height={50}
                                    className="hover:border-[1px] rounded-xl border-base-content transition-all duration-300 hover:cursor-help hover:-translate-y-1 active:translate-y-0"
                                />
                            </motion.div>
                        ))}
                    </div>
                </div>
                <div className="flex flex-wrap gap-4">
                    <PixelButton variant="ghost" onClick={handleViewProject} isLoading={isLoading} loadingText="Loading ..." className='w-fit'>
                        View Project
                    </PixelButton>
                    <PixelButton variant="ghost" size="xs" className="group px-0.5">
                        <Image
                            src={"/assets/icons/github-svg.svg"}
                            alt="githubButton"
                            width={30}
                            height={30}
                            className="mx-1"
                        />
                    </PixelButton>
                </div>
            </motion.div>

            <motion.div
                className={`relative w-full h-full grid place-content-center ${isEven ? 'md:place-content-start' : 'md:place-content-end'} place-items-center group hover:cursor-pointer transition-all duration-300`}
                whileHover={{ y: -10 }}
                transition={{ type: "spring", stiffness: 300 }}
            >
                <BoxPixel
                    imageSrc="/assets/img/2.png"
                    imageAlt={project.title}
                    size="lg"
                    className="w-full h-full"
                />
            </motion.div>

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                whileHover={{ scale: 1.03, rotate: isEven ? -5 : 5 }}
                whileTap={{ scale: 0.98 }}
                className={`absolute ${isEven ? '-left-10' : '-right-10'} -top-6 -z-20 max-w-[120px] sm:max-w-[130px] lg:max-w-[150px]`}
            >
                <Image
                    src="/assets/img/cloud.png"
                    alt="cloud"
                    width={180}
                    height={180}
                />
            </motion.div>

            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.3 }}
                viewport={{ once: true }}
                className={`absolute -bottom-[23%] ${isEven ? 'md:left-[1%] md:-bottom-[40%] lg:left-[2%] lg:-bottom-[45%]' : 'md:right-[1%] md:-bottom-[40%] lg:right-[2%] lg:-bottom-[45%]'} -z-20`}
            >
                <Image
                    src="/assets/img/landfly.png"
                    alt="landfly"
                    width={380}
                    height={160}
                />
            </motion.div>
        </motion.div>
    );
};

function ProjectSection() {
    const [isLoading, setIsLoading] = React.useState(false);
    const [activeProject, setActiveProject] = React.useState<number | null>(null);

    const handleViewProject = (id: number): void => {
        setActiveProject(id);
        setIsLoading(true);
        setTimeout(() => {
            setIsLoading(false);
            setActiveProject(null);
        }, 2000);
    };

    return (
        <div id="project" className="container min-h-screen flex flex-col items-center justify-start w-full h-fit max-w-none">
            <div className="flex items-center justify-start flex-col w-full h-fit mt-14 pb-36 lg:pb-40 z-10 gap-12">
                <motion.h1
                    className="font-press-start text-xl uppercase drop-shadow-text-sm"
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                >
                    My Recent Projects
                </motion.h1>

                <div className="flex flex-col gap-44">
                    {ProjectsList.map((project: Project, index: number) => (
                        <ProjectItem
                            key={project.id}
                            project={project}
                            index={index}
                            isLoading={isLoading && activeProject === project.id}
                            handleViewProject={() => handleViewProject(project.id)}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
}

export default ProjectSection;