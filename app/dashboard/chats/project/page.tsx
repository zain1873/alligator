import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { FileText, MessageSquare, Plus } from "lucide-react"
import { CreateChatDialog } from "@/components/create-chat-dialog"

export default function ProjectChatsPage() {
  const projectChats = [
    {
      id: "website-redesign",
      name: "Website Redesign Discussion",
      project: "Website Redesign",
      members: 5,
      lastMessage: "John: Let's review the homepage design tomorrow",
      lastActivity: "30 minutes ago",
      unreadCount: 2,
    },
    {
      id: "mobile-app",
      name: "Mobile App Development",
      project: "Mobile App",
      members: 6,
      lastMessage: "Sarah: The API integration is almost complete",
      lastActivity: "2 hours ago",
      unreadCount: 0,
    },
    {
      id: "marketing-campaign",
      name: "Q3 Marketing Campaign",
      project: "Marketing Campaign",
      members: 4,
      lastMessage: "Emily: I've uploaded the draft materials for review",
      lastActivity: "Yesterday",
      unreadCount: 0,
    },
    {
      id: "website-launch",
      name: "Website Launch Planning",
      project: "Website Redesign",
      members: 7,
      lastMessage: "Michael: We need to finalize the launch date",
      lastActivity: "2 days ago",
      unreadCount: 0,
    },
  ]

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Project Chats</h1>
          <p className="text-muted-foreground">Discuss project-specific topics with your team members.</p>
        </div>
        <CreateChatDialog>
          <Button className="bg-green-600 hover:bg-green-700">
            <Plus className="mr-2 h-4 w-4" /> New Project Chat
          </Button>
        </CreateChatDialog>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {projectChats.map((chat) => (
          <Card key={chat.id} className="overflow-hidden">
            <CardHeader className="pb-3">
              <div className="flex items-start justify-between">
                <div>
                  <CardTitle className="text-lg font-semibold">{chat.name}</CardTitle>
                  <CardDescription className="flex items-center mt-1">
                    <FileText className="h-3.5 w-3.5 mr-1" />
                    <span>
                      {chat.project} • {chat.members} members
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
                  <a href={`/dashboard/chats/project/${chat.id}`}>
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
