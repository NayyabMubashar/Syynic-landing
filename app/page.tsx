

import Image from "next/image";
import Header from "./Header/Header";
import Solution from "./solution/page";
import Pricing from "./pricing/page";
import Resources from "./resources/page";
import Enterprise from "./enterprise/page";
import Footer from "./Footer/Footer";
import Hero from "./Hero/page";
import Contact from "./contact/page";


export default function Home() {
  return (
    <>
      <div className="font-display min-h-screen bg-syynic-navy/90">
        <Header />

        <Hero />

        <Solution />
        <Pricing />
        <Resources />
        <Enterprise />
        <Contact/>
        <Footer />
      </div>
    </>
  );
}
