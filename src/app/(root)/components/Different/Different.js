import Image from "next/image";
import pdct from "@/assets/images/pdct2.png"
import men from "@/assets/images/men.png"
import { GiProcessor } from "react-icons/gi";

export default function Different() {
  return (
    <div className="container py-20">
        <div className="md:flex-between md:!items-start">
            <div className="md:w-1/2 ">
              <Image className="w-1/2 md:w-full" src={pdct} alt="ROM"/>
            </div>
            <div className="md:w-1/2">
              <h2 className="font-peckham font-bold py-10 !leading-normal text-white text-2xl lg:text-5xl">What makes this gun different from the rest</h2>
              <div>
                <ul className="flex items-start flex-wrap pt-5">
                    <li className="sm:w-1/2 md:w-full lg:w-1/2  md:!items-start text-secondary pb-3 font-roboto font-normal text-base flex items-center gap-3"><span className="w-20 text-white rounded-full h-16 bg-secondary/20 inline-flex justify-center items-center text-4xl"><GiProcessor className="inline-block"/></span> <span className="w-11/12">Integrated with Artificial Intelligence | Smart Hit Control</span></li>
                    <li className="sm:w-1/2 md:w-full lg:w-1/2  md:!items-start text-secondary pb-3 font-roboto font-normal text-base flex items-center gap-3"><span className="w-20 text-white rounded-full h-16 bg-secondary/20 inline-flex justify-center items-center text-4xl"><GiProcessor className="inline-block"/></span><span className="w-11/12"> 6 different head attachments to suit all muscle groups</span></li>
                    <li className="sm:w-1/2 md:w-full lg:w-1/2  md:!items-start text-secondary pb-3 font-roboto font-normal text-base flex items-center gap-3"><span className="w-20 text-white rounded-full h-16 bg-secondary/20 inline-flex justify-center items-center text-4xl"><GiProcessor className="inline-block"/></span><span className="w-11/12">Triple Noise Reduction Technology</span></li>
                    <li className="sm:w-1/2 md:w-full lg:w-1/2  md:!items-start text-secondary pb-3 font-roboto font-normal text-base flex items-center gap-3"><span className="w-20 text-white rounded-full h-16 bg-secondary/20 inline-flex justify-center items-center text-4xl"><GiProcessor className="inline-block"/></span><span className="w-11/12">Remaining Power Display</span></li>
                    <li className="sm:w-1/2 md:w-full lg:w-1/2  md:!items-start text-secondary pb-3 font-roboto font-normal text-base flex items-center gap-3"><span className="w-20 text-white rounded-full h-16 bg-secondary/20 inline-flex justify-center items-center text-4xl"><GiProcessor className="inline-block"/></span><span className="w-11/12"> Vibration filtering for smoother operating</span></li>
                    <li className="sm:w-1/2 md:w-full lg:w-1/2  md:!items-start text-secondary pb-3 font-roboto font-normal text-base flex items-center gap-3"><span className="w-20 text-white rounded-full h-16 bg-secondary/20 inline-flex justify-center items-center text-4xl"><GiProcessor className="inline-block"/></span><span className="w-11/12"> 5 Year Motor Warranty</span></li>
                    <li className="sm:w-1/2 md:w-full lg:w-1/2  md:!items-start text-secondary pb-3 font-roboto font-normal text-base flex items-center gap-3"><span className="w-20 text-white rounded-full h-16 bg-secondary/20 inline-flex justify-center items-center text-4xl"><GiProcessor className="inline-block"/></span><span className="w-11/12"> 12V Lithium battery with 2 hour fast charging</span></li>
                    <li className="sm:w-1/2 md:w-full lg:w-1/2  md:!items-start text-secondary pb-3 font-roboto font-normal text-base flex items-center gap-3"><span className="w-20 text-white rounded-full h-16 bg-secondary/20 inline-flex justify-center items-center text-4xl"><GiProcessor className="inline-block"/></span><span className="w-11/12">30 Day Money Back Guarantee </span> </li>
                    <li className="sm:w-1/2 md:w-full lg:w-1/2  md:!items-start text-secondary pb-3 font-roboto font-normal text-base flex items-center gap-3"><span className="w-20 text-white rounded-full h-16 bg-secondary/20 inline-flex justify-center items-center text-4xl"><GiProcessor className="inline-block"/></span><span className="w-11/12"> 12 KG pressure bearing with brushless motor (Which means it's intensely powerful, while also having an extremely quiet & frictionless operating system)</span></li>
                </ul>   
              </div>
            </div>
        </div>
        <div className="md:flex-between md:flex-row-reverse mt-20">
            <div className="md:w-1/2">
              <Image src={men} alt="ROM" className="ml-auto"/>
            </div>
            <div className="md:w-1/2">
              <h2 className="font-peckham font-bold !leading-normal text-white md:text-2xl lg:text-5xl">The Benefits</h2>
              <div>
                <ul className="flex items-start flex-wrap pt-5">
                    <li className="sm:w-1/2 md:w-full lg:w-1/2 text-secondary pb-3 font-roboto font-normal text-base flex items-center gap-3"><span className="w-20 text-white rounded-full h-16 bg-secondary/20 inline-flex justify-center items-center text-4xl"><GiProcessor className="inline-block"/></span> <span className="w-11/12">Integrated with Artificial Intelligence | Smart Hit Control</span></li>
                    <li className="sm:w-1/2 md:w-full lg:w-1/2 text-secondary pb-3 font-roboto font-normal text-base flex items-center gap-3"><span className="w-20 text-white rounded-full h-16 bg-secondary/20 inline-flex justify-center items-center text-4xl"><GiProcessor className="inline-block"/></span><span className="w-11/12"> 6 different head attachments to suit all muscle groups</span></li>
                    <li className="sm:w-1/2 md:w-full lg:w-1/2 text-secondary pb-3 font-roboto font-normal text-base flex items-center gap-3"><span className="w-20 text-white rounded-full h-16 bg-secondary/20 inline-flex justify-center items-center text-4xl"><GiProcessor className="inline-block"/></span><span className="w-11/12">Triple Noise Reduction Technology</span></li>
                    <li className="sm:w-1/2 md:w-full lg:w-1/2 text-secondary pb-3 font-roboto font-normal text-base flex items-center gap-3"><span className="w-20 text-white rounded-full h-16 bg-secondary/20 inline-flex justify-center items-center text-4xl"><GiProcessor className="inline-block"/></span><span className="w-11/12">Remaining Power Display</span></li>
                    <li className="sm:w-1/2 md:w-full lg:w-1/2 text-secondary pb-3 font-roboto font-normal text-base flex items-center gap-3"><span className="w-20 text-white rounded-full h-16 bg-secondary/20 inline-flex justify-center items-center text-4xl"><GiProcessor className="inline-block"/></span><span className="w-11/12"> Vibration filtering for smoother operating</span></li>
                    <li className="sm:w-1/2 md:w-full lg:w-1/2 text-secondary pb-3 font-roboto font-normal text-base flex items-center gap-3"><span className="w-20 text-white rounded-full h-16 bg-secondary/20 inline-flex justify-center items-center text-4xl"><GiProcessor className="inline-block"/></span><span className="w-11/12"> 5 Year Motor Warranty</span></li>
                    <li className="sm:w-1/2 md:w-full lg:w-1/2 text-secondary pb-3 font-roboto font-normal text-base flex items-center gap-3"><span className="w-20 text-white rounded-full h-16 bg-secondary/20 inline-flex justify-center items-center text-4xl"><GiProcessor className="inline-block"/></span><span className="w-11/12"> 12V Lithium battery with 2 hour fast charging</span></li>
                    <li className="sm:w-1/2 md:w-full lg:w-1/2 text-secondary pb-3 font-roboto font-normal text-base flex items-center gap-3"><span className="w-20 text-white rounded-full h-16 bg-secondary/20 inline-flex justify-center items-center text-4xl"><GiProcessor className="inline-block"/></span><span className="w-11/12">30 Day Money Back Guarantee </span> </li>
                </ul>
              </div>
            </div>
        </div>
    </div>
  )
}
