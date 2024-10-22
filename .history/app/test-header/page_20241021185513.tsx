'use client';
import { useState } from 'react';

interface PageProps {}

const Page: React.FC<PageProps> = () => {
  const [expanded, setExpanded] = useState(false);

  return (
    <div>
      {/* Button that toggles expanded state */}
      <button
        aria-expanded={expanded}
        onClick={() => setExpanded(!expanded)}
        type="button"
        className="group relative h-16 w-16 text-black"
        style={{
          '--duration': '300ms',
          '--width': '1.25rem',
          '--thickness': '0.125rem',
          '--gap': '0.25rem',
          '--color': '#000',
        }}
      >
        {/* Top line */}
        <span className="absolute left-1/2 top-1/2 h-[var(--thickness)] w-[var(--width)] -translate-x-1/2 translate-y-[calc(-150%-var(--gap))] transition-transform duration-[calc(var(--duration)*2/3)] before:absolute before:right-0 before:h-full before:w-full before:rounded-full before:bg-[var(--color)] before:transition-[width] before:delay-[calc(var(--duration)*1/3)] before:duration-[calc(var(--duration)*2/3)] group-aria-expanded:-translate-y-1/2 group-aria-expanded:-rotate-45 group-aria-expanded:delay-[calc(var(--duration)*1/3)] before:group-aria-expanded:w-[60%] before:group-aria-expanded:delay-0"></span>

        {/* Middle line */}
        <span className="absolute left-1/2 top-1/2 h-[var(--thickness)] w-[var(--width)] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[var(--color)] transition-transform duration-[calc(var(--duration)*2/3)] group-aria-expanded:rotate-45 group-aria-expanded:delay-[calc(var(--duration)*1/3)]"></span>

        {/* Bottom line */}
        <span className="absolute left-1/2 top-1/2 h-[var(--thickness)] w-[var(--width)] -translate-x-1/2 translate-y-[calc(50%+var(--gap))] transition-transform duration-[calc(var(--duration)*2/3)] before:absolute before:right-0 before:h-full before:w-[60%] before:rounded-full before:bg-[var(--color)] before:transition-[right] before:delay-[calc(var(--duration)*1/3)] before:duration-[calc(var(--duration)*2/3)] group-aria-expanded:-translate-y-1/2 group-aria-expanded:-rotate-45 group-aria-expanded:delay-[calc(var(--duration)*1/3)] before:group-aria-expanded:right-[40%] before:group-aria-expanded:delay-0"></span>
      </button>
    </div>
  );
};

export default Page;
