import { Headline } from "@/components/ui/Headline";
import { PricingCards } from "@/components/ui/PricingCards";
import { PricingTable } from "@/components/ui/PricingTable";
import { SectionWrapper } from "@/components/ui/SectionWrapper";
import React from "react";

export default function PricingPage() {
  return (
    <SectionWrapper>
      <Headline section='Pricing' title='Manage your projects today!' />
      <PricingCards />
      <PricingTable />
    </SectionWrapper>
  );
}
