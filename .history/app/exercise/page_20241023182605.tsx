'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';

interface PageProps {}

const Page: React.FC<PageProps> = () => {
  const [expandes, setExpanded] = useState<boolean>(false);

  useEffect(() => {}, []);
  return (
    <div className="max-w-8xl w-full  font-roboto mx-auto">
      <nav className="px-12 py-8 bg-slate-400 flex justify-between items-center w-full">
        <Link href={'/'} className="font-medium text-lg">
          My Company
        </Link>
        <ul className="flex ">
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
    </div>
  );
};

export default Page;
