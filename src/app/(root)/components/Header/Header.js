import Image from "next/image";
import logo from "@/assets/images/logo.png";

export default function Header() {
  return (
    <>
        <div className="logo py-5">
           <div className="container">
             <div className="flex justify-between items-center">
                 <div className="w-1/12"> <Image src={logo} alt={logo}/></div>
             </div>
           </div>
        </div>  
    </>
  )
}
