"use client";

import * as React from "react";
import { Monitor, Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export function ThemeToggle() {
  const { setTheme, theme, themes } = useTheme();

  return (
    <div className='flex flex-row items-center gap-1 border rounded-full p-1'>
      {themes.map((themeName) => (
        <Button
          key={themeName}
          variant='ghost'
          size='icon'
          className={cn(
            "rounded-full w-8 h-8",
            theme === themeName && "bg-accent"
          )}
          onClick={() => setTheme(themeName)}
        >
          {themeName === "system" ? (
            <Monitor className='h-4 w-4' />
          ) : themeName === "dark" ? (
            <Moon className='h-4 w-4' />
          ) : (
            <Sun className='h-4 w-4' />
          )}
        </Button>
      ))}
    </div>
  );
}
