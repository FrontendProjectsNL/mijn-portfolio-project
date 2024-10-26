'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';

interface PageProps {}

const Page: React.FC<PageProps> = () => {
  const [expanded, setExpanded] = useState<boolean>(false);
  const [height, setHeight] = useState<string>('90px');
  const [width, setWidth] = useState<string>('100%'); // Set width as a string for inline styles
  const [isOpaque, setIsOpaque] = useState<boolean>(true); // New state for opacity control

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 70) {
        setHeight('50px');
        setIsOpaque(false);
        setWidth('80%'); // Set the width inline as a percentage
      } else {
        setHeight('90px');
        setIsOpaque(true);
        setWidth('100%'); // Reset the width inline
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
        style={{ height, width }} // Use style for dynamic height and width
        className={`fixed px-12 transition-all duration-300 ${
          isOpaque ? 'opacity-100' : 'opacity-50'
        } bg-slate-400 flex justify-between items-center`}
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
