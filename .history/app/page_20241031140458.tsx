import Image from 'next/image';
import Hero from './components/Hero';
import TechStack from './components/TechStack';
import CarouselProjects from './components/CarouselProjects';
import BookaCallComponent from './components/BookaCallComponent';
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

      <div className="h-screen">
        <section className="flex justify-between items-center w-[90%] h-[90%] mx-auto bg-[#E6EFE2] rounded-3xl md:px-16 ">
          <Image
            src={'/nt_bgr.png'}
            width={708}
            height={459}
            className="md:-mt-10"
          />
          <div className="flex flex-col gap-14">
            <h2 className="text-3xl font-bold">
              Built with Cutting-Edge Technologies
            </h2>
            <p className="-mt-4 text-balance sm:text-lg md:text-xl lg:text-xl xl:text-2xl">
              I leverage the latest technologies and frameworks to develop
              websites that are secure, scalable, and future-ready. By using
              modern tools, I ensure that each project is optimized for
              performance and can grow alongside your needs. My focus on
              security, efficiency, and maintainability guarantees a digital
              presence that is not only robust today but also adaptable for
              tomorrow.
            </p>
            <button className="w-[50%] self-center bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-6 rounded-lg animate-bounce">
              Team Collaboration
            </button>
          </div>
        </section>
      </div>

      <div className="h-screen">
        <section className="flex justify-between items-center w-[90%] h-[90%] mx-auto bg-[#EFEBF5] rounded-3xl md:px-16 ">
          <Image
            src={'/SEO.webp'}
            width={608}
            height={559}
            className="md:-mt-10"
          />
          <div className="flex flex-col gap-14">
            <h2 className="px-8 text-3xl font-bold">
              SEO Optimization for Maximum Visibility
            </h2>
            <p className="-mt-4 px-8 text-balance sm:text-lg md:text-xl lg:text-xl xl:text-2xl">
              I enhance websites with SEO strategies that drive visibility and
              attract the right audience. From on-page optimizations to
              performance improvements, my SEO approach helps boost rankings,
              increase organic traffic, and elevate your brand’s online
              presence. Let’s make your site more discoverable and competitive
              in search results.
            </p>
            <button className="w-[50%] self-center bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-6 rounded-lg animate-bounce">
              Team Collaboration
            </button>
          </div>
        </section>
      </div>

      <div className="h-screen">
        <section className="flex justify-between items-center w-[90%] h-[90%] mx-auto bg-[#E8EFDE] rounded-3xl md:px-16 ">
          <CarouselProjects />
        </section>
      </div>

      <section className="w-full h-96 flex flex-col gap-4 justify-center items-center mx-auto bg-black md:px-16 ">
        <p className="px-8 text-balance sm:text-lg md:text-xl lg:text-xl xl:text-2xl text-white">
          Let's talk!
        </p>
        <BookaCallComponent />
      </section>
    </div>
  );
}
