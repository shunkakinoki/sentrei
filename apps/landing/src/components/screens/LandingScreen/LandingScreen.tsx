import type { FC } from "react";

import { Cta } from "@/components/organisms/Cta";
import { Faq } from "@/components/organisms/Faq";
import { Feature } from "@/components/organisms/Feature";
import { Founder } from "@/components/organisms/Founder";
// import { Globe } from "@/components/organisms/Globe";
import { Hero } from "@/components/organisms/Hero";
// import { Journey } from "@/components/organisms/Journey";
// import { Mission } from "@/components/organisms/Mission";
import { Newsletter } from "@/components/organisms/Newsletter";
import { Stats } from "@/components/organisms/Stats";
// import { Testimonial } from "@/components/organisms/Testimonial";
import { PageRoot } from "@/components/roots/PageRoot";

export const LandingScreen: FC = () => (
  <PageRoot type="landing">
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
