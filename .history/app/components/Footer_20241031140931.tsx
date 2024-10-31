interface FooterProps {}

const Footer: React.FC<FooterProps> = () => {
  return (
    <section className="w-full h-[700px] bg-black flex flex-col ">
      <div>
        <p>first </p>
      </div>
      <div>
        <p>second</p>
      </div>
    </section>
  );
};

export default Footer;
