interface FooterProps {}

const Footer: React.FC<FooterProps> = () => {
  return (
    <section className="w-full h-[500px] bg-black flex flex-col justify-between ">
      <div className="mt-14  border-t-2 border-gray-400 border-dotted w-[85%] mx-auto h-10 min-h-8 z-50">
        testGamer
      </div>
      <div>
        <p className="text-white">first </p>
      </div>
      <div>
        <p className="text-white">second</p>
      </div>
    </section>
  );
};

export default Footer;
