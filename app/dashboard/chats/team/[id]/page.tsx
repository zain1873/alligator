import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Separator } from "@/components/ui/separator"
import { AtSign, FileText, ImageIcon, Info, Paperclip, Plus, Send, Users } from "lucide-react"
import { ChatMessage } from "@/components/chat-message"
import { MentionPopover } from "@/components/mention-popover"

interface TeamChatPageProps {
  params: {
    id: string
  }
}

export default function TeamChatPage({ params }: TeamChatPageProps) {
  const teamId = params.id

  // This would come from your database in a real app
  const teams = {
    "design-team": {
      id: "design-team",
      name: "Design Team Updates",
      team: "Design Team",
      description: "General updates and discussions for the design team",
      members: [
        { id: "john-doe", name: "John Doe", initials: "JD", avatar: "/placeholder.svg", role: "Team Lead" },
        {
          id: "sarah-johnson",
          name: "Sarah Johnson",
          initials: "SJ",
          avatar: "/placeholder.svg",
          role: "Senior Designer",
        },
        { id: "michael-brown", name: "Michael Brown", initials: "MB", avatar: "/placeholder.svg", role: "Developer" },
        { id: "emily-davis", name: "Emily Davis", initials: "ED", avatar: "/placeholder.svg", role: "Content Writer" },
        { id: "alex-wilson", name: "Alex Wilson", initials: "AW", avatar: "/placeholder.svg", role: "QA Tester" },
      ],
    },
    development: {
      id: "development",
      name: "Development Standup",
      team: "Development",
      description: "Daily standup and updates for the development team",
      members: [
        { id: "john-doe", name: "John Doe", initials: "JD", avatar: "/placeholder.svg", role: "Team Lead" },
        { id: "michael-brown", name: "Michael Brown", initials: "MB", avatar: "/placeholder.svg", role: "Developer" },
        { id: "alex-wilson", name: "Alex Wilson", initials: "AW", avatar: "/placeholder.svg", role: "QA Tester" },
        { id: "lisa-chen", name: "Lisa Chen", initials: "LC", avatar: "/placeholder.svg", role: "UI Designer" },
      ],
    },
    marketing: {
      id: "marketing",
      name: "Marketing Campaign",
      team: "Marketing",
      description: "Discussions about ongoing marketing campaigns",
      members: [
        { id: "john-doe", name: "John Doe", initials: "JD", avatar: "/placeholder.svg", role: "Team Lead" },
        { id: "emily-davis", name: "Emily Davis", initials: "ED", avatar: "/placeholder.svg", role: "Content Writer" },
        {
          id: "lisa-chen",
          name: "Lisa Chen",
          initials: "LC",
          avatar: "/placeholder.svg",
          role: "Marketing Specialist",
        },
      ],
    },
  }

  const team = teams[teamId as keyof typeof teams] || {
    id: teamId,
    name: "Team Chat",
    team: "Unknown Team",
    description: "Team discussion",
    members: [{ id: "john-doe", name: "John Doe", initials: "JD", avatar: "/placeholder.svg", role: "Team Member" }],
  }

  const currentUser = {
    id: "john-doe",
    name: "John Doe",
    initials: "JD",
    avatar: "/placeholder.svg",
  }

  // Generate dummy messages based on the team ID
  const messages = [
    {
      id: "1",
      sender: currentUser,
      content: `Welcome to the ${team.name} chat! Let's use this space to collaborate and share updates.`,
      timestamp: "9:30 AM",
      attachments: [],
    },
    {
      id: "2",
      sender: team.members.find((m) => m.id === "sarah-johnson") || team.members[0],
      content: "Good morning everyone! I've been working on the new design system. I'll share my progress later today.",
      timestamp: "9:35 AM",
      attachments: [],
    },
    {
      id: "3",
      sender: team.members.find((m) => m.id === "michael-brown") || team.members[0],
      content: "Looking forward to seeing that, Sarah. I've been working on the backend API for the new features.",
      timestamp: "9:40 AM",
      attachments: [],
    },
    {
      id: "4",
      sender: team.members.find((m) => m.id === "emily-davis") || team.members[0],
      content: "I've finished the content for the homepage. @SarahJohnson can you review it when you have time?",
      timestamp: "9:45 AM",
      attachments: [
        {
          id: "a1",
          name: "homepage-content.docx",
          type: "file",
          url: "#",
        },
      ],
    },
    {
      id: "5",
      sender: team.members.find((m) => m.id === "sarah-johnson") || team.members[0],
      content: "Sure, Emily! I'll take a look at it this afternoon. Here's a preview of the design system I mentioned.",
      timestamp: "9:50 AM",
      attachments: [
        {
          id: "a2",
          name: "design-system-preview.png",
          type: "image",
          url: "/placeholder.svg?height=300&width=400",
        },
      ],
    },
    {
      id: "6",
      sender: team.members.find((m) => m.id === "alex-wilson") || team.members[0],
      content:
        "That looks great, Sarah! I've been testing the latest build and found a few minor issues. I'll create tickets for them.",
      timestamp: "9:55 AM",
      attachments: [],
    },
    {
      id: "7",
      sender: currentUser,
      content:
        "Thanks for the updates everyone! Let's have a quick team meeting at 2 PM to discuss our progress and next steps.",
      timestamp: "10:00 AM",
      attachments: [],
    },
    {
      id: "8",
      sender: team.members.find((m) => m.id === "lisa-chen") || team.members[0],
      content: "Sounds good! I'll prepare a brief update on the marketing materials.",
      timestamp: "10:05 AM",
      attachments: [],
    },
  ]

  return (
    <div className="flex flex-col h-[calc(100vh-7rem)]">
      <div className="flex items-center justify-between border-b pb-4">
        <div className="flex items-center">
          <h1 className="text-2xl font-bold">{team.name}</h1>
          <Separator orientation="vertical" className="mx-4 h-6" />
          <div className="flex items-center text-muted-foreground">
            <Users className="h-4 w-4 mr-2" />
            <span>{team.team}</span>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <Button variant="outline" size="sm">
            <Plus className="h-4 w-4 mr-2" />
            Add Members
          </Button>
          <div className="flex -space-x-2">
            {team.members.slice(0, 3).map((member) => (
              <Avatar key={member.id} className="h-8 w-8 border-2 border-background">
                <AvatarImage src={member.avatar || "/placeholder.svg"} alt={member.name} />
                <AvatarFallback>{member.initials}</AvatarFallback>
              </Avatar>
            ))}
            {team.members.length > 3 && (
              <div className="h-8 w-8 rounded-full bg-muted flex items-center justify-center text-xs border-2 border-background">
                +{team.members.length - 3}
              </div>
            )}
          </div>
          <Button variant="ghost" size="icon">
            <Info className="h-5 w-5" />
          </Button>
        </div>
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

        <Card className="h-full overflow-hidden">
          <CardHeader>
            <CardTitle className="text-lg">Team Details</CardTitle>
          </CardHeader>
          <CardContent className="p-0">
            <div className="p-4 border-b">
              <h3 className="text-sm font-medium mb-1">Description</h3>
              <p className="text-sm text-muted-foreground">{team.description}</p>
            </div>
            <div className="p-4 border-b">
              <h3 className="text-sm font-medium mb-2">Team Members</h3>
              <div className="space-y-2">
                {team.members.map((member) => (
                  <div key={member.id} className="flex items-center gap-3 p-2 rounded-md hover:bg-muted">
                    <Avatar className="h-8 w-8">
                      <AvatarImage src={member.avatar || "/placeholder.svg"} alt={member.name} />
                      <AvatarFallback>{member.initials}</AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="text-sm font-medium">{member.name}</p>
                      <p className="text-xs text-muted-foreground">{member.role}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="p-4">
              <h3 className="text-sm font-medium mb-2">Shared Files</h3>
              <div className="space-y-2">
                <div className="flex items-center justify-between p-2 border rounded-md">
                  <div className="flex items-center gap-2">
                    <div className="h-8 w-8 bg-blue-100 rounded flex items-center justify-center">
                      <FileText className="h-4 w-4 text-blue-600" />
                    </div>
                    <div>
                      <p className="text-sm font-medium">homepage-content.docx</p>
                      <p className="text-xs text-muted-foreground">Emily Davis • 9:45 AM</p>
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
                      <p className="text-sm font-medium">design-system-preview.png</p>
                      <p className="text-xs text-muted-foreground">Sarah Johnson • 9:50 AM</p>
                    </div>
                  </div>
                  <Button variant="ghost" size="sm">
                    <ImageIcon className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
