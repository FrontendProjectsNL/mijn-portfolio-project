'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';

interface PageProps {}

const Page: React.FC<PageProps> = () => {
  const [expanded, setExpanded] = useState<boolean>(false);
  const [height, setHeight] = useState<string>('90px');
  const [width, setWidth] = useState<string>('100%');
  const [isCentered, setIsCentered] = useState<boolean>(false); // For centering when width is 80%
  const [isOpaque, setIsOpaque] = useState<boolean>(true);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 70) {
        setHeight('50px');
        setIsOpaque(false);
        setWidth('80%');
        setIsCentered(true); // Center the nav when width is 80%
      } else {
        setHeight('90px');
        setIsOpaque(true);
        setWidth('100%');
        setIsCentered(false); // Reset centering when width is full
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
        style={{ height, width }}
        className={`fixed px-12 transition-all duration-300 ${
          isOpaque ? 'opacity-100' : 'opacity-50'
        } bg-slate-400 flex justify-between items-center ${
          isCentered ? 'left-0 right-0 mx-auto' : ''
        }`}
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
