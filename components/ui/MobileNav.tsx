import { NavLinks } from "@/constants/home";
import Link from "next/link";
import { IoMdClose } from "react-icons/io";
import { useDispatch, useSelector } from "react-redux";
import { RootState, AppDispatch } from "@/lib/store";
import { close } from "@/lib/features/navbar/navState";

export default function MobileNav() {
  const status = useSelector((state: RootState) => state.status);
  const dispatch = useDispatch<AppDispatch>();

  return (
    <>
      <div className={`screen z-[110] w-full h-[100vh] fixed top-0 left-0 bg-slate-900 opacity-0 hidden transition-all ${status ? "max-lg:block max-lg:opacity-50" : "max-lg:hidden max-lg:opacity-0"}`}></div>
      <div className={`mobile-nav pt-12 h-[100%] hidden w-[300px] z-[9999] transition-all flex-col bg-white right-0 py-6 items-center max-lg:flex justify-between fixed top-0 ${status ? "max-lg:right-0" : "max-lg:right-[-300px]"}`}>
        
        <button className="close-btn absolute top-5 right-5" onClick={() => dispatch(close())}>
          <IoMdClose size={24} className="text-slate-900" />
        </button>
        
        {/* Main List */}
        <ul className="main-list w-full px-6 pr-0 flex-col items-center gap-3 flex">
          { NavLinks.map((ele, index) => (
            <li className={`list-item cursor-pointer w-full text-[#18191F] px-4 py-3 relative transition-all hover:bg-primary hover:text-white rounded-l-md`} key={index}>
              <Link href={ele.url}>{ele.text}</Link>
            </li>
          )) }
        </ul>

        {/* Login & Sign up */}
        <div className="auth-options mt-6 flex items-center gap-3">
          <button className="sign-in px-6 py-2 border-solid border-2 rounded-[8px] border-transparent text-primary transition-all hover:border-primary" type="button">Login</button>
          <button className="sign-up px-6 py-2 border-solid border-2 rounded-[8px] border-transparent text-white bg-primary transition-all hover:bg-transparent hover:border-primary hover:text-primary" type="button">Sign up</button>
        </div>
      </div>
    </>
  )
}