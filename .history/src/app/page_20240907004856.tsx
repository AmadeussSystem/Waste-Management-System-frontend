import { LandingPage } from "@/components/landing-page";
import { SecondPage } from "@/components/second-page";
import { ThirdPage } from "@/components/third-page";
import React from "react";

const page = () => {
  return (
    <div>
      <LandingPage />
      <SecondPage />
      <ThirdPage />
    </div>
  );
};

export default page;
