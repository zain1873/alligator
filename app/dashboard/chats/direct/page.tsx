import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { MessageCircle, Plus } from "lucide-react"
import { CreateChatDialog } from "@/components/create-chat-dialog"

export default function DirectMessagesPage() {
  const directChats = [
    {
      id: "sarah-johnson",
      name: "Sarah Johnson",
      initials: "SJ",
      avatar: "/placeholder.svg",
      lastMessage: "Can you review the homepage design when you have a moment?",
      lastActivity: "10 minutes ago",
      unreadCount: 2,
      online: true,
    },
    {
      id: "michael-brown",
      name: "Michael Brown",
      initials: "MB",
      avatar: "/placeholder.svg",
      lastMessage: "I've completed the API integration. Let's discuss next steps.",
      lastActivity: "30 minutes ago",
      unreadCount: 3,
      online: true,
    },
    {
      id: "emily-davis",
      name: "Emily Davis",
      initials: "ED",
      avatar: "/placeholder.svg",
      lastMessage: "When is our next team meeting scheduled?",
      lastActivity: "1 hour ago",
      unreadCount: 0,
      online: false,
    },
    {
      id: "alex-wilson",
      name: "Alex Wilson",
      initials: "AW",
      avatar: "/placeholder.svg",
      lastMessage: "Thanks for your help with the user testing session today.",
      lastActivity: "3 hours ago",
      unreadCount: 0,
      online: false,
    },
    {
      id: "lisa-chen",
      name: "Lisa Chen",
      initials: "LC",
      avatar: "/placeholder.svg",
      lastMessage: "Do you have the latest marketing materials?",
      lastActivity: "Yesterday",
      unreadCount: 0,
      online: true,
    },
  ]

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Direct Messages</h1>
          <p className="text-muted-foreground">Private conversations with your team members.</p>
        </div>
        <CreateChatDialog>
          <Button className="bg-green-600 hover:bg-green-700">
            <Plus className="mr-2 h-4 w-4" /> New Message
          </Button>
        </CreateChatDialog>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {directChats.map((chat) => (
          <Card key={chat.id} className="overflow-hidden">
            <CardHeader className="pb-3">
              <div className="flex items-start justify-between">
                <div className="flex items-center">
                  <Avatar className="h-10 w-10 mr-3">
                    <AvatarImage src={chat.avatar || "/placeholder.svg"} alt={chat.name} />
                    <AvatarFallback>{chat.initials}</AvatarFallback>
                  </Avatar>
                  <div>
                    <CardTitle className="text-lg font-semibold flex items-center">
                      {chat.name}
                      {chat.online && <span className="ml-2 h-2 w-2 rounded-full bg-green-500"></span>}
                    </CardTitle>
                    <CardDescription>{chat.online ? "Online" : `Last active ${chat.lastActivity}`}</CardDescription>
                  </div>
                </div>
                {chat.unreadCount > 0 && <Badge className="bg-red-500">{chat.unreadCount}</Badge>}
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <p className="text-sm text-muted-foreground line-clamp-2">{chat.lastMessage}</p>
                <Button variant="outline" className="w-full" asChild>
                  <a href={`/dashboard/chats/direct/${chat.id}`}>
                    <MessageCircle className="mr-2 h-4 w-4" />
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
