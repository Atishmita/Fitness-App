import React from "react";
import { Landing } from "../components/Landing/Landing";
import Programs from "../components/Programs/Programs";
import Reasons from "../components/Reasons/Reasons";
import Testimonials from "../components/Testimonials/Testimonials";
const LandingPage = () => {
  return (
    <div>
      <Landing />
      <Programs />
      <Reasons />
      <Testimonials />
    </div>
  );
};
export default LandingPage;
