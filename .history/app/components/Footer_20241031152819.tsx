import Image from 'next/image';

interface FooterProps {}

const Footer: React.FC<FooterProps> = () => {
  return (
    <section className="w-full h-[500px] bg-[#141414] flex flex-col justify-between ">
      <div className="mt-20  border-t-2 border-[#2b2b2b] border-solid w-[calc(100%-60px)] mx-auto h-10 min-h-8 z-50"></div>
      <div className="w-[80%] flex justify-around items-center mx-auto">
        <div>
          <Image src={'/EhsanLogo2.png'} width={225} height={150} />
        </div>

        <div>
          <p className="text-white">links</p>
        </div>

        <div>
          <p className="text-white">email</p>
        </div>
      </div>
      <div>
        <p className="text-white">© 2024 Ehsan Alborzi</p>
      </div>
    </section>
  );
};

export default Footer;
