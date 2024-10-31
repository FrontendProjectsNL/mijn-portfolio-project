import Image from 'next/image';

interface FooterProps {}

const Footer: React.FC<FooterProps> = () => {
  return (
    <section className="w-full h-[500px] bg-[#141414] flex flex-col justify-between ">
      <div className="mt-20  border-t-2 border-[#2b2b2b] border-solid w-[calc(100%-60px)] mx-auto h-10 min-h-8 z-50"></div>
      {/* <div className="-mt-48 w-[95%] flex justify-around items-center mx-auto">
        <div>
          <Image src={'/EhsanLogo2.png'} width={225} height={150} />
        </div>
        <div className="">
          <p className="text-white">links</p>
        </div>

        <div>
          <p className="text-white">email</p>
        </div>
      </div>
      <div>
        <p className="text-white">© 2024 Ehsan Alborzi</p>
      </div> */}

      <div className="-mt-48 w-[95%] grid grid-cols-12">
        <div className="col-span-2 col-start-3">
          <Image src={'/EhsanLogo2.png'} width={225} height={150} />
        </div>
        <div className="col-span-1 col-start-4">
          <p className="text-white text-balance sm:text-lg md:text-xl lg:text-xl xl:text-2x">
            links
          </p>
        </div>

        <div className="col-span-1 col-start-8">
          <p className="text-white text-balance sm:text-lg md:text-xl lg:text-xl xl:text-2x">
            email
          </p>
        </div>
      </div>
      <div>
        <p className="text-white">© 2024 Ehsan Alborzi</p>
      </div>
    </section>
  );
};

export default Footer;
