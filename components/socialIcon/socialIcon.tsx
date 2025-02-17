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
        <div className={`grid place-content-center rounded-sm ${bgColor} ${size} hover:scale-105 transition-all `}>
            <Link href={link}>
                <Icon className={`text-3xl ${iconColor} p-0.5`} />
            </Link>
        </div>
    );
};

export default SocialIcon;