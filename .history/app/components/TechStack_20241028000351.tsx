// TechStack.tsx
import { Card } from '@/components/ui/card';

const TechStack: React.FC = () => {
  return (
    <div className="flex flex-col px-24 mt-28 w-full h-screen font-bold space-y-12">
      <p className="text-4xl">Tech Stack</p>
      <div className="grid grid-cols-5 gap-4">
        <Card className="col-span-1 h-52 flex items-center justify-center"></Card>
      </div>
    </div>
  );
};

export default TechStack;