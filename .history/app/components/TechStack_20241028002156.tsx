import { Card } from '@/components/ui/card';
import Image from 'next/image';

interface TechStackProps {}

const TechStack: React.FC<TechStackProps> = () => {
  return (
    <div className="flex flex-col px-24 mt-28 w-full h-screen font-bold space-y-12">
      <p className="text-4xl">Tech Stack</p>
      <div className="grid grid-cols-5 gap-4">
        <Card className="col-span-1 h-50 w-44 flex flex-col items-center justify-center">
          <Image
            src="/tech-icons/framer.svg" // Removed '/public'
            width={150}
            height={150}
            alt="Framer Icon"
          />
          <p className="font-medium text-sm">Framer</p>
        </Card>
        <Card className="col-span-1 h-52 flex items-center justify-center">
          1
        </Card>
        <Card className="col-span-1 h-52 flex items-center justify-center">
          1
        </Card>
        <Card className="col-span-1 h-52 flex items-center justify-center">
          1
        </Card>
        <Card className="col-span-1 h-52 flex items-center justify-center">
          1
        </Card>
        <Card className="col-span-1 h-52 flex items-center justify-center">
          1
        </Card>
        <Card className="col-span-1 h-52 flex items-center justify-center">
          1
        </Card>
        <Card className="col-span-1 h-52 flex items-center justify-center">
          1
        </Card>
        <Card className="col-span-1 h-52 flex items-center justify-center">
          1
        </Card>
        <Card className="col-span-1 h-52 flex items-center justify-center">
          1
        </Card>
        <Card className="col-span-1 h-52 flex items-center justify-center">
          1
        </Card>
        <Card className="col-span-1 h-52 flex items-center justify-center">
          1
        </Card>
        <Card className="col-span-1 h-52 flex items-center justify-center">
          1
        </Card>
        <Card className="col-span-1 h-52 flex items-center justify-center">
          1
        </Card>
        <Card className="col-span-1 h-52 flex items-center justify-center">
          1
        </Card>
        <Card className="col-span-1 h-52 flex items-center justify-center">
          1
        </Card>
        <Card className="col-span-1 h-52 flex items-center justify-center">
          1
        </Card>
        <Card className="col-span-1 h-52 flex items-center justify-center">
          1
        </Card>
        <Card className="col-span-1 h-52 flex items-center justify-center">
          1
        </Card>
        <Card className="col-span-1 h-52 flex items-center justify-center">
          1
        </Card>
      </div>
    </div>
  );
};

export default TechStack;
