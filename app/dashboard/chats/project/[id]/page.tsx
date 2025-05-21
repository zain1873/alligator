import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Separator } from "@/components/ui/separator"
import { AtSign, FileText, ImageIcon, Paperclip, Plus, Send } from "lucide-react"
import { ChatMessage } from "@/components/chat-message"
import { MentionPopover } from "@/components/mention-popover"

interface ProjectChatPageProps {
  params: {
    id: string
  }
}

export default function ProjectChatPage({ params }: ProjectChatPageProps) {
  const projectId = params.id

  // This would come from your database in a real app
  const projects = {
    "website-redesign": {
      id: "website-redesign",
      name: "Website Redesign Discussion",
      project: "Website Redesign",
      description: "Discuss all aspects of the website redesign project",
      members: [
        { id: "john-doe", name: "John Doe", initials: "JD", avatar: "/placeholder.svg" },
        { id: "sarah-johnson", name: "Sarah Johnson", initials: "SJ", avatar: "/placeholder.svg" },
        { id: "michael-brown", name: "Michael Brown", initials: "MB", avatar: "/placeholder.svg" },
        { id: "emily-davis", name: "Emily Davis", initials: "ED", avatar: "/placeholder.svg" },
        { id: "alex-wilson", name: "Alex Wilson", initials: "AW", avatar: "/placeholder.svg" },
      ],
    },
    "mobile-app": {
      id: "mobile-app",
      name: "Mobile App Development",
      project: "Mobile App",
      description: "Collaboration channel for the mobile app development team",
      members: [
        { id: "john-doe", name: "John Doe", initials: "JD", avatar: "/placeholder.svg" },
        { id: "michael-brown", name: "Michael Brown", initials: "MB", avatar: "/placeholder.svg" },
        { id: "alex-wilson", name: "Alex Wilson", initials: "AW", avatar: "/placeholder.svg" },
        { id: "lisa-chen", name: "Lisa Chen", initials: "LC", avatar: "/placeholder.svg" },
      ],
    },
    "marketing-campaign": {
      id: "marketing-campaign",
      name: "Q3 Marketing Campaign",
      project: "Marketing Campaign",
      description: "Planning and coordination for the Q3 marketing campaign",
      members: [
        { id: "john-doe", name: "John Doe", initials: "JD", avatar: "/placeholder.svg" },
        { id: "emily-davis", name: "Emily Davis", initials: "ED", avatar: "/placeholder.svg" },
        { id: "lisa-chen", name: "Lisa Chen", initials: "LC", avatar: "/placeholder.svg" },
      ],
    },
    "website-launch": {
      id: "website-launch",
      name: "Website Launch Planning",
      project: "Website Redesign",
      description: "Coordination for the website launch",
      members: [
        { id: "john-doe", name: "John Doe", initials: "JD", avatar: "/placeholder.svg" },
        { id: "sarah-johnson", name: "Sarah Johnson", initials: "SJ", avatar: "/placeholder.svg" },
        { id: "michael-brown", name: "Michael Brown", initials: "MB", avatar: "/placeholder.svg" },
        { id: "emily-davis", name: "Emily Davis", initials: "ED", avatar: "/placeholder.svg" },
        { id: "alex-wilson", name: "Alex Wilson", initials: "AW", avatar: "/placeholder.svg" },
        { id: "lisa-chen", name: "Lisa Chen", initials: "LC", avatar: "/placeholder.svg" },
      ],
    },
  }

  const project = projects[projectId as keyof typeof projects] || {
    id: projectId,
    name: "Project Chat",
    project: "Unknown Project",
    description: "Project discussion",
    members: [{ id: "john-doe", name: "John Doe", initials: "JD", avatar: "/placeholder.svg" }],
  }

  const currentUser = {
    id: "john-doe",
    name: "John Doe",
    initials: "JD",
    avatar: "/placeholder.svg",
  }

  // Generate dummy messages based on the project ID
  const messages = [
    {
      id: "1",
      sender: currentUser,
      content: `Welcome to the ${project.name} chat! Let's use this space to collaborate on the project.`,
      timestamp: "9:30 AM",
      attachments: [],
    },
    {
      id: "2",
      sender: project.members.find((m) => m.id === "sarah-johnson") || project.members[0],
      content: "Thanks for setting this up, John! I've been working on the initial designs for the project.",
      timestamp: "9:35 AM",
      attachments: [],
    },
    {
      id: "3",
      sender: project.members.find((m) => m.id === "michael-brown") || project.members[0],
      content:
        "Looking forward to seeing those designs, Sarah. I've been preparing the technical requirements document.",
      timestamp: "9:42 AM",
      attachments: [],
    },
    {
      id: "4",
      sender: project.members.find((m) => m.id === "sarah-johnson") || project.members[0],
      content: "Here's a preview of the homepage design. @JohnDoe what do you think about the layout?",
      timestamp: "9:45 AM",
      attachments: [
        {
          id: "a1",
          name: "homepage-design.png",
          type: "image",
          url: "/placeholder.svg?height=300&width=400",
        },
      ],
    },
    {
      id: "5",
      sender: currentUser,
      content:
        "This looks great, Sarah! I like the clean layout. @MichaelBrown do you think this aligns with the technical requirements?",
      timestamp: "9:50 AM",
      attachments: [],
    },
    {
      id: "6",
      sender: project.members.find((m) => m.id === "michael-brown") || project.members[0],
      content: "Yes, this should work well with our technical stack. I'm attaching the requirements doc for reference.",
      timestamp: "9:55 AM",
      attachments: [
        {
          id: "a2",
          name: "technical-requirements.pdf",
          type: "file",
          url: "#",
        },
      ],
    },
    {
      id: "7",
      sender: project.members.find((m) => m.id === "emily-davis") || project.members[0],
      content:
        "I've been working on the content strategy for the website. I'll share my draft later today for everyone's feedback.",
      timestamp: "10:05 AM",
      attachments: [],
    },
    {
      id: "8",
      sender: project.members.find((m) => m.id === "alex-wilson") || project.members[0],
      content: "Great progress everyone! Let's schedule a review meeting for tomorrow to discuss next steps.",
      timestamp: "10:15 AM",
      attachments: [],
    },
  ]

  return (
    <div className="flex flex-col h-[calc(100vh-7rem)]">
      <div className="flex items-center justify-between border-b pb-4">
        <div className="flex items-center">
          <h1 className="text-2xl font-bold">{project.name}</h1>
          <Separator orientation="vertical" className="mx-4 h-6" />
          <div className="flex items-center text-muted-foreground">
            <FileText className="h-4 w-4 mr-2" />
            <span>{project.project}</span>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <Button variant="outline" size="sm">
            <Plus className="h-4 w-4 mr-2" />
            Add Members
          </Button>
          <div className="flex -space-x-2">
            {project.members.slice(0, 3).map((member) => (
              <Avatar key={member.id} className="h-8 w-8 border-2 border-background">
                <AvatarImage src={member.avatar || "/placeholder.svg"} alt={member.name} />
                <AvatarFallback>{member.initials}</AvatarFallback>
              </Avatar>
            ))}
            {project.members.length > 3 && (
              <div className="h-8 w-8 rounded-full bg-muted flex items-center justify-center text-xs border-2 border-background">
                +{project.members.length - 3}
              </div>
            )}
          </div>
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
            <CardTitle className="text-lg">Project Details</CardTitle>
          </CardHeader>
          <CardContent className="p-0">
            <div className="p-4 border-b">
              <h3 className="text-sm font-medium mb-1">Description</h3>
              <p className="text-sm text-muted-foreground">{project.description}</p>
            </div>
            <div className="p-4 border-b">
              <h3 className="text-sm font-medium mb-2">Team Members</h3>
              <div className="space-y-2">
                {project.members.map((member) => (
                  <div key={member.id} className="flex items-center gap-3 p-2 rounded-md hover:bg-muted">
                    <Avatar className="h-8 w-8">
                      <AvatarImage src={member.avatar || "/placeholder.svg"} alt={member.name} />
                      <AvatarFallback>{member.initials}</AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="text-sm font-medium">{member.name}</p>
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
                      <ImageIcon className="h-4 w-4 text-blue-600" />
                    </div>
                    <div>
                      <p className="text-sm font-medium">homepage-design.png</p>
                      <p className="text-xs text-muted-foreground">Sarah Johnson • 9:45 AM</p>
                    </div>
                  </div>
                  <Button variant="ghost" size="sm">
                    <FileText className="h-4 w-4" />
                  </Button>
                </div>
                <div className="flex items-center justify-between p-2 border rounded-md">
                  <div className="flex items-center gap-2">
                    <div className="h-8 w-8 bg-blue-100 rounded flex items-center justify-center">
                      <FileText className="h-4 w-4 text-blue-600" />
                    </div>
                    <div>
                      <p className="text-sm font-medium">technical-requirements.pdf</p>
                      <p className="text-xs text-muted-foreground">Michael Brown • 9:55 AM</p>
                    </div>
                  </div>
                  <Button variant="ghost" size="sm">
                    <FileText className="h-4 w-4" />
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
