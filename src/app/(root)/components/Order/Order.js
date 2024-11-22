import pdct from "@/assets/images/pdct4.png"
import pdct2 from "@/assets/images/pdct5.png"
import Image from "next/image";

export default function Order() {
  return (
    <div className="container py-20">
    <div className="lg:flex-between">
        <div className="lg:w-1/2">
          <div className="img relative">
             <span className="w-96 h-96 inline-block bg-secondary/30 absolute top-0 left-20 lg:left-10 xl:left-20 rounded-full -z-0"></span>
             <Image src={pdct2} alt="ROM" className="relative w-96 top-10 -right-40 lg:-right-20 xl:-right-40 z-10"/>
             <Image src={pdct} alt="ROM" className="absolute w-96 -top-0 -left-0 z-20"/>
          </div>
        </div>
        <div className="lg:w-1/2">
          <h2 className="font-peckham font-bold !leading-normal text-white text-2xl pt-20 md:text-5xl">What's included in your order</h2>
          <div>
            <ul className=" pt-5">
                <li className="!list-inside list-disc text-secondary pb-3 font-roboto font-normal text-base ">Integrated with Artificial Intelligence | Smart Hit Control</li>
                <li className="!list-inside list-disc text-secondary pb-3 font-roboto font-normal text-base "> 6 different head attachments to suit all muscle groups</li>
                <li className="!list-inside list-disc text-secondary pb-3 font-roboto font-normal text-base ">Triple Noise Reduction Technology</li>
                <li className="!list-inside list-disc text-secondary pb-3 font-roboto font-normal text-base ">Remaining Power Display</li>
                <li className="!list-inside list-disc text-secondary pb-3 font-roboto font-normal text-base "> Vibration filtering for smoother operating</li>
                <li className="!list-inside list-disc text-secondary pb-3 font-roboto font-normal text-base "> 5 Year Motor Warranty</li>
                <li className="!list-inside list-disc text-secondary pb-3 font-roboto font-normal text-base "> 12V Lithium battery with 2 hour fast charging</li>
                <li className="!list-inside list-disc text-secondary pb-3 font-roboto font-normal text-base ">30 Day Money Back Guarantee</li>
                <li className="!list-inside list-disc text-secondary pb-3 font-roboto font-normal text-base "> Free Express Delivery</li>
            </ul>
          </div>
        </div>
    </div>
</div>
  )
}
