import { helpigns } from "@/constants/home";

export default function Helping() {
  return (
    <section className="helping max-lg:flex-col container mx-auto p-8 flex items-center justify-between">
      <div className="left max-lg:mb-8">
        <h1 className="grid font-bold text-[32px] text-slate-700 max-md:text-[24px]">
          <span>Helping a local</span>
          <span className="text-primary">business reinvent itself</span>
        </h1>
        <p className="text-slate-500 mt-2 max-md:text-[14px]">We reached here with our hard work and dedication</p>
      </div>
      <div className="right">
        <div className="cards grid grid-cols-2 gap-14 max-md:grid-cols-1">
          { helpigns.map((ele, index) => (
            <div className="card flex items-center max-md:w-full" key={index}>
              <div className="icon text-[44px] text-primary mr-3 max-md:mr-8">{ele.icon}</div>
              <div className="info grid">
                <span className="font-bold text-slate-700 text-[24px]">{ele.count}</span>
                <span className="text-[14px] text-slate-500">{ele.span}</span>
              </div>
            </div>
          )) }
        </div>
      </div>
    </section>
  )
}