interface FooterProps {}

const Footer: React.FC<FooterProps> = () => {
  return (
    <section className="w-full h-[500px] bg-black flex flex-col ">
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
