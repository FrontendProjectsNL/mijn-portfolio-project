'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import logo from '/public/EhsanLogo-transparent.png';
import { Button } from '@/components/ui/button';

interface PageProps {}

const Page: React.FC<PageProps> = () => {
  const [isShrunk, setIsShrunk] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 70) {
        setIsShrunk(true);
      } else {
        setIsShrunk(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    // <div className="max-w-8xl w-full font-roboto mx-auto">
    <div className="">
      <nav
        className={`px-14 fixed transition-all duration-300 ease-linear bg-[#FAC872] flex justify-between items-center ${
          isShrunk
            ? 'h-[75px] w-[60%] rounded-3xl mx-auto top-5'
            : 'h-[90px] w-[90%] opacity-100 top-7'
        }`}
        style={{
          left: '50%',
          transform: 'translateX(-50%)', // Center horizontally
        }}
      >
        <div className="flex items-center ">
          <Link href={'/'} className="font-medium text-lg mr-20">
            <Image src={logo} width={125} height={50} />
          </Link>
          <ul className="flex">
            <li>
              <Link
                href=""
                className="px-4 py-2 cursor text-lg font-medium font-roboto"
              >
                Link 1
              </Link>
            </li>
            <li>
              <Link
                href=""
                className="px-4 py-2 cursor text-lg font-medium font-roboto"
              >
                Link 2
              </Link>
            </li>
            <li>
              <Link
                href=""
                className="px-4 py-2 cursor text-lg font-medium font-roboto"
              >
                Link 3
              </Link>
            </li>
            <li>
              <Link
                href=""
                className="px-4 py-2 cursor text-lg font-medium font-roboto"
              >
                Link 4
              </Link>
            </li>
          </ul>
        </div>
        <div className="flex gap-3">
          <Button
            size="lg"
            className="relative overflow-hidden font-medium text-black border-2 border-black px-12 rounded-full bg-transparent before:absolute before:inset-0 before:bg-[#f27d4b] before:bg-opacity-70 before:origin-bottom before:scale-y-0 before:transition-transform before:duration-[5000ms] hover:before:scale-y-100"
          >
            <span className="relative z-10">Button Text</span>
          </Button>

          <Button size={'lg'} variant={'outline'}>
            Signin
          </Button>
        </div>
      </nav>

      <section className="w-full h-screen bg-[#FAC872]"></section>
      <section className="w-full h-screen bg-green-300"></section>
    </div>
  );
};

export default Page;
