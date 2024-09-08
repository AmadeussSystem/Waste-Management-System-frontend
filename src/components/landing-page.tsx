"use client";

import { Sheet, SheetTrigger, SheetContent } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import MySvg from "../public/logo.svg"; // Importing your SVG logo
import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuLink,
  NavigationMenuItem,
  NavigationMenuTrigger,
  NavigationMenuContent,
} from "@/components/ui/navigation-menu";
import { Typewriter } from "react-simple-typewriter";
import React from "react";

// Define IconProps for SVG icons
interface IconProps extends React.SVGProps<SVGSVGElement> {}

export function LandingPage() {
  return (
    <>
      <header className="flex h-20 w-full items-center px-4 md:px-6 bg-gradient-to-r from-[#84D25B] to-[#4CAF50] border-b">
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon" className="lg:hidden">
              <MenuIcon className="h-6 w-6" />
              <span className="sr-only">Toggle navigation menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="left">
            <Link
              href="#"
              className="flex items-center gap-2 py-4 px-6"
              prefetch={false}
            >
              <TrashIcon className="h-6 w-6" />
              <span className="font-bold text-lg">Waste Management</span>
            </Link>
            <div className="grid gap-4 py-6 px-6">
              <Link
                href="#"
                className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-4 text-sm font-medium transition-colors hover:bg-primary/90"
                prefetch={false}
              >
                Login
              </Link>
              <Link
                href="#"
                className="inline-flex h-10 items-center justify-center rounded-md bg-secondary px-4 text-sm font-medium transition-colors hover:bg-secondary/90"
                prefetch={false}
              >
                Sign Up
              </Link>
            </div>
          </SheetContent>
        </Sheet>
        <Link
          href="#"
          className="mr-6 hidden lg:flex items-center gap-2"
          prefetch={false}
        >
          <TrashIcon className="h-6 w-6" />
          <span className="font-bold text-lg">Avrutti</span>
        </Link>
        <NavigationMenu className="hidden lg:flex">
          <NavigationMenuList>
            <NavigationMenuLink asChild>
              <Link
                href="#"
                className="group inline-flex h-9 items-center justify-center rounded-md px-4 py-2 text-sm font-medium transition-colors hover:bg-accent"
                prefetch={false}
              >
                Home
              </Link>
            </NavigationMenuLink>
            <NavigationMenuItem>
              <NavigationMenuTrigger>Services</NavigationMenuTrigger>
              <NavigationMenuContent>
                <div className="grid w-[400px] p-2">
                  <NavigationMenuLink asChild>
                    <Link
                      href="#"
                      className="group grid h-auto w-full items-center justify-start gap-1 rounded-md p-4 text-sm font-medium transition-colors hover:bg-accent"
                      prefetch={false}
                    >
                      <div className="text-sm font-medium leading-none group-hover:underline">
                        Residential Waste
                      </div>
                      <div className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                        Reliable waste collection for your home.
                      </div>
                    </Link>
                  </NavigationMenuLink>
                  <NavigationMenuLink asChild>
                    <Link
                      href="#"
                      className="group grid h-auto w-full items-center justify-start gap-1 rounded-md p-4 text-sm font-medium transition-colors hover:bg-accent"
                      prefetch={false}
                    >
                      <div className="text-sm font-medium leading-none group-hover:underline">
                        Commercial Waste
                      </div>
                      <div className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                        Tailored waste management for your business.
                      </div>
                    </Link>
                  </NavigationMenuLink>
                  <NavigationMenuLink asChild>
                    <Link
                      href="#"
                      className="group grid h-auto w-full items-center justify-start gap-1 rounded-md p-4 text-sm font-medium transition-colors hover:bg-accent"
                      prefetch={false}
                    >
                      <div className="text-sm font-medium leading-none group-hover:underline">
                        Recycling
                      </div>
                      <div className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                        Sustainable waste disposal and recycling.
                      </div>
                    </Link>
                  </NavigationMenuLink>
                </div>
              </NavigationMenuContent>
            </NavigationMenuItem>
            <NavigationMenuLink asChild>
              <Link
                href="#"
                className="group inline-flex h-9 items-center justify-center rounded-md px-4 py-2 text-sm font-medium transition-colors hover:bg-accent"
                prefetch={false}
              >
                About
              </Link>
            </NavigationMenuLink>
            <NavigationMenuLink asChild>
              <Link
                href="#"
                className="group inline-flex h-9 items-center justify-center rounded-md px-4 py-2 text-sm font-medium transition-colors hover:bg-accent"
                prefetch={false}
              >
                Contact
              </Link>
            </NavigationMenuLink>
          </NavigationMenuList>
        </NavigationMenu>
        <div className="ml-auto flex gap-2 hidden lg:flex">
          <Link
            href="#"
            className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-4 text-sm font-medium transition-colors hover:bg-primary/90"
            prefetch={false}
          >
            Login
          </Link>
          <Link
            href="#"
            className="inline-flex h-10 items-center justify-center rounded-md bg-secondary px-4 text-sm font-medium text-black transition-colors hover:bg-secondary/90"
            prefetch={false}
          >
            Sign Up
          </Link>
        </div>
      </header>
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-r from-[#84D25B] to-[#4CAF50]">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
            <div className="flex flex-col justify-center space-y-4">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl text-white">
                  Sustainable Waste Management Solutions
                </h1>
                <p className="max-w-[600px] text-white md:text-2xl">
                  <Typewriter
                    words={[
                      "Reliable waste collection.",
                      "Eco-friendly recycling services.",
                      "Tailored waste management for businesses.",
                    ]}
                    loop
                    cursor
                    cursorStyle="|"
                    typeSpeed={100}
                    deleteSpeed={50}
                    delaySpeed={2000}
                  />
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Link
                  href="#"
                  className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-4 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
                  prefetch={false}
                >
                  Get Started
                </Link>
                <Link
                  href="#"
                  className="inline-flex h-10 items-center justify-center rounded-md bg-secondary px-4 text-sm font-medium text-secondary-foreground transition-colors hover:bg-secondary/90"
                  prefetch={false}
                >
                  Learn More
                </Link>
              </div>
            </div>
            <MySvg width={300} height={300} className="mx-auto md:w-full" />
          </div>
        </div>
      </section>
    </>
  );
}

const MenuIcon: React.FC<IconProps> = (props) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M3 6h18M3 12h18M3 18h18"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const TrashIcon: React.FC<IconProps> = (props) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M3 6h18M19 6l-1 14a2 2 0 01-2 2H8a2 2 0 01-2-2L5 6m5 0V4a2 2 0 012-2h2a2 2 0 012 2v2M10 11v6m4-6v6"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
