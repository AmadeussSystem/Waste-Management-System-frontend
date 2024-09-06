import { IBM_Plex_Sans } from "next/font/google";
import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";

// Import the IBM Plex Sans font with the desired weight
const ibm_plex_sans = IBM_Plex_Sans({
  weight: ["400", "500", "700"], // Specify the font weights you want to use
  subsets: ["latin"],
  display: "swap",
});

export function SecondPage() {
  return (
    <div className={`${ibm_plex_sans.className} bg-white text-black`}>
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="grid items-center gap-6 lg:grid-cols-2 lg:gap-12 xl:grid-cols-[1fr_550px]">
            <div className="space-y-4">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl text-black">
                Our Journey & Inspiration
              </h1>
              <p className="max-w-[600px] text-gray-700 md:text-xl lg:text-base xl:text-xl">
                Discover the story behind our company and the inspirations that
                drive us forward.
              </p>
              <Link
                href="#"
                className="inline-flex h-10 items-center justify-center rounded-md bg-[#5DB661] px-8 text-sm font-medium text-white shadow transition-colors hover:bg-[#5DB661]/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                prefetch={false}
              >
                Learn More
              </Link>
            </div>
            <img
              src="/placeholder.svg"
              width="550"
              height="310"
              alt="Hero"
              className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full lg:order-last"
            />
          </div>
        </div>
      </section>

      <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100">
        <div className="container px-4 md:px-6">
          <div className="space-y-4 text-center">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-black">
              Milestones & Inspirations
            </h2>
            <p className="max-w-[700px] mx-auto text-gray-700 md:text-xl lg:text-base xl:text-xl">
              Explore the key moments and inspirations that have shaped our
              journey.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mt-12">
            {milestones.map((milestone, index) => (
              <Card key={index} className="p-4">
                <img
                  src={milestone.image}
                  width="550"
                  height="310"
                  alt={milestone.title}
                  className="mx-auto aspect-video overflow-hidden rounded-t-xl object-cover object-center"
                />
                <CardContent className="p-4 space-y-2">
                  <h3 className="text-xl font-bold text-black">
                    {milestone.title}
                  </h3>
                  <p className="text-gray-700">{milestone.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

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
