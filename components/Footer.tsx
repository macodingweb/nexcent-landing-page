"use client";

import { FaArrowRightLong } from "react-icons/fa6";
import Image from "next/image";
import { FooterLinks, SocialLinks } from "@/constants/home";
import Link from "next/link";
import { LuSend } from "react-icons/lu";

export default function Footer() {
  return (
    <>
      <div className="get-more text-center p-6">
        <h1 className="text-[42px] font-bold text-slate-700 max-md:text-[28px]">Pellentesque suscipit <br /> fringilla libero eu.</h1>
        <button type="button" className="get-more text-white flex items-center gap-3 mx-auto mt-6 transition-all border-2 border-solid border-transparent hover:bg-transparent hover:text-primary hover:border-primary px-8 py-3 bg-primary rounded-md">
          <span>Get more</span>
          <FaArrowRightLong />
        </button>
      </div>
      <section className="footer bg-slate-900 w-full">
        <div className="content lg:container mx-auto py-12 px-8 flex items-center max-md:justify-center max-md:text-center justify-between max-lg:flex-col max-lg:text-center">
          <div className="group max-lg:flex max-lg:flex-col max-lg:items-center max-lg:justify-center">
            <Image src={"/logo-light.png"} alt="Logo Light" width={120} height={120} />
            <span className="copyrights my-10 text-slate-100 block text-[15px]">Copyright &copy; 2020 Nexcent ltd. <br /> All rights reserved</span>
            <div className="social-links flex items-center gap-3">
              { SocialLinks.map((ele, index) => (
                <Link href={ele.url} key={index} className="w-8 h-8 rounded-full bg-slate-700 text-white text-[16px] flex items-center justify-center transition-all hover:bg-white hover:text-slate-700">{ele.icon}</Link>
              )) }
            </div>
          </div>
          <div className="group flex items-center gap-6 max-lg:my-7 max-md:flex-col">
            { FooterLinks.map((ele, index) =>
              (
                <ul key={index} className="p-4">
                  <span className="title text-white font-semibold text-[20px] mb-5 block">{ele.title}</span>
                  {ele.eles.map((link, key) => (
                    <li className="list-item px-4 py-2 text-slate-300 pl-0" key={key}>
                      <Link href={link.url}>{link.text}</Link>
                    </li>
                  ))}
                </ul>
              )
            ) }
          </div>
          <div className="group">
            <form onSubmit={(e) => e.preventDefault()} className="get-email">
              <label htmlFor="email" className="text-[20px] font-semibold text-white mb-4 block">Stay up to date</label>
              <div className="form-group relative">
                <input type="email" name="email" placeholder="Your email address" className="px-3 py-2 bg-slate-700 text-[14px] w-[260px] text-white rounded-md" />
                <button type="submit" className="form-submit">
                  <LuSend color="#fff" className="absolute top-2/4 -translate-y-2/4 right-4" />
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </>
  )
}