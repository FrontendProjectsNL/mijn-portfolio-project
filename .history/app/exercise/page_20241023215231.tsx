'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';

interface PageProps {}

const Page: React.FC<PageProps> = () => {
  const [isShrunk, setIsShrunk] = useState<boolean>(false);
  const [isOpaque, setIsOpaque] = useState<boolean>(true);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 70) {
        setIsShrunk(true);
        setIsOpaque(false);
      } else {
        setIsShrunk(false);
        setIsOpaque(true);
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
        className={`mx-4 fixed transition-all duration-300 ease-in-out bg-slate-400 flex justify-between items-center ${
          isShrunk
            ? 'h-[50px] w-[80%] opacity-50 rounded-full'
            : 'h-[90px] w-full opacity-100'
        }`}
        style={{
          top: 0, // Fixed at the top of the viewport
          left: isShrunk ? '10%' : '0', // Shift to 10% when shrinking, centered
          transform: isShrunk ? 'translateX(0)' : 'translateX(0)', // Smooth center positioning
          transition: 'all 0.3s ease-in-out', // Smooth transition for top, left, transform, and width
        }}
      >
        <Link href={'/'} className="font-medium text-lg">
          My Company
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
