import Image from "next/image"

export default function Landing() {
  return (
    <section className="landing px-6 max-lg:flex-col-reverse h-[100vh] max-lg:pt-[60px] flex items-center justify-center  container mx-auto w-full">
      <div className="left lg:mr-[120px] max-lg:flex max-lg:flex-col max-lg:items-center max-lg:justify-center">
        <h1 className="text-[54px] max-md:text-[28px] max-md:mb-2 font-bold text-slate-800 leading-[1]">Lessons and insights</h1>
        <h2 className="text-[50px] max-md:text-[24px] font-semibold text-primary leading-[1.4]">from 8 years</h2>
        <p className="text-[14px] my-4 text-slate-500 max-lg:text-center">Where to grow your business as a photographer: site or social media?</p>
        <button className="register px-8 py-3 bg-primary text-white rounded-[8px] transition-all border-2 border-solid border-transparent hover:text-primary hover:bg-transparent hover:border-primary">Register</button>
      </div>
      <div className="right w-[400px] max-lg:w-[250px] max-lg:mb-8">
        <Image src={"/landing-img.png"} alt="Landing Img" width={400} height={0}  />
      </div>
    </section>
  )
}