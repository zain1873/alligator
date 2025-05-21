import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { MessageSquare, Plus, Search, Users } from "lucide-react"
import Link from "next/link"
import { CreateChatDialog } from "@/components/create-chat-dialog"

export default function ChatsPage() {
  // Dummy data for chats
  const teamChats = [
    {
      id: "design-team",
      name: "Design Team Updates",
      team: "Design Team",
      lastMessage: "Sarah: I've uploaded the new mockups for review",
      timestamp: "10:45 AM",
      unread: 3,
      members: [
        { id: "john-doe", name: "John Doe", initials: "JD", avatar: "/placeholder.svg" },
        { id: "sarah-johnson", name: "Sarah Johnson", initials: "SJ", avatar: "/placeholder.svg" },
        { id: "michael-brown", name: "Michael Brown", initials: "MB", avatar: "/placeholder.svg" },
      ],
    },
    {
      id: "development",
      name: "Development Standup",
      team: "Development",
      lastMessage: "Michael: The API integration is complete",
      timestamp: "Yesterday",
      unread: 0,
      members: [
        { id: "john-doe", name: "John Doe", initials: "JD", avatar: "/placeholder.svg" },
        { id: "michael-brown", name: "Michael Brown", initials: "MB", avatar: "/placeholder.svg" },
        { id: "alex-wilson", name: "Alex Wilson", initials: "AW", avatar: "/placeholder.svg" },
      ],
    },
    {
      id: "marketing",
      name: "Marketing Campaign",
      team: "Marketing",
      lastMessage: "Emily: Let's finalize the Q3 campaign strategy",
      timestamp: "2 days ago",
      unread: 0,
      members: [
        { id: "john-doe", name: "John Doe", initials: "JD", avatar: "/placeholder.svg" },
        { id: "emily-davis", name: "Emily Davis", initials: "ED", avatar: "/placeholder.svg" },
        { id: "lisa-chen", name: "Lisa Chen", initials: "LC", avatar: "/placeholder.svg" },
      ],
    },
  ]

  const projectChats = [
    {
      id: "website-redesign",
      name: "Website Redesign Discussion",
      project: "Website Redesign",
      lastMessage: "Sarah: Here's the updated homepage design",
      timestamp: "11:30 AM",
      unread: 2,
      members: [
        { id: "john-doe", name: "John Doe", initials: "JD", avatar: "/placeholder.svg" },
        { id: "sarah-johnson", name: "Sarah Johnson", initials: "SJ", avatar: "/placeholder.svg" },
        { id: "michael-brown", name: "Michael Brown", initials: "MB", avatar: "/placeholder.svg" },
      ],
    },
    {
      id: "mobile-app",
      name: "Mobile App Development",
      project: "Mobile App",
      lastMessage: "Alex: I've fixed the login issue",
      timestamp: "Yesterday",
      unread: 0,
      members: [
        { id: "john-doe", name: "John Doe", initials: "JD", avatar: "/placeholder.svg" },
        { id: "michael-brown", name: "Michael Brown", initials: "MB", avatar: "/placeholder.svg" },
        { id: "alex-wilson", name: "Alex Wilson", initials: "AW", avatar: "/placeholder.svg" },
      ],
    },
    {
      id: "marketing-campaign",
      name: "Q3 Marketing Campaign",
      project: "Marketing Campaign",
      lastMessage: "Lisa: The social media assets are ready",
      timestamp: "3 days ago",
      unread: 0,
      members: [
        { id: "john-doe", name: "John Doe", initials: "JD", avatar: "/placeholder.svg" },
        { id: "emily-davis", name: "Emily Davis", initials: "ED", avatar: "/placeholder.svg" },
        { id: "lisa-chen", name: "Lisa Chen", initials: "LC", avatar: "/placeholder.svg" },
      ],
    },
  ]

  const taskChats = [
    {
      id: "homepage-design",
      name: "Homepage Design Discussion",
      task: "Homepage Design",
      project: "Website Redesign",
      lastMessage: "Sarah: I've updated the hero section",
      timestamp: "9:15 AM",
      unread: 1,
      members: [
        { id: "john-doe", name: "John Doe", initials: "JD", avatar: "/placeholder.svg" },
        { id: "sarah-johnson", name: "Sarah Johnson", initials: "SJ", avatar: "/placeholder.svg" },
      ],
    },
    {
      id: "api-integration",
      name: "API Integration Chat",
      task: "API Integration",
      project: "Mobile App",
      lastMessage: "Michael: The authentication endpoint is working",
      timestamp: "Yesterday",
      unread: 0,
      members: [
        { id: "john-doe", name: "John Doe", initials: "JD", avatar: "/placeholder.svg" },
        { id: "michael-brown", name: "Michael Brown", initials: "MB", avatar: "/placeholder.svg" },
        { id: "alex-wilson", name: "Alex Wilson", initials: "AW", avatar: "/placeholder.svg" },
      ],
    },
    {
      id: "user-testing",
      name: "User Testing Feedback",
      task: "User Testing",
      project: "Website Redesign",
      lastMessage: "Emily: Here's the summary of user feedback",
      timestamp: "2 days ago",
      unread: 0,
      members: [
        { id: "john-doe", name: "John Doe", initials: "JD", avatar: "/placeholder.svg" },
        { id: "emily-davis", name: "Emily Davis", initials: "ED", avatar: "/placeholder.svg" },
        { id: "alex-wilson", name: "Alex Wilson", initials: "AW", avatar: "/placeholder.svg" },
      ],
    },
  ]

  const directChats = [
    {
      id: "sarah-johnson",
      name: "Sarah Johnson",
      role: "Senior Designer",
      lastMessage: "I'll send you the updated designs soon",
      timestamp: "10:30 AM",
      unread: 1,
      status: "online",
      avatar: "/placeholder.svg",
      initials: "SJ",
    },
    {
      id: "michael-brown",
      name: "Michael Brown",
      role: "Developer",
      lastMessage: "Can we discuss the API requirements?",
      timestamp: "Yesterday",
      unread: 0,
      status: "offline",
      avatar: "/placeholder.svg",
      initials: "MB",
    },
    {
      id: "emily-davis",
      name: "Emily Davis",
      role: "Content Writer",
      lastMessage: "The blog post draft is ready for review",
      timestamp: "2 days ago",
      unread: 0,
      status: "online",
      avatar: "/placeholder.svg",
      initials: "ED",
    },
    {
      id: "alex-wilson",
      name: "Alex Wilson",
      role: "QA Tester",
      lastMessage: "I found a bug in the login flow",
      timestamp: "3 days ago",
      unread: 0,
      status: "offline",
      avatar: "/placeholder.svg",
      initials: "AW",
    },
    {
      id: "lisa-chen",
      name: "Lisa Chen",
      role: "Marketing Specialist",
      lastMessage: "Let's discuss the campaign strategy",
      timestamp: "1 week ago",
      unread: 0,
      status: "online",
      avatar: "/placeholder.svg",
      initials: "LC",
    },
  ]

  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Chats</h1>
          <p className="text-muted-foreground">
            Communicate with your team, discuss projects, and collaborate on tasks.
          </p>
        </div>
        <CreateChatDialog>
          <Button className="bg-green-600 hover:bg-green-700">
            <Plus className="mr-2 h-4 w-4" />
            New Chat
          </Button>
        </CreateChatDialog>
      </div>

      <div className="flex items-center space-x-2">
        <div className="relative flex-1 max-w-sm">
          <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input type="search" placeholder="Search chats..." className="pl-8" />
        </div>
      </div>

      <Tabs defaultValue="team" className="w-full">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="team">Team Chats</TabsTrigger>
          <TabsTrigger value="project">Project Chats</TabsTrigger>
          <TabsTrigger value="task">Task Chats</TabsTrigger>
          <TabsTrigger value="direct">Direct Messages</TabsTrigger>
        </TabsList>
        <TabsContent value="team" className="space-y-4 mt-6">
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {teamChats.map((chat) => (
              <Link href={`/dashboard/chats/team/${chat.id}`} key={chat.id} className="block">
                <Card className="h-full hover:bg-muted/50 transition-colors">
                  <CardHeader className="flex flex-row items-start justify-between space-y-0 pb-2">
                    <div className="space-y-1">
                      <CardTitle className="flex items-center">
                        {chat.name}
                        {chat.unread > 0 && (
                          <Badge className="ml-2 bg-green-600" variant="secondary">
                            {chat.unread}
                          </Badge>
                        )}
                      </CardTitle>
                      <CardDescription>{chat.team}</CardDescription>
                    </div>
                    <div className="flex -space-x-2">
                      {chat.members.slice(0, 3).map((member) => (
                        <Avatar key={member.id} className="h-6 w-6 border-2 border-background">
                          <AvatarImage src={member.avatar || "/placeholder.svg"} alt={member.name} />
                          <AvatarFallback>{member.initials}</AvatarFallback>
                        </Avatar>
                      ))}
                      {chat.members.length > 3 && (
                        <div className="h-6 w-6 rounded-full bg-muted flex items-center justify-center text-xs border-2 border-background">
                          +{chat.members.length - 3}
                        </div>
                      )}
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="flex justify-between items-center text-sm">
                      <p className="text-muted-foreground truncate">{chat.lastMessage}</p>
                      <p className="text-xs text-muted-foreground whitespace-nowrap ml-2">{chat.timestamp}</p>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
            <Card className="h-full border-dashed flex flex-col items-center justify-center p-6">
              <div className="rounded-full bg-muted flex items-center justify-center h-12 w-12 mb-4">
                <Users className="h-6 w-6 text-muted-foreground" />
              </div>
              <h3 className="text-lg font-medium mb-1">Create Team Chat</h3>
              <p className="text-sm text-muted-foreground text-center mb-4">
                Start a conversation with your team members
              </p>
              <CreateChatDialog>
                <Button variant="outline" className="w-full">
                  <Plus className="mr-2 h-4 w-4" />
                  New Team Chat
                </Button>
              </CreateChatDialog>
            </Card>
          </div>
        </TabsContent>
        <TabsContent value="project" className="space-y-4 mt-6">
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {projectChats.map((chat) => (
              <Link href={`/dashboard/chats/project/${chat.id}`} key={chat.id} className="block">
                <Card className="h-full hover:bg-muted/50 transition-colors">
                  <CardHeader className="flex flex-row items-start justify-between space-y-0 pb-2">
                    <div className="space-y-1">
                      <CardTitle className="flex items-center">
                        {chat.name}
                        {chat.unread > 0 && (
                          <Badge className="ml-2 bg-green-600" variant="secondary">
                            {chat.unread}
                          </Badge>
                        )}
                      </CardTitle>
                      <CardDescription>{chat.project}</CardDescription>
                    </div>
                    <div className="flex -space-x-2">
                      {chat.members.slice(0, 3).map((member) => (
                        <Avatar key={member.id} className="h-6 w-6 border-2 border-background">
                          <AvatarImage src={member.avatar || "/placeholder.svg"} alt={member.name} />
                          <AvatarFallback>{member.initials}</AvatarFallback>
                        </Avatar>
                      ))}
                      {chat.members.length > 3 && (
                        <div className="h-6 w-6 rounded-full bg-muted flex items-center justify-center text-xs border-2 border-background">
                          +{chat.members.length - 3}
                        </div>
                      )}
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="flex justify-between items-center text-sm">
                      <p className="text-muted-foreground truncate">{chat.lastMessage}</p>
                      <p className="text-xs text-muted-foreground whitespace-nowrap ml-2">{chat.timestamp}</p>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
            <Card className="h-full border-dashed flex flex-col items-center justify-center p-6">
              <div className="rounded-full bg-muted flex items-center justify-center h-12 w-12 mb-4">
                <MessageSquare className="h-6 w-6 text-muted-foreground" />
              </div>
              <h3 className="text-lg font-medium mb-1">Create Project Chat</h3>
              <p className="text-sm text-muted-foreground text-center mb-4">Discuss and collaborate on project tasks</p>
              <CreateChatDialog>
                <Button variant="outline" className="w-full">
                  <Plus className="mr-2 h-4 w-4" />
                  New Project Chat
                </Button>
              </CreateChatDialog>
            </Card>
          </div>
        </TabsContent>
        <TabsContent value="task" className="space-y-4 mt-6">
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {taskChats.map((chat) => (
              <Link href={`/dashboard/chats/task/${chat.id}`} key={chat.id} className="block">
                <Card className="h-full hover:bg-muted/50 transition-colors">
                  <CardHeader className="flex flex-row items-start justify-between space-y-0 pb-2">
                    <div className="space-y-1">
                      <CardTitle className="flex items-center">
                        {chat.name}
                        {chat.unread > 0 && (
                          <Badge className="ml-2 bg-green-600" variant="secondary">
                            {chat.unread}
                          </Badge>
                        )}
                      </CardTitle>
                      <CardDescription>
                        {chat.task} • {chat.project}
                      </CardDescription>
                    </div>
                    <div className="flex -space-x-2">
                      {chat.members.slice(0, 3).map((member) => (
                        <Avatar key={member.id} className="h-6 w-6 border-2 border-background">
                          <AvatarImage src={member.avatar || "/placeholder.svg"} alt={member.name} />
                          <AvatarFallback>{member.initials}</AvatarFallback>
                        </Avatar>
                      ))}
                      {chat.members.length > 3 && (
                        <div className="h-6 w-6 rounded-full bg-muted flex items-center justify-center text-xs border-2 border-background">
                          +{chat.members.length - 3}
                        </div>
                      )}
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="flex justify-between items-center text-sm">
                      <p className="text-muted-foreground truncate">{chat.lastMessage}</p>
                      <p className="text-xs text-muted-foreground whitespace-nowrap ml-2">{chat.timestamp}</p>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
            <Card className="h-full border-dashed flex flex-col items-center justify-center p-6">
              <div className="rounded-full bg-muted flex items-center justify-center h-12 w-12 mb-4">
                <MessageSquare className="h-6 w-6 text-muted-foreground" />
              </div>
              <h3 className="text-lg font-medium mb-1">Create Task Chat</h3>
              <p className="text-sm text-muted-foreground text-center mb-4">Discuss specific tasks with team members</p>
              <CreateChatDialog>
                <Button variant="outline" className="w-full">
                  <Plus className="mr-2 h-4 w-4" />
                  New Task Chat
                </Button>
              </CreateChatDialog>
            </Card>
          </div>
        </TabsContent>
        <TabsContent value="direct" className="space-y-4 mt-6">
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {directChats.map((chat) => (
              <Link href={`/dashboard/chats/direct/${chat.id}`} key={chat.id} className="block">
                <Card className="h-full hover:bg-muted/50 transition-colors">
                  <CardHeader className="flex flex-row items-start justify-between space-y-0 pb-2">
                    <div className="flex items-center space-x-3">
                      <Avatar className="h-10 w-10">
                        <AvatarImage src={chat.avatar || "/placeholder.svg"} alt={chat.name} />
                        <AvatarFallback>{chat.initials}</AvatarFallback>
                      </Avatar>
                      <div className="space-y-1">
                        <CardTitle className="flex items-center text-base">
                          {chat.name}
                          {chat.unread > 0 && (
                            <Badge className="ml-2 bg-green-600" variant="secondary">
                              {chat.unread}
                            </Badge>
                          )}
                        </CardTitle>
                        <CardDescription>{chat.role}</CardDescription>
                      </div>
                    </div>
                    <div
                      className={`h-2.5 w-2.5 rounded-full ${chat.status === "online" ? "bg-green-500" : "bg-gray-300"}`}
                    ></div>
                  </CardHeader>
                  <CardContent>
                    <div className="flex justify-between items-center text-sm">
                      <p className="text-muted-foreground truncate">{chat.lastMessage}</p>
                      <p className="text-xs text-muted-foreground whitespace-nowrap ml-2">{chat.timestamp}</p>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
            <Card className="h-full border-dashed flex flex-col items-center justify-center p-6">
              <div className="rounded-full bg-muted flex items-center justify-center h-12 w-12 mb-4">
                <MessageSquare className="h-6 w-6 text-muted-foreground" />
              </div>
              <h3 className="text-lg font-medium mb-1">Start Direct Message</h3>
              <p className="text-sm text-muted-foreground text-center mb-4">Chat privately with a team member</p>
              <CreateChatDialog>
                <Button variant="outline" className="w-full">
                  <Plus className="mr-2 h-4 w-4" />
                  New Direct Message
                </Button>
              </CreateChatDialog>
            </Card>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}
