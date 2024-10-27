import Image from 'next/image';
import Hero from './components/Hero';

export default function Home() {
  return (
    <div className="font-roboto ">
      <Hero />
      <section className="w-full h-screen bg-green-400"></section>
    </div>
  );
}
