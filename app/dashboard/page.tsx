import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { CalendarDays, Clock, Plus, Users, FileText, MessageSquare, CheckSquare } from "lucide-react"
import { ProjectCard } from "@/components/project-card"
import { RecentActivityList } from "@/components/recent-activity-list"
import { CreateProjectDialog } from "@/components/create-project-dialog"
import { CreateTaskDialog } from "@/components/create-task-dialog"
import { TaskList } from "@/components/task-list"

export default function DashboardPage() {
  // Dummy data for tasks
  const upcomingTasks = [
    {
      id: "task1",
      title: "Finalize homepage design",
      completed: false,
      project: "Website Redesign",
      dueDate: "Jun 28, 2023",
      progress: 60,
    },
    {
      id: "task2",
      title: "Create responsive layouts",
      completed: false,
      project: "Website Redesign",
      dueDate: "Jun 29, 2023",
      progress: 25,
    },
    {
      id: "task3",
      title: "Implement dark mode",
      completed: false,
      project: "Website Redesign",
      dueDate: "Jun 30, 2023",
      progress: 10,
    },
    {
      id: "task4",
      title: "Design user authentication screens",
      completed: false,
      project: "Mobile App",
      dueDate: "Jul 2, 2023",
      progress: 40,
    },
    {
      id: "task5",
      title: "Implement API integration",
      completed: false,
      project: "Mobile App",
      dueDate: "Jul 5, 2023",
      progress: 15,
    },
  ]

  const todayTasks = [
    {
      id: "task6",
      title: "Team meeting for Website Redesign",
      completed: false,
      project: "Website Redesign",
      dueDate: "Today at 2:00 PM",
      progress: 0,
    },
    {
      id: "task7",
      title: "Review design mockups",
      completed: false,
      project: "Website Redesign",
      dueDate: "Today at 5:00 PM",
      progress: 0,
    },
    {
      id: "task8",
      title: "Standup meeting",
      completed: false,
      project: "Mobile App",
      dueDate: "Today at 10:00 AM",
      progress: 0,
    },
  ]

  const completedTasks = [
    {
      id: "task9",
      title: "Create project plan",
      completed: true,
      project: "Website Redesign",
      dueDate: "Completed Jun 20, 2023",
      progress: 100,
    },
    {
      id: "task10",
      title: "Initial wireframes",
      completed: true,
      project: "Website Redesign",
      dueDate: "Completed Jun 22, 2023",
      progress: 100,
    },
    {
      id: "task11",
      title: "Stakeholder meeting",
      completed: true,
      project: "Website Redesign",
      dueDate: "Completed Jun 24, 2023",
      progress: 100,
    },
    {
      id: "task12",
      title: "Research competitors",
      completed: true,
      project: "Marketing Campaign",
      dueDate: "Completed Jun 18, 2023",
      progress: 100,
    },
  ]

  return (
    <div className="flex flex-col gap-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold">Dashboard</h1>
        <div className="flex gap-2">
          <CreateTaskDialog>
            <Button variant="outline">
              <Plus className="mr-2 h-4 w-4" /> New Task
            </Button>
          </CreateTaskDialog>
          <CreateProjectDialog>
            <Button className="bg-green-600 hover:bg-green-700">
              <Plus className="mr-2 h-4 w-4" /> New Project
            </Button>
          </CreateProjectDialog>
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Active Projects</CardTitle>
            <FileText className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">8</div>
            <p className="text-xs text-muted-foreground">+2 from last month</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Tasks Completed</CardTitle>
            <Clock className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">45</div>
            <p className="text-xs text-muted-foreground">+12 from last week</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Upcoming Deadlines</CardTitle>
            <CalendarDays className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">7</div>
            <p className="text-xs text-muted-foreground">In the next 7 days</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Team Members</CardTitle>
            <Users className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">12</div>
            <p className="text-xs text-muted-foreground">Across 3 teams</p>
          </CardContent>
        </Card>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <div>
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-bold">Active Projects</h2>
            <Link href="/dashboard/projects">
              <Button variant="ghost" size="sm">
                View all
              </Button>
            </Link>
          </div>
          <div className="space-y-4">
            <ProjectCard
              title="Website Redesign"
              description="Redesign the company website with new branding"
              progress={75}
              dueDate="2023-06-30"
              members={5}
              tasks={12}
              completedTasks={9}
            />
            <ProjectCard
              title="Mobile App Development"
              description="Build a new mobile app for iOS and Android"
              progress={40}
              dueDate="2023-08-15"
              members={8}
              tasks={24}
              completedTasks={10}
            />
            <ProjectCard
              title="Marketing Campaign"
              description="Q3 marketing campaign for product launch"
              progress={25}
              dueDate="2023-07-10"
              members={4}
              tasks={18}
              completedTasks={4}
            />
          </div>
        </div>

        <div>
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-bold">Recent Activity</h2>
            <Button variant="ghost" size="sm">
              View all
            </Button>
          </div>
          <Card>
            <CardContent className="p-0">
              <RecentActivityList />
            </CardContent>
          </Card>
        </div>
      </div>

      <div>
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl font-bold">My Tasks</h2>
          <Link href="/dashboard/tasks">
            <Button variant="ghost" size="sm">
              View all
            </Button>
          </Link>
        </div>
        <Tabs defaultValue="upcoming" className="w-full">
          <TabsList>
            <TabsTrigger value="upcoming">Upcoming</TabsTrigger>
            <TabsTrigger value="today">Today</TabsTrigger>
            <TabsTrigger value="completed">Completed</TabsTrigger>
          </TabsList>
          <TabsContent value="upcoming" className="space-y-4">
            <TaskList tasks={upcomingTasks} />
          </TabsContent>
          <TabsContent value="today" className="space-y-4">
            <TaskList tasks={todayTasks} />
          </TabsContent>
          <TabsContent value="completed" className="space-y-4">
            <TaskList tasks={completedTasks} />
          </TabsContent>
        </Tabs>
      </div>

      {/* Recent Chats Section */}
      <div>
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl font-bold">Recent Chats</h2>
          <Link href="/dashboard/chats">
            <Button variant="ghost" size="sm">
              View all
            </Button>
          </Link>
        </div>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          <Card>
            <CardHeader className="pb-3">
              <div className="flex items-start justify-between">
                <div>
                  <CardTitle className="text-lg font-semibold flex items-center gap-2">
                    <Users className="h-4 w-4 text-green-600" />
                    Design Team Chat
                  </CardTitle>
                  <CardDescription>Team Chat</CardDescription>
                </div>
                <Badge className="bg-red-500">3</Badge>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <div className="space-y-1">
                    <p className="text-sm text-muted-foreground line-clamp-2">
                      Sarah: I've uploaded the new wireframes for review
                    </p>
                    <p className="text-xs text-muted-foreground">10 minutes ago</p>
                  </div>
                </div>
                <Button variant="outline" className="w-full" asChild>
                  <Link href="/dashboard/chats/team/design-team">
                    <MessageSquare className="mr-2 h-4 w-4" />
                    Open Chat
                  </Link>
                </Button>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-3">
              <div className="flex items-start justify-between">
                <div>
                  <CardTitle className="text-lg font-semibold flex items-center gap-2">
                    <FileText className="h-4 w-4 text-blue-600" />
                    Website Redesign
                  </CardTitle>
                  <CardDescription>Project Chat</CardDescription>
                </div>
                <Badge className="bg-red-500">2</Badge>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <div className="space-y-1">
                    <p className="text-sm text-muted-foreground line-clamp-2">
                      John: Let's review the homepage design tomorrow
                    </p>
                    <p className="text-xs text-muted-foreground">30 minutes ago</p>
                  </div>
                </div>
                <Button variant="outline" className="w-full" asChild>
                  <Link href="/dashboard/chats/project/website-redesign">
                    <MessageSquare className="mr-2 h-4 w-4" />
                    Open Chat
                  </Link>
                </Button>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-3">
              <div className="flex items-start justify-between">
                <div>
                  <CardTitle className="text-lg font-semibold flex items-center gap-2">
                    <CheckSquare className="h-4 w-4 text-orange-600" />
                    Homepage Design
                  </CardTitle>
                  <CardDescription>Task Chat</CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <div className="space-y-1">
                    <p className="text-sm text-muted-foreground line-clamp-2">
                      Sarah: I've updated the hero section based on feedback
                    </p>
                    <p className="text-xs text-muted-foreground">1 hour ago</p>
                  </div>
                </div>
                <Button variant="outline" className="w-full" asChild>
                  <Link href="/dashboard/chats/task/homepage-design">
                    <MessageSquare className="mr-2 h-4 w-4" />
                    Open Chat
                  </Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
