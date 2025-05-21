import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Progress } from "@/components/ui/progress"
import { Badge } from "@/components/ui/badge"
import { TaskList } from "@/components/task-list"
import {
  Calendar,
  Clock,
  Edit,
  FileText,
  MessageSquare,
  MoreHorizontal,
  Plus,
  Settings,
  Share2,
  Users,
} from "lucide-react"
import { CreateTaskDialog } from "@/components/create-task-dialog"

interface ProjectPageProps {
  params: {
    id: string
  }
}

export default function ProjectPage({ params }: ProjectPageProps) {
  const projectId = params.id

  // Dummy project data based on ID
  const projectData = {
    id: projectId,
    title:
      projectId === "website-redesign"
        ? "Website Redesign"
        : projectId === "mobile-app"
          ? "Mobile App Development"
          : "Marketing Campaign",
    description:
      projectId === "website-redesign"
        ? "Redesign the company website with new branding and improved user experience."
        : projectId === "mobile-app"
          ? "Build a new mobile app for iOS and Android platforms."
          : "Q3 marketing campaign for product launch.",
    progress: projectId === "website-redesign" ? 75 : projectId === "mobile-app" ? 40 : 25,
    startDate: "June 1, 2023",
    dueDate:
      projectId === "website-redesign"
        ? "June 30, 2023"
        : projectId === "mobile-app"
          ? "August 15, 2023"
          : "July 10, 2023",
    status: projectId === "website-redesign" ? "In Progress" : projectId === "mobile-app" ? "In Progress" : "Planning",
    members: [
      { id: "john-doe", name: "John Doe", role: "Project Manager", avatar: "/placeholder.svg", initials: "JD" },
      { id: "sarah-johnson", name: "Sarah Johnson", role: "Designer", avatar: "/placeholder.svg", initials: "SJ" },
      { id: "michael-brown", name: "Michael Brown", role: "Developer", avatar: "/placeholder.svg", initials: "MB" },
      { id: "emily-davis", name: "Emily Davis", role: "Content Writer", avatar: "/placeholder.svg", initials: "ED" },
      { id: "alex-wilson", name: "Alex Wilson", role: "QA Tester", avatar: "/placeholder.svg", initials: "AW" },
    ],
    tasks: [
      {
        id: "task1",
        title:
          projectId === "website-redesign"
            ? "Finalize homepage design"
            : projectId === "mobile-app"
              ? "Design user authentication screens"
              : "Create marketing strategy",
        completed: false,
        dueDate: "Jun 28, 2023",
        progress: 60,
      },
      {
        id: "task2",
        title:
          projectId === "website-redesign"
            ? "Create responsive layouts"
            : projectId === "mobile-app"
              ? "Implement API integration"
              : "Design social media assets",
        completed: false,
        dueDate: "Jun 29, 2023",
        progress: 25,
      },
      {
        id: "task3",
        title:
          projectId === "website-redesign"
            ? "Implement dark mode"
            : projectId === "mobile-app"
              ? "Set up CI/CD pipeline"
              : "Write press release",
        completed: false,
        dueDate: "Jun 30, 2023",
        progress: 10,
      },
      {
        id: "task4",
        title:
          projectId === "website-redesign"
            ? "Optimize images"
            : projectId === "mobile-app"
              ? "Implement push notifications"
              : "Schedule social media posts",
        completed: true,
        dueDate: "Completed Jun 20, 2023",
        progress: 100,
      },
      {
        id: "task5",
        title:
          projectId === "website-redesign"
            ? "Set up analytics"
            : projectId === "mobile-app"
              ? "Add offline support"
              : "Create email campaign",
        completed: true,
        dueDate: "Completed Jun 22, 2023",
        progress: 100,
      },
    ],
    recentActivity: [
      {
        id: "activity1",
        user: { name: "Sarah Johnson", avatar: "/placeholder.svg", initials: "SJ" },
        action: "added a new task",
        target:
          projectId === "website-redesign"
            ? "Finalize homepage design"
            : projectId === "mobile-app"
              ? "Design user authentication screens"
              : "Create marketing strategy",
        timestamp: "2 hours ago",
      },
      {
        id: "activity2",
        user: { name: "John Doe", avatar: "/placeholder.svg", initials: "JD" },
        action: "updated the project description",
        timestamp: "Yesterday",
      },
      {
        id: "activity3",
        user: { name: "Michael Brown", avatar: "/placeholder.svg", initials: "MB" },
        action: "completed task",
        target:
          projectId === "website-redesign"
            ? "Set up analytics"
            : projectId === "mobile-app"
              ? "Add offline support"
              : "Create email campaign",
        timestamp: "2 days ago",
      },
    ],
  }

  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div>
          <div className="flex items-center gap-2">
            <h1 className="text-3xl font-bold tracking-tight">{projectData.title}</h1>
            <Button variant="ghost" size="icon" className="h-8 w-8">
              <Edit className="h-4 w-4" />
            </Button>
          </div>
          <p className="text-muted-foreground">{projectData.description}</p>
        </div>
        <div className="flex flex-wrap gap-2">
          <Button variant="outline" size="sm">
            <Share2 className="mr-2 h-4 w-4" />
            Share
          </Button>
          <Button variant="outline" size="sm">
            <Settings className="mr-2 h-4 w-4" />
            Settings
          </Button>
          <CreateTaskDialog projectId={projectId}>
            <Button className="bg-green-600 hover:bg-green-700" size="sm">
              <Plus className="mr-2 h-4 w-4" />
              Add Task
            </Button>
          </CreateTaskDialog>
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Progress</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{projectData.progress}%</div>
            <Progress value={projectData.progress} className="h-2 mt-2" />
            <div className="grid grid-cols-2 gap-4 mt-4">
              <div className="flex flex-col">
                <span className="text-xs text-muted-foreground">Start Date</span>
                <span className="font-medium">{projectData.startDate}</span>
              </div>
              <div className="flex flex-col">
                <span className="text-xs text-muted-foreground">Due Date</span>
                <span className="font-medium">{projectData.dueDate}</span>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Status</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-center gap-2">
              <Badge
                className={
                  projectData.status === "In Progress"
                    ? "bg-blue-500"
                    : projectData.status === "Planning"
                      ? "bg-yellow-500"
                      : "bg-green-500"
                }
              >
                {projectData.status}
              </Badge>
              <span className="text-sm text-muted-foreground">Updated 2 hours ago</span>
            </div>
            <div className="grid grid-cols-2 gap-4 mt-4">
              <div className="flex flex-col">
                <span className="text-xs text-muted-foreground">Tasks</span>
                <span className="font-medium">{projectData.tasks.length} total</span>
              </div>
              <div className="flex flex-col">
                <span className="text-xs text-muted-foreground">Completed</span>
                <span className="font-medium">{projectData.tasks.filter((task) => task.completed).length} tasks</span>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <div className="flex items-center justify-between">
              <CardTitle className="text-sm font-medium">Team Members</CardTitle>
              <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                <Plus className="h-4 w-4" />
              </Button>
            </div>
          </CardHeader>
          <CardContent>
            <div className="flex -space-x-2 overflow-hidden">
              {projectData.members.map((member, index) => (
                <Avatar key={member.id} className="border-2 border-background h-8 w-8">
                  <AvatarImage src={member.avatar || "/placeholder.svg"} alt={member.name} />
                  <AvatarFallback>{member.initials}</AvatarFallback>
                </Avatar>
              ))}
            </div>
            <div className="mt-4">
              <Button variant="outline" size="sm" className="w-full">
                <Users className="mr-2 h-4 w-4" />
                View All Members
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>

      <Tabs defaultValue="tasks" className="w-full">
        <TabsList>
          <TabsTrigger value="tasks">Tasks</TabsTrigger>
          <TabsTrigger value="files">Files</TabsTrigger>
          <TabsTrigger value="activity">Activity</TabsTrigger>
          <TabsTrigger value="discussions">Discussions</TabsTrigger>
        </TabsList>
        <TabsContent value="tasks" className="space-y-4 mt-4">
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-bold">Project Tasks</h2>
            <div className="flex gap-2">
              <Button variant="outline" size="sm">
                <Clock className="mr-2 h-4 w-4" />
                Timeline
              </Button>
              <Button variant="outline" size="sm">
                <Calendar className="mr-2 h-4 w-4" />
                Calendar
              </Button>
            </div>
          </div>
          <TaskList tasks={projectData.tasks} showProject={false} />
        </TabsContent>
        <TabsContent value="files" className="space-y-4 mt-4">
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-bold">Project Files</h2>
            <Button variant="outline" size="sm">
              <Plus className="mr-2 h-4 w-4" />
              Upload File
            </Button>
          </div>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            <Card>
              <CardContent className="p-4">
                <div className="flex items-center gap-4">
                  <div className="h-10 w-10 rounded-md bg-blue-100 flex items-center justify-center">
                    <FileText className="h-5 w-5 text-blue-600" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium truncate">project-requirements.pdf</p>
                    <p className="text-xs text-muted-foreground">PDF • 2.4 MB • Uploaded 2 days ago</p>
                  </div>
                  <Button variant="ghost" size="icon" className="h-8 w-8">
                    <MoreHorizontal className="h-4 w-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-4">
                <div className="flex items-center gap-4">
                  <div className="h-10 w-10 rounded-md bg-green-100 flex items-center justify-center">
                    <FileText className="h-5 w-5 text-green-600" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium truncate">design-mockups.sketch</p>
                    <p className="text-xs text-muted-foreground">Sketch • 8.1 MB • Uploaded 1 day ago</p>
                  </div>
                  <Button variant="ghost" size="icon" className="h-8 w-8">
                    <MoreHorizontal className="h-4 w-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-4">
                <div className="flex items-center gap-4">
                  <div className="h-10 w-10 rounded-md bg-purple-100 flex items-center justify-center">
                    <FileText className="h-5 w-5 text-purple-600" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium truncate">project-timeline.xlsx</p>
                    <p className="text-xs text-muted-foreground">Excel • 1.2 MB • Uploaded 3 days ago</p>
                  </div>
                  <Button variant="ghost" size="icon" className="h-8 w-8">
                    <MoreHorizontal className="h-4 w-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
        <TabsContent value="activity" className="space-y-4 mt-4">
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-bold">Recent Activity</h2>
            <Button variant="outline" size="sm">
              Filter
            </Button>
          </div>
          <Card>
            <CardContent className="p-0">
              <div className="divide-y">
                {projectData.recentActivity.map((activity) => (
                  <div key={activity.id} className="flex items-start gap-4 p-4">
                    <Avatar className="h-8 w-8">
                      <AvatarImage src={activity.user.avatar || "/placeholder.svg"} alt={activity.user.name} />
                      <AvatarFallback>{activity.user.initials}</AvatarFallback>
                    </Avatar>
                    <div className="flex-1 space-y-1">
                      <p className="text-sm">
                        <span className="font-medium">{activity.user.name}</span> {activity.action}
                        {activity.target && <span className="font-medium"> {activity.target}</span>}
                      </p>
                      <p className="text-xs text-muted-foreground">{activity.timestamp}</p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="discussions" className="space-y-4 mt-4">
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-bold">Project Discussions</h2>
            <Button className="bg-green-600 hover:bg-green-700" size="sm">
              <Plus className="mr-2 h-4 w-4" />
              New Discussion
            </Button>
          </div>
          <Card>
            <CardContent className="p-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <MessageSquare className="h-5 w-5 text-blue-600" />
                  <div>
                    <p className="font-medium">Homepage Design Discussion</p>
                    <p className="text-sm text-muted-foreground">Started by Sarah Johnson • 5 replies</p>
                  </div>
                </div>
                <Badge>Active</Badge>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <MessageSquare className="h-5 w-5 text-blue-600" />
                  <div>
                    <p className="font-medium">Project Timeline Updates</p>
                    <p className="text-sm text-muted-foreground">Started by John Doe • 3 replies</p>
                  </div>
                </div>
                <Badge>Active</Badge>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <MessageSquare className="h-5 w-5 text-blue-600" />
                  <div>
                    <p className="font-medium">Technical Requirements</p>
                    <p className="text-sm text-muted-foreground">Started by Michael Brown • 8 replies</p>
                  </div>
                </div>
                <Badge variant="outline">Resolved</Badge>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
