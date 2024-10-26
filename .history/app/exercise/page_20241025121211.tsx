'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import logo from '/public/EhsanLogo-transparent.png';

interface PageProps {}

const Page: React.FC<PageProps> = () => {
  const [isShrunk, setIsShrunk] = useState<boolean>(false);
  const [top, setTop] = useState('top-7');

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 70) {
        setIsShrunk(true);
        setTop('top-5');
      } else {
        setIsShrunk(false);
        setTop('top-7');
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    // <div className="max-w-8xl w-full font-roboto mx-auto">
    <div>
      <nav
        className={`px-14 fixed transition-all duration-700 ease-in-out bg-[#FAC872] flex justify-between items-center ${
          isShrunk
            ? 'h-[75px] w-[60%] rounded-3xl mx-auto'
            : 'h-[90px] w-full opacity-100'
        }`}
        style={{
          left: '50%',
          transform: 'translateX(-50%)', // Center horizontally
          top: `${top}`,
        }}
      >
        <Link href={'/'} className="font-medium text-lg">
          <Image src={logo} width={125} height={50} />
        </Link>
        <ul className="flex">
          <li>
            <Link
              href=""
              className="px-4 py-2 cursor hover:underline hover:underline-offset-4 text-lg font-medium font-roboto"
            >
              Link 1
            </Link>
          </li>
          <li>
            <Link
              href=""
              className="px-4 py-2 cursor hover:underline hover:underline-offset-4 text-lg font-medium font-roboto"
            >
              Link 2
            </Link>
          </li>
          <li>
            <Link
              href=""
              className="px-4 py-2 cursor hover:underline hover:underline-offset-4 text-lg font-medium font-roboto"
            >
              Link 3
            </Link>
          </li>
          <li>
            <Link
              href=""
              className="px-4 py-2 cursor hover:underline hover:underline-offset-4 text-lg font-medium font-roboto"
            >
              Link 4
            </Link>
          </li>
          <li>
            <Link
              href=""
              className="px-4 py-2 cursor hover:underline hover:underline-offset-4 text-lg font-medium font-roboto"
            >
              Link 5
            </Link>
          </li>
        </ul>
      </nav>

      <section className="w-full h-screen bg-[#FAC872]"></section>
      <section className="w-full h-screen bg-green-300"></section>
    </div>
  );
};

export default Page;
