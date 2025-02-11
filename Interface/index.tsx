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