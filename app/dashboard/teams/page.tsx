import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Input } from "@/components/ui/input"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Plus, Filter, SortAsc, Grid, List, Users } from "lucide-react"
import Link from "next/link"

export default function TeamsPage() {
  // Dummy data for teams
  const myTeams = [
    {
      id: "design",
      name: "Design Team",
      description: "UI/UX design and brand identity",
      members: 6,
      projects: 4,
      tasks: 18,
      role: "Owner",
      avatar: "/placeholder.svg",
    },
    {
      id: "development",
      name: "Development",
      description: "Frontend and backend development",
      members: 8,
      projects: 3,
      tasks: 24,
      role: "Member",
      avatar: "/placeholder.svg",
    },
    {
      id: "marketing",
      name: "Marketing",
      description: "Marketing campaigns and content creation",
      members: 5,
      projects: 2,
      tasks: 12,
      role: "Member",
      avatar: "/placeholder.svg",
    },
  ]

  const allTeams = [
    ...myTeams,
    {
      id: "product",
      name: "Product",
      description: "Product management and roadmap planning",
      members: 4,
      projects: 2,
      tasks: 10,
      role: null,
      avatar: "/placeholder.svg",
    },
    {
      id: "sales",
      name: "Sales",
      description: "Sales and customer relationship management",
      members: 7,
      projects: 1,
      tasks: 8,
      role: null,
      avatar: "/placeholder.svg",
    },
    {
      id: "support",
      name: "Customer Support",
      description: "Customer support and success",
      members: 5,
      projects: 1,
      tasks: 15,
      role: null,
      avatar: "/placeholder.svg",
    },
  ]

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Teams</h1>
          <p className="text-muted-foreground">Manage and collaborate with your teams.</p>
        </div>
        <Link href="/dashboard/teams/create">
          <Button className="bg-green-600 hover:bg-green-700">
            <Plus className="mr-2 h-4 w-4" /> New Team
          </Button>
        </Link>
      </div>

      <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between">
        <div className="relative w-full sm:w-[300px]">
          <Input placeholder="Search teams..." />
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

      <Tabs defaultValue="my-teams" className="w-full">
        <TabsList>
          <TabsTrigger value="my-teams">My Teams</TabsTrigger>
          <TabsTrigger value="all-teams">All Teams</TabsTrigger>
        </TabsList>
        <TabsContent value="my-teams" className="space-y-4 mt-4">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {myTeams.map((team) => (
              <Card key={team.id} className="overflow-hidden">
                <CardHeader className="pb-3">
                  <div className="flex items-start justify-between">
                    <div className="flex items-center gap-3">
                      <Avatar className="h-10 w-10">
                        <AvatarImage src={team.avatar || "/placeholder.svg"} alt={team.name} />
                        <AvatarFallback>{team.name.charAt(0)}</AvatarFallback>
                      </Avatar>
                      <div>
                        <CardTitle className="text-lg font-semibold">{team.name}</CardTitle>
                        <CardDescription>{team.description}</CardDescription>
                      </div>
                    </div>
                    <Badge variant={team.role === "Owner" ? "default" : "outline"}>{team.role}</Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-3 gap-4 text-center">
                    <div className="flex flex-col">
                      <span className="text-2xl font-bold">{team.members}</span>
                      <span className="text-xs text-muted-foreground">Members</span>
                    </div>
                    <div className="flex flex-col">
                      <span className="text-2xl font-bold">{team.projects}</span>
                      <span className="text-xs text-muted-foreground">Projects</span>
                    </div>
                    <div className="flex flex-col">
                      <span className="text-2xl font-bold">{team.tasks}</span>
                      <span className="text-xs text-muted-foreground">Tasks</span>
                    </div>
                  </div>
                  <div className="mt-4 flex gap-2">
                    <Button variant="outline" className="w-full" asChild>
                      <Link href={`/dashboard/teams/${team.id}`}>
                        <Users className="mr-2 h-4 w-4" />
                        View Team
                      </Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>
        <TabsContent value="all-teams" className="space-y-4 mt-4">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {allTeams.map((team) => (
              <Card key={team.id} className="overflow-hidden">
                <CardHeader className="pb-3">
                  <div className="flex items-start justify-between">
                    <div className="flex items-center gap-3">
                      <Avatar className="h-10 w-10">
                        <AvatarImage src={team.avatar || "/placeholder.svg"} alt={team.name} />
                        <AvatarFallback>{team.name.charAt(0)}</AvatarFallback>
                      </Avatar>
                      <div>
                        <CardTitle className="text-lg font-semibold">{team.name}</CardTitle>
                        <CardDescription>{team.description}</CardDescription>
                      </div>
                    </div>
                    {team.role && <Badge variant={team.role === "Owner" ? "default" : "outline"}>{team.role}</Badge>}
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-3 gap-4 text-center">
                    <div className="flex flex-col">
                      <span className="text-2xl font-bold">{team.members}</span>
                      <span className="text-xs text-muted-foreground">Members</span>
                    </div>
                    <div className="flex flex-col">
                      <span className="text-2xl font-bold">{team.projects}</span>
                      <span className="text-xs text-muted-foreground">Projects</span>
                    </div>
                    <div className="flex flex-col">
                      <span className="text-2xl font-bold">{team.tasks}</span>
                      <span className="text-xs text-muted-foreground">Tasks</span>
                    </div>
                  </div>
                  <div className="mt-4 flex gap-2">
                    {team.role ? (
                      <Button variant="outline" className="w-full" asChild>
                        <Link href={`/dashboard/teams/${team.id}`}>
                          <Users className="mr-2 h-4 w-4" />
                          View Team
                        </Link>
                      </Button>
                    ) : (
                      <Button className="w-full bg-green-600 hover:bg-green-700">
                        <Plus className="mr-2 h-4 w-4" />
                        Join Team
                      </Button>
                    )}
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
