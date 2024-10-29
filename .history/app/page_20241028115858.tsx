import Image from 'next/image';
import Hero from './components/Hero';
import TechStack from './components/TechStack';

export default function Home() {
  return (
    <div className="font-roboto ">
      <Hero />
      {/* <section className="w-full h-screen bg-green-400"></section> */}
      <TechStack />
      <section className="w-full h-screen bg-[#DFEFF0]"></section>
    </div>
  );
}
