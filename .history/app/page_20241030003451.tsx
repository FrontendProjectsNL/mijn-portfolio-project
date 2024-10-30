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
          <div className="flex flex-col gap-14">
            <h2 className="text-3xl font-bold">Responsive Web Dev</h2>
            <p className="-mt-4 text-balance sm:text-lg md:text-xl lg:text-xl xl:text-2xl">
              I focus on creating dynamic, adaptable interfaces that look and
              function beautifully on any screen size. From mobile phones to
              desktop monitors, each design element responds fluidly, ensuring
              users enjoy a seamless experience wherever they go.
            </p>
            <button className="w-[50%] self-center bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-6 rounded-lg animate-bounce">
              Team Collaboration
            </button>
          </div>
        </section>
      </div>
    </div>
  );
}