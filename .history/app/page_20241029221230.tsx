import Image from 'next/image';
import Hero from './components/Hero';
import TechStack from './components/TechStack';
// import responsiveDev from '';

export default function Home() {
  return (
    <div className="font-roboto ">
      <Hero />
      <TechStack />
      <section className="w-[90%] h-screen mx-auto bg-[#DFEFF0] rounded-3xl">
        <Image src={'/responsivedev.jpg'} width={944} height={611} />
      </section>
    </div>
  );
}
