import Image from "next/image";
import bg from "@/assets/images/bg.png"
import { IoIosPlayCircle } from "react-icons/io";


export default function Video() {
  return (
    <>
         <section className="py-20">
            <div className="container relative h-[560px]">
                <Image src={bg} fill={true} className=" h-screen object-cover -z-[1] object-center rounded-xl w-full"/>
                <div className="overlay w-full h-full flex justify-center items-center">
                    <div className="text-center">
                        <a href="#" className="w-20 h-20 inline-flex rounded-full justify-center items-center text-white text-9xl bg-secondary/20"><IoIosPlayCircle/></a>
                       <div className="text-center pt-5"> <a href="#" className="font-roboto text-black bg-third uppercase font-medium py-3 px-5 text-4xl">Buy Now</a></div>
                    </div>
                </div>
            </div>
         </section>
    </>
  )
}
