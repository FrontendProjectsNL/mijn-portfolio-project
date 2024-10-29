import Image from 'next/image';
import Hero from './components/Hero';
import TechStack from './components/TechStack';
// import responsiveDev from '';

export default function Home() {
  return (
    <div className="font-roboto ">
      <Hero />
      <TechStack />
      <section className="flex flex-col w-[90%] h-screen mx-auto bg-[#DFEFF0] rounded-3xl md:p-10">
        <Image src={'/responsivedevpng.png'} width={708} height={459} />
        <div></div>
      </section>
    </div>
  );
}
