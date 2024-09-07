"use client";

import { Sheet, SheetTrigger, SheetContent } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import MySvg from "../public/logo.svg";
import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuLink,
  NavigationMenuItem,
  NavigationMenuTrigger,
  NavigationMenuContent,
} from "@/components/ui/navigation-menu";
import React from "react";

interface IconProps extends React.SVGProps<SVGSVGElement> {}

export function LandingPage() {
  return (
    <>
      <header className="flex h-20 w-full shrink-0 items-center px-4 md:px-6 bg-gradient-to-r from-[#84D25B] to-[#4CAF50] border-b">
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
              <span className="font-bold text-lg font-['Roboto', 'sans-serif']">
                Waste Management
              </span>
            </Link>
            <div className="grid gap-4 py-6 px-6">
              <Link
                href="#"
                className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-4 text-sm font-['Roboto', 'sans-serif'] font-medium text-primary-foreground transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                prefetch={false}
              >
                Login
              </Link>
              <Link
                href="#"
                className="inline-flex h-10 items-center justify-center rounded-md bg-secondary px-4 text-sm font-['Roboto', 'sans-serif'] font-medium text-secondary-foreground transition-colors hover:bg-secondary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
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
          <span className="font-bold text-lg font-['Roboto', 'sans-serif']">
            Waste Management
          </span>
        </Link>
        <NavigationMenu className="hidden lg:flex">
          <NavigationMenuList>
            <NavigationMenuLink asChild>
              <Link
                href="#"
                className="group inline-flex h-9 w-max items-center justify-center rounded-md px-4 py-2 text-sm font-['Roboto', 'sans-serif'] font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50"
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
                      className="group grid h-auto w-full items-center justify-start gap-1 rounded-md p-4 text-sm font-['Roboto', 'sans-serif'] font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50"
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
                      className="group grid h-auto w-full items-center justify-start gap-1 rounded-md p-4 text-sm font-['Roboto', 'sans-serif'] font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50"
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
                      className="group grid h-auto w-full items-center justify-start gap-1 rounded-md p-4 text-sm font-['Roboto', 'sans-serif'] font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50"
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
                className="group inline-flex h-9 w-max items-center justify-center rounded-md px-4 py-2 text-sm font-['Roboto', 'sans-serif'] font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50"
                prefetch={false}
              >
                About
              </Link>
            </NavigationMenuLink>
            <NavigationMenuLink asChild>
              <Link
                href="#"
                className="group inline-flex h-9 w-max items-center justify-center rounded-md px-4 py-2 text-sm font-['Roboto', 'sans-serif'] font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50"
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
            className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-4 text-sm font-['Roboto', 'sans-serif'] font-medium text-primary-foreground transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
            prefetch={false}
          >
            Login
          </Link>
          <Link
            href="#"
            className="inline-flex h-10 items-center justify-center rounded-md bg-secondary px-4 text-sm font-['Roboto', 'sans-serif'] font-medium text-secondary-foreground transition-colors hover:bg-secondary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
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
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none text-white font-['Roboto', 'sans-serif']">
                  Sustainable Waste Management Solutions
                </h1>
                <p className="max-w-[600px] text-white md:text-xl font-['Roboto', 'sans-serif']">
                  We provide reliable and eco-friendly waste collection and
                  recycling services for residential and commercial customers.
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Link
                  href="#"
                  className="inline-flex h-10 items-center justify-center rounded-md bg-[#4CAF50] px-8 text-sm font-['Roboto', 'sans-serif'] font-medium text-white transition-colors hover:bg-[#45A049] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                  prefetch={false}
                >
                  Get Started
                </Link>
                <Link
                  href="#"
                  className="inline-flex h-10 items-center justify-center rounded-md border border-white px-8 text-sm font-['Roboto', 'sans-serif'] font-medium text-white transition-colors hover:bg-white hover:text-[#4CAF50] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                  prefetch={false}
                >
                  Learn More
                </Link>
              </div>
            </div>
            <MySvg width={500} height={500} />
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
      d="M3 6h18M3 6h18M3 6h18M3 6h18M3 6h18"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
