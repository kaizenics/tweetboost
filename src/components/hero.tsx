import Image from "next/image";
import { ArrowRight, Zap, TrendingUp, Users } from "lucide-react";
import Marquee from "react-fast-marquee";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { AnimatedTwitterFeed } from "@/components/ui/animated-twitter-feed";

import analytics from "@/assets/analytics.png"
import engagement from "@/assets/engagement.jpg"

import twitter from "@/assets/x.svg"
import onlyfans from "@/assets/onlyfans.svg"
import instagram from "@/assets/instagram.svg"
import discord from "@/assets/discord.svg"

const companyLogos = [
  {
    src: onlyfans,
    alt: "OnlyFans",
    width: 170,
    height: 0,
  },
  {
    src: twitter,
    alt: "Company 2",
    width: 40,
    height: 0,
  },
  {
    src: instagram,
    alt: "Company 2",
    width: 140,
    height: 0,
  },
  {
    src: discord,
    alt: "Company 2",
    width: 140,
    height: 0,
  },
  {
    src: onlyfans,
    alt: "OnlyFans",
    width: 170,
    height: 0,
  },
  {
    src: twitter,
    alt: "Company 2",
    width: 40,
    height: 0,
  },
  {
    src: instagram,
    alt: "Company 2",
    width: 140,
    height: 0,
  },
  {
    src: discord,
    alt: "Company 2",
    width: 140,
    height: 0,
  },
  {
    src: onlyfans,
    alt: "OnlyFans",
    width: 170,
    height: 0,
  },
  {
    src: twitter,
    alt: "Company 2",
    width: 40,
    height: 0,
  },
  {
    src: instagram,
    alt: "Company 2",
    width: 140,
    height: 0,
  },
  {
    src: discord,
    alt: "Company 2",
    width: 140,
    height: 0,
  },

];

export function Hero() {
  return (
    <>
      <div className="relative bg-background pt-16">
        {" "}
        {/* Add pt-16 for navbar space */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-background to-background" />
        <Container variant={"fullMobileBreakpointPadded"}>
          <div className="container relative mx-auto py-14 md:px-12 lg:px-20 lg:py-24">
            <div className="grid gap-12 lg:grid-cols-2">
              <div className="space-y-8">
                <h1 className="font-display text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl text-foreground">
                  Supercharge Your Twitter Presence with{" "}
                  <span className="text-primary">TwitterKings</span>
                </h1>
                <p className="font-sans max-w-xl text-lg sm:text-xl text-muted-foreground">
                  Automate your Twitter engagement, grow your followers, and
                  dominate your niche with our intelligent Twitter bots.
                </p>
                <ul className="font-sans space-y-4 text-muted-foreground">
                  <li className="flex items-center space-x-3">
                    <Zap className="h-5 w-5 text-primary" />
                    <span>Intelligent auto-engagement</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <TrendingUp className="h-5 w-5 text-primary" />
                    <span>Trend-based content creation</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <Users className="h-5 w-5 text-primary" />
                    <span>Targeted follower growth</span>
                  </li>
                </ul>
                <div className="flex flex-col space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0">
                  <Button
                    size="lg"
                    className="bg-primary text-primary-foreground hover:bg-primary/90"
                  >
                    Get Started
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                  >
                    Learn More
                  </Button>
                </div>
              </div>
              <div className="space-y-8">
                <div className="relative">
                  <div className="absolute inset-0 bg-primary/20 rounded-full blur-3xl" />
                  <AnimatedTwitterFeed />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="relative group overflow-hidden rounded-lg bg-card">
                    <Image
                      src={analytics}
                      alt="Analytics Dashboard"
                      width={200}
                      height={200}
                      className="w-full h-auto transition-transform duration-300 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-background/80 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <span className="text-foreground text-sm font-medium">
                        Analytics Dashboard
                      </span>
                    </div>
                  </div>
                  <div className="relative group overflow-hidden rounded-lg bg-card">
                    <Image
                      src={engagement}
                      alt="Engagement Growth"
                      width={200}
                      height={200}
                      className="w-full h-auto transition-transform duration-300 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-background/80 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <span className="text-foreground text-sm font-medium">
                        Engagement Growth
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </div>

      {/* Marquee section */}
      <div className="w-full border-y border-border/50 bg-background/50 backdrop-blur-sm py-12">
        <Container variant={"fullMobileBreakpointPadded"}>
          <div className="text-center mb-8">
            <p className="text-muted-foreground font-display text-sm">
              Trusted by companies worldwide
            </p>
          </div>
        </Container>
        <div className="relative">
          {/* Left fade */}
          <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-background to-transparent z-10" />
          
          {/* Right fade */}
          <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-background to-transparent z-10" />
          
          <Marquee
            gradient={false}
            speed={50}
            pauseOnHover={false}
            className="py-4"
          >
            <div className="flex items-center gap-x-16 px-4">
              {companyLogos.map((logo, index) => (
                <Image
                  key={`${logo.alt}-${index}`}
                  src={logo.src}
                  alt={logo.alt}
                  width={logo.width}
                  height={logo.height}
                  className="grayscale hover:grayscale-0 transition-all duration-200"
                />
              ))}
            </div>
          </Marquee>
        </div>
      </div>
    </>
  );
}
