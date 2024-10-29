import Image from 'next/image';
import Hero from './components/Hero';
import TechStack from './components/TechStack';
// import responsiveDev from '';

export default function Home() {
  return (
    <div className="font-roboto ">
      <Hero />
      <TechStack />
      <div className="h-screen">
        <section className="flex justify-between items-center w-[90%] h-[90%] mx-auto bg-[#DFEFF0] rounded-3xl md:px-16 ">
          <Image
            src={'/responsivedev2.png'}
            width={708}
            height={459}
            className="md:-mt-10"
          />
          <div className="flex flex-col">
            <h2 className="text-3xl font-bold">
              Crafting Responsive Web Experiences
            </h2>
            <p className="text-balance py-4 px-6 sm:py-6 sm:px-8 md:py-8 md:px-10 lg:py-10 lg:px-12 xl:py-12 xl:px-14 leading-relaxed sm:leading-loose md:leading-normal lg:leading-relaxed xl:leading-tight text-base sm:text-lg md:text-xl lg:text-xl xl:text-2xl">
              I focus on creating dynamic, adaptable interfaces that look and
              function beautifully on any screen size. From mobile phones to
              desktop monitors, each design element responds fluidly, ensuring
              users enjoy a seamless experience wherever they go.
            </p>
            <button className="bg-orange-500 hover:bg-orange-700 text-white font-bold rounded-lg animate-bounce">
              Team Collaboration
            </button>
          </div>
        </section>
      </div>
    </div>
  );
}
