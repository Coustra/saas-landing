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
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { CheckIcon, MinusIcon } from "lucide-react";
import { SectionWrapper } from "./SectionWrapper";

interface PlanFeature {
  type: string;
  features: {
    name: string;
    free: boolean;
    startup: boolean;
    team: boolean;
    enterprise: boolean;
  }[];
}

const planFeatures: PlanFeature[] = [
  {
    type: "Financial data",
    features: [
      {
        name: "Open/High/Low/Close",
        free: true,
        startup: true,
        team: true,
        enterprise: true,
      },
      {
        name: "Price-volume difference indicator	",
        free: true,
        startup: true,
        team: true,
        enterprise: true,
      },
    ],
  },
  {
    type: "On-chain data",
    features: [
      {
        name: "Network growth",
        free: true,
        startup: false,
        team: true,
        enterprise: true,
      },
      {
        name: "Average token age consumed",
        free: true,
        startup: false,
        team: true,
        enterprise: true,
      },
      {
        name: "Exchange flow",
        free: false,
        startup: false,
        team: true,
        enterprise: true,
      },
      {
        name: "Total ERC20 exchange funds flow",
        free: false,
        startup: false,
        team: true,
        enterprise: true,
      },
    ],
  },
  {
    type: "Social data",
    features: [
      {
        name: "Dev activity",
        free: false,
        startup: true,
        team: false,
        enterprise: true,
      },
      {
        name: "Topic search",
        free: true,
        startup: true,
        team: true,
        enterprise: true,
      },
      {
        name: "Relative social dominance",
        free: true,
        startup: true,
        team: false,
        enterprise: true,
      },
    ],
  },
];

