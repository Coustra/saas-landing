"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { CheckIcon } from "lucide-react";
import { SectionWrapper } from "./SectionWrapper";
import { useState } from "react";

interface Plan {
  popular?: boolean;
  title: string;
  annual: number;
  monthly: number;
  subTitle: string;
  features: string[];
}

const plans: Plan[] = [
  {
    title: "Free",
    annual: 0,
    monthly: 0,
    subTitle: "Free forever.",
    features: ["1 user", "Plan features", "Product support"],
  },
  {
    popular: true,
    title: "Startup",
    annual: 39,
    monthly: 49,
    subTitle: "All the basics for starting a new business",
    features: ["2 users", "Plan features", "Product support"],
  },
  {
    title: "Team",
    annual: 89,
    monthly: 99,
    subTitle: "Everything you need for a growing business",
    features: ["5 users", "Plan features", "Product support"],
  },
  {
    title: "Enterprise",
    annual: 149,
    monthly: 199,
    subTitle: "Advanced features for scaling your business",
    features: ["10 users", "Plan features", "Product support"],
  },
];

export const PricingCards = () => {
  const [isAnnual, setIsAnnual] = useState(false);
  return (
    <>
      <div className='flex justify-center items-center'>
        <Label htmlFor='payment-schedule' className='me-3'>
          Monthly
        </Label>
        <Switch
          id='payment-schedule'
          checked={isAnnual}
          onCheckedChange={setIsAnnual}
        />
        <Label htmlFor='payment-schedule' className='relative ms-3'>
          Annual
          <span className='absolute -top-10 start-auto -end-28'>
            <span className='flex items-center'>
              <svg
                className='w-14 h-8 -me-6'
                width={45}
                height={25}
                viewBox='0 0 45 25'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  d='M43.2951 3.47877C43.8357 3.59191 44.3656 3.24541 44.4788 2.70484C44.5919 2.16427 44.2454 1.63433 43.7049 1.52119L43.2951 3.47877ZM4.63031 24.4936C4.90293 24.9739 5.51329 25.1423 5.99361 24.8697L13.8208 20.4272C14.3011 20.1546 14.4695 19.5443 14.1969 19.0639C13.9242 18.5836 13.3139 18.4152 12.8336 18.6879L5.87608 22.6367L1.92723 15.6792C1.65462 15.1989 1.04426 15.0305 0.563943 15.3031C0.0836291 15.5757 -0.0847477 16.1861 0.187863 16.6664L4.63031 24.4936ZM43.7049 1.52119C32.7389 -0.77401 23.9595 0.99522 17.3905 5.28788C10.8356 9.57127 6.58742 16.2977 4.53601 23.7341L6.46399 24.2659C8.41258 17.2023 12.4144 10.9287 18.4845 6.96211C24.5405 3.00476 32.7611 1.27399 43.2951 3.47877L43.7049 1.52119Z'
                  fill='currentColor'
                  className='text-muted-foreground'
                />
              </svg>
              <Badge className='mt-3 uppercase'>Save up to 10%</Badge>
            </span>
          </span>
        </Label>
      </div>
      <div className='mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:items-center'>
        {plans.map((plan, key) => {
          const price = isAnnual ? plan.annual : plan.monthly;
          return (
            <Card key={key}>
              <CardHeader className='text-center pb-2'>
                <CardTitle className='mb-7'>{plan.title}</CardTitle>
                <span className='font-bold text-5xl'>
                  {price === 0 ? "Free" : "€" + price}
                </span>
              </CardHeader>
              <CardDescription className='text-center'>
                {plan.subTitle}
              </CardDescription>
              <CardContent>
                <ul className='mt-7 space-y-2.5 text-sm'>
                  {plan.features.map((feature, key) => {
                    return (
                      <li key={key} className='flex space-x-2'>
                        <CheckIcon className='flex-shrink-0 mt-0.5 h-4 w-4' />
                        <span className='text-muted-foreground'>{feature}</span>
                      </li>
                    );
                  })}
                </ul>
              </CardContent>
              <CardFooter>
                <Button className='w-full' variant={"outline"}>
                  Sign up
                </Button>
              </CardFooter>
            </Card>
          );
        })}
      </div>
    </>
  );
};
