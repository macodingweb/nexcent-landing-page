import Image from "next/image"

interface PixelTypes {
  title: string,
  desc: string,
  imgUrl: string,
}

export default function PixelGrade({ title, desc, imgUrl } : PixelTypes) {
  return (
    <section className="pixel-grade bg-white w-full">
      <div className="content lg:container mx-auto p-8 flex items-center justify-between max-lg:flex-col max-lg:text-center">
        <Image src={imgUrl} alt="Section Img" className="max-md:w-[300px]" width={450} height={450} />
        <div className="details w-[650px] max-md:w-full">
          <h1 className="title text-[40px] mb-2 font-semibold text-slate-700 max-lg:w-full break-words max-md:text-[24px]">{title}</h1>
          <p className="desc leading-[1.7] text-slate-500 mb-8 max-lg:w-full max-md:text-[14px]">{desc}</p>
          <button className="learn-more px-8 py-3 bg-primary text-white rounded-md border-2 border-solid border-transparent transition-all hover:text-primary hover:bg-transparent hover:border-primary" type="button">Learn More</button>
        </div>
      </div>
    </section>
  )
}