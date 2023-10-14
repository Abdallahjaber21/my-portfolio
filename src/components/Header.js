import { Fragment, useState } from 'react'
import { Popover } from '@headlessui/react'
import { Outlet, Link , NavLink } from "react-router-dom";

export default function Header() {

  return (
    <header className="bg-primary text-white">
      <nav className="mx-auto flex max-w-7xl items-center justify-between p-4" aria-label="Global">
        <div className="flex lg:flex-1">
          <a href="#" className="-m-1.5 p-1.5">
            <img className="h-8 w-auto" src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600" alt="" />
          </a>
        </div>
        <Popover.Group className="hidden lg:flex justify-between">
          <NavLink to="/" activeClassName="active"  className="header_link  text-sm font-semibold rounded-full px-4 transition duration-200 all">Services</NavLink>
          <NavLink to="/works" activeClassName="active"  className="header_link text-sm font-semibold rounded-full px-4 transition duration-200 all">Works</NavLink>
          <NavLink to="/blog" activeClassName="active"  className="header_link text-sm font-semibold rounded-full px-4 transition duration-200 all">Blog</NavLink>
        </Popover.Group>
      </nav>

      <Outlet />
    </header>
  )
}
