export function ThirdPage() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-white">
      <div className="container px-4 md:px-6 mx-auto">
        <div className="space-y-4 text-center">
          {/* Centered Heading */}
          <h2 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl text-black bg-white py-4 px-6 rounded-lg mx-auto max-w-fit font-['Roboto', 'sans-serif']">
            Our Journey in Waste Management
          </h2>
          {/* Centered Subheading */}
          <p className="mx-auto max-w-[700px] text-xl text-gray-600 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            Explore the key milestones that have shaped our waste management
            journey.
          </p>
        </div>
        <div className="mt-12">
          <div className="grid gap-8">
            <div className="relative grid grid-cols-[60px_1fr] gap-6 after:absolute after:inset-y-0 after:left-[30px] after:h-full after:w-px after:bg-muted-foreground/20">
              <div className="flex flex-col items-center gap-2">
                <div className="aspect-square w-10 rounded-full bg-[#5DB661]" />
                <div className="h-full w-px bg-muted-foreground/20" />
              </div>
              <div>
                <div className="text-lg font-semibold text-black">
                  Launched our waste management service
                </div>
                <div className="text-xs text-muted-foreground">
                  January 15, 2023
                </div>
                <p className="text-sm text-muted-foreground">
                  We launched our comprehensive waste management services,
                  focusing on eco-friendly solutions and community involvement.
                </p>
              </div>
            </div>
            <div className="relative grid grid-cols-[60px_1fr] gap-6 after:absolute after:inset-y-0 after:left-[30px] after:h-full after:w-px after:bg-muted-foreground/20">
              <div className="flex flex-col items-center gap-2">
                <div className="aspect-square w-10 rounded-full bg-[#5DB661]" />
                <div className="h-full w-px bg-muted-foreground/20" />
              </div>
              <div>
                <div className="text-lg font-semibold text-black">
                  Partnered with local businesses
                </div>
                <div className="text-xs text-muted-foreground">
                  March 1, 2023
                </div>
                <p className="text-sm text-muted-foreground">
                  We established partnerships with local businesses to promote
                  sustainable waste disposal practices and recycling efforts.
                </p>
              </div>
            </div>
            <div className="relative grid grid-cols-[60px_1fr] gap-6 after:absolute after:inset-y-0 after:left-[30px] after:h-full after:w-px after:bg-muted-foreground/20">
              <div className="flex flex-col items-center gap-2">
                <div className="aspect-square w-10 rounded-full bg-[#5DB661]" />
                <div className="h-full w-px bg-muted-foreground/20" />
              </div>
              <div>
                <div className="text-lg font-semibold text-black">
                  Introduced our recycling program
                </div>
                <div className="text-xs text-muted-foreground">
                  June 15, 2023
                </div>
                <p className="text-sm text-muted-foreground">
                  We launched a community recycling program, encouraging
                  residents to recycle and reduce waste through educational
                  initiatives.
                </p>
              </div>
            </div>
            <div className="relative grid grid-cols-[60px_1fr] gap-6 after:absolute after:inset-y-0 after:left-[30px] after:h-full after:w-px after:bg-muted-foreground/20">
              <div className="flex flex-col items-center gap-2">
                <div className="aspect-square w-10 rounded-full bg-[#5DB661]" />
                <div className="h-full w-px bg-muted-foreground/20" />
              </div>
              <div>
                <div className="text-lg font-semibold text-black">
                  Reached 500 residential clients
                </div>
                <div className="text-xs text-muted-foreground">
                  August 30, 2023
                </div>
                <p className="text-sm text-muted-foreground">
                  We celebrated reaching 500 residential clients, showcasing our
                  commitment to sustainable waste management in our community.
                </p>
              </div>
            </div>
            <div className="relative grid grid-cols-[60px_1fr] gap-6 after:absolute after:inset-y-0 after:left-[30px] after:h-full after:w-px after:bg-muted-foreground/20">
              <div className="flex flex-col items-center gap-2">
                <div className="aspect-square w-10 rounded-full bg-[#5DB661]" />
                <div className="h-full w-px bg-muted-foreground/20" />
              </div>
              <div>
                <div className="text-lg font-semibold text-black">
                  Launched our waste tracking app
                </div>
                <div className="text-xs text-muted-foreground">
                  September 15, 2023
                </div>
                <p className="text-sm text-muted-foreground">
                  We launched an app allowing customers to track their waste
                  collection schedules and learn about recycling practices.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
