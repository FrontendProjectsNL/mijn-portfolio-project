import IconCloud from '@/components/ui/icon-cloud';
import Image from 'next/image';

const slugs = [
  'typescript',
  'javascript',
  'figma',
  'sanity',
  'github',
  'git',
  'firebase',
  'html5',
  'css3',
  'nodedotjs',
  'express',
  'nextdotjs',
  'prisma',
  'amazonaws',
  'postgresql',
  'typescript',
  'javascript',
  'react',
  'mongodb',
  'sass',
  'reacthookform',
  'mysql',
  'stripe',
  'nextdotjs',
  'shadcnui',
];

interface HeroProps {}

const Hero: React.FC<HeroProps> = () => {
  return (
    <div className="w-full h-screen bg-[url('/my_hero_bg.webp')] bg-cover bg-center">
      <div className="flex justify-around items-center gap-2">
        <div className="w-[50%] h-screen bg-blue-300 flex flex-col justify-center items-center">
          <h1 className="mt-12 font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl leading-tight sm:leading-snug md:leading-normal lg:leading-relaxed xl:leading-loose">
            Hello, welcome!
          </h1>

          <p className="text-balance py-4 px-6 sm:py-6 sm:px-8 md:py-8 md:px-10 lg:py-10 lg:px-12 xl:py-12 xl:px-14 leading-relaxed sm:leading-loose md:leading-normal lg:leading-relaxed xl:leading-tight text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl">
            aliquid reiciendis modi excepturi voluptate ut omnis culpa ipsam
            eius enim fugit iure nobis minus assumenda doloribus, placeat
            nostrum ratione? Harum sapiente aliquam debitis architecto veniam
            quae, aut ipsa officia ducimus cum. Doloremque amet error
            repellendus neque sapiente qui?
          </p>
          <div className="flex justify-center items-center gap-4">
            <button className="rounded-full group bg-black relative m-1 cursor-pointer overflow-hidden px-20 py-4 font-mono font-semibold">
              <span className="ease absolute top-1/2 h-0 w-64 origin-center -translate-x-20 rotate-45 bg-[#f27d4b] transition-all duration-300 group-hover:h-64 group-hover:-translate-y-32"></span>
              <span className="ease relative text-white transition duration-300 group-hover:text-white text-base sm:text-lg md:text-xl lg:text-xl">
                Hire me!
              </span>
            </button>
            <div className="flex justify-center items-center gap-4">
              <Image
                src={'/myphoto.webp'}
                width={70}
                height={70}
                className="rounded-full"
              />
              <div>
                <p>Ehsan Alborzi</p>
                <p>Fullstack Developer</p>
              </div>
            </div>
          </div>
        </div>

        <div className="w-[50%] h-screen bg-pink-300 flex justify-center place-items-end pb-5">
          <IconCloudDemo />
        </div>
        <div></div>
      </div>
    </div>
  );
};

export default Hero;

function IconCloudDemo() {
  return (
    // <div className="relative w-[60%] h-[75%]  overflow-hidden rounded-3xl border-4 border-black bg-background px-2 pb-20 pt-8 mx-auto mt-[20%]">
    //   <IconCloud iconSlugs={slugs} />
    // </div>
    <div className="relative w-[60%] h-[75%]  overflow-hidden rounded-3xl border-4 border-black bg-background ">
      <IconCloud iconSlugs={slugs} />
    </div>
  );
}
