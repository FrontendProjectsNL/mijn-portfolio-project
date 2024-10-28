// TechStack.tsx
import { Card } from '@/components/ui/card';
import { icons } from '@/app/data/icons';

import Tailwind from '@/public/tech-icons/tailwind-css-2.svg';

interface TechStackProps {}

const TechStack: React.FC<TechStackProps> = () => {
  return (
    <div className="flex flex-col px-24 mt-28 w-full h-screen font-bold space-y-12">
      <p className="text-4xl">Tech Stack</p>
      <div className="grid grid-cols-5 gap-4">
        <Tailwind />
      </div>
    </div>
  );
};

export default TechStack;
