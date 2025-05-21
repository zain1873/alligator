import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { TaskList } from "@/components/task-list"
import { Plus, Filter, SortAsc, Calendar, List, Kanban } from "lucide-react"
import { CreateTaskDialog } from "@/components/create-task-dialog"

export default function TasksPage() {
  // Dummy data for tasks
  const allTasks = [
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
  ]

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Tasks</h1>
          <p className="text-muted-foreground">Manage and track all your tasks in one place.</p>
        </div>
        <CreateTaskDialog>
          <Button className="bg-green-600 hover:bg-green-700">
            <Plus className="mr-2 h-4 w-4" /> New Task
          </Button>
        </CreateTaskDialog>
      </div>

      <div className="flex flex-col md:flex-row gap-4 items-start md:items-center justify-between">
        <div className="flex flex-col sm:flex-row gap-4 w-full md:w-auto">
          <div className="relative w-full md:w-[300px]">
            <Input placeholder="Search tasks..." />
          </div>
          <div className="flex gap-2">
            <Button variant="outline" size="sm">
              <Filter className="h-4 w-4 mr-2" />
              Filter
            </Button>
            <Button variant="outline" size="sm">
              <SortAsc className="h-4 w-4 mr-2" />
              Sort
            </Button>
          </div>
        </div>
        <div className="flex gap-2 w-full md:w-auto">
          <Button variant="outline" size="sm" className="w-full md:w-auto">
            <List className="h-4 w-4 mr-2" />
            List
          </Button>
          <Button variant="outline" size="sm" className="w-full md:w-auto">
            <Kanban className="h-4 w-4 mr-2" />
            Board
          </Button>
          <Button variant="outline" size="sm" className="w-full md:w-auto">
            <Calendar className="h-4 w-4 mr-2" />
            Calendar
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-[250px_1fr] gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Filters</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label>Project</Label>
              <Select defaultValue="all">
                <SelectTrigger>
                  <SelectValue placeholder="All Projects" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Projects</SelectItem>
                  <SelectItem value="website-redesign">Website Redesign</SelectItem>
                  <SelectItem value="mobile-app">Mobile App</SelectItem>
                  <SelectItem value="marketing-campaign">Marketing Campaign</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <Label>Due Date</Label>
              <Select defaultValue="all">
                <SelectTrigger>
                  <SelectValue placeholder="All Dates" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Dates</SelectItem>
                  <SelectItem value="today">Today</SelectItem>
                  <SelectItem value="tomorrow">Tomorrow</SelectItem>
                  <SelectItem value="this-week">This Week</SelectItem>
                  <SelectItem value="next-week">Next Week</SelectItem>
                  <SelectItem value="overdue">Overdue</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <Label>Priority</Label>
              <Select defaultValue="all">
                <SelectTrigger>
                  <SelectValue placeholder="All Priorities" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Priorities</SelectItem>
                  <SelectItem value="high">High</SelectItem>
                  <SelectItem value="medium">Medium</SelectItem>
                  <SelectItem value="low">Low</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <Label>Assigned To</Label>
              <Select defaultValue="me">
                <SelectTrigger>
                  <SelectValue placeholder="Assigned To" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="me">Me</SelectItem>
                  <SelectItem value="all">Anyone</SelectItem>
                  <SelectItem value="unassigned">Unassigned</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <Button variant="outline" className="w-full">
              Reset Filters
            </Button>
          </CardContent>
        </Card>

        <div className="space-y-6">
          <Tabs defaultValue="all" className="w-full">
            <TabsList>
              <TabsTrigger value="all">All Tasks</TabsTrigger>
              <TabsTrigger value="upcoming">Upcoming</TabsTrigger>
              <TabsTrigger value="today">Today</TabsTrigger>
              <TabsTrigger value="completed">Completed</TabsTrigger>
            </TabsList>
            <TabsContent value="all" className="space-y-4 mt-4">
              <TaskList tasks={allTasks} />
            </TabsContent>
            <TabsContent value="upcoming" className="space-y-4 mt-4">
              <TaskList tasks={allTasks.filter((task) => !task.completed && !task.dueDate?.includes("Today"))} />
            </TabsContent>
            <TabsContent value="today" className="space-y-4 mt-4">
              <TaskList tasks={allTasks.filter((task) => !task.completed && task.dueDate?.includes("Today"))} />
            </TabsContent>
            <TabsContent value="completed" className="space-y-4 mt-4">
              <TaskList tasks={allTasks.filter((task) => task.completed)} />
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  )
}