export const PricingTable = () => {
  return (
    <>
      <div className='mt-20 lg:mt-32'>
        <div className='lg:text-center mb-10 lg:mb-20'>
          <h3 className='text-2xl font-semibold dark:text-white'>
            Compare plans
          </h3>
        </div>
        <Table className='hidden lg:table'>
          <TableHeader>
            <TableRow className='bg-muted hover:bg-muted'>
              <TableHead className='w-3/12 text-primary'>Plans</TableHead>
              <TableHead className='w-2/12 text-primary text-lg font-medium text-center'>
                Free
              </TableHead>
              <TableHead className='w-2/12 text-primary text-lg font-medium text-center'>
                Startup
              </TableHead>
              <TableHead className='w-2/12 text-primary text-lg font-medium text-center'>
                Team
              </TableHead>
              <TableHead className='w-2/12 text-primary text-lg font-medium text-center'>
                Enterprise
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {planFeatures.map((featureType) => (
              <>
                <TableRow className='bg-muted/50' key={featureType.type}>
                  <TableCell colSpan={5} className='font-bold'>
                    {featureType.type}
                  </TableCell>
                </TableRow>
                {featureType.features.map((feature) => (
                  <TableRow
                    key={feature.name}
                    className='text-muted-foreground'
                  >
                    <TableCell>{feature.name}</TableCell>
                    <TableCell>
                      <div className='mx-auto w-min'>
                        {feature.free ? (
                          <CheckIcon className='h-5 w-5' />
                        ) : (
                          <MinusIcon className='h-5 w-5' />
                        )}
                      </div>
                    </TableCell>
                    <TableCell>
                      <div className='mx-auto w-min'>
                        {feature.startup ? (
                          <CheckIcon className='h-5 w-5' />
                        ) : (
                          <MinusIcon className='h-5 w-5' />
                        )}
                      </div>
                    </TableCell>
                    <TableCell>
                      <div className='mx-auto w-min'>
                        {feature.team ? (
                          <CheckIcon className='h-5 w-5' />
                        ) : (
                          <MinusIcon className='h-5 w-5' />
                        )}
                      </div>
                    </TableCell>
                    <TableCell>
                      <div className='mx-auto w-min'>
                        {feature.enterprise ? (
                          <CheckIcon className='h-5 w-5' />
                        ) : (
                          <MinusIcon className='h-5 w-5' />
                        )}
                      </div>
                    </TableCell>
                  </TableRow>
                ))}
              </>
            ))}
          </TableBody>
        </Table>

        <div className='space-y-24 lg:hidden'>
          <section>
            <div className='mb-4'>
              <h4 className='text-xl font-medium'>Free</h4>
            </div>
            <Table>
              {planFeatures.map((featureType) => (
                <TableBody>
                  <TableRow
                    key={featureType.type}
                    className='bg-muted hover:bg-muted'
                  >
                    <TableCell
                      colSpan={2}
                      className='w-10/12 text-primary font-bold'
                    >
                      {featureType.type}
                    </TableCell>
                  </TableRow>
                  {featureType.features.map((feature) => (
                    <TableRow
                      className='text-muted-foreground'
                      key={feature.name}
                    >
                      <TableCell className='w-11/12'>{feature.name}</TableCell>
                      <TableCell className='text-right'>
                        {feature.enterprise ? (
                          <CheckIcon className='h-5 w-5' />
                        ) : (
                          <MinusIcon className='h-5 w-5' />
                        )}
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              ))}
            </Table>
          </section>
          <section>
            <div className='mb-4'>
              <h4 className='text-xl font-medium'>Startup</h4>
            </div>
            <Table>
              {planFeatures.map((featureType) => (
                <TableBody>
                  <TableRow
                    key={featureType.type}
                    className='bg-muted hover:bg-muted'
                  >
                    <TableCell
                      colSpan={2}
                      className='w-10/12 text-primary font-bold'
                    >
                      {featureType.type}
                    </TableCell>
                  </TableRow>
                  {featureType.features.map((feature) => (
                    <TableRow
                      className='text-muted-foreground'
                      key={feature.name}
                    >
                      <TableCell className='w-11/12'>{feature.name}</TableCell>
                      <TableCell className='text-right'>
                        {feature.startup ? (
                          <CheckIcon className='h-5 w-5' />
                        ) : (
                          <MinusIcon className='h-5 w-5' />
                        )}
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              ))}
            </Table>
          </section>
          <section>
            <div className='mb-4'>
              <h4 className='text-xl font-medium'>Team</h4>
            </div>
            <Table>
              {planFeatures.map((featureType) => (
                <TableBody>
                  <TableRow
                    key={featureType.type}
                    className='bg-muted hover:bg-muted'
                  >
                    <TableCell
                      colSpan={2}
                      className='w-10/12 text-primary font-bold'
                    >
                      {featureType.type}
                    </TableCell>
                  </TableRow>
                  {featureType.features.map((feature) => (
                    <TableRow
                      className='text-muted-foreground'
                      key={feature.name}
                    >
                      <TableCell className='w-11/12'>{feature.name}</TableCell>
                      <TableCell className='text-right'>
                        {feature.team ? (
                          <CheckIcon className='h-5 w-5' />
                        ) : (
                          <MinusIcon className='h-5 w-5' />
                        )}
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              ))}
            </Table>
          </section>
          <section>
            <div className='mb-4'>
              <h4 className='text-xl font-medium'>Enterprise</h4>
            </div>
            <Table>
              {planFeatures.map((featureType) => (
                <TableBody>
                  <TableRow
                    key={featureType.type}
                    className='bg-muted hover:bg-muted'
                  >
                    <TableCell
                      colSpan={2}
                      className='w-10/12 text-primary font-bold'
                    >
                      {featureType.type}
                    </TableCell>
                  </TableRow>
                  {featureType.features.map((feature) => (
                    <TableRow
                      className='text-muted-foreground'
                      key={feature.name}
                    >
                      <TableCell className='w-11/12'>{feature.name}</TableCell>
                      <TableCell className='text-right'>
                        {feature.enterprise ? (
                          <CheckIcon className='h-5 w-5' />
                        ) : (
                          <MinusIcon className='h-5 w-5' />
                        )}
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              ))}
            </Table>
          </section>
        </div>
      </div>
    </>
  );
};
