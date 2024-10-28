import Image from 'next/image';

import AwsIcon from '@/public/tech-icons/aws-2.svg';
// import CloudinaryIcon from '@/public/tech-icons/cloudinary-1.svg';

// import CSS from '@/public/tech-icons/css-3.svg';
// import ES6 from '@/public/tech-icons/es6.svg';
// import Framer from '@/public//tech-icons/framer.svg';
// import Git from '@/public/tech-icons/git.svg';

// import GithubIcon from '@/public/tech-icons/github-icon-1.svg';
// import Github from '@/public/tech-icons/github.svg';
// import HTML from '@/public/tech-icons/html-1.svg';
// import JavaScript from '@/public/tech-icons/javascript-1.svg';

// import MongoDB from '@/public/tech-icons/mongodb-icon-2.svg';
// import MySQL from '@/public/tech-icons/mysql-3.svg';
// import NextJS from '@/public/tech-icons/next.svg';
// import Postgresql from '@/public/tech-icons/postgresql.svg';

// import PrismaIcon from '@/public/tech-icons/prisma-2.svg';
// import ReactIcon from '@/public/tech-icons/react-2.svg';
// import Sanity from '@/public/tech-icons/sanity.svg';
// import Sass from '@/public/tech-icons/sass-1.svg';

// import Stripe from '@/public/tech-icons/stripe-4.svg';
// import Tailwind from '@/public/tech-icons/tailwind-css-2.svg';
// import Kinde from '@/public/tech-icons/zAvyayM9_400x400.jpg';

// export const icons = [AwsIcon];

export function Icons() {
  return (
    <Image
      src="/tech-icons/aws-2.svg" // Removed '/public'
      width={500}
      height={500}
      alt="AWS Icon"
    />
  );
}
