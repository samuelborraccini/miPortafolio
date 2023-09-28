"use client";
import Link from "next/link";
import React, { useState } from "react";
import NavLink from "./NavLink";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import MenuOverlay from "./MenuOverlay";

const navLinks = [
  {
    path: "/about",
    title: "Informacion",
  },
  {
    path: "/projects",
    title: "Proyectos",
  },
  {
    path: "/contact",
    title: "Contacto",
  },
];

function NavBar() {
  const [navBarOpen, setnavBarOpen] = useState(false);
  return (
    <nav className="fixed top-0 left-0 right-0 z-10 bg-[#121212] bg-opacity-90">
      <div className="flex flex-wrap items-center justify-between mx-auto p-6 py-6">
        <Link href={"/"} className="text-2xl text-white font-semibold">
          SAMUEL BORRACCINI
        </Link>
        <div className="block md:hidden mobile-menu">
          {!navBarOpen ? (
            <button
              onClick={() => setnavBarOpen(true)}
              className="text-slate-200 flex items-center px-3 py-2 border rounded border-slate-200 hover:text-white hover:border-white"
            >
              <Bars3Icon className="h-5 w-5" />
            </button>
          ) : (
            <button
              onClick={() => setnavBarOpen(false)}
              className="text-slate-200 flex items-center px-3 py-2 border rounded border-slate-200 hover:text-white hover:border-white"
            >
              <XMarkIcon className="h-5 w-5 " />
            </button>
          )}
        </div>
        <div className="menu hidden md:block md:w-auto" id="navbar">
          <ul className="flex p-4 md:p-0 md:flex-row md:space-x-8">
            {navLinks.map((i, index) => (
              <li key={index}>
                <NavLink href={i.path} title={i.title} />
              </li>
            ))}
          </ul>
        </div>
      </div>
      {navBarOpen && <MenuOverlay links={navLinks} />}
    </nav>
  );
}

export default NavBar;
