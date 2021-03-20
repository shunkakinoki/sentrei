import { Cta } from "@sentrei/organisms/landing/Cta";
import { Faq } from "@sentrei/organisms/landing/Faq";
import { Feature } from "@sentrei/organisms/landing/Feature";
import { Founder } from "@sentrei/organisms/landing/Founder";
// import { Globe } from "@sentrei/organisms/landing/Globe";
import { Hero } from "@sentrei/organisms/landing/Hero";
// import { Journey } from "@sentrei/organisms/landing/Journey";
// import { Mission } from "@sentrei/organisms/landing/Mission";
import { Newsletter } from "@sentrei/organisms/landing/Newsletter";
import { Stats } from "@sentrei/organisms/landing/Stats";
// import { Testimonial } from "@sentrei/organisms/landing/Testimonial";
import { PageRoot } from "@sentrei/roots/landing/PageRoot";
import type { FC } from "react";

import * as React from "react";

export const LandingScreen: FC = () => (
  <PageRoot>
    <Hero />
    {/* <Journey /> */}
    <Feature />
    <Founder />
    {/* <Testimonial /> */}
    {/* <Mission /> */}
    {/* <Globe /> */}
    <Stats />
    <Faq />
    <Cta />
    <Newsletter />
  </PageRoot>
);
