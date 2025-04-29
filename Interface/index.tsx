/* eslint-disable @typescript-eslint/no-unused-vars */

interface Button {
    btnClass: string;
    title: string;
}

interface SubNavLink {
    name: string
    href: string
}

interface NavLink {
    name: string
    href: string
    submenu?: SubNavLink[]
}

interface Project {
    id: number;
    title: string;
    description: string;
    linkProject: string;
    linkGithub: string;
    techStack: string[];
}

interface ProjectItemProps {
    project: Project;
    index: number;
    isLoading: boolean;
    handleViewProject: () => void;
    handleViewGithub: () => void;
}