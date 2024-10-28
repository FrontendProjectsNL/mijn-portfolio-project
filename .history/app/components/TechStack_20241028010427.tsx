import { Card } from '@/components/ui/card';
import Image from 'next/image';

interface TechStackProps {}

const TechStack: React.FC<TechStackProps> = () => {
  return (
    <div className="flex flex-col px-24 mt-28 w-full h-screen font-bold space-y-12">
      <p className="text-4xl">Tech Stack</p>
      <div className="grid grid-cols-5 gap-4">
        <Card className="col-span-1 h-52 w-48 flex flex-col items-center justify-center">
          <Image
            src="/tech-icons/aws-2.svg" // Removed '/public'
            width={150}
            height={150}
            alt="AWS"
          />
          <p className="font-medium text-sm">AWS</p>
        </Card>
        <Card className="col-span-1 h-52 w-48 flex flex-col items-center justify-center">
          <Image
            src="/tech-icons/next.svg" // Removed '/public'
            width={150}
            height={150}
            alt="NextJS"
          />
          <p className="font-medium text-sm">Next.JS</p>
        </Card>
        <Card className="col-span-1 h-52 w-48 flex flex-col items-center justify-center">
          <Image
            src="/tech-icons/javascript-1.svg" // Removed '/public'
            width={150}
            height={150}
            alt="JavaScript"
          />
          <p className="font-medium text-sm">JavaScript</p>
        </Card>
        <Card className="col-span-1 h-52 w-48 flex flex-col items-center justify-center">
          <Image
            src="/tech-icons/react-2.svg" // Removed '/public'
            width={150}
            height={150}
            alt="React.JS"
          />
          <p className="font-medium text-sm">React.JS</p>
        </Card>
        <Card className="col-span-1 h-52 w-48 flex flex-col items-center justify-center">
          <Image
            src="/tech-icons/sass-1.svg" // Removed '/public'
            width={150}
            height={150}
            alt="SASS"
          />
          <p className="font-medium text-sm">SASS</p>
        </Card>
        <Card className="col-span-1 h-52 w-48 flex flex-col items-center justify-center">
          <Image
            src="/tech-icons/css-3.svg" // Removed '/public'
            width={150}
            height={150}
            alt="CSS"
          />
          <p className="font-medium text-sm">CSS</p>
        </Card>
        <Card className="col-span-1 h-52 w-48 flex flex-col items-center justify-center">
          <Image
            src="/tech-icons/es6.svg" // Removed '/public'
            width={150}
            height={150}
            alt="ES6"
          />
          <p className="font-medium text-sm">ES6</p>
        </Card>
        <Card className="col-span-1 h-52 w-48 flex flex-col items-center justify-center">
          <Image
            src="/tech-icons/framer.svg" // Removed '/public'
            width={150}
            height={150}
            alt="Framer Icon"
          />
          <p className="font-medium text-sm">Framer</p>
        </Card>
        <Card className="col-span-1 h-52 w-48 flex flex-col items-center justify-center">
          <Image
            src="/tech-icons/git.svg" // Removed '/public'
            width={150}
            height={150}
            alt="Git"
          />
          <p className="font-medium text-sm">Git</p>
        </Card>
        <Card className="col-span-1 h-52 w-48 flex flex-col items-center justify-center">
          <Image
            src="/tech-icons/github-icon-1.svg" // Removed '/public'
            width={150}
            height={150}
            alt="Github"
          />
          <p className="font-medium text-sm">Github</p>
        </Card>
        <Card className="col-span-1 h-52 w-48 flex flex-col items-center justify-center">
          <Image
            src="/tech-icons/framer.svg" // Removed '/public'
            width={150}
            height={150}
            alt="Framer Icon"
          />
          <p className="font-medium text-sm">Framer</p>
        </Card>
        <Card className="col-span-1 h-52 w-48 flex flex-col items-center justify-center">
          <Image
            src="/tech-icons/framer.svg" // Removed '/public'
            width={150}
            height={150}
            alt="Framer Icon"
          />
          <p className="font-medium text-sm">Framer</p>
        </Card>
        <Card className="col-span-1 h-52 w-48 flex flex-col items-center justify-center">
          <Image
            src="/tech-icons/framer.svg" // Removed '/public'
            width={150}
            height={150}
            alt="Framer Icon"
          />
          <p className="font-medium text-sm">Framer</p>
        </Card>
        <Card className="col-span-1 h-52 w-48 flex flex-col items-center justify-center">
          <Image
            src="/tech-icons/framer.svg" // Removed '/public'
            width={150}
            height={150}
            alt="Framer Icon"
          />
          <p className="font-medium text-sm">Framer</p>
        </Card>
        <Card className="col-span-1 h-52 w-48 flex flex-col items-center justify-center">
          <Image
            src="/tech-icons/framer.svg" // Removed '/public'
            width={150}
            height={150}
            alt="Framer Icon"
          />
          <p className="font-medium text-sm">Framer</p>
        </Card>
        <Card className="col-span-1 h-52 w-48 flex flex-col items-center justify-center">
          <Image
            src="/tech-icons/framer.svg" // Removed '/public'
            width={150}
            height={150}
            alt="Framer Icon"
          />
          <p className="font-medium text-sm">Framer</p>
        </Card>
        <Card className="col-span-1 h-52 w-48 flex flex-col items-center justify-center">
          <Image
            src="/tech-icons/framer.svg" // Removed '/public'
            width={150}
            height={150}
            alt="Framer Icon"
          />
          <p className="font-medium text-sm">Framer</p>
        </Card>
        <Card className="col-span-1 h-52 w-48 flex flex-col items-center justify-center">
          <Image
            src="/tech-icons/framer.svg" // Removed '/public'
            width={150}
            height={150}
            alt="Framer Icon"
          />
          <p className="font-medium text-sm">Framer</p>
        </Card>
        <Card className="col-span-1 h-52 w-48 flex flex-col items-center justify-center">
          <Image
            src="/tech-icons/framer.svg" // Removed '/public'
            width={150}
            height={150}
            alt="Framer Icon"
          />
          <p className="font-medium text-sm">Framer</p>
        </Card>
        <Card className="col-span-1 h-52 w-48 flex flex-col items-center justify-center">
          <Image
            src="/tech-icons/framer.svg" // Removed '/public'
            width={150}
            height={150}
            alt="Framer Icon"
          />
          <p className="font-medium text-sm">Framer</p>
        </Card>
      </div>
    </div>
  );
};

export default TechStack;
