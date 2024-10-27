interface HeroProps {}

const Hero: React.FC<HeroProps> = () => {
  return (
    <div className="w-full h-screen bg-[url('/my_hero_bg.webp')] bg-cover bg-center"></div>
  );
};

export default Hero;
