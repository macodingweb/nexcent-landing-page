import Landing from "@/components/Landing";
import Image from "next/image";
import { clients } from "@/constants/home";
import Suitable from "@/components/Suitable";
import PixelGrade from "@/components/PixelGrade";
import Helping from "@/components/Helping";
import { SectionContent } from "@/constants/home";
import About from "@/components/About";
import Marketing from "@/components/Marketing";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Landing />
      <div className="our-clients w-full bg-white p-8">
        <div className="title text-center w-fit mx-auto">
          <h1 className="text-[36px] font-semibold text-slate-700 mb-1">Our Clients</h1>
          <p className="text-slate-500">We have been working with some Fortune 500+ clients</p>
        </div>
        <div className="container mx-auto py-6">
          <div className="clients flex flex-wrap items-center justify-between">
            { clients.map((ele, index) => (
              <div className="client p-2" key={index}>
                <Image src={ele.imgUrl} alt={"Client"} width={60} height={60} />
              </div>
            )) }
          </div>
        </div>
      </div>
      <Suitable />
      { SectionContent.map((ele, index) => index == 1 ? (
        <>
          <Helping />
          <PixelGrade key={index} imgUrl={ele.imgUrl} title={ele.title} desc={ele.desc} />
        </>
      ) : (
        <PixelGrade key={index} imgUrl={ele.imgUrl} title={ele.title} desc={ele.desc} />
      )) }
      <About />
      <Marketing />
      <Footer />
    </>
  )
}