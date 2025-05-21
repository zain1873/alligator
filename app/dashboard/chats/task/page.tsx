import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { CheckSquare, MessageSquare, Plus } from "lucide-react"
import { CreateChatDialog } from "@/components/create-chat-dialog"

export default function TaskChatsPage() {
  const taskChats = [
    {
      id: "homepage-design",
      name: "Homepage Design Discussion",
      task: "Homepage Design",
      project: "Website Redesign",
      members: 3,
      lastMessage: "Sarah: I've updated the hero section based on feedback",
      lastActivity: "1 hour ago",
      unreadCount: 0,
    },
    {
      id: "api-integration",
      name: "API Integration Chat",
      task: "API Integration",
      project: "Mobile App",
      members: 4,
      lastMessage: "Michael: We need to fix the authentication flow",
      lastActivity: "3 hours ago",
      unreadCount: 0,
    },
    {
      id: "user-testing",
      name: "User Testing Feedback",
      task: "User Testing",
      project: "Website Redesign",
      members: 5,
      lastMessage: "Emily: Here's a summary of today's user testing session",
      lastActivity: "Yesterday",
      unreadCount: 0,
    },
  ]

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Task Chats</h1>
          <p className="text-muted-foreground">Collaborate on specific tasks with focused discussions.</p>
        </div>
        <CreateChatDialog>
          <Button className="bg-green-600 hover:bg-green-700">
            <Plus className="mr-2 h-4 w-4" /> New Task Chat
          </Button>
        </CreateChatDialog>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {taskChats.map((chat) => (
          <Card key={chat.id} className="overflow-hidden">
            <CardHeader className="pb-3">
              <div className="flex items-start justify-between">
                <div>
                  <CardTitle className="text-lg font-semibold">{chat.name}</CardTitle>
                  <CardDescription className="flex items-center mt-1">
                    <CheckSquare className="h-3.5 w-3.5 mr-1" />
                    <span>
                      {chat.task} • {chat.project}
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
                  <a href={`/dashboard/chats/task/${chat.id}`}>
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
