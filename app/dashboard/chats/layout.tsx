import type React from "react"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import Link from "next/link"

export default function ChatsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="space-y-6">
      <Tabs defaultValue="all" className="w-full">
        <div className="border-b mb-6">
          <TabsList className="w-full justify-start rounded-none border-b bg-transparent p-0">
            <TabsTrigger
              value="all"
              className="rounded-none border-b-2 border-transparent px-4 py-3 data-[state=active]:border-primary data-[state=active]:bg-transparent data-[state=active]:shadow-none"
              asChild
            >
              <Link href="/dashboard/chats">All Chats</Link>
            </TabsTrigger>
            <TabsTrigger
              value="team"
              className="rounded-none border-b-2 border-transparent px-4 py-3 data-[state=active]:border-primary data-[state=active]:bg-transparent data-[state=active]:shadow-none"
              asChild
            >
              <Link href="/dashboard/chats/team">Team Chats</Link>
            </TabsTrigger>
          </TabsList>
        </div>
      </Tabs>
      {children}
    </div>
  );
}
