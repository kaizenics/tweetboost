"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import Image from 'next/image'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

const testimonials = [
  {
    name: 'Sarah Johnson',
    role: 'Social Media Manager',
    company: 'TechCorp',
    image: '/placeholder.svg?height=100&width=100',
    quote: 'TwitterKings has revolutionized our Twitter strategy. We&apos;ve seen a 200% increase in engagement since we started using it.',
  },
  {
    name: 'Mike Chen',
    role: 'Influencer',
    company: 'Self-employed',
    image: '/placeholder.svg?height=100&width=100',
    quote: 'As an influencer, time is money. TweetBoost saves me hours every day while growing my audience consistently.',
  },
  {
    name: 'Emily Rodriguez',
    role: 'Marketing Director',
    company: 'GrowthStartup',
    image: '/placeholder.svg?height=100&width=100',
    quote: 'The AI-powered optimization in TwitterKings is a game-changer. It&apos;s like having a Twitter expert working for us 24/7.',
  },
]

export function Testimonials() {
  gsap.registerPlugin(ScrollTrigger);
  
  const titleRef = useRef(null);
  const cardsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Set initial states
      gsap.set([titleRef.current, cardsRef.current?.children], {
        opacity: 0,
        y: 50
      });

      const commonScrollTrigger = {
        start: "top 85%",
        end: "bottom 15%",
        toggleActions: "play none none reverse"
      };

      // Title animation
      gsap.to(titleRef.current, {
        opacity: 1,
        y: 0,
        duration: 0.6,
        ease: "power2.out",
        scrollTrigger: {
          ...commonScrollTrigger,
          trigger: titleRef.current
        }
      });

      // Cards animation with stagger
      if (cardsRef.current) {
        gsap.to(cardsRef.current.children, {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.2,
          ease: "power2.out",
          scrollTrigger: {
            ...commonScrollTrigger,
            trigger: cardsRef.current
          }
        });
      }
    });

    return () => ctx.revert();
  }, []);

  return (
    <section className="bg-background py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h2 ref={titleRef} className="text-3xl font-display font-bold tracking-tight text-foreground text-center mb-12">
          What Our Customers Say
        </h2>
        <div ref={cardsRef} className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial) => (
            <Card key={testimonial.name} className="flex flex-col justify-between border bg-card text-card-foreground hover:shadow-md transition-shadow">
              <CardHeader>
                <div className="flex items-center space-x-4">
                  <Image
                    src={testimonial.image}
                    alt={testimonial.name}
                    width={50}
                    height={50}
                    className="rounded-full bg-muted"
                  />
                  <div>
                    <CardTitle className="text-lg font-display font-semibold text-primary">{testimonial.name}</CardTitle>
                    <p className="text-sm font-sans text-muted-foreground">{testimonial.role} at {testimonial.company}</p>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="font-sans text-card-foreground italic leading-relaxed">&quot;{testimonial.quote}&quot;</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

