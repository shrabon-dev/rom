"use client"
import Image from "next/image";
import pmtion from "@/assets/images/pmtion.png"
import Slider from "react-slick";

export default function Promotion() {
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
      };
  return (
    <>
        <div className="sliderBox  pb-20">
        <Slider {...settings}>
            <div className="img w-full h-full">
                <Image src={pmtion} alt={pmtion} className="w-full  block"/>
            </div>
            <div className="img w-full h-full">
                <Image src={pmtion} alt={pmtion} className="w-full block"/>
            </div>
            <div className="img w-full h-full">
                <Image src={pmtion} alt={pmtion} className="w-full block"/>
            </div>
           
        </Slider>
           
        </div>   
    </>
  )
}
