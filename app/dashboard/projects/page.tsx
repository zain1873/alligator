import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Input } from "@/components/ui/input"
import { ProjectCard } from "@/components/project-card"
import { Plus, Filter, SortAsc, Grid, List } from "lucide-react"
import { CreateProjectDialog } from "@/components/create-project-dialog"

export default function ProjectsPage() {
  // Dummy data for projects
  const activeProjects = [
    {
      title: "Website Redesign",
      description: "Redesign the company website with new branding",
      progress: 75,
      dueDate: "2023-06-30",
      members: 5,
      tasks: 12,
      completedTasks: 9,
    },
    {
      title: "Mobile App Development",
      description: "Build a new mobile app for iOS and Android",
      progress: 40,
      dueDate: "2023-08-15",
      members: 8,
      tasks: 24,
      completedTasks: 10,
    },
    {
      title: "Marketing Campaign",
      description: "Q3 marketing campaign for product launch",
      progress: 25,
      dueDate: "2023-07-10",
      members: 4,
      tasks: 18,
      completedTasks: 4,
    },
    {
      title: "Customer Portal",
      description: "Develop a customer portal for account management",
      progress: 60,
      dueDate: "2023-07-20",
      members: 6,
      tasks: 15,
      completedTasks: 9,
    },
    {
      title: "Internal Dashboard",
      description: "Create an internal dashboard for analytics",
      progress: 30,
      dueDate: "2023-08-05",
      members: 3,
      tasks: 10,
      completedTasks: 3,
    },
    {
      title: "Product Documentation",
      description: "Update product documentation for new features",
      progress: 80,
      dueDate: "2023-06-25",
      members: 2,
      tasks: 8,
      completedTasks: 6,
    },
  ]

  const completedProjects = [
    {
      title: "Brand Refresh",
      description: "Update company branding and design guidelines",
      progress: 100,
      dueDate: "2023-05-15",
      members: 4,
      tasks: 10,
      completedTasks: 10,
    },
    {
      title: "Q2 Marketing Campaign",
      description: "Marketing campaign for Q2 product updates",
      progress: 100,
      dueDate: "2023-04-30",
      members: 3,
      tasks: 12,
      completedTasks: 12,
    },
    {
      title: "Employee Handbook",
      description: "Create a comprehensive employee handbook",
      progress: 100,
      dueDate: "2023-05-20",
      members: 2,
      tasks: 8,
      completedTasks: 8,
    },
  ]

  const draftProjects = [
    {
      title: "Customer Feedback System",
      description: "Implement a system for collecting customer feedback",
      progress: 0,
      dueDate: "Not set",
      members: 0,
      tasks: 0,
      completedTasks: 0,
    },
    {
      title: "AI Feature Development",
      description: "Research and develop AI-powered features",
      progress: 0,
      dueDate: "Not set",
      members: 0,
      tasks: 0,
      completedTasks: 0,
    },
  ]

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Projects</h1>
          <p className="text-muted-foreground">Manage and track all your projects in one place.</p>
        </div>
        <CreateProjectDialog>
          <Button className="bg-green-600 hover:bg-green-700">
            <Plus className="mr-2 h-4 w-4" /> New Project
          </Button>
        </CreateProjectDialog>
      </div>

      <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between">
        <div className="relative w-full sm:w-[300px]">
          <Input placeholder="Search projects..." />
        </div>
        <div className="flex gap-2 w-full sm:w-auto">
          <Button variant="outline" size="sm" className="w-full sm:w-auto">
            <Filter className="h-4 w-4 mr-2" />
            Filter
          </Button>
          <Button variant="outline" size="sm" className="w-full sm:w-auto">
            <SortAsc className="h-4 w-4 mr-2" />
            Sort
          </Button>
          <Button variant="outline" size="sm" className="w-full sm:w-auto">
            <Grid className="h-4 w-4 mr-2" />
            Grid
          </Button>
          <Button variant="outline" size="sm" className="w-full sm:w-auto">
            <List className="h-4 w-4 mr-2" />
            List
          </Button>
        </div>
      </div>

      <Tabs defaultValue="active" className="w-full">
        <TabsList>
          <TabsTrigger value="active">Active Projects</TabsTrigger>
          <TabsTrigger value="completed">Completed</TabsTrigger>
          <TabsTrigger value="drafts">Drafts</TabsTrigger>
        </TabsList>
        <TabsContent value="active" className="space-y-4 mt-4">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {activeProjects.map((project, index) => (
              <ProjectCard
                key={index}
                title={project.title}
                description={project.description}
                progress={project.progress}
                dueDate={project.dueDate}
                members={project.members}
                tasks={project.tasks}
                completedTasks={project.completedTasks}
              />
            ))}
          </div>
        </TabsContent>
        <TabsContent value="completed" className="space-y-4 mt-4">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {completedProjects.map((project, index) => (
              <ProjectCard
                key={index}
                title={project.title}
                description={project.description}
                progress={project.progress}
                dueDate={project.dueDate}
                members={project.members}
                tasks={project.tasks}
                completedTasks={project.completedTasks}
              />
            ))}
          </div>
        </TabsContent>
        <TabsContent value="drafts" className="space-y-4 mt-4">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {draftProjects.map((project, index) => (
              <ProjectCard
                key={index}
                title={project.title}
                description={project.description}
                progress={project.progress}
                dueDate={project.dueDate}
                members={project.members}
                tasks={project.tasks}
                completedTasks={project.completedTasks}
              />
            ))}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}
