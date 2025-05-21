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
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { X } from "lucide-react"
import { cn } from "@/lib/utils"

interface CreateChatDialogProps {
  children: React.ReactNode
}

export function CreateChatDialog({ children }: CreateChatDialogProps) {
  const [open, setOpen] = useState(false)
  const [selectedMembers, setSelectedMembers] = useState<string[]>([])
  const [chatType, setChatType] = useState("team")

  const members = [
    { id: "john-doe", name: "John Doe", initials: "JD" },
    { id: "sarah-johnson", name: "Sarah Johnson", initials: "SJ" },
    { id: "michael-brown", name: "Michael Brown", initials: "MB" },
    { id: "emily-davis", name: "Emily Davis", initials: "ED" },
    { id: "alex-wilson", name: "Alex Wilson", initials: "AW" },
    { id: "lisa-chen", name: "Lisa Chen", initials: "LC" },
  ]

  const teams = [
    { id: "design", name: "Design Team" },
    { id: "development", name: "Development" },
    { id: "marketing", name: "Marketing" },
  ]

  const projects = [
    { id: "website-redesign", name: "Website Redesign" },
    { id: "mobile-app", name: "Mobile App" },
    { id: "marketing-campaign", name: "Marketing Campaign" },
  ]

  const tasks = [
    { id: "homepage-design", name: "Homepage Design", project: "Website Redesign" },
    { id: "api-integration", name: "API Integration", project: "Mobile App" },
    { id: "user-testing", name: "User Testing", project: "Website Redesign" },
    { id: "marketing-materials", name: "Marketing Materials", project: "Marketing Campaign" },
  ]

  const toggleMember = (memberId: string) => {
    if (selectedMembers.includes(memberId)) {
      setSelectedMembers(selectedMembers.filter((id) => id !== memberId))
    } else {
      setSelectedMembers([...selectedMembers, memberId])
    }
  }

  const handleCreateChat = () => {
    // In a real app, this would create a new chat
    console.log(`Creating new ${chatType} chat with members:`, selectedMembers)
    setOpen(false)
    // Reset state
    setSelectedMembers([])
    setChatType("team")
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className="sm:max-w-[600px]">
        <DialogHeader>
          <DialogTitle>Create New Chat</DialogTitle>
          <DialogDescription>
            Start a new conversation with your team members, for a project, or about a specific task.
          </DialogDescription>
        </DialogHeader>
        <Tabs defaultValue="team" className="w-full" onValueChange={(value) => setChatType(value)}>
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="team">Team Chat</TabsTrigger>
            <TabsTrigger value="project">Project Chat</TabsTrigger>
            <TabsTrigger value="task">Task Chat</TabsTrigger>
          </TabsList>
          <TabsContent value="team" className="space-y-4 mt-4">
            <div className="space-y-2">
              <Label htmlFor="team-chat-name">Chat Name</Label>
              <Input id="team-chat-name" placeholder="E.g., Design Team Updates" />
            </div>

            <div className="space-y-2">
              <Label>Team</Label>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Select team" />
                </SelectTrigger>
                <SelectContent>
                  {teams.map((team) => (
                    <SelectItem key={team.id} value={team.id}>
                      {team.name}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label>Add Team Members</Label>
              <div className="border rounded-md p-4">
                <div className="flex flex-wrap gap-2 mb-4">
                  {selectedMembers.length > 0 ? (
                    selectedMembers.map((memberId) => {
                      const member = members.find((m) => m.id === memberId)
                      if (!member) return null

                      return (
                        <Badge key={memberId} variant="secondary" className="flex items-center gap-1">
                          <Avatar className="h-4 w-4">
                            <AvatarFallback className="text-[10px]">{member.initials}</AvatarFallback>
                          </Avatar>
                          <span>{member.name}</span>
                          <Button
                            variant="ghost"
                            size="icon"
                            className="h-4 w-4 ml-1 p-0"
                            onClick={() => toggleMember(memberId)}
                          >
                            <X className="h-3 w-3" />
                          </Button>
                        </Badge>
                      )
                    })
                  ) : (
                    <div className="text-sm text-muted-foreground">No members selected</div>
                  )}
                </div>

                <div className="grid grid-cols-2 gap-2">
                  {members.map((member) => (
                    <div
                      key={member.id}
                      className={cn(
                        "flex items-center gap-2 p-2 rounded-md cursor-pointer hover:bg-muted",
                        selectedMembers.includes(member.id) && "bg-muted",
                      )}
                      onClick={() => toggleMember(member.id)}
                    >
                      <Avatar className="h-8 w-8">
                        <AvatarFallback>{member.initials}</AvatarFallback>
                      </Avatar>
                      <span className="text-sm">{member.name}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="project" className="space-y-4 mt-4">
            <div className="space-y-2">
              <Label htmlFor="project-chat-name">Chat Name</Label>
              <Input id="project-chat-name" placeholder="E.g., Website Redesign Discussion" />
            </div>

            <div className="space-y-2">
              <Label>Project</Label>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Select project" />
                </SelectTrigger>
                <SelectContent>
                  {projects.map((project) => (
                    <SelectItem key={project.id} value={project.id}>
                      {project.name}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label>Add Project Members</Label>
              <div className="border rounded-md p-4">
                <div className="flex flex-wrap gap-2 mb-4">
                  {selectedMembers.length > 0 ? (
                    selectedMembers.map((memberId) => {
                      const member = members.find((m) => m.id === memberId)
                      if (!member) return null

                      return (
                        <Badge key={memberId} variant="secondary" className="flex items-center gap-1">
                          <Avatar className="h-4 w-4">
                            <AvatarFallback className="text-[10px]">{member.initials}</AvatarFallback>
                          </Avatar>
                          <span>{member.name}</span>
                          <Button
                            variant="ghost"
                            size="icon"
                            className="h-4 w-4 ml-1 p-0"
                            onClick={() => toggleMember(memberId)}
                          >
                            <X className="h-3 w-3" />
                          </Button>
                        </Badge>
                      )
                    })
                  ) : (
                    <div className="text-sm text-muted-foreground">No members selected</div>
                  )}
                </div>

                <div className="grid grid-cols-2 gap-2">
                  {members.map((member) => (
                    <div
                      key={member.id}
                      className={cn(
                        "flex items-center gap-2 p-2 rounded-md cursor-pointer hover:bg-muted",
                        selectedMembers.includes(member.id) && "bg-muted",
                      )}
                      onClick={() => toggleMember(member.id)}
                    >
                      <Avatar className="h-8 w-8">
                        <AvatarFallback>{member.initials}</AvatarFallback>
                      </Avatar>
                      <span className="text-sm">{member.name}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="task" className="space-y-4 mt-4">
            <div className="space-y-2">
              <Label htmlFor="task-chat-name">Chat Name</Label>
              <Input id="task-chat-name" placeholder="E.g., Homepage Design Discussion" />
            </div>

            <div className="space-y-2">
              <Label>Task</Label>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Select task" />
                </SelectTrigger>
                <SelectContent>
                  {tasks.map((task) => (
                    <SelectItem key={task.id} value={task.id}>
                      {task.name} ({task.project})
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label>Add Task Members</Label>
              <div className="border rounded-md p-4">
                <div className="flex flex-wrap gap-2 mb-4">
                  {selectedMembers.length > 0 ? (
                    selectedMembers.map((memberId) => {
                      const member = members.find((m) => m.id === memberId)
                      if (!member) return null

                      return (
                        <Badge key={memberId} variant="secondary" className="flex items-center gap-1">
                          <Avatar className="h-4 w-4">
                            <AvatarFallback className="text-[10px]">{member.initials}</AvatarFallback>
                          </Avatar>
                          <span>{member.name}</span>
                          <Button
                            variant="ghost"
                            size="icon"
                            className="h-4 w-4 ml-1 p-0"
                            onClick={() => toggleMember(memberId)}
                          >
                            <X className="h-3 w-3" />
                          </Button>
                        </Badge>
                      )
                    })
                  ) : (
                    <div className="text-sm text-muted-foreground">No members selected</div>
                  )}
                </div>

                <div className="grid grid-cols-2 gap-2">
                  {members.map((member) => (
                    <div
                      key={member.id}
                      className={cn(
                        "flex items-center gap-2 p-2 rounded-md cursor-pointer hover:bg-muted",
                        selectedMembers.includes(member.id) && "bg-muted",
                      )}
                      onClick={() => toggleMember(member.id)}
                    >
                      <Avatar className="h-8 w-8">
                        <AvatarFallback>{member.initials}</AvatarFallback>
                      </Avatar>
                      <span className="text-sm">{member.name}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </TabsContent>
        </Tabs>
        <DialogFooter>
          <Button variant="outline" onClick={() => setOpen(false)}>
            Cancel
          </Button>
          <Button type="submit" className="bg-green-600 hover:bg-green-700" onClick={handleCreateChat}>
            Create Chat
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
