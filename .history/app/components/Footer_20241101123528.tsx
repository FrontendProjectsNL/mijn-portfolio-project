import Image from 'next/image';
import Link from 'next/link';

interface FooterProps {}

const Footer: React.FC<FooterProps> = () => {
  return (
    <section className="w-full h-[500px] bg-[#141414] flex flex-col justify-between ">
      <div className="mt-20  border-t-2 border-[#2b2b2b] border-solid w-[calc(100%-60px)] mx-auto h-10 min-h-8 z-50"></div>
      <div className="-mt-48 w-[95%] grid grid-cols-12">
        <div className="col-span-2 col-start-3">
          <Image src={'/EhsanLogo2.png'} width={225} height={150} />
        </div>
        <div className="col-span-1 col-start-7 flex flex-col gap-4">
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

        <div className="col-span-1 col-start-10">
          <p className="text-white text-balance sm:text-lg md:text-xl lg:text-xl xl:text-2x">
            email
          </p>
        </div>
      </div>
      <div className="ml-20 mb-10">
        <p className="text-white">© 2024 Ehsan Alborzi</p>
      </div>
    </section>
  );
};

export default Footer;
