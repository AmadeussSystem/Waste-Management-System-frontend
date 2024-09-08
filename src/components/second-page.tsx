import { IBM_Plex_Sans } from "next/font/google";
import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import OurJourney from "../../public/OurJourneyv2.svg";

// Import the IBM Plex Sans font with the desired weight
const ibm_plex_sans = IBM_Plex_Sans({
  weight: ["400", "500", "700"],
  subsets: ["latin"],
  display: "swap",
});

// Sample milestones data for rendering cards
const milestones = [
  {
    title: "Founding",
    description:
      "Our company was founded in 2015 with a mission to revolutionize the way businesses approach technology.",
    image: "/placeholder.svg",
  },
  {
    title: "Sustainable Design",
    description:
      "We are inspired by the principles of sustainable design, which guide our product development and operations.",
    image: "/placeholder.svg",
  },
  {
    title: "Global Expansion",
    description:
      "In 2020, we expanded our reach to serve customers across the globe, bringing our innovative solutions to new markets.",
    image: "/placeholder.svg",
  },
  {
    title: "Customer-Centricity",
    description:
      "Our unwavering focus on customer satisfaction has been a driving force behind our success and growth.",
    image: "/placeholder.svg",
  },
  {
    title: "Technological Innovation",
    description:
      "Our commitment to innovation has led us to develop cutting-edge technologies that empower our clients to achieve their goals.",
    image: "/placeholder.svg",
  },
  {
    title: "Collaborative Culture",
    description:
      "Our diverse and talented team works together to create solutions that make a real difference for our clients.",
    image: "/placeholder.svg",
  },
];

export function SecondPage() {
  return (
    <div className={`${ibm_plex_sans.className} bg-white text-black`}>
      {/* Hero Section */}
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          {/* Grid layout with proper alignment */}
          <div className="grid items-center gap-6 lg:grid-cols-2 lg:gap-12 xl:grid-cols-[1fr_550px]">
            <div className="space-y-4 text-center lg:text-left">
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tighter text-black">
                Our Journey & Inspiration
              </h1>
              <p className="max-w-[600px] mx-auto text-gray-700 text-base sm:text-lg md:text-xl lg:text-xl">
                Discover the story behind our company and the inspirations that
                drive us forward.
              </p>
              <Link
                href="#"
                className="inline-flex h-10 items-center justify-center rounded-md bg-[#5DB661] px-6 md:px-8 text-sm font-medium text-white shadow transition-colors hover:bg-[#5DB661]/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                prefetch={false}
              >
                Learn More
              </Link>
            </div>
            <OurJourney
              width={300}
              height={300}
              className="mx-auto md:w-full ml-32"
            />
          </div>
        </div>
      </section>

      {/* Milestones Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center space-y-4">
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold tracking-tighter text-black">
              Milestones & Inspirations
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
                  <Image
                    src={milestone.image}
                    width={700}
                    height={1000}
                    alt={milestone.title}
                    className="mx-auto aspect-video overflow-hidden rounded-t-xl object-cover object-center"
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
