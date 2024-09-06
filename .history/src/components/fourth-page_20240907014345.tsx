import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

export function FourthPage() {
  return (
    <div className="w-full bg-[#F3F4F6] py-12 md:py-16 px-4 md:px-6">
      <div className="w-full max-w-3xl mx-auto">
        <div className="space-y-4 text-center">
          <h1 className="text-3xl md:text-4xl font-bold text-black">
            Contact Us
          </h1>
          <p className="text-muted-foreground md:text-lg">
            Have a question or need assistance? Fill out the form below and
            we'll get back to you as soon as possible.
          </p>
        </div>
        <form className="mt-8 space-y-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="space-y-2">
              <Label htmlFor="name">Name</Label>
              <Input id="name" placeholder="Enter your name" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input id="email" type="email" placeholder="Enter your email" />
            </div>
          </div>
          <div className="space-y-2">
            <Label htmlFor="phone">Phone (optional)</Label>
            <Input
              id="phone"
              type="tel"
              placeholder="Enter your phone number"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="message">Message</Label>
            <Textarea
              id="message"
              placeholder="Enter your message"
              className="min-h-[150px]"
            />
          </div>
          <div className="flex justify-center">
            <Button
              type="submit"
              className="bg-[#5DB661] text-white hover:bg-[#4a9d4f]"
            >
              Submit
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}
