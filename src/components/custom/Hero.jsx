/*================================================================================================================
* ✅ Hero Component
*
* Key Features:
*   - Auto-slide every 8 seconds
*   - Manual navigation via arrows and indicator dots
*   - Infinite loop support
*   - Responsive design using Tailwind CSS and next/image
*
* Data:
*   - `images`: array of hero image paths
*   - `current`: index of the currently active slide
*   - `count`: total number of slides
*
* Layout:
*   - Carousel wrapped in a section with relative positioning
*   - Arrows and indicator dots positioned absolutely
*
* TODO (Interaction / Documentation Tracking):
*   - [1] Auto-Slide Interaction
*   - [2] Carousel Navigation
*   - [3] Indicator Dots/Bubbles
*   - [4] Slide Content
*   - [5] Mobile/Touch Support
*   - [6] Performance & Optimization
*   - [7] Event Handling & API
* ================================================================================================================*/

"use client";

import React, { useEffect, useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";

const Hero = () => {
    const [api, setApi] = useState(null);
    const [current, setCurrent] = useState(0);
    const [count, setCount] = useState(0);

    // TODO [1] Auto-Slide Interaction
    useEffect(() => {
        if (!api) return;

        const intervalId = setInterval(() => {
            api.scrollNext();
        }, 8000);

        return () => clearInterval(intervalId);
    }, [api]);

    // TODO [6] Event Handling & API: Track current slide
    useEffect(() => {
        if (!api) return;

        setCount(api.scrollSnapList().length);
        setCurrent(api.selectedScrollSnap());

        api.on("select", () => {
            setCurrent(api.selectedScrollSnap());
        });
    }, [api]);

    const images = [
        "/hero1.png",
        "/hero2.png",
        "/hero3.png",
        "/hero4.png",
        "/hero5.png",
    ];

    // TODO [6] Performance & Optimization: Function to scroll to specific slide
    const scrollTo = (index) => {
        api?.scrollTo(index);
    };

    return (
        <section className="relative w-full overflow-hidden">
            <Carousel
                className="w-full"
                setApi={setApi}
                opts={{
                    align: "start",
                    loop: true,
                }}
            >
                <CarouselContent>
                    {images.map((src, index) => (
                        <CarouselItem key={index} className="w-full">
                            <Card className="border-0 shadow-none">
                                <CardContent className="p-0">
                                    <div className="relative w-full h-[50vh]">
                                        <Image
                                            src={src}
                                            alt={`Hero Slide ${index + 1}`}
                                            fill
                                            className="object-fit"
                                            priority={index === 0}
                                        />

                                        {/* TODO [4] Slide Content: Overlay content (titles, CTA) */}
                                        {/*<div className="absolute inset-0 bg-black/30 flex items-center justify-center">*/}
                                        {/*    <h2 className="text-white text-4xl md:text-6xl font-bold drop-shadow-lg">*/}
                                        {/*        Slide {index + 1} Content*/}
                                        {/*    </h2>*/}
                                        {/*</div>*/}

                                    </div>
                                </CardContent>
                            </Card>
                        </CarouselItem>
                    ))}
                </CarouselContent>

                {/* TODO [2] Carousel Navigation */}
                <CarouselPrevious className="left-4 top-1/2 -translate-y-1/2" />
                <CarouselNext className="right-4 top-1/2 -translate-y-1/2" />

            </Carousel>

            {/* TODO [3] Indicator Dots/Bubbles */}
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2 z-10">
                {images.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => scrollTo(index)}
                        className={`
                            w-3 h-3 rounded-full transition-all duration-300
                            ${current === index
                            ? 'bg-gray-500 w-8'
                            : 'bg-gray-500/30 hover:bg-amber-500/30'
                        }
                        `}
                        aria-label={`Go to slide ${index + 1}`}
                    />
                ))}
            </div>
        </section>
    );
};

export default Hero;