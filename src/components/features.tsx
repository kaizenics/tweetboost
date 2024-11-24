"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Sliders, Zap, BarChart } from "lucide-react"
import { Container } from "@/components/ui/container"

export function Features() {
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

      // Cards animation
      if (cardsRef.current) {
        gsap.to(cardsRef.current.children, {
          opacity: 1,
          y: 0,
          duration: 0.6,
          stagger: 0.15,
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
    <section className="py-16 bg-background">
      <Container variant={"fullMobileBreakpointPadded"}>
        <div className="max-w-7xl mx-auto">
          <h2 ref={titleRef} className="font-display text-3xl font-bold text-foreground text-center mb-12">
            Flexible and Optimizable Twitter Bots
          </h2>
          <div ref={cardsRef} className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            <Card className="bg-card/50 backdrop-blur-sm border-border/50">
              <CardHeader>
                <Sliders className="h-8 w-8 text-primary mb-2" />
                <CardTitle className="text-foreground">Customizable Behavior</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-muted-foreground">
                  Tailor your bot&apos;s actions to match your brand voice and engagement style. 
                  Adjust posting frequency, response patterns, and content curation to suit your needs.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="bg-card/50 backdrop-blur-sm border-border/50">
              <CardHeader>
                <Zap className="h-8 w-8 text-primary mb-2" />
                <CardTitle className="text-foreground">AI-Powered Optimization</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-muted-foreground">
                  Our bots use advanced AI to learn from interactions and improve over time. 
                  They adapt to your audience&apos;s preferences, optimizing engagement and growth automatically.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="bg-card/50 backdrop-blur-sm border-border/50">
              <CardHeader>
                <BarChart className="h-8 w-8 text-primary mb-2" />
                <CardTitle className="text-foreground">Performance Analytics</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-muted-foreground">
                  Get detailed insights into your bot&apos;s performance. 
                  Track engagement rates, follower growth, and content performance to refine your Twitter strategy.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </Container>
    </section>
  )
}

