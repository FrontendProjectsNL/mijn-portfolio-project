'use client';
import { useState } from 'react';

interface PageProps {}

const Page: React.FC<PageProps> = () => {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="w-80 h-80 flex justify-center items-center bg-cyan-200">
      <div
        className="w-48 h-48 mx-auto cursor-pointer group"
        aria-expanded={expanded}
        onClick={() => setExpanded(!expanded)}
      >
        <div className="relative h-[7px] w-14 cursor-pointer">
          <span className="absolute h-[7px] w-14 bg-black -translate-y-4 rounded group-aria-expanded:-rotate-45 group-aria-expanded:translate-y-1 transition-all duration-500 ease-in-out"></span>
          <span className="absolute h-[7px] w-14 bg-black rounded group-aria-expanded:rotate-45 group-aria-expanded:translate-y-1 transition-all duration-500 ease-in-out"></span>
          <span className="absolute h-[7px] w-10 right-0 bg-black translate-y-4 rounded group-aria-expanded:-rotate-45 group-aria-expanded:-translate-x-7 group-aria-expanded:w-6 group-aria-expanded:opacity-0 transition-all duration-500 ease-in-out"></span>
        </div>
      </div>
    </div>
  );
};

export default Page;
