'use client';

import Autoplay from 'embla-carousel-autoplay';
import { Card, CardContent } from '@/components/ui/card';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import { useRef } from 'react';
import Image from 'next/image';

export default function CarouselProjects() {
  const plugin = useRef(Autoplay({ delay: 1500, stopOnInteraction: false }));
  return (
    <div className="bg-transparent w-full h-screen flex justify-center items-center">
      <Carousel
        plugins={[plugin.current]}
        className="w-full"
        onMouseEnter={plugin.current.stop}
        onMouseLeave={plugin.current.reset}
      >
        <CarouselContent>
          {Array.from({ length: 13 }).map((_, index) => (
            <CarouselItem
              key={index}
              className="pl-1 md:basis-1/2 lg:basis-1/3"
            >
              <div className="p-1">
                <Card>
                  <CardContent className="flex aspect-square items-center justify-center p-6">
                    {/* <span className="text-2xl font-semibold">{index + 1}</span> */}
                    <Image
                      src={`/CarouselGraphics/${index + 1}.png`}
                      width={700}
                      height={600}
                    />
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </div>
  );
}
