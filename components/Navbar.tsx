"use client";

import { NavLinks } from "@/constants/home"
import Image from "next/image"
import Link from "next/link"
import { LuMenu } from "react-icons/lu";
import { useDispatch } from "react-redux";
import { AppDispatch } from "@/lib/store";
import { open } from "@/lib/features/navbar/navState";

export default function Navbar() {

  const ListItemBefore = `
    before:content['']
    before:absolute
    before:w-0
    before:h-[2px]
    before:rounded-[2px]
    before:right-0
    before:bottom-0
    before:bg-primary
    before:transition-all
  `;

  const dispatch = useDispatch<AppDispatch>();

  return (
    <nav className='bg-white w-full fixed top-0 z-[9999] lg:left-2/4 lg:-translate-x-2/4'>
      <div className={`lg:container max-lg:w-full z-[100] flex max-lg:bg-white mx-auto p-8 py-6 items-center justify-between`}>
        {/* Logo */}
        <div className="logo">
          <Image src={"/logo.png"} alt="" width={120} height={120} />
        </div>

        {/* Exchange btn */}
        <button className="exchange-btn hidden max-lg:block" type="button" onClick={() => dispatch(open())}>
          <LuMenu className="text-slate-900" size={28} />
        </button>

        {/* Main List */}
        <ul className="main-list flex items-center gap-3 max-lg:hidden">
          { NavLinks.map((ele, index) => (
            <li className={`list-item text-[#18191F] px-4 py-3 relative ${ListItemBefore} hover:before:w-full`} key={index}>
              <Link href={ele.url}>{ele.text}</Link>
            </li>
          )) }
        </ul>

        {/* Login & Sign up */}
        <div className="auth-options flex items-center gap-3 max-lg:hidden">
          <button className="sign-in px-6 py-2 border-solid border-2 rounded-[8px] border-transparent text-primary transition-all hover:border-primary" type="button">Login</button>
          <button className="sign-up px-6 py-2 border-solid border-2 rounded-[8px] border-transparent text-white bg-primary transition-all hover:bg-transparent hover:border-primary hover:text-primary" type="button">Sign up</button>
        </div>
      </div>

    </nav>
  )
}