import { suitableCards } from "@/constants/home";
import Image from "next/image";

export default function Suitable() {
  return (
    <section className="suitable w-full bg-white p-8 pt-0">
      <div className="title text-center w-fit mx-auto">
        <h1 className="text-[36px] font-semibold text-slate-700 mb-1 max-w-[542px] max-lg:text-[22px]">Manage your entire community in a single system</h1>
        <p className="text-slate-500">Who is Nextcent suitable for?</p>
      </div>
      <div className="container mx-auto py-6">
        <div className="cards flex items-center justify-center gap-8 mx-auto flex-wrap">
          { suitableCards.map((ele, index) => (
            <div className="card shadow-md rounded-md py-6 px-8 w-[299px] gard text-center place-items-center" key={index}>
              <Image src={ele.imgUrl} alt="Icon" width={64} height={64} />
              <h1 className="text-[28px] mb-2 leading-[1.2] font-bold text-slate-700 mt-3">{ele.title}</h1>
              <p className="leading-[1.7] text-slate-500 text-[14px]">{ele.content}</p>
            </div>
          )) }
        </div>
      </div>
    </section>
  )
}