import { CardsDetails } from "@/constants/home";
import Image from "next/image";
import { FaArrowRightLong } from "react-icons/fa6";

export default function Marketing() {
  return (
    <section className="marketing w-full bg-white p-8 pt-0">
          <div className="title text-center w-fit mx-auto">
            <h1 className="text-[36px] mx-auto font-semibold text-slate-700 mb-1 max-w-[542px] max-lg:text-[22px]">Caring is the new marketing</h1>
            <p className="text-slate-500 max-w-[600px] mx-auto">The Nexcent blog is the best place to read about the latest membership insights, trends and more. See who&apos;s joining the community, read about how our community are increasing their membership income and lot&apos;s more.​</p>
          </div>
          <div className="container mx-auto py-6">
            <div className="cards flex items-center justify-center flex-wrap gap-6">
              { CardsDetails.map((ele, index) => (
                <div className="card w-[350px] h-[350px] relative flex items-center justify-center" key={index}>
                  <Image src={ele.imgUrl} alt="Card Image" width={350} height={0} className="rounded-lg" />
                  <div className="info p-8 bg-slate-100 w-[300px] absolute bottom-[-3%] shadow-md rounded-lg">
                    <p className="mb-3">{ele.desc}</p>
                    <div className="icon flex items-center gap-3 text-primary text-center">
                      <span>Readmore</span>
                      <FaArrowRightLong />
                    </div>
                  </div>
                </div>
              )) }
            </div>
          </div>
        </section>
  )
}