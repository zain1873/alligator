import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { CalendarDays, Clock, FileText, Users, CheckSquare, AlertCircle } from "lucide-react"
import { Progress } from "@/components/ui/progress"
import { TaskDetailDialog } from "@/components/task-detail-dialog"

export default function UpcomingPage() {
  // Dummy data for upcoming tasks
  const upcomingTasks = [
    {
      id: "task1",
      title: "Finalize homepage design",
      description: "Complete the final design for the homepage including responsive layouts and dark mode",
      project: "Website Redesign",
      dueDate: "Tomorrow at 5:00 PM",
      priority: "High",
      assignee: {
        name: "Sarah Johnson",
        avatar: "/placeholder.svg",
        initials: "SJ",
      },
      progress: 75,
      tags: ["Design", "Frontend"],
    },
    {
      id: "task2",
      title: "API Integration for user authentication",
      description: "Implement the API endpoints for user authentication and authorization",
      project: "Mobile App",
      dueDate: "May 24, 2025",
      priority: "Medium",
      assignee: {
        name: "Michael Brown",
        avatar: "/placeholder.svg",
        initials: "MB",
      },
      progress: 30,
      tags: ["Backend", "API"],
    },
    {
      id: "task3",
      title: "Create marketing materials for product launch",
      description: "Design and create all marketing materials needed for the upcoming product launch",
      project: "Marketing Campaign",
      dueDate: "May 25, 2025",
      priority: "High",
      assignee: {
        name: "Emily Davis",
        avatar: "/placeholder.svg",
        initials: "ED",
      },
      progress: 15,
      tags: ["Marketing", "Design"],
    },
    {
      id: "task4",
      title: "Quarterly team performance review",
      description: "Conduct performance reviews for all team members for Q2",
      project: "HR Management",
      dueDate: "May 26, 2025",
      priority: "Medium",
      assignee: {
        name: "John Doe",
        avatar: "/placeholder.svg",
        initials: "JD",
      },
      progress: 0,
      tags: ["HR", "Management"],
    },
    {
      id: "task5",
      title: "User testing for new features",
      description: "Organize and conduct user testing sessions for the newly developed features",
      project: "Website Redesign",
      dueDate: "May 27, 2025",
      priority: "Medium",
      assignee: {
        name: "Alex Wilson",
        avatar: "/placeholder.svg",
        initials: "AW",
      },
      progress: 10,
      tags: ["Testing", "UX"],
    },
  ]

  // Dummy data for upcoming deadlines
  const upcomingDeadlines = [
    {
      id: "deadline1",
      title: "Website Redesign Project",
      description: "Complete all tasks for the website redesign project",
      dueDate: "May 30, 2025",
      progress: 65,
      team: "Design Team",
      members: 5,
    },
    {
      id: "deadline2",
      title: "Mobile App Beta Release",
      description: "Release the beta version of the mobile app to testers",
      dueDate: "June 5, 2025",
      progress: 40,
      team: "Development Team",
      members: 8,
    },
    {
      id: "deadline3",
      title: "Q2 Marketing Campaign",
      description: "Launch the Q2 marketing campaign across all channels",
      dueDate: "June 10, 2025",
      progress: 25,
      team: "Marketing Team",
      members: 4,
    },
  ]

  // Dummy data for upcoming meetings
  const upcomingMeetings = [
    {
      id: "meeting1",
      title: "Weekly Team Standup",
      description: "Regular weekly standup meeting to discuss progress and blockers",
      date: "Tomorrow",
      time: "10:00 AM - 10:30 AM",
      location: "Conference Room A",
      attendees: [
        { name: "John Doe", initials: "JD" },
        { name: "Sarah Johnson", initials: "SJ" },
        { name: "Michael Brown", initials: "MB" },
        { name: "Emily Davis", initials: "ED" },
      ],
    },
    {
      id: "meeting2",
      title: "Client Presentation",
      description: "Present the website redesign progress to the client",
      date: "May 24, 2025",
      time: "2:00 PM - 3:30 PM",
      location: "Virtual Meeting",
      attendees: [
        { name: "John Doe", initials: "JD" },
        { name: "Sarah Johnson", initials: "SJ" },
        { name: "Client Representative", initials: "CR" },
      ],
    },
    {
      id: "meeting3",
      title: "Product Strategy Session",
      description: "Discuss and plan the product strategy for Q3",
      date: "May 26, 2025",
      time: "11:00 AM - 12:30 PM",
      location: "Conference Room B",
      attendees: [
        { name: "John Doe", initials: "JD" },
        { name: "Alex Wilson", initials: "AW" },
        { name: "Lisa Chen", initials: "LC" },
        { name: "Michael Brown", initials: "MB" },
      ],
    },
  ]

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Upcoming</h1>
        <p className="text-muted-foreground">View and manage your upcoming tasks, deadlines, and meetings.</p>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Tasks Due Soon</CardTitle>
            <CheckSquare className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">5</div>
            <p className="text-xs text-muted-foreground">Next 7 days</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Project Deadlines</CardTitle>
            <AlertCircle className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">3</div>
            <p className="text-xs text-muted-foreground">Next 30 days</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Upcoming Meetings</CardTitle>
            <CalendarDays className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">3</div>
            <p className="text-xs text-muted-foreground">Next 7 days</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Team Availability</CardTitle>
            <Users className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">85%</div>
            <p className="text-xs text-muted-foreground">Team members available</p>
          </CardContent>
        </Card>
      </div>

      <Tabs defaultValue="tasks" className="space-y-4">
        <TabsList>
          <TabsTrigger value="tasks">Tasks</TabsTrigger>
          <TabsTrigger value="deadlines">Project Deadlines</TabsTrigger>
          <TabsTrigger value="meetings">Meetings</TabsTrigger>
        </TabsList>

        <TabsContent value="tasks" className="space-y-4">
          <div className="grid gap-4">
            {upcomingTasks.map((task) => (
              <TaskDetailDialog key={task.id} task={task}>
                <Card className="cursor-pointer hover:bg-muted/50 transition-colors">
                  <CardContent className="p-4">
                    <div className="flex items-start justify-between">
                      <div className="space-y-1">
                        <div className="flex items-center gap-2">
                          <h3 className="font-medium">{task.title}</h3>
                          {task.priority === "High" && <Badge className="bg-red-500">High Priority</Badge>}
                        </div>
                        <p className="text-sm text-muted-foreground">Project: {task.project}</p>
                        <div className="flex items-center gap-2 text-sm text-muted-foreground">
                          <Clock className="h-3.5 w-3.5" />
                          <span>{task.dueDate}</span>
                        </div>
                        <div className="flex flex-wrap gap-1 mt-2">
                          {task.tags.map((tag) => (
                            <Badge key={tag} variant="outline" className="text-xs">
                              {tag}
                            </Badge>
                          ))}
                        </div>
                      </div>
                      <div className="flex flex-col items-end gap-2">
                        <Avatar className="h-8 w-8">
                          <AvatarImage src={task.assignee.avatar || "/placeholder.svg"} alt={task.assignee.name} />
                          <AvatarFallback>{task.assignee.initials}</AvatarFallback>
                        </Avatar>
                        <div className="w-24">
                          <div className="flex justify-between text-xs mb-1">
                            <span>Progress</span>
                            <span>{task.progress}%</span>
                          </div>
                          <Progress value={task.progress} className="h-1.5" />
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TaskDetailDialog>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="deadlines" className="space-y-4">
          <div className="grid gap-4">
            {upcomingDeadlines.map((deadline) => (
              <Card key={deadline.id}>
                <CardContent className="p-4">
                  <div className="flex items-start justify-between">
                    <div className="space-y-1">
                      <h3 className="font-medium">{deadline.title}</h3>
                      <p className="text-sm text-muted-foreground">{deadline.description}</p>
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <CalendarDays className="h-3.5 w-3.5" />
                        <span>Due: {deadline.dueDate}</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <Users className="h-3.5 w-3.5" />
                        <span>
                          {deadline.team} • {deadline.members} members
                        </span>
                      </div>
                    </div>
                    <div className="flex flex-col items-end gap-2">
                      <div className="w-24">
                        <div className="flex justify-between text-xs mb-1">
                          <span>Progress</span>
                          <span>{deadline.progress}%</span>
                        </div>
                        <Progress value={deadline.progress} className="h-1.5" />
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="meetings" className="space-y-4">
          <div className="grid gap-4">
            {upcomingMeetings.map((meeting) => (
              <Card key={meeting.id}>
                <CardContent className="p-4">
                  <div className="flex items-start justify-between">
                    <div className="space-y-1">
                      <h3 className="font-medium">{meeting.title}</h3>
                      <p className="text-sm text-muted-foreground">{meeting.description}</p>
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <CalendarDays className="h-3.5 w-3.5" />
                        <span>
                          {meeting.date} • {meeting.time}
                        </span>
                      </div>
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <FileText className="h-3.5 w-3.5" />
                        <span>Location: {meeting.location}</span>
                      </div>
                    </div>
                    <div className="flex -space-x-2">
                      {meeting.attendees.map((attendee, index) => (
                        <Avatar key={index} className="h-8 w-8 border-2 border-background">
                          <AvatarFallback>{attendee.initials}</AvatarFallback>
                        </Avatar>
                      ))}
                    </div>
                  </div>
                  <div className="mt-4 flex justify-end gap-2">
                    <Button variant="outline" size="sm">
                      Reschedule
                    </Button>
                    <Button size="sm">Join Meeting</Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}
