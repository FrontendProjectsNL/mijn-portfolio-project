'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import logo from '/public/EhsanLogo-transparent.png';
import { CircleUser, SquareUserRound, User } from 'lucide-react';

const Header = () => {
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
    <nav
      className={`w-full px-14 fixed transition-all duration-300 ease-linear bg-[#FAC872] flex justify-between items-center ${
        isShrunk
          ? 'h-[75px] w-[70%] rounded-3xl mx-auto top-5'
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
            <Link href="" className="px-4 py-2 cursor text-lg  font-roboto">
              Services
            </Link>
          </li>
          <li>
            <Link href="" className="px-4 py-2 cursor text-lg  font-roboto">
              Work
            </Link>
          </li>
          <li>
            <Link href="" className="px-4 py-2 cursor text-lg font-roboto">
              About me
            </Link>
          </li>
          <li>
            <Link href="" className="px-4 py-2 cursor text-lg font-roboto">
              Blog
            </Link>
          </li>
        </ul>
      </div>
      <div className="flex items-center gap-3">
        <Link
          href={'/'}
          className="flex items-center gap-2 text-lg  font-roboto mr-4 underline underline-offset-8"
        >
          <SquareUserRound className="w-8 h-8 transition-transform duration-300 ease-in-out hover:scale-125 font-normal" />
          {/* <CircleUser className="w-8 h-8 transition-transform duration-300 ease-in-out hover:scale-125" /> */}

          {/* <User className="w-8 h-8 transition-transform duration-300 ease-in-out hover:scale-125" /> */}
          <span className="relative transform duration-700 group-hover:-translate-x-3">
            Sing In
          </span>
        </Link>

        <button className="font-roboto group relative inline-flex items-center overflow-hidden rounded-full border-2 border-black px-12 py-2 text-lg text-black hover:bg-gray-50 hover:text-white">
          <span className="duration-400 ease absolute left-0 top-1/2 block h-0 w-full bg-[#f27d4b] opacity-100 transition-all group-hover:top-0 group-hover:h-full"></span>
          <span className="ease absolute right-0 flex h-10 w-10 translate-x-full transform items-center justify-start duration-500 group-hover:-translate-x-2">
            <svg
              className="h-5 w-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M14 5l7 7m0 0l-7 7m7-7H3"
              ></path>
            </svg>
          </span>
          <span className="relative transform duration-700 group-hover:-translate-x-3">
            Sign Up
          </span>
        </button>
      </div>
    </nav>
  );
};

export default Header;
