interface HeroProps {}

const Hero: React.FC<HeroProps> = () => {
  return (
    <div className="w-full bg-[url('/public/my_hero_bg.webp')] bg-cover bg-center h-screen "></div>
  );
};

export default Hero;
