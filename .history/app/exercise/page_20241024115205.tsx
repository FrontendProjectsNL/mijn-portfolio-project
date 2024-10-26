'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import logo from '/public/EhsanLogo-transparent.png';

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
    <div className="max-w-8xl w-full font-roboto mx-auto">
      <nav
        className={`px-14 fixed transition-all duration-300 ease-in-out bg-slate-400 flex justify-between items-center ${
          isShrunk
            ? 'h-[70px] w-[80%] opacity-50 rounded-full'
            : 'h-[90px] w-full opacity-100'
        }`}
        style={{
          left: isShrunk ? '10%' : '0', // Shift to 10% when shrinking, centered
          transition: 'all 0.3s ease-in-out', // Smooth transition for top, left, transform, and width
        }}
      >
        <Link href={'/'} className="font-medium text-lg">
          <Image src={logo} width={150} height={50} />
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
      <section className="w-full h-screen bg-orange-300"></section>
      <section className="w-full h-screen bg-green-300"></section>
    </div>
  );
};

export default Page;
