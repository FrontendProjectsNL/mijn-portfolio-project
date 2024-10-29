import Image from 'next/image';
import Hero from './components/Hero';
import TechStack from './components/TechStack';

export default function Home() {
  return (
    <div className="font-roboto ">
      <Hero />
      {/* <section className="w-full h-screen bg-green-400"></section> */}
      <TechStack />
      <section className="w-[90%] h-screen mx-auto bg-[#DFEFF0] rounded-3xl"></section>
    </div>
  );
}
