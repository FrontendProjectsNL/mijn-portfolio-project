'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';

interface PageProps {}

const Page: React.FC<PageProps> = () => {
  const [expanded, setExpanded] = useState<boolean>(false);
  const [height, setHeight] = useState<string>('90px');
  const [width, setWidth] = useState<string>('w-full');
  //const [rounded, setRounded] = useState<string>('');
  const [isOpaque, setIsOpaque] = useState<boolean>(true); // New state for opacity control

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 70) {
        setHeight('50px'); // Set height to 50px instead of just 50
        setIsOpaque(false); // Set to false for 50% opacity
        setWidth('w-[80%]');
      } else {
        setHeight('90px'); // Reset height back to 90px
        setIsOpaque(true); // Reset to true for 100% opacity
        setWidth('w-full');
      }
    };

    window.addEventListener('scroll', handleScroll);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []); // Dependency array ensures this runs only once on mount

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
