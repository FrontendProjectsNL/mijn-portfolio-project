// TechStack.tsx
import { Card } from '@/components/ui/card';
import { icons } from '@/app/data/icons';

interface TechStackProps {}

const TechStack: React.FC<TechStackProps> = () => {
  return (
    <div className="flex flex-col px-24 mt-28 w-full h-screen font-bold space-y-12">
      <p className="text-4xl">Tech Stack</p>
      <div className="grid grid-cols-5 gap-4">
        {/* {icons.map((icon, index) => (
          <Card
            key={index}
            className="col-span-1 h-52 flex items-center justify-center"
          >
            <icon.Component className="w-16 h-16" aria-label={icon.name} />
          </Card>
        ))} */}
      </div>
    </div>
  );
};

export default TechStack;
