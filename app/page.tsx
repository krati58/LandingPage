import Image from "next/image";
import Header from "./Pages/Header";
import Planet from './Pages/Planet';
import Developed from './Pages/Developed';
import Project from './Pages/Project';
import Discuss from './Pages/Discuss';
import ApplicationDevepment from './Pages/ApplicationDevepment';
import OurTeam from './Pages/OurTeam';
import Footer from './Pages/Footer';


// <main className="flex min-h-screen flex-col items-center justify-between p-24">
//  <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex"> 
export default function Home() {
  return (

    <>


      <Header />
      <Planet />
      <Developed />
      <Project />
      <Discuss />
      <ApplicationDevepment />
      <OurTeam />
      <Footer />
    </>




  );
}

// </div> 
//      </main>