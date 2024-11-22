import Image from "next/image";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import Different from "./components/Different/Different";
import Order from "./components/Order/Order";
import Recovery from "./components/recovery/Recovery";
import Video from "./components/video/Video";
import Footer from "./components/footer/Footer";
import Promotion from "./components/promotion/Promotion";

export default function Home() {
  return (
     <>
        <Header/>
        <Hero/>
        <Different/>
        <Promotion/>
        <Order/>
        <Recovery/>
        <Video/>
        <Footer/>
        
     </>
  );
}
