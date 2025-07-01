'use client'
import React from 'react'
import { ProjectsList } from '@/app/DATA/projectsData'
import ProjectItem from './projectItem';
import { motion } from 'framer-motion'
import PixelButton from '../Button';
import { useRouter } from 'next/navigation';

function ProjectSection() {
    const router = useRouter();
    const [isPending, startTransition] = React.useTransition();
    const [isProjectPagePending, startProjectPageTransition] = React.useTransition();

    const handleViewProject = (projectUrl: string): void => {
        startTransition(() => {
            router.push(projectUrl);
        });
    };

    const handleViewGithub = (githubUrl: string): void => {
        window.open(githubUrl, '_blank');
    };

    const handleViewPageProject = (): void => {
        startProjectPageTransition(() => {
            router.push("/projects");
        });
    };

    return (
        <div id="project" className="container min-h-screen flex flex-col items-center justify-start w-full h-fit max-w-none">
            <div className="flex items-center justify-start flex-col w-full h-fit my-8 z-10 gap-12">
                <motion.h1
                    className="font-press-start text-xl uppercase drop-shadow-text-sm"
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                >
                    My Recent Projects
                </motion.h1>
                <div className="flex flex-col gap-y-44 w-full">
                    {ProjectsList.map((project: Project, index: number) => (
                        <ProjectItem
                            key={project.id}
                            project={project}
                            index={index}
                            isLoading={isPending}
                            handleViewProject={() => handleViewProject(project.linkProject)}
                            handleViewGithub={() => handleViewGithub(project.linkGithub)}
                        />
                    ))}
                </div>
                <motion.div
                    initial={{ opacity: 0.2, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    viewport={{ once: false }}
                    className="flex items-center justify-between bg-base-100/45 h-fit w-full px-8 py-6 backdrop-blur-sm gap-4 border-2 border-base-300 shadow-[6px_6px_0px] mt-12">
                    <motion.h1
                        initial={{ opacity: 0, x: -35, y: -10 }}
                        animate={{ opacity: 1, x: 0, y: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut", delay: 0.6 }}
                        className="font-press-start text-3xl max-w-lg drop-shadow-text-sm">EXPLORE MORE PROJECTS?</motion.h1>
                    <div className="flex items-center justify-end gap-4">
                        <PixelButton
                            variant="ghost"
                            loadingText="Loading ..."
                            onClick={handleViewPageProject}
                            disabled={isProjectPagePending}
                        >
                            {isProjectPagePending ? "Loading ..." : "View Project Page"}
                        </PixelButton>
                        or
                        <PixelButton
                            variant="ghost"
                            onClick={() => window.open("https://github.com/zakiyoga", '_blank')}
                        >
                            Visit My GitHub
                        </PixelButton>
                    </div>
                </motion.div>
            </div>
        </div>
    );
}

export default ProjectSection;