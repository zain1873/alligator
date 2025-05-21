"use client"

import * as React from "react"
import Link from "next/link"
import Image from "next/image"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import { ModeToggle } from "@/components/mode-toggle"
import { usePathname } from "next/navigation"

export function LandingNavbar() {
  const pathname = usePathname()
  const isHomePage = pathname === "/"

  return (
    <header className="px-4 lg:px-6 h-16 flex items-center border-b">
      <Link href="/" className="flex items-center gap-2">
        <Image src="/images/alligator-logo.png" alt="DoItAlligator Logo" width={32} height={32} />
        <span className="font-bold">DoItAlligator</span>
      </Link>
      <NavigationMenu className="hidden md:flex mx-6">
        <NavigationMenuList>
          <NavigationMenuItem>
            <NavigationMenuTrigger>Features</NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className="grid gap-3 p-4 md:w-[400px] lg:w-[500px] lg:grid-cols-2">
                <li className="row-span-3">
                  <NavigationMenuLink asChild>
                    <a
                      className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-green-500 to-green-700 p-6 no-underline outline-none focus:shadow-md"
                      href="/"
                    >
                      <Image src="/images/alligator-logo.png" alt="DoItAlligator Logo" width={32} height={32} />
                      <div className="mb-2 mt-4 text-lg font-medium text-white">DoItAlligator</div>
                      <p className="text-sm leading-tight text-white/90">
                        Manage tasks, collaborate with your team, and get things done.
                      </p>
                    </a>
                  </NavigationMenuLink>
                </li>
                <ListItem href="/features/task-management" title="Task Management">
                  Create, organize, and track your tasks with ease.
                </ListItem>
                <ListItem href="/features/collaboration" title="Collaboration">
                  Share task lists with your team and work together.
                </ListItem>
                <ListItem href="/features/templates" title="Templates">
                  Start quickly with pre-built task templates.
                </ListItem>
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <Link href="/pricing" legacyBehavior passHref>
              <NavigationMenuLink className={navigationMenuTriggerStyle()}>Pricing</NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <Link href="/about" legacyBehavior passHref>
              <NavigationMenuLink className={navigationMenuTriggerStyle()}>About</NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
      <div className="ml-auto flex items-center gap-2">
        <ModeToggle />
        <Link href="/login">
          <Button variant="ghost" size="sm">
            Log in
          </Button>
        </Link>
        <Link href="/signup">
          <Button size="sm" className="bg-green-600 hover:bg-green-700">
            Get DoItAlligator free
          </Button>
        </Link>
      </div>
    </header>
  )
}

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a"> & {
    title: string
  }
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className,
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">{children}</p>
        </a>
      </NavigationMenuLink>
    </li>
  )
})
ListItem.displayName = "ListItem"
