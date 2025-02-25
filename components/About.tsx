import Image from "next/image"
import { customers } from "@/constants/home";
import { FaArrowRightLong } from "react-icons/fa6";

export default function About() {
  return (
    <section className="about container max-lg:flex-col max-lg:text-center mx-auto p-8 flex items-center justify-center">
      <div className="left max-lg:mb-10 mr-14 max-lg:mr-0 w-[300px] h-[300px] max-lg:w-[250px] max-lg:h-[250px] rounded-[18px] overflow-hidden flex items-center justify-center">
        <Image src={"/section-img-3.jpg"} alt="Section Img" className="rounded-xl" width={300} height={300} />
      </div>
      <div className="right w-[800px] grid max-lg:w-full">
        <p className="content text-slate-500 leading-[1.7] text-[14px]">Maecenas dignissim justo eget nulla rutrum molestie. Maecenas lobortis sem dui, vel rutrum risus tincidunt ullamcorper. Proin eu enim metus. Vivamus sed libero ornare, tristique quam in, gravida enim. Nullam ut molestie arcu, at hendrerit elit. Morbi laoreet elit at ligula molestie, nec molestie mi blandit. Suspendisse cursus tellus sed augue ultrices, quis tristique nulla sodales. Suspendisse eget lorem eu turpis vestibulum pretium. Suspendisse potenti. Quisque malesuada enim sapien, vitae placerat ante feugiat eget. Quisque vulputate odio neque, eget efficitur libero condimentum id. Curabitur id nibh id sem dignissim finibus ac sit amet magna.</p>
        <span className="name my-3 text-primary text-[18px] font-semibold">Tim Smith</span>
        <span className="job text-slate-400 text-[15px]">British Dragon Boat Racing Association</span>
        <div className="customers flex items-center justify-center my-3 max-lg:flex-col">
          <div className="content flex items-center justify-center flex-wrap">
            { customers.map((ele, index) => (
              <div className="customer p-4" key={index}>
                <Image src={ele.imgUrl} alt="Customer" width={50} height={50} />
              </div>
            )) }
          </div>
          <button className="text-primary font-bold flex items-center gap-3" type="button">
            <span>Meet all customers </span>
            <FaArrowRightLong />
          </button>
        </div>
      </div>
    </section>
  )
}