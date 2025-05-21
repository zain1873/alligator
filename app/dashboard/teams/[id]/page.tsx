import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Calendar, CheckSquare, MessageSquare, MoreHorizontal, Settings, Users, Plus } from "lucide-react"
import Link from "next/link"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

interface TeamPageProps {
  params: {
    id: string
  }
}

export default function TeamPage({ params }: TeamPageProps) {
  const teamId = params.id

  // Dummy team data based on ID
  const teamData = {
    id: teamId,
    name: teamId === "design" ? "Design Team" : teamId === "development" ? "Development" : "Marketing",
    description:
      teamId === "design"
        ? "UI/UX design and brand identity"
        : teamId === "development"
          ? "Frontend and backend development"
          : "Marketing campaigns and content creation",
    members: [
      {
        id: "john-doe",
        name: "John Doe",
        role: "Team Lead",
        avatar: "/placeholder.svg",
        initials: "JD",
        status: "online",
      },
      {
        id: "sarah-johnson",
        name: "Sarah Johnson",
        role: "Senior Designer",
        avatar: "/placeholder.svg",
        initials: "SJ",
        status: "online",
      },
      {
        id: "michael-brown",
        name: "Michael Brown",
        role: "Developer",
        avatar: "/placeholder.svg",
        initials: "MB",
        status: "offline",
      },
      {
        id: "emily-davis",
        name: "Emily Davis",
        role: "Content Writer",
        avatar: "/placeholder.svg",
        initials: "ED",
        status: "online",
      },
      {
        id: "alex-wilson",
        name: "Alex Wilson",
        role: "QA Tester",
        avatar: "/placeholder.svg",
        initials: "AW",
        status: "offline",
      },
    ],
    projects: [
      {
        id: "website-redesign",
        name: "Website Redesign",
        progress: 75,
        tasks: 12,
        completedTasks: 9,
      },
      {
        id: "mobile-app",
        name: "Mobile App",
        progress: 40,
        tasks: 24,
        completedTasks: 10,
      },
      {
        id: "marketing-campaign",
        name: "Q3 Marketing Campaign",
        progress: 60,
        tasks: 8,
        completedTasks: 5,
      },
    ],
    tasks: [
      {
        id: "task-1",
        name: "Homepage Design",
        status: "In Progress",
        dueDate: "Jun 28, 2023",
        assignee: { id: "sarah-johnson", name: "Sarah Johnson", initials: "SJ", avatar: "/placeholder.svg" },
      },
      {
        id: "task-2",
        name: "API Integration",
        status: "In Progress",
        dueDate: "Jul 15, 2023",
        assignee: { id: "michael-brown", name: "Michael Brown", initials: "MB", avatar: "/placeholder.svg" },
      },
      {
        id: "task-3",
        name: "User Testing",
        status: "Not Started",
        dueDate: "Jul 5, 2023",
        assignee: { id: "emily-davis", name: "Emily Davis", initials: "ED", avatar: "/placeholder.svg" },
      },
      {
        id: "task-4",
        name: "Content Creation",
        status: "Completed",
        dueDate: "Jun 20, 2023",
        assignee: { id: "emily-davis", name: "Emily Davis", initials: "ED", avatar: "/placeholder.svg" },
      },
      {
        id: "task-5",
        name: "Bug Fixes",
        status: "In Progress",
        dueDate: "Jun 30, 2023",
        assignee: { id: "alex-wilson", name: "Alex Wilson", initials: "AW", avatar: "/placeholder.svg" },
      },
    ],
    chats: [
      {
        id: "chat-1",
        name: "Team Updates",
        lastMessage: "Sarah: I've uploaded the new mockups for review",
        timestamp: "10:45 AM",
        unread: 3,
      },
      {
        id: "chat-2",
        name: "Project Discussion",
        lastMessage: "Michael: The API integration is complete",
        timestamp: "Yesterday",
        unread: 0,
      },
      {
        id: "chat-3",
        name: "General",
        lastMessage: "Emily: Let's schedule a team meeting for next week",
        timestamp: "2 days ago",
        unread: 0,
      },
    ],
    events: [
      {
        id: "event-1",
        name: "Team Meeting",
        date: "Jun 28, 2023",
        time: "10:00 AM - 11:00 AM",
        attendees: 5,
      },
      {
        id: "event-2",
        name: "Project Review",
        date: "Jul 5, 2023",
        time: "2:00 PM - 3:30 PM",
        attendees: 4,
      },
      {
        id: "event-3",
        name: "Design Workshop",
        date: "Jul 12, 2023",
        time: "9:00 AM - 12:00 PM",
        attendees: 3,
      },
    ],
  }

  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div className="flex items-center gap-4">
          <Avatar className="h-16 w-16">
            <AvatarImage src="/placeholder.svg" alt={teamData.name} />
            <AvatarFallback>{teamData.name.charAt(0)}</AvatarFallback>
          </Avatar>
          <div>
            <h1 className="text-3xl font-bold tracking-tight">{teamData.name}</h1>
            <p className="text-muted-foreground">{teamData.description}</p>
          </div>
        </div>
        <div className="flex flex-wrap gap-2">
          <Button className="bg-green-600 hover:bg-green-700">
            <MessageSquare className="mr-2 h-4 w-4" />
            Team Chat
          </Button>
          <Link href={`/dashboard/teams/${teamId}/members`}>
            <Button variant="outline">
              <Users className="mr-2 h-4 w-4" />
              Members
            </Button>
          </Link>
          <Link href={`/dashboard/teams/${teamId}/settings`}>
            <Button variant="outline">
              <Settings className="mr-2 h-4 w-4" />
              Settings
            </Button>
          </Link>
        </div>
      </div>

      <Tabs defaultValue="overview" className="w-full">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="projects">Projects</TabsTrigger>
          <TabsTrigger value="tasks">Tasks</TabsTrigger>
          <TabsTrigger value="calendar">Calendar</TabsTrigger>
        </TabsList>
        <TabsContent value="overview" className="space-y-6 mt-6">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-lg">Team Members</CardTitle>
                <CardDescription>Active members of this team</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {teamData.members.slice(0, 4).map((member) => (
                    <div key={member.id} className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <Avatar className="h-8 w-8">
                          <AvatarImage src={member.avatar || "/placeholder.svg"} alt={member.name} />
                          <AvatarFallback>{member.initials}</AvatarFallback>
                        </Avatar>
                        <div>
                          <p className="text-sm font-medium">{member.name}</p>
                          <p className="text-xs text-muted-foreground">{member.role}</p>
                        </div>
                      </div>
                      <div
                        className={`h-2.5 w-2.5 rounded-full ${
                          member.status === "online" ? "bg-green-500" : "bg-gray-300"
                        }`}
                      ></div>
                    </div>
                  ))}
                </div>
                <div className="mt-4 pt-4 border-t">
                  <Link href={`/dashboard/teams/${teamId}/members`}>
                    <Button variant="outline" className="w-full">
                      <Users className="mr-2 h-4 w-4" />
                      View All Members
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-lg">Recent Chats</CardTitle>
                <CardDescription>Team conversations</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {teamData.chats.map((chat) => (
                    <div key={chat.id} className="space-y-1">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <MessageSquare className="h-4 w-4 text-muted-foreground" />
                          <p className="text-sm font-medium">
                            {chat.name}
                            {chat.unread > 0 && (
                              <Badge className="ml-2 bg-green-600" variant="secondary">
                                {chat.unread}
                              </Badge>
                            )}
                          </p>
                        </div>
                        <p className="text-xs text-muted-foreground">{chat.timestamp}</p>
                      </div>
                      <p className="text-xs text-muted-foreground truncate pl-6">{chat.lastMessage}</p>
                    </div>
                  ))}
                </div>
                <div className="mt-4 pt-4 border-t">
                  <Button variant="outline" className="w-full">
                    <MessageSquare className="mr-2 h-4 w-4" />
                    Open Team Chat
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-lg">Upcoming Events</CardTitle>
                <CardDescription>Team meetings and events</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {teamData.events.map((event) => (
                    <div key={event.id} className="space-y-1">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <Calendar className="h-4 w-4 text-muted-foreground" />
                          <p className="text-sm font-medium">{event.name}</p>
                        </div>
                      </div>
                      <div className="pl-6 space-y-1">
                        <p className="text-xs">{event.date}</p>
                        <p className="text-xs text-muted-foreground">{event.time}</p>
                        <Badge variant="outline" className="mt-1 text-xs">
                          {event.attendees} attendees
                        </Badge>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="mt-4 pt-4 border-t">
                  <Button variant="outline" className="w-full">
                    <Calendar className="mr-2 h-4 w-4" />
                    View Team Calendar
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-lg">Projects</CardTitle>
                <CardDescription>Active team projects</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {teamData.projects.map((project) => (
                    <div key={project.id} className="space-y-2">
                      <div className="flex items-center justify-between">
                        <p className="text-sm font-medium">{project.name}</p>
                        <span className="text-xs text-muted-foreground">{project.progress}%</span>
                      </div>
                      <div className="h-2 w-full bg-muted rounded-full overflow-hidden">
                        <div
                          className="h-full bg-green-600 rounded-full"
                          style={{ width: `${project.progress}%` }}
                        ></div>
                      </div>
                      <div className="flex items-center justify-between text-xs text-muted-foreground">
                        <span>
                          {project.completedTasks}/{project.tasks} tasks
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="mt-4 pt-4 border-t">
                  <Button variant="outline" className="w-full">
                    <Plus className="mr-2 h-4 w-4" />
                    Create New Project
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="pb-2">
                <div className="flex items-center justify-between">
                  <div>
                    <CardTitle className="text-lg">Recent Tasks</CardTitle>
                    <CardDescription>Team tasks and their status</CardDescription>
                  </div>
                  <Button variant="outline" size="sm">
                    <Plus className="h-4 w-4 mr-2" />
                    Add Task
                  </Button>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {teamData.tasks.slice(0, 4).map((task) => (
                    <div key={task.id} className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <CheckSquare className="h-4 w-4 text-muted-foreground" />
                        <div>
                          <p className="text-sm font-medium">{task.name}</p>
                          <div className="flex items-center gap-2">
                            <p className="text-xs text-muted-foreground">Due {task.dueDate}</p>
                            <Badge
                              className={`text-xs ${
                                task.status === "Completed"
                                  ? "bg-green-100 text-green-800"
                                  : task.status === "In Progress"
                                    ? "bg-blue-100 text-blue-800"
                                    : "bg-gray-100 text-gray-800"
                              }`}
                            >
                              {task.status}
                            </Badge>
                          </div>
                        </div>
                      </div>
                      <Avatar className="h-6 w-6">
                        <AvatarImage src={task.assignee.avatar || "/placeholder.svg"} alt={task.assignee.name} />
                        <AvatarFallback>{task.assignee.initials}</AvatarFallback>
                      </Avatar>
                    </div>
                  ))}
                </div>
                <div className="mt-4 pt-4 border-t">
                  <Button variant="outline" className="w-full">
                    <CheckSquare className="mr-2 h-4 w-4" />
                    View All Tasks
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
        <TabsContent value="projects" className="mt-6">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {teamData.projects.map((project) => (
              <Card key={project.id}>
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle>{project.name}</CardTitle>
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button variant="ghost" size="icon">
                          <MoreHorizontal className="h-4 w-4" />
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="end">
                        <DropdownMenuLabel>Actions</DropdownMenuLabel>
                        <DropdownMenuItem>View Details</DropdownMenuItem>
                        <DropdownMenuItem>Edit Project</DropdownMenuItem>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem>Add Task</DropdownMenuItem>
                        <DropdownMenuItem>Project Chat</DropdownMenuItem>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem className="text-red-600">Archive Project</DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </div>
                  <CardDescription>
                    {project.completedTasks} of {project.tasks} tasks completed
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="space-y-2">
                      <div className="flex items-center justify-between">
                        <span className="text-sm font-medium">Progress</span>
                        <span className="text-sm">{project.progress}%</span>
                      </div>
                      <div className="h-2 w-full bg-muted rounded-full overflow-hidden">
                        <div
                          className="h-full bg-green-600 rounded-full"
                          style={{ width: `${project.progress}%` }}
                        ></div>
                      </div>
                    </div>

                    <div className="flex justify-between">
                      <Button variant="outline" size="sm">
                        <CheckSquare className="mr-2 h-4 w-4" />
                        Tasks
                      </Button>
                      <Button variant="outline" size="sm">
                        <MessageSquare className="mr-2 h-4 w-4" />
                        Chat
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
            <Card className="border-dashed flex flex-col items-center justify-center p-6">
              <div className="rounded-full bg-muted flex items-center justify-center h-12 w-12 mb-4">
                <Plus className="h-6 w-6 text-muted-foreground" />
              </div>
              <h3 className="text-lg font-medium mb-1">Create New Project</h3>
              <p className="text-sm text-muted-foreground text-center mb-4">Start a new project for your team</p>
              <Button variant="outline">Create Project</Button>
            </Card>
          </div>
        </TabsContent>
        <TabsContent value="tasks" className="mt-6">
          <Card>
            <CardContent className="p-0">
              <div className="relative overflow-x-auto">
                <table className="w-full text-sm text-left">
                  <thead className="text-xs uppercase bg-muted">
                    <tr>
                      <th scope="col" className="px-6 py-3">
                        Task
                      </th>
                      <th scope="col" className="px-6 py-3">
                        Status
                      </th>
                      <th scope="col" className="px-6 py-3">
                        Due Date
                      </th>
                      <th scope="col" className="px-6 py-3">
                        Assignee
                      </th>
                      <th scope="col" className="px-6 py-3">
                        <span className="sr-only">Actions</span>
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {teamData.tasks.map((task) => (
                      <tr key={task.id} className="border-b">
                        <td className="px-6 py-4 font-medium">{task.name}</td>
                        <td className="px-6 py-4">
                          <Badge
                            className={
                              task.status === "Completed"
                                ? "bg-green-100 text-green-800 hover:bg-green-100"
                                : task.status === "In Progress"
                                  ? "bg-blue-100 text-blue-800 hover:bg-blue-100"
                                  : "bg-gray-100 text-gray-800 hover:bg-gray-100"
                            }
                          >
                            {task.status}
                          </Badge>
                        </td>
                        <td className="px-6 py-4">{task.dueDate}</td>
                        <td className="px-6 py-4">
                          <div className="flex items-center gap-2">
                            <Avatar className="h-6 w-6">
                              <AvatarImage src={task.assignee.avatar || "/placeholder.svg"} alt={task.assignee.name} />
                              <AvatarFallback>{task.assignee.initials}</AvatarFallback>
                            </Avatar>
                            <span>{task.assignee.name}</span>
                          </div>
                        </td>
                        <td className="px-6 py-4 text-right">
                          <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                              <Button variant="ghost" size="icon">
                                <MoreHorizontal className="h-4 w-4" />
                              </Button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent align="end">
                              <DropdownMenuLabel>Actions</DropdownMenuLabel>
                              <DropdownMenuItem>View Details</DropdownMenuItem>
                              <DropdownMenuItem>Edit Task</DropdownMenuItem>
                              <DropdownMenuSeparator />
                              <DropdownMenuItem>Change Status</DropdownMenuItem>
                              <DropdownMenuItem>Reassign</DropdownMenuItem>
                              <DropdownMenuSeparator />
                              <DropdownMenuItem className="text-red-600">Delete Task</DropdownMenuItem>
                            </DropdownMenuContent>
                          </DropdownMenu>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="calendar" className="mt-6">
          <Card>
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle>Team Calendar</CardTitle>
                <Button variant="outline" size="sm">
                  <Plus className="h-4 w-4 mr-2" />
                  Add Event
                </Button>
              </div>
            </CardHeader>
            <CardContent>
              <div className="text-center p-12 border rounded-md">
                <Calendar className="h-12 w-12 mx-auto text-muted-foreground mb-4" />
                <h3 className="text-lg font-medium mb-2">Calendar View</h3>
                <p className="text-sm text-muted-foreground mb-4">View and manage team events and meetings</p>
                <Button variant="outline">Open Full Calendar</Button>
              </div>
              <div className="mt-6">
                <h3 className="text-lg font-medium mb-4">Upcoming Events</h3>
                <div className="space-y-4">
                  {teamData.events.map((event) => (
                    <div key={event.id} className="flex items-start gap-4 p-4 border rounded-md">
                      <div className="bg-muted p-2 rounded-md">
                        <Calendar className="h-5 w-5 text-muted-foreground" />
                      </div>
                      <div className="flex-1">
                        <h4 className="text-base font-medium">{event.name}</h4>
                        <p className="text-sm text-muted-foreground">{event.date}</p>
                        <p className="text-sm text-muted-foreground">{event.time}</p>
                        <Badge variant="outline" className="mt-2">
                          {event.attendees} attendees
                        </Badge>
                      </div>
                      <Button variant="ghost" size="icon">
                        <MoreHorizontal className="h-4 w-4" />
                      </Button>
                    </div>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
