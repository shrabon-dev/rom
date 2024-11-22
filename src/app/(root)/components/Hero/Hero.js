import { IoMdStar } from "react-icons/io";
import product from "@/assets/images/pdct.png"
import bnd from "@/assets/images/bnd.png"
import bnd2 from "@/assets/images/bnd2.png"
import pmt from "@/assets/images/pmt.png"
import pmt2 from "@/assets/images/pmt2.png"
import pmt3 from "@/assets/images/pmt3.png"
import Image from "next/image";

export default function Hero() {
  return (
    <div className="container">
        <div className="flex flex-between !items-start">
            <div className="w-1/2">
                <h1 className="font-peckham !leading-relaxed text-white text-base  sm:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl">Trusted by Athletes</h1>
                <p className="font-roboto font-normal text-secondary text-xs pt-2 sm:pt-0 sm:text-base">Integrated with A.I to ensure your massage pressure is never compromised</p>
                <div>
                    <div className="md:flex py-5">
                        <div className="md:w-1/4 pb-2 md:pb-0">
                            <p className="font-inter font-bold text-white text-sm md:text-lg"><span className="text-sm md:text-4xl">24</span> Months</p>
                            <p className="font-roboto font-medium text-secondary md:pt-2 text-xs md:text-base">Included Warranty</p>
                        </div>
                        <div className="md:w-1/4 pb-2 md:pb-0">
                            <p className="font-inter font-bold text-white text-sm md:text-lg"><span className="text-sm md:text-4xl">1000 +</span></p>
                            <p className="font-roboto font-medium text-secondary md:pt-2 text-xs md:text-base">Loyal customers</p></div>
                        <div className="md:w-1/4 pb-2 md:pb-0">
                            <p className="font-inter font-bold text-white text-sm md:text-lg"><span className="text-sm md:text-4xl flex gap-0 text-yellow-400">
                            <IoMdStar/> <IoMdStar/> <IoMdStar/> <IoMdStar/> <IoMdStar/> 
                            </span></p>
                            <p className="font-roboto font-medium text-secondary md:pt-2 text-base">Stars</p>
                        </div>
                    </div>
                    <p className="font-roboto text-xl md:text-3xl mt-5 text-center font-bold text-black uppercase bg-third p-3 md:p-5 inline-block">
                        Buy Now 
                        <span className="block text-xs  font-normal capitalize">(Risk free 30 day trials)</span>
                    </p>
                    <p className="font-roboto text-xs md:text-lg text-white font-medium pt-5">Buy now, pay later option available</p>
                    <p className="font-roboto text-xs md:text-lg text-third font-black pt-3">Free Worldwide Express Delivery</p>
                    <div className="flex gap-5 pt-5">
                        <Image className="w-10" src={bnd} alt={bnd}/>
                        <Image className="w-10" src={bnd2} alt={bnd2}/>
                    </div>
                </div>
            </div>
            <div className="w-1/2"> 
                <Image src={product} alt={product}/>
            </div>
        </div>
        <div className="flex justify-center items-center gap-5 md:gap-20 py-5 md:py-20">
            <Image className="w-20 block md:w-auto" src={pmt} alt={pmt}/>
            <Image className="w-20 block md:w-auto" src={pmt3} alt={pmt3}/>
            <Image className="w-20 block md:w-auto" src={pmt2} alt={pmt2}/>
        </div>
        <h6 className="font-peckham text-3xl  sm:text-4xl lg:text-7xl xl:text-8xl 2xl:text-9xl text-secondary/50 text-center">Massage Gun</h6>
    </div>
  )
}
