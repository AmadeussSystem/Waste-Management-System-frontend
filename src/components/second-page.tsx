"use client";
import { IBM_Plex_Sans } from "next/font/google";
import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import OurJourney from "../../public/OurJourneyv2.svg";
import Lottie from "react-lottie-player"; // Import Lottie component
import lottieData1 from "../../public/Business Salesman.json";
import lottieData2 from "../../public/Business Team.json";
import lottieData3 from "../../public/Customer review.json";
import lottieData4 from "../../public/Growth Analysis.json";
import lottieData5 from "../../public/Female Investors.json";
import lottieData6 from "../../public/Woman Shopping Online.json";

// Import the IBM Plex Sans font with the desired weight
const ibm_plex_sans = IBM_Plex_Sans({
  weight: ["400", "500", "700"],
  subsets: ["latin"],
  display: "swap",
});

// Sample milestones data for rendering cards
const milestones = [
  {
    title: "Our Beginning",
    description:
      "Founded in 2023, we launched with a mission to revolutionize waste management for a cleaner, more sustainable future.",
    lottie: lottieData1,
  },
  {
    title: "Eco-Inspired Vision",
    description:
      "From day one, we’ve been driven by the principles of eco-friendly innovation, focusing on reducing waste and promoting sustainable practices.",
    lottie: lottieData6,
  },
  {
    title: "Early Collaborations",
    description:
      "Partnering with local communities and businesses, we’ve helped lay the groundwork for smarter waste management solutions right from the start.",
    lottie: lottieData3,
  },
  {
    title: "Customer-Driven Growth",
    description:
      "Our commitment to providing personalized, reliable waste services has quickly gained the trust of our early clients, fueling our rapid growth.",
    lottie: lottieData5,
  },
  {
    title: "Innovation in Action",
    description:
      "As a startup, we continuously explore new technologies and approaches, ensuring we stay at the forefront of waste management solutions.",
    lottie: lottieData4,
  },
  {
    title: "A Shared Vision for the Future",
    description:
      "We believe collaboration is key, and together with our partners, we’re creating a sustainable future for waste management.",
    lottie: lottieData2,
  },
];

export function SecondPage() {
  return (
    <div className={`${ibm_plex_sans.className} bg-white text-black`}>
      {/* Hero Section */}
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container mx-auto px-4 md:px-6">
          {/* Grid layout with proper alignment */}
          <div className="grid items-center gap-6 lg:grid-cols-2 lg:gap-12 xl:grid-cols-[1fr_550px]">
            <div className="space-y-4 text-center lg:text-left">
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tighter text-black">
                Our Journey & Inspiration
              </h1>
              <p className="max-w-[600px] mx-auto text-gray-700 text-base sm:text-lg md:text-xl lg:text-xl">
                In a world facing growing environmental challenges, a team of
                passionate innovators set out to transform the waste management
                industry with sustainable solutions. With Avrutti, we are
                bridging the gap between waste producers—whether households,
                businesses, or industries—and eco-conscious waste recyclers and
                disposal experts. Join us on this mission to create a cleaner,
                greener future. Let’s manage waste responsibly and build a
                sustainable tomorrow for everyone!
              </p>
              <Link
                href="#"
                className="inline-flex h-10 items-center justify-center rounded-md bg-[#5DB661] px-6 md:px-8 text-sm font-medium text-white shadow transition-colors hover:bg-[#5DB661]/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                prefetch={false}
              >
                Learn More
              </Link>
            </div>
            <div className="flex justify-center">
              <OurJourney
                width="100%" // Set width to 100% for responsiveness
                height="auto" // Set height to auto to maintain aspect ratio
                className="mx-auto md:w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Milestones Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center space-y-4">
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold tracking-tighter text-black">
              Key Milestones in Our Journey
            </h2>
            <p className="max-w-[700px] mx-auto text-gray-700 text-base sm:text-lg md:text-xl">
              Explore the key moments and inspirations that have shaped our
              journey.
            </p>
          </div>

          {/* Responsive Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
            {milestones.map((milestone, index) => (
              <div key={index} className="flex justify-center">
                <Card className="p-4 max-w-xs w-full">
                  <Lottie
                    animationData={milestone.lottie}
                    loop
                    play
                    style={{ width: "100%", height: "auto" }}
                  />
                  <CardContent className="p-4 space-y-2 text-center">
                    <h3 className="text-lg sm:text-xl font-bold text-black">
                      {milestone.title}
                    </h3>
                    <p className="text-gray-700 text-sm sm:text-base">
                      {milestone.description}
                    </p>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
