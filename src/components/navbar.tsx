"use client";

import React from "react";
import Image from "next/image";
import { Container } from "@/components/ui/container";
import { ThemeToggle } from "@/components/theme-toggle";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";

import logo from "@/assets/logo.png";

const dropdownVariants = {
  hidden: {
    opacity: 0,
    y: -5,
    scale: 0.95,
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 300,
      damping: 24,
    },
  },
  exit: {
    opacity: 0,
    y: -5,
    scale: 0.95,
    transition: {
      duration: 0.1,
    },
  },
};

export const Navbar = () => {
  const [featuresOpen, setFeaturesOpen] = React.useState(false);
  const [solutionsOpen, setSolutionsOpen] = React.useState(false);

  return (
    <nav className="w-full fixed top-0 left-0 z-50 backdrop-blur-sm bg-background/80 border-b border-border/40">
      <Container variant={"fullMobileBreakpointPadded"}>
        <div className="px-4">
          <div className="flex justify-between items-center h-16">
            <div className="flex flex-row space-x-2">
              <Image src={logo} alt="" className="w-12 h-12" />
              <div className="flex-shrink-0 flex items-center">
                <h1 className="font-display text-blue-500 text-2xl font-bold">
                  TwitterKings
                </h1>
              </div>
            </div>

            <div className="font-sans hidden md:flex items-center space-x-8">
              <div className="flex items-center space-x-8">
                <div
                  className="relative group"
                  onMouseEnter={() => setFeaturesOpen(true)}
                  onMouseLeave={() => setFeaturesOpen(false)}
                >
                  <button className="hover:text-blue-600 px-3 py-2">
                    Features
                  </button>
                  <AnimatePresence>
                    {featuresOpen && (
                      <motion.div
                        className="absolute w-48 backdrop-blur-sm bg-background/80 border border-border/40 shadow-lg shadow-black/5 py-2 rounded-md"
                        initial="hidden"
                        animate="visible"
                        exit="exit"
                        variants={dropdownVariants}
                      >
                        <a
                          href="#"
                          className="block px-4 py-2 hover:bg-muted transition-colors duration-200"
                        >
                          Feature 1
                        </a>
                        <a
                          href="#"
                          className="block px-4 py-2 hover:bg-muted transition-colors duration-200"
                        >
                          Feature 2
                        </a>
                        <a
                          href="#"
                          className="block px-4 py-2 hover:bg-muted transition-colors duration-200"
                        >
                          Feature 3
                        </a>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                <div
                  className="relative group"
                  onMouseEnter={() => setSolutionsOpen(true)}
                  onMouseLeave={() => setSolutionsOpen(false)}
                >
                  <button className="hover:text-blue-600 px-3 py-2">
                    Solutions
                  </button>
                  <AnimatePresence>
                    {solutionsOpen && (
                      <motion.div
                        className="absolute w-48 backdrop-blur-sm bg-background/80 border border-border/40 shadow-lg shadow-black/5 py-2 rounded-md"
                        initial="hidden"
                        animate="visible"
                        exit="exit"
                        variants={dropdownVariants}
                      >
                        <a
                          href="#"
                          className="block px-4 py-2 hover:bg-muted transition-colors duration-200"
                        >
                          Solution 1
                        </a>
                        <a
                          href="#"
                          className="block px-4 py-2 hover:bg-muted transition-colors duration-200"
                        >
                          Solution 2
                        </a>
                        <a
                          href="#"
                          className="block px-4 py-2 hover:bg-muted transition-colors duration-200"
                        >
                          Solution 3
                        </a>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </div>

              <div className="flex items-center space-x-2">
                <Button
                  variant="outline"
                  className="text-muted-foreground hover:text-primary"
                >
                  Login
                </Button>
                <Button className="bg-primary text-primary-foreground hover:bg-primary/90">
                  Get Started
                </Button>
                <ThemeToggle />
              </div>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button className="text-gray-600 hover:text-blue-600">
                <svg
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </Container>
    </nav>
  );
};

export default Navbar;
