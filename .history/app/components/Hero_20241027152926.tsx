import IconCloud from '@/components/ui/icon-cloud';

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
        <div className="w-[50%] h-screen bg-blue-300 flex flex-col justify-center items-center text-balance gap-4">
          <h1 className="font-bold">Hello, welcome!</h1>

          <p className="py-4 px-6 sm:py-6 sm:px-8 md:py-8 md:px-10 lg:py-10 lg:px-12 xl:py-12 xl:px-14 leading-relaxed sm:leading-loose md:leading-normal lg:leading-relaxed xl:leading-tight text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl">
            aliquid reiciendis modi excepturi voluptate ut omnis culpa ipsam
            eius enim fugit iure nobis minus assumenda doloribus, placeat
            nostrum ratione? Harum sapiente aliquam debitis architecto veniam
            quae, aut ipsa officia ducimus cum. Doloremque amet error
            repellendus neque sapiente qui?
          </p>
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
