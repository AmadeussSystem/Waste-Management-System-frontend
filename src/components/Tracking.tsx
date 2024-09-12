"use client";

import React from "react";
import {
  Phone,
  MessageSquare,
  Trash2,
  Recycle,
  Leaf,
  Clock,
  Truck,
  CheckCircle2,
} from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";

export function Tracking() {
  const [progress, setProgress] = React.useState(33);

  React.useEffect(() => {
    const timer = setTimeout(() => setProgress(66), 3000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-r from-[#84D25B] to-[#4CAF50] p-4">
      <div className="max-w-6xl mx-auto">
        <header className="text-center mb-8">
          <h1 className="text-4xl font-bold text-white mb-2 drop-shadow-md">
            EcoTrack Waste Management
          </h1>
          <p className="text-green-100">
            Keeping our community clean and green
          </p>
        </header>

        <div className="grid md:grid-cols-2 gap-6">
          <Card className="shadow-lg bg-white/90 backdrop-blur-sm">
            <CardHeader className="pb-4 bg-green-100/80 rounded-t-lg">
              <CardTitle className="text-green-800 flex items-center justify-center">
                <Leaf className="mr-2 h-6 w-6" />
                Collection Status
              </CardTitle>
            </CardHeader>
            <CardContent className="pb-2">
              <div className="aspect-video bg-gray-100 mb-4 rounded-lg overflow-hidden relative">
                <div className="w-full h-full flex items-center justify-center text-gray-500">
                  <svg
                    className="h-full w-full"
                    viewBox="0 0 100 100"
                    preserveAspectRatio="none"
                  >
                    <path d="M0,0 L100,0 L100,100 L0,100 Z" fill="#e5e7eb" />
                    <path
                      d="M0,50 Q25,40 50,50 T100,50"
                      stroke="#4ade80"
                      strokeWidth="2"
                      fill="none"
                    />
                    <circle cx="20" cy="50" r="3" fill="#4ade80" />
                    <circle cx="80" cy="50" r="3" fill="#4ade80" />
                  </svg>
                  <Truck
                    className="absolute h-8 w-8 text-green-500 animate-bounce"
                    style={{
                      left: `${progress}%`,
                      top: "50%",
                      transform: "translate(-50%, -50%)",
                    }}
                  />
                </div>
              </div>
              <div className="flex items-center space-x-4 mb-6">
                <Avatar className="h-16 w-16 border-2 border-green-500">
                  <AvatarImage
                    src="/placeholder.svg?height=60&width=60"
                    alt="Collector"
                  />
                  <AvatarFallback>WC</AvatarFallback>
                </Avatar>
                <div>
                  <p className="text-lg font-medium text-green-800">
                    John Smith
                  </p>
                  <p className="text-sm text-green-600">
                    Recycling Truck • WM 456
                  </p>
                </div>
                <div className="ml-auto text-right">
                  <p className="text-sm font-medium text-green-600">
                    Estimated pickup in
                  </p>
                  <p className="text-3xl font-bold text-green-800">30 min</p>
                </div>
              </div>
              <Progress value={progress} className="h-3 mb-2" />
              <div className="flex justify-between text-xs text-green-600 mb-4">
                <span className="flex items-center">
                  <Clock className="mr-1 h-4 w-4" /> Scheduled
                </span>
                <span className="flex items-center">
                  <Truck className="mr-1 h-4 w-4" /> En Route
                </span>
                <span className="flex items-center">
                  <CheckCircle2 className="mr-1 h-4 w-4" /> Collected
                </span>
              </div>
            </CardContent>
            <CardFooter className="flex justify-between bg-green-50/80 rounded-b-lg">
              <div className="flex space-x-2">
                <Button
                  size="sm"
                  variant="outline"
                  className="border-black text-black hover:bg-black hover:text-white"
                >
                  <Phone className="h-4 w-4 mr-2" />
                  Call
                </Button>
                <Button
                  size="sm"
                  variant="outline"
                  className="border-black text-black hover:bg-black hover:text-white"
                >
                  <MessageSquare className="h-4 w-4 mr-2" />
                  Message
                </Button>
              </div>
              <Button
                variant="outline"
                className="border-black text-black hover:bg-black hover:text-white"
              >
                <Recycle className="h-4 w-4 mr-2" />
                Recycling Guide
              </Button>
            </CardFooter>
          </Card>

          <Card className="shadow-lg bg-white/90 backdrop-blur-sm">
            <CardHeader className="pb-4 bg-green-100/80 rounded-t-lg">
              <CardTitle className="text-green-800">
                Collection Details
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex justify-between items-center pb-2 border-b border-green-100">
                  <span className="text-sm font-medium text-green-700">
                    Address
                  </span>
                  <span className="text-sm text-green-800">123 Green St</span>
                </div>
                <div className="pb-2 border-b border-green-100">
                  <span className="text-sm font-medium text-green-700 mb-2 block">
                    Waste Types
                  </span>
                  <div className="flex flex-wrap gap-2">
                    <Badge
                      variant="secondary"
                      className="bg-gray-100 text-gray-800 flex items-center"
                    >
                      <Trash2 className="h-3 w-3 mr-1" />
                      General
                    </Badge>
                    <Badge
                      variant="secondary"
                      className="bg-blue-100 text-blue-800 flex items-center"
                    >
                      <Recycle className="h-3 w-3 mr-1" />
                      Recycling
                    </Badge>
                    <Badge
                      variant="secondary"
                      className="bg-green-100 text-green-800 flex items-center"
                    >
                      <Leaf className="h-3 w-3 mr-1" />
                      Green Waste
                    </Badge>
                  </div>
                </div>
                <div className="flex justify-between items-center pb-2 border-b border-green-100">
                  <span className="text-sm font-medium text-green-700">
                    Collection Frequency
                  </span>
                  <span className="text-sm text-green-800">Weekly</span>
                </div>
                <div className="flex justify-between items-center pb-2 border-b border-green-100">
                  <span className="text-sm font-medium text-green-700">
                    Next Collection
                  </span>
                  <span className="text-sm text-green-800">July 15, 2023</span>
                </div>
                <div className="flex justify-between items-center pb-2 border-b border-green-100">
                  <span className="text-sm font-medium text-green-700">
                    Container Size
                  </span>
                  <span className="text-sm text-green-800">240L</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm font-medium text-green-700">
                    Special Instructions
                  </span>
                  <span className="text-sm text-green-800">
                    Place bin at curb by 6 AM
                  </span>
                </div>
              </div>
            </CardContent>
            <CardFooter className="bg-green-50/80 rounded-b-lg">
              <Button
                variant="outline"
                className="w-full border-black text-black hover:bg-black hover:text-white"
              >
                <Leaf className="h-4 w-4 mr-2" />
                View Waste Reduction Tips
              </Button>
            </CardFooter>
          </Card>
        </div>
      </div>
    </div>
  );
}
