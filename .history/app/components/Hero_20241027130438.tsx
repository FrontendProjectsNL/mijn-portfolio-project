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
        <div className="w-[50%] h-screen bg-blue-300"></div>
        <div className="w-[50%] h-screen bg-pink-300">
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
    <div className="relative flex size-full max-w-lg items-center justify-center overflow-hidden rounded-3xld- border-4 border-black bg-background px-20 pb-20 pt-8 ">
      <IconCloud iconSlugs={slugs} />
    </div>
  );
}
