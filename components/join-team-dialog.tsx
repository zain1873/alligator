"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Search, Users } from "lucide-react"

interface JoinTeamDialogProps {
  children: React.ReactNode
}

export function JoinTeamDialog({ children }: JoinTeamDialogProps) {
  const [open, setOpen] = useState(false)
  const [searchTerm, setSearchTerm] = useState("")

  // Dummy teams data
  const teams = [
    {
      id: "design",
      name: "Design Team",
      description: "UI/UX design and brand identity",
      members: 6,
      avatar: "/placeholder.svg",
    },
    {
      id: "development",
      name: "Development",
      description: "Frontend and backend development",
      members: 8,
      avatar: "/placeholder.svg",
    },
    {
      id: "marketing",
      name: "Marketing",
      description: "Marketing campaigns and content creation",
      members: 5,
      avatar: "/placeholder.svg",
    },
    {
      id: "product",
      name: "Product",
      description: "Product management and roadmap planning",
      members: 4,
      avatar: "/placeholder.svg",
    },
    {
      id: "sales",
      name: "Sales",
      description: "Sales and customer relationship management",
      members: 7,
      avatar: "/placeholder.svg",
    },
    {
      id: "support",
      name: "Customer Support",
      description: "Customer support and success",
      members: 5,
      avatar: "/placeholder.svg",
    },
  ]

  const filteredTeams = teams.filter(
    (team) =>
      team.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      team.description.toLowerCase().includes(searchTerm.toLowerCase()),
  )

  const handleJoinTeam = (teamId: string) => {
    // In a real app, this would send a request to join the team
    console.log(`Requested to join team: ${teamId}`)
    setOpen(false)
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className="sm:max-w-[600px]">
        <DialogHeader>
          <DialogTitle>Join a Team</DialogTitle>
          <DialogDescription>
            Browse available teams and request to join. Team admins will need to approve your request.
          </DialogDescription>
        </DialogHeader>

        <div className="relative my-4">
          <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
          <Input
            placeholder="Search teams..."
            className="pl-10"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>

        <div className="max-h-[400px] overflow-y-auto space-y-4">
          {filteredTeams.length > 0 ? (
            filteredTeams.map((team) => (
              <div key={team.id} className="flex items-start gap-4 p-4 border rounded-lg">
                <Avatar className="h-12 w-12">
                  <AvatarImage src={team.avatar || "/placeholder.svg"} alt={team.name} />
                  <AvatarFallback>{team.name.charAt(0)}</AvatarFallback>
                </Avatar>
                <div className="flex-1">
                  <div className="flex items-center justify-between">
                    <h3 className="font-medium">{team.name}</h3>
                    <Badge variant="outline" className="flex items-center gap-1">
                      <Users className="h-3 w-3" />
                      <span>{team.members}</span>
                    </Badge>
                  </div>
                  <p className="text-sm text-muted-foreground mt-1">{team.description}</p>
                </div>
                <Button className="bg-green-600 hover:bg-green-700" onClick={() => handleJoinTeam(team.id)}>
                  Join
                </Button>
              </div>
            ))
          ) : (
            <div className="text-center p-4 text-muted-foreground">No teams found matching your search.</div>
          )}
        </div>

        <DialogFooter>
          <Button variant="outline" onClick={() => setOpen(false)}>
            Cancel
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
