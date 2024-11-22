import Image from "next/image";
import men from "@/assets/images/men2.png"
export default function Recovery() {
  return (
    <>
        <section className="relative bg-[#1B1B1B] z-0 my-20 h-96 overflow-hidden">
            <span className="absolute left-72 -z-[1] bg-black w-96 h-full inline-block skew-x-[-35deg]"></span>
            <div className="container">
                <div className="flex">
                    <div className="w-1/2 pt-10">
                        <h4 className="font-peckham text-7xl text-stroke">Recovery</h4>
                        <h4 className="font-peckham py-5 text-7xl text-white">Recovery</h4>
                        <h4 className="font-peckham text-7xl text-stroke">Recovery</h4>
                    </div>
                    <div className="md:w-1/2">
                        <Image className="absolute w-1/2  2 right-0 top-0 h-full" src={men} alt={men}/>
                    </div>
                </div>
            </div>
        </section>   
    </>
  )
}
