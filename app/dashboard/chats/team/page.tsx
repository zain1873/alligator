import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { MessageSquare, Plus, Users } from "lucide-react"
import { CreateChatDialog } from "@/components/create-chat-dialog"

export default function TeamChatsPage() {
  const teamChats = [
    {
      id: "design-team",
      name: "Design Team Chat",
      team: "Design Team",
      members: 6,
      lastMessage: "Sarah: I've uploaded the new wireframes for review",
      lastActivity: "10 minutes ago",
      unreadCount: 3,
    },
    {
      id: "development-team",
      name: "Development Team Chat",
      team: "Development",
      members: 8,
      lastMessage: "Michael: The API integration is complete",
      lastActivity: "1 hour ago",
      unreadCount: 0,
    },
    {
      id: "marketing-team",
      name: "Marketing Team Chat",
      team: "Marketing",
      members: 5,
      lastMessage: "Emily: Let's discuss the Q3 campaign tomorrow",
      lastActivity: "3 hours ago",
      unreadCount: 0,
    },
    {
      id: "design-weekly",
      name: "Design Weekly Updates",
      team: "Design Team",
      members: 6,
      lastMessage: "John: Here's the summary of this week's progress",
      lastActivity: "Yesterday",
      unreadCount: 0,
    },
    {
      id: "dev-standups",
      name: "Development Standups",
      team: "Development",
      members: 8,
      lastMessage: "Alex: I'll be working on the authentication flow today",
      lastActivity: "Yesterday",
      unreadCount: 0,
    },
  ]

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Team Chats</h1>
          <p className="text-muted-foreground">Communicate with your team members in dedicated team chat rooms.</p>
        </div>
        <CreateChatDialog>
          <Button className="bg-green-600 hover:bg-green-700">
            <Plus className="mr-2 h-4 w-4" /> New Team Chat
          </Button>
        </CreateChatDialog>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {teamChats.map((chat) => (
          <Card key={chat.id} className="overflow-hidden">
            <CardHeader className="pb-3">
              <div className="flex items-start justify-between">
                <div>
                  <CardTitle className="text-lg font-semibold">{chat.name}</CardTitle>
                  <CardDescription className="flex items-center mt-1">
                    <Users className="h-3.5 w-3.5 mr-1" />
                    <span>
                      {chat.team} • {chat.members} members
                    </span>
                  </CardDescription>
                </div>
                {chat.unreadCount > 0 && <Badge className="bg-red-500">{chat.unreadCount}</Badge>}
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <Avatar className="h-8 w-8">
                    <AvatarImage src="/placeholder.svg" alt="User" />
                    <AvatarFallback>{chat.lastMessage.split(":")[0].charAt(0)}</AvatarFallback>
                  </Avatar>
                  <div className="space-y-1">
                    <p className="text-sm text-muted-foreground line-clamp-2">{chat.lastMessage}</p>
                    <p className="text-xs text-muted-foreground">{chat.lastActivity}</p>
                  </div>
                </div>
                <Button variant="outline" className="w-full" asChild>
                  <a href={`/dashboard/chats/team/${chat.id}`}>
                    <MessageSquare className="mr-2 h-4 w-4" />
                    Open Chat
                  </a>
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}
