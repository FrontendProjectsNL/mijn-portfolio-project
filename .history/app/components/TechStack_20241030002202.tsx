'use client';
import { Card } from '@/components/ui/card';
import Image from 'next/image';
import { motion } from 'framer-motion';

import { useInView } from 'framer-motion';
import { useRef } from 'react';

interface TechStackProps {}

const TechStack: React.FC<TechStackProps> = () => {
  const refRow1 = useRef(null);
  const isInViewRow1 = useInView(refRow1, { once: true });

  const refRow2 = useRef(null);
  const isInViewRow2 = useInView(refRow2, { once: true });

  const refRow3 = useRef(null);
  const isInViewRow3 = useInView(refRow3, { once: true });

  const refRow4 = useRef(null);
  const isInViewRow4 = useInView(refRow4, { once: true });

  const refRow5 = useRef(null);
  const isInViewRow5 = useInView(refRow5, { once: true });

  return (
    <div className="flex flex-col px-24 pt-28 pb-24 w-full h-full font-bold space-y-12">
      <p className="text-4xl">Tech Stack</p>

      <motion.div className=" space-y-12">
        {/* <motion.div
          className="col-span-1 h-52 w-48 flex flex-col items-center justify-center"
          variants={{ hidden: { opacity: 0 }, visible: { opacity: 1 } }}
        >
          <Card>
            <Image
              src="/tech-icons/aws-2.svg" // Removed '/public'
              width={100}
              height={100}
              alt="AWS"
            />
            <p className="font-medium text-sm">AWS</p>
          </Card>
        </motion.div> */}

        <div
          ref={refRow1}
          className="grid grid-cols-5"
          style={{
            transform: isInViewRow1 ? 'none' : 'translateY(200px)',
            opacity: isInViewRow1 ? 1 : 0,
            transition: 'all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s',
          }}
        >
          <Card className="col-span-1 h-52 w-48 flex flex-col items-center justify-center">
            <Image
              src="/tech-icons/aws-2.svg" // Removed '/public'
              width={100}
              height={100}
              alt="AWS"
            />
            <p className="font-medium text-sm">AWS</p>
          </Card>
          <Card className="col-span-1 h-52 w-48 flex flex-col items-center justify-center">
            <Image
              src="/tech-icons/next.svg" // Removed '/public'
              width={100}
              height={100}
              alt="NextJS"
            />
            <p className="font-medium text-sm">Next.JS</p>
          </Card>
          <Card className="col-span-1 h-52 w-48 flex flex-col items-center justify-center">
            <Image
              src="/tech-icons/javascript-1.svg" // Removed '/public'
              width={100}
              height={100}
              alt="JavaScript"
            />
            <p className="font-medium text-sm">JavaScript</p>
          </Card>
          <Card className="col-span-1 h-52 w-48 flex flex-col items-center justify-center">
            <Image
              src="/tech-icons/react-2.svg" // Removed '/public'
              width={100}
              height={100}
              alt="React.JS"
            />
            <p className="font-medium text-sm">React.JS</p>
          </Card>
          <Card className="col-span-1 h-52 w-48 flex flex-col items-center justify-center">
            <Image
              src="/tech-icons/sass-1.svg" // Removed '/public'
              width={100}
              height={100}
              alt="SASS"
            />
            <p className="font-medium text-sm">SASS</p>
          </Card>
        </div>

        <div
          ref={refRow2}
          className="grid grid-cols-5"
          style={{
            transform: isInViewRow2 ? 'none' : 'translateY(200px)',
            opacity: isInViewRow2 ? 1 : 0,
            transition: 'all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s',
          }}
        >
          <Card className="col-span-1 h-52 w-48 flex flex-col items-center justify-center">
            <Image
              src="/tech-icons/css-3.svg" // Removed '/public'
              width={100}
              height={100}
              alt="CSS"
            />
            <p className="font-medium text-sm">CSS</p>
          </Card>
          <Card className="col-span-1 h-52 w-48 flex flex-col items-center justify-center">
            <Image
              src="/tech-icons/es6.svg" // Removed '/public'
              width={100}
              height={100}
              alt="ES6"
            />
            <p className="font-medium text-sm">ES6</p>
          </Card>
          <Card className="col-span-1 h-52 w-48 flex flex-col items-center justify-center">
            <Image
              src="/tech-icons/framer.svg" // Removed '/public'
              width={100}
              height={100}
              alt="Framer Icon"
            />
            <p className="font-medium text-sm">Framer</p>
          </Card>
          <Card className="col-span-1 h-52 w-48 flex flex-col items-center justify-center">
            <Image
              src="/tech-icons/git.svg" // Removed '/public'
              width={100}
              height={100}
              alt="Git"
            />
            <p className="font-medium text-sm">Git</p>
          </Card>
          <Card className="col-span-1 h-52 w-48 flex flex-col items-center justify-center">
            <Image
              src="/tech-icons/github-icon-1.svg" // Removed '/public'
              width={100}
              height={100}
              alt="Github"
            />
            <p className="font-medium text-sm">Github</p>
          </Card>
        </div>

        <div
          ref={refRow3}
          className="grid grid-cols-5"
          style={{
            transform: isInViewRow3 ? 'none' : 'translateY(200px)',
            opacity: isInViewRow3 ? 1 : 0,
            transition: 'all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s',
          }}
        >
          <Card className="col-span-1 h-52 w-48 flex flex-col items-center justify-center">
            <Image
              src="/tech-icons/github.svg" // Removed '/public'
              width={100}
              height={100}
              alt="Github"
            />
            <p className="font-medium text-sm">Github</p>
          </Card>
          <Card className="col-span-1 h-52 w-48 flex flex-col items-center justify-center">
            <Image
              src="/tech-icons/html-1.svg" // Removed '/public'
              width={100}
              height={100}
              alt="HTML5"
            />
            <p className="font-medium text-sm">HTML5</p>
          </Card>
          <Card className="col-span-1 h-52 w-48 flex flex-col items-center justify-center">
            <Image
              src="/tech-icons/Strapi-Logo.webp" // Removed '/public'
              width={100}
              height={100}
              alt="Strapi logo"
            />
            <p className="font-medium text-sm">Strapi</p>
          </Card>
          <Card className="col-span-1 h-52 w-48 flex flex-col items-center justify-center">
            <Image
              src="/tech-icons/mongodb-icon-2.svg" // Removed '/public'
              width={100}
              height={100}
              alt="MongoDB"
            />
            <p className="font-medium text-sm">MongoDB</p>
          </Card>
          <Card className="col-span-1 h-52 w-48 flex flex-col items-center justify-center">
            <Image
              src="/tech-icons/mysql-3.svg" // Removed '/public'
              width={100}
              height={100}
              alt="MySQL"
            />
            <p className="font-medium text-sm">MySQL</p>
          </Card>
        </div>
        <div
          ref={refRow4}
          className="grid grid-cols-5"
          style={{
            transform: isInViewRow4 ? 'none' : 'translateY(200px)',
            opacity: isInViewRow4 ? 1 : 0,
            transition: 'all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s',
          }}
        >
          <Card className="col-span-1 h-52 w-48 flex flex-col items-center justify-center">
            <Image
              src="/tech-icons/postgresql.svg" // Removed '/public'
              width={100}
              height={100}
              alt="PostgreSQL"
            />
            <p className="font-medium text-sm">PostgreSQL</p>
          </Card>
          <Card className="col-span-1 h-52 w-48 flex flex-col items-center justify-center">
            <Image
              src="/tech-icons/prisma-2.svg" // Removed '/public'
              width={100}
              height={100}
              alt="Prisma"
            />
            <p className="font-medium text-sm">Prisma</p>
          </Card>
          <Card className="col-span-1 h-52 w-48 flex flex-col items-center justify-center">
            <Image
              src="/tech-icons/sanity.svg" // Removed '/public'
              width={100}
              height={100}
              alt="Sanity"
            />
            <p className="font-medium text-sm">Sanity</p>
          </Card>
          <Card className="col-span-1 h-52 w-48 flex flex-col items-center justify-center">
            <Image
              src="/tech-icons/stripe-4.svg" // Removed '/public'
              width={100}
              height={100}
              alt="Stripe"
            />
            <p className="font-medium text-sm">Stripe</p>
          </Card>
          <Card className="col-span-1 h-52 w-48 flex flex-col items-center justify-center">
            <Image
              src="/tech-icons/tailwind-css-2.svg" // Removed '/public'
              width={100}
              height={100}
              alt="TailwindCSS"
            />
            <p className="font-medium text-sm">TailwindCSS</p>
          </Card>
        </div>
        <div
          ref={refRow5}
          className="grid grid-cols-10"
          style={{
            transform: isInViewRow5 ? 'none' : 'translateY(200px)',
            opacity: isInViewRow5 ? 1 : 0,
            transition: 'all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s',
          }}
        >
          <Card className="col-span-2 col-start-4 h-52 w-48 flex flex-col items-center justify-center">
            <Image
              src="/tech-icons/NextAuth.png" // Removed '/public'
              width={100}
              height={100}
              alt="Next Auth"
            />
            <p className="font-medium text-sm">Next Auth</p>
          </Card>
          <Card className="col-span-2 col-start-6  h-52 w-48 flex flex-col items-center justify-center">
            <Image
              src="/tech-icons/zAvyayM9_400x400.jpg" // Removed '/public'
              width={100}
              height={100}
              alt="Framer Icon"
            />
            <p className="font-medium text-sm">Kinde</p>
          </Card>
        </div>
      </motion.div>
    </div>
  );
};

export default TechStack;
