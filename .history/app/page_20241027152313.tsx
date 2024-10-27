import Image from 'next/image';
import Hero from './components/Hero';

export default function Home() {
  return (
    <div className="font-roboto p-4 sm:p-6 md:p-8 lg:p-10 xl:p-12">
      <Hero />
      <section className="w-full h-screen bg-green-400"></section>
    </div>
  );
}
