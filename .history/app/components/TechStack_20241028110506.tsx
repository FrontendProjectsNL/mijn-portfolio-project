'use client';
import { Card } from '@/components/ui/card';
import Image from 'next/image';
import { motion } from 'framer-motion';

interface TechStackProps {}

const TechStack: React.FC<TechStackProps> = () => {
  return (
    <div className="flex flex-col px-24 mt-28 w-full h-screen font-bold space-y-12">
      <p className="text-4xl">Tech Stack</p>

      <motion.div
        className="grid grid-cols-5 gap-12"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: 'easeOut', delay: 0.2 }}
      >
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
            src="/tech-icons/github.svg" // Removed '/public'
            width={150}
            height={150}
            alt="Github"
          />
          <p className="font-medium text-sm">Github</p>
        </Card>
        <Card className="col-span-1 h-52 w-48 flex flex-col items-center justify-center">
          <Image
            src="/tech-icons/html-1.svg" // Removed '/public'
            width={150}
            height={150}
            alt="HTML5"
          />
          <p className="font-medium text-sm">HTML5</p>
        </Card>
        <Card className="col-span-1 h-52 w-48 flex flex-col items-center justify-center">
          <Image
            src="/tech-icons/Strapi-Logo.webp" // Removed '/public'
            width={150}
            height={150}
            alt="Strapi logo"
          />
          <p className="font-medium text-sm">Strapi</p>
        </Card>
        <Card className="col-span-1 h-52 w-48 flex flex-col items-center justify-center">
          <Image
            src="/tech-icons/mongodb-icon-2.svg" // Removed '/public'
            width={150}
            height={150}
            alt="MongoDB"
          />
          <p className="font-medium text-sm">MongoDB</p>
        </Card>
        <Card className="col-span-1 h-52 w-48 flex flex-col items-center justify-center">
          <Image
            src="/tech-icons/mysql-3.svg" // Removed '/public'
            width={150}
            height={150}
            alt="MySQL"
          />
          <p className="font-medium text-sm">MySQL</p>
        </Card>
        <Card className="col-span-1 h-52 w-48 flex flex-col items-center justify-center">
          <Image
            src="/tech-icons/postgresql.svg" // Removed '/public'
            width={150}
            height={150}
            alt="PostgreSQL"
          />
          <p className="font-medium text-sm">PostgreSQL</p>
        </Card>
        <Card className="col-span-1 h-52 w-48 flex flex-col items-center justify-center">
          <Image
            src="/tech-icons/prisma-2.svg" // Removed '/public'
            width={150}
            height={150}
            alt="Prisma"
          />
          <p className="font-medium text-sm">Prisma</p>
        </Card>
        <Card className="col-span-1 h-52 w-48 flex flex-col items-center justify-center">
          <Image
            src="/tech-icons/sanity.svg" // Removed '/public'
            width={150}
            height={150}
            alt="Sanity"
          />
          <p className="font-medium text-sm">Sanity</p>
        </Card>
        <Card className="col-span-1 h-52 w-48 flex flex-col items-center justify-center">
          <Image
            src="/tech-icons/stripe-4.svg" // Removed '/public'
            width={150}
            height={150}
            alt="Stripe"
          />
          <p className="font-medium text-sm">Stripe</p>
        </Card>
        <Card className="col-span-1 h-52 w-48 flex flex-col items-center justify-center">
          <Image
            src="/tech-icons/tailwind-css-2.svg" // Removed '/public'
            width={150}
            height={150}
            alt="TailwindCSS"
          />
          <p className="font-medium text-sm">TailwindCSS</p>
        </Card>

        <Card
          className="h-52 w-48 flex flex-col items-center justify-center"
          style={{ gridColumn: '2 / span 3', marginLeft: '25%' }}
        >
          <Image
            src="/tech-icons/NextAuth.png" // Removed '/public'
            width={150}
            height={150}
            alt="Next Auth"
          />
          <p className="font-medium text-sm">Next Auth</p>
        </Card>
        <Card
          className="col-span-1 col-start-5 h-52 w-48 flex flex-col items-center justify-center"
          style={{ marginLeft: '-170%' }}
        >
          <Image
            src="/tech-icons/zAvyayM9_400x400.jpg" // Removed '/public'
            width={150}
            height={150}
            alt="Framer Icon"
          />
          <p className="font-medium text-sm">Kinde</p>
        </Card>
      </motion.div>
    </div>
  );
};

export default TechStack;
