import Image from 'next/image';
import Link from 'next/link';

interface FooterProps {}

const Footer: React.FC<FooterProps> = () => {
  return (
    <section className="w-full h-[500px] bg-[#141414] flex flex-col justify-between ">
      <div className="mt-20  border-t-2 border-[#2b2b2b] border-solid w-[calc(100%-60px)] mx-auto h-10 min-h-8 z-50"></div>
      <div className=" w-[95%] grid grid-cols-12">
        <div className="col-span-2 col-start-2">
          <Image src={'/EhsanLogo2.png'} width={225} height={150} />
        </div>
        <div className="col-span-1 col-start-5">
          <div className="flex flex-col gap-4">
            <Link
              href="/"
              href="href"
              className="text-white text-balance sm:text-lg md:text-xl lg:text-xl xl:text-2x"
            >
              Home
            </Link>
            <Link
              href="/"
              href="href"
              className="text-white text-balance sm:text-lg md:text-xl lg:text-xl xl:text-2x"
            >
              Services
            </Link>
            <Link
              href="/"
              href="href"
              className="text-white text-balance sm:text-lg md:text-xl lg:text-xl xl:text-2x"
            >
              Projects
            </Link>
          </div>
        </div>
        <div className="col-span-1 col-start-8">
          <div className="flex flex-col gap-4">
            <Link
              href="/"
              href="href"
              className="text-white text-balance sm:text-lg md:text-xl lg:text-xl xl:text-2x"
            >
              About me
            </Link>
            <Link
              href="/"
              href="href"
              className="text-white text-balance sm:text-lg md:text-xl lg:text-xl xl:text-2x"
            >
              Blog
            </Link>
            <Link
              href="/"
              href="href"
              className="text-white text-balance sm:text-lg md:text-xl lg:text-xl xl:text-2x"
            >
              Contact
            </Link>
          </div>
        </div>
        <div className="col-span-1 col-start-10">
          <Link
            href="/"
            href="href"
            className="text-white text-balance sm:text-lg md:text-xl lg:text-xl xl:text-2x"
          >
            email
          </Link>
        </div>
      </div>
      <div className="ml-20 mb-10">
        <p className="text-white">© 2024 Ehsan Alborzi</p>
      </div>
    </section>
  );
};

export default Footer;
