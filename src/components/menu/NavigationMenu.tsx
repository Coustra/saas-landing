import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

import { Button } from "../ui/button";
import { Menu } from "lucide-react";
import { Separator } from "@/components/ui/separator";
import { ThemeToggle } from "../ui/ThemeToggler";
import { NavLink } from "../ui/NavLink";

export const NavigationMenu = () => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant={"ghost"} size={"icon"}>
          <Menu />
        </Button>
      </DialogTrigger>
      <DialogContent className='w-[300px] top-[140px] -right-[45%] mx-auto rounded-lg flex flex-col gap-4'>
        <nav className='flex flex-col gap-4'>
          <NavLink href={"/"}>Home</NavLink>
          <NavLink href={"#features"}>Features</NavLink>
          <NavLink href={"/pricing"}>Pricing</NavLink>
        </nav>
        <Separator />
        <nav className='flex flex-col gap-4'>
          <div className='flex justify-between items-center'>
            <p className='text-sm text-muted-foreground'>Theme</p>
            <ThemeToggle />
          </div>
          <NavLink href={"#"}>Login</NavLink>
        </nav>
      </DialogContent>
    </Dialog>
  );
};
