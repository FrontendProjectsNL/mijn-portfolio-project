'use client';
import { useState } from 'react';

interface PageProps {}

const Page: React.FC<PageProps> = () => {
  const [expanded, setExpanded] = useState(false);

  return (
    <div>
      <div className="mt-10 ml-40">
        {/* Button that toggles expanded state */}
        <button
          aria-expanded={expanded}
          onClick={() => setExpanded(!expanded)}
          type="button"
          className="group relative h-18 w-18 text-black"
          style={{
            '--duration': '300ms',
            '--width': '3.75rem',
            '--thickness': '0.375rem',
            '--gap': '0.75rem',
            '--color': '#000',
          }}
        >
          {/* Full button background to ensure the whole button area is clickable */}
          <div className="h-10 w-10 bg-transparent cursor-pointer">
            {/* Top line */}
            <span className="absolute  h-[var(--thickness)] w-[var(--width)] -translate-x-1/2 translate-y-[calc(-150%-var(--gap))] transition-transform bg-[var(--color)] rounded-full   duration-[calc(var(--duration)*2/3)] group-aria-expanded:-translate-y-1/2 group-aria-expanded:-rotate-45  before:group-aria-expanded:w-[100%] "></span>

            {/* Middle line */}
            <span className="absolute  h-[var(--thickness)] w-[var(--width)] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[var(--color)] transition-transform duration-[calc(var(--duration)*2/3)] group-aria-expanded:rotate-45 "></span>

            {/* Bottom line */}
            <span className="absolute  h-[var(--thickness)] w-[var(--width)] -translate-x-1/2 translate-y-[calc(50%+var(--gap))] transition-transform duration-[calc(var(--duration)*2/3)] before:absolute before:right-0 before:h-full before:w-[60%] before:rounded-full before:bg-[var(--color)] before:transition-[right]  before:duration-[calc(var(--duration)*2/3)] group-aria-expanded:-translate-y-1/2 group-aria-expanded:-rotate-45  before:group-aria-expanded:right-[40%] "></span>
          </div>
        </button>
      </div>

      <div className="w-48 h-48 mx-auto">
        <div className="relative">
          <span className="absolute h-2 w-14 bg-black -translate-y-4 rounded"></span>
          <span className="absolute h-2 w-14 bg-black rounded"></span>
          <span className="absolute h-2 w-14 bg-black translate-y-4 rounded"></span>
        </div>
      </div>
    </div>
  );
};

export default Page;
