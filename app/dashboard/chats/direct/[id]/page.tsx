import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { AtSign, FileText, ImageIcon, Info, Paperclip, Send } from "lucide-react"
import { ChatMessage } from "@/components/chat-message"
import { MentionPopover } from "@/components/mention-popover"

interface DirectChatPageProps {
  params: {
    id: string
  }
}

export default function DirectChatPage({ params }: DirectChatPageProps) {
  const userId = params.id

  // This would come from your database in a real app
  const users = {
    "sarah-johnson": {
      id: "sarah-johnson",
      name: "Sarah Johnson",
      initials: "SJ",
      avatar: "/placeholder.svg",
      role: "Senior Designer",
      status: "online",
      lastActive: "Active now",
    },
    "michael-brown": {
      id: "michael-brown",
      name: "Michael Brown",
      initials: "MB",
      avatar: "/placeholder.svg",
      role: "Developer",
      status: "online",
      lastActive: "Active now",
    },
    "emily-davis": {
      id: "emily-davis",
      name: "Emily Davis",
      initials: "ED",
      avatar: "/placeholder.svg",
      role: "Content Writer",
      status: "offline",
      lastActive: "Last active 1 hour ago",
    },
    "alex-wilson": {
      id: "alex-wilson",
      name: "Alex Wilson",
      initials: "AW",
      avatar: "/placeholder.svg",
      role: "QA Tester",
      status: "offline",
      lastActive: "Last active 3 hours ago",
    },
    "lisa-chen": {
      id: "lisa-chen",
      name: "Lisa Chen",
      initials: "LC",
      avatar: "/placeholder.svg",
      role: "Marketing Specialist",
      status: "online",
      lastActive: "Active now",
    },
  }

  const user = users[userId as keyof typeof users] || {
    id: userId,
    name: "User",
    initials: "U",
    avatar: "/placeholder.svg",
    role: "Team Member",
    status: "offline",
    lastActive: "Unknown",
  }

  const currentUser = {
    id: "john-doe",
    name: "John Doe",
    initials: "JD",
    avatar: "/placeholder.svg",
  }

  // Generate dummy messages based on the user ID
  const messages = [
    {
      id: "1",
      sender: currentUser,
      content: `Hi ${user.name}! How's it going with the project?`,
      timestamp: "9:30 AM",
      attachments: [],
    },
    {
      id: "2",
      sender: user,
      content: "Hey John! It's going well. I've been working on the designs you requested.",
      timestamp: "9:35 AM",
      attachments: [],
    },
    {
      id: "3",
      sender: currentUser,
      content: "That's great to hear! When do you think you'll have something to show?",
      timestamp: "9:40 AM",
      attachments: [],
    },
    {
      id: "4",
      sender: user,
      content: "I should have the initial mockups ready by tomorrow. Here's a preview of what I've been working on.",
      timestamp: "9:45 AM",
      attachments: [
        {
          id: "a1",
          name: "design-preview.png",
          type: "image",
          url: "/placeholder.svg?height=300&width=400",
        },
      ],
    },
    {
      id: "5",
      sender: currentUser,
      content: "This looks fantastic! I love the direction you're taking with this.",
      timestamp: "9:50 AM",
      attachments: [],
    },
    {
      id: "6",
      sender: user,
      content:
        "Thanks! I'm also attaching the project brief with my notes for reference. Let me know if you have any questions.",
      timestamp: "9:55 AM",
      attachments: [
        {
          id: "a2",
          name: "project-brief.pdf",
          type: "file",
          url: "#",
        },
      ],
    },
    {
      id: "7",
      sender: currentUser,
      content: "Perfect, I'll take a look at it right away. Let's catch up again tomorrow after I review everything.",
      timestamp: "10:00 AM",
      attachments: [],
    },
    {
      id: "8",
      sender: user,
      content: "Sounds good! Talk to you tomorrow.",
      timestamp: "10:05 AM",
      attachments: [],
    },
  ]

  return (
    <div className="flex flex-col h-[calc(100vh-7rem)]">
      <div className="flex items-center justify-between border-b pb-4">
        <div className="flex items-center">
          <Avatar className="h-10 w-10 mr-3">
            <AvatarImage src={user.avatar || "/placeholder.svg"} alt={user.name} />
            <AvatarFallback>{user.initials}</AvatarFallback>
          </Avatar>
          <div>
            <div className="flex items-center gap-2">
              <h1 className="text-xl font-bold">{user.name}</h1>
              {user.status === "online" && <span className="h-2 w-2 rounded-full bg-green-500"></span>}
            </div>
            <p className="text-sm text-muted-foreground">{user.lastActive}</p>
          </div>
        </div>
        <Button variant="ghost" size="icon">
          <Info className="h-5 w-5" />
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-[1fr_250px] gap-6 flex-1 overflow-hidden mt-4">
        <div className="flex flex-col h-full">
          <div className="flex-1 overflow-y-auto pr-4 space-y-4">
            {messages.map((message) => (
              <ChatMessage key={message.id} message={message} isCurrentUser={message.sender.id === currentUser.id} />
            ))}
          </div>

          <div className="mt-4 border-t pt-4">
            <MentionPopover>
              <div className="flex items-end gap-2">
                <div className="flex-1 space-y-2">
                  <Input placeholder="Type your message..." className="min-h-[80px] resize-none py-4" multiline />
                  <div className="flex items-center gap-2">
                    <Button variant="ghost" size="icon" className="h-8 w-8 rounded-full">
                      <Paperclip className="h-4 w-4" />
                    </Button>
                    <Button variant="ghost" size="icon" className="h-8 w-8 rounded-full">
                      <ImageIcon className="h-4 w-4" />
                    </Button>
                    <Button variant="ghost" size="icon" className="h-8 w-8 rounded-full">
                      <AtSign className="h-4 w-4" />
                    </Button>
                    <Button variant="ghost" size="icon" className="h-8 w-8 rounded-full">
                      <FileText className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
                <Button className="bg-green-600 hover:bg-green-700">
                  <Send className="h-4 w-4" />
                  <span className="sr-only">Send</span>
                </Button>
              </div>
            </MentionPopover>
          </div>
        </div>

        <Card className="h-full overflow-hidden hidden md:block">
          <div className="p-4 border-b">
            <div className="flex flex-col items-center text-center">
              <Avatar className="h-20 w-20 mb-4">
                <AvatarImage src={user.avatar || "/placeholder.svg"} alt={user.name} />
                <AvatarFallback>{user.initials}</AvatarFallback>
              </Avatar>
              <h2 className="text-xl font-bold">{user.name}</h2>
              <p className="text-sm text-muted-foreground">{user.role}</p>
              <div className="flex items-center mt-2">
                <span
                  className={`h-2 w-2 rounded-full ${user.status === "online" ? "bg-green-500" : "bg-gray-300"} mr-2`}
                ></span>
                <span className="text-sm">{user.status === "online" ? "Online" : "Offline"}</span>
              </div>
            </div>
          </div>

          <div className="p-4 border-b">
            <h3 className="font-medium mb-2">Shared Files</h3>
            <div className="space-y-2">
              <div className="flex items-center justify-between p-2 border rounded-md">
                <div className="flex items-center gap-2">
                  <div className="h-8 w-8 bg-blue-100 rounded flex items-center justify-center">
                    <FileText className="h-4 w-4 text-blue-600" />
                  </div>
                  <div>
                    <p className="text-sm font-medium">project-brief.pdf</p>
                    <p className="text-xs text-muted-foreground">9:55 AM</p>
                  </div>
                </div>
                <Button variant="ghost" size="sm">
                  <FileText className="h-4 w-4" />
                </Button>
              </div>
              <div className="flex items-center justify-between p-2 border rounded-md">
                <div className="flex items-center gap-2">
                  <div className="h-8 w-8 bg-blue-100 rounded flex items-center justify-center">
                    <ImageIcon className="h-4 w-4 text-blue-600" />
                  </div>
                  <div>
                    <p className="text-sm font-medium">design-preview.png</p>
                    <p className="text-xs text-muted-foreground">9:45 AM</p>
                  </div>
                </div>
                <Button variant="ghost" size="sm">
                  <ImageIcon className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>

          <div className="p-4">
            <h3 className="font-medium mb-2">Shared Projects</h3>
            <div className="space-y-2">
              <div className="p-2 border rounded-md">
                <p className="text-sm font-medium">Website Redesign</p>
                <div className="flex items-center gap-2 mt-1">
                  <div className="h-1 w-full bg-gray-200 rounded-full overflow-hidden">
                    <div className="h-full bg-green-600 rounded-full" style={{ width: "75%" }}></div>
                  </div>
                  <span className="text-xs">75%</span>
                </div>
              </div>
              <div className="p-2 border rounded-md">
                <p className="text-sm font-medium">Mobile App</p>
                <div className="flex items-center gap-2 mt-1">
                  <div className="h-1 w-full bg-gray-200 rounded-full overflow-hidden">
                    <div className="h-full bg-green-600 rounded-full" style={{ width: "40%" }}></div>
                  </div>
                  <span className="text-xs">40%</span>
                </div>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </div>
  )
}
