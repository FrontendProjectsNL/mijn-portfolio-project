interface HeroProps {}

const Hero: React.FC<HeroProps> = () => {
  return (
    <div className="w-full h-screen bg-[url('/my_hero_bg.webp')] bg-cover bg-center">
      <div className="flex items-center gap-10">
        <div className="w-[50%] h-screen bg-blue-300"></div>
        <div className="w-[50%] h-screen bg-pink-300"></div>
        <div></div>
      </div>
    </div>
  );
};

export default Hero;
