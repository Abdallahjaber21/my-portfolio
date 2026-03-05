import React from 'react';
import { Popover } from '@headlessui/react';
import { Outlet, NavLink } from "react-router-dom";

const Header: React.FC = () => {

    return (
        <header className="bg-primary text-white">
            <nav className="mx-auto flex max-w-7xl items-center justify-between p-4" aria-label="Global">
                <div className="flex lg:flex-1">
                    <a href="/" className="-m-1.5 p-1.5">
                        <img className="h-8 w-auto" src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600" alt="" />
                    </a>
                </div>
                <Popover.Group className="hidden lg:flex justify-between">
                    <NavLink to="/" className="header_link  text-sm font-semibold rounded-full px-4 transition duration-200 all">Services</NavLink>
                    <NavLink to="/works" className="header_link text-sm font-semibold rounded-full px-4 transition duration-200 all">Works</NavLink>
                    <NavLink to="/blog" className="header_link text-sm font-semibold rounded-full px-4 transition duration-200 all">Blog</NavLink>
                </Popover.Group>
            </nav>

            <Outlet />
        </header>
    )
}

export default Header;
