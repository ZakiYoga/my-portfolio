import React from "react";
import Link from "next/link";
import { IconType } from "react-icons";

interface SocialIconProps {
    Icon: IconType;
    bgColor?: string;
    iconColor?: string;
    size?: string;
    link: string;
}

const SocialIcon: React.FC<SocialIconProps> = ({
    Icon,
    bgColor = "bg-slate-700",
    iconColor = "text-primary",
    size = "h-10 w-10",
    link,
}) => {
    return (
        <div className={`relative grid place-content-center mx-2 shadow-[box-shadow:2px_2px_0px_#000] ${bgColor} ${size} hover:scale-105 transition-all `}>
            <Link href={link}>
                <Icon className={`text-3xl ${iconColor} p-0.5`} />
            </Link>
            <div className={`absolute -left-1 top-1 w-1 h-[80%] ${bgColor} group-hover:bg-gray-800 transition-colors `} />
            <div className={`absolute -right-1 top-1 w-1 h-[80%] ${bgColor} group-hover:bg-gray-800 transition-colors [box-shadow:2px_2px_0px_#000] group-active:shadow-none`} />
        </div>
    );
};

export default SocialIcon;