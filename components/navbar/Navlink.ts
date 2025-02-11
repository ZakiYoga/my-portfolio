export const navLinks: NavLink[] = [
    { name: 'Homepage', href: '/' },
    {
        name: 'About', href: '#', submenu: [
            { name: 'Educ', href: '/submenu1' },
            { name: 'Submenu 2', href: '/submenu2' }
        ]
    },
    { name: 'About', href: '/about' },
    { name: 'Project', href: '/project' },
]