import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Search, Plus, Users, CheckSquare } from "lucide-react"
import Link from "next/link"

export default function TeamsPage() {
  // Dummy data for teams
  const teams = [
    {
      id: "design",
      name: "Design Team",
      description: "UI/UX design and brand identity",
      members: 6,
      projects: 4,
      tasks: 12,
      avatar: "/placeholder.svg",
      recentActivity: "Sarah updated the homepage design",
      timestamp: "10:45 AM",
    },
    {
      id: "development",
      name: "Development",
      description: "Frontend and backend development",
      members: 8,
      projects: 3,
      tasks: 24,
      avatar: "/placeholder.svg",
      recentActivity: "Michael deployed the new API",
      timestamp: "Yesterday",
    },
    {
      id: "marketing",
      name: "Marketing",
      description: "Marketing campaigns and content creation",
      members: 5,
      projects: 2,
      tasks: 8,
      avatar: "/placeholder.svg",
      recentActivity: "Emily scheduled the social media posts",
      timestamp: "2 days ago",
    },
    {
      id: "product",
      name: "Product",
      description: "Product management and roadmap planning",
      members: 4,
      projects: 2,
      tasks: 15,
      avatar: "/placeholder.svg",
      recentActivity: "Alex updated the product roadmap",
      timestamp: "3 days ago",
    },
    {
      id: "sales",
      name: "Sales",
      description: "Sales and customer relationship management",
      members: 7,
      projects: 1,
      tasks: 10,
      avatar: "/placeholder.svg",
      recentActivity: "Lisa closed a new enterprise deal",
      timestamp: "1 week ago",
    },
  ]

  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Teams</h1>
          <p className="text-muted-foreground">Manage your teams and collaborate with team members.</p>
        </div>
        <div className="flex flex-wrap gap-2">
          <Button className="bg-green-600 hover:bg-green-700">
            <Plus className="mr-2 h-4 w-4" />
            Create Team
          </Button>
          <Link href="/dashboard/teams/join">
            <Button variant="outline">
              <Users className="mr-2 h-4 w-4" />
              Join Team
            </Button>
          </Link>
        </div>
      </div>

      <div className="flex items-center space-x-2">
        <div className="relative flex-1 max-w-sm">
          <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input type="search" placeholder="Search teams..." className="pl-8" />
        </div>
      </div>

      <Tabs defaultValue="all" className="w-full">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="all">All Teams</TabsTrigger>
          <TabsTrigger value="my">My Teams</TabsTrigger>
          <TabsTrigger value="recent">Recently Active</TabsTrigger>
          <TabsTrigger value="favorites">Favorites</TabsTrigger>
        </TabsList>
        <TabsContent value="all" className="space-y-4 mt-6">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {teams.map((team) => (
              <Link href={`/dashboard/teams/${team.id}`} key={team.id} className="block">
                <Card className="h-full hover:bg-muted/50 transition-colors">
                  <CardHeader className="flex flex-row items-start justify-between space-y-0 pb-2">
                    <div className="flex items-center space-x-3">
                      <Avatar className="h-10 w-10">
                        <AvatarImage src={team.avatar || "/placeholder.svg"} alt={team.name} />
                        <AvatarFallback>{team.name.charAt(0)}</AvatarFallback>
                      </Avatar>
                      <div>
                        <CardTitle>{team.name}</CardTitle>
                        <CardDescription>{team.description}</CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="flex justify-between items-center mb-4">
                      <div className="flex space-x-4">
                        <Badge variant="outline" className="flex items-center gap-1">
                          <Users className="h-3 w-3" />
                          <span>{team.members}</span>
                        </Badge>
                        <Badge variant="outline" className="flex items-center gap-1">
                          <CheckSquare className="h-3 w-3" />
                          <span>{team.tasks}</span>
                        </Badge>
                      </div>
                    </div>
                    <div className="text-sm">
                      <p className="text-muted-foreground truncate">{team.recentActivity}</p>
                      <p className="text-xs text-muted-foreground mt-1">{team.timestamp}</p>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
            <Card className="h-full border-dashed flex flex-col items-center justify-center p-6">
              <div className="rounded-full bg-muted flex items-center justify-center h-12 w-12 mb-4">
                <Users className="h-6 w-6 text-muted-foreground" />
              </div>
              <h3 className="text-lg font-medium mb-1">Create New Team</h3>
              <p className="text-sm text-muted-foreground text-center mb-4">Start collaborating with your colleagues</p>
              <Button variant="outline" className="w-full">
                <Plus className="mr-2 h-4 w-4" />
                Create Team
              </Button>
            </Card>
          </div>
        </TabsContent>
        <TabsContent value="my" className="mt-6">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {teams.slice(0, 3).map((team) => (
              <Link href={`/dashboard/teams/${team.id}`} key={team.id} className="block">
                <Card className="h-full hover:bg-muted/50 transition-colors">
                  <CardHeader className="flex flex-row items-start justify-between space-y-0 pb-2">
                    <div className="flex items-center space-x-3">
                      <Avatar className="h-10 w-10">
                        <AvatarImage src={team.avatar || "/placeholder.svg"} alt={team.name} />
                        <AvatarFallback>{team.name.charAt(0)}</AvatarFallback>
                      </Avatar>
                      <div>
                        <CardTitle>{team.name}</CardTitle>
                        <CardDescription>{team.description}</CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="flex justify-between items-center mb-4">
                      <div className="flex space-x-4">
                        <Badge variant="outline" className="flex items-center gap-1">
                          <Users className="h-3 w-3" />
                          <span>{team.members}</span>
                        </Badge>
                        <Badge variant="outline" className="flex items-center gap-1">
                          <CheckSquare className="h-3 w-3" />
                          <span>{team.tasks}</span>
                        </Badge>
                      </div>
                    </div>
                    <div className="text-sm">
                      <p className="text-muted-foreground truncate">{team.recentActivity}</p>
                      <p className="text-xs text-muted-foreground mt-1">{team.timestamp}</p>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </TabsContent>
        <TabsContent value="recent" className="mt-6">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {teams.slice(0, 2).map((team) => (
              <Link href={`/dashboard/teams/${team.id}`} key={team.id} className="block">
                <Card className="h-full hover:bg-muted/50 transition-colors">
                  <CardHeader className="flex flex-row items-start justify-between space-y-0 pb-2">
                    <div className="flex items-center space-x-3">
                      <Avatar className="h-10 w-10">
                        <AvatarImage src={team.avatar || "/placeholder.svg"} alt={team.name} />
                        <AvatarFallback>{team.name.charAt(0)}</AvatarFallback>
                      </Avatar>
                      <div>
                        <CardTitle>{team.name}</CardTitle>
                        <CardDescription>{team.description}</CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="flex justify-between items-center mb-4">
                      <div className="flex space-x-4">
                        <Badge variant="outline" className="flex items-center gap-1">
                          <Users className="h-3 w-3" />
                          <span>{team.members}</span>
                        </Badge>
                        <Badge variant="outline" className="flex items-center gap-1">
                          <CheckSquare className="h-3 w-3" />
                          <span>{team.tasks}</span>
                        </Badge>
                      </div>
                    </div>
                    <div className="text-sm">
                      <p className="text-muted-foreground truncate">{team.recentActivity}</p>
                      <p className="text-xs text-muted-foreground mt-1">{team.timestamp}</p>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </TabsContent>
        <TabsContent value="favorites" className="mt-6">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {teams.slice(1, 2).map((team) => (
              <Link href={`/dashboard/teams/${team.id}`} key={team.id} className="block">
                <Card className="h-full hover:bg-muted/50 transition-colors">
                  <CardHeader className="flex flex-row items-start justify-between space-y-0 pb-2">
                    <div className="flex items-center space-x-3">
                      <Avatar className="h-10 w-10">
                        <AvatarImage src={team.avatar || "/placeholder.svg"} alt={team.name} />
                        <AvatarFallback>{team.name.charAt(0)}</AvatarFallback>
                      </Avatar>
                      <div>
                        <CardTitle>{team.name}</CardTitle>
                        <CardDescription>{team.description}</CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="flex justify-between items-center mb-4">
                      <div className="flex space-x-4">
                        <Badge variant="outline" className="flex items-center gap-1">
                          <Users className="h-3 w-3" />
                          <span>{team.members}</span>
                        </Badge>
                        <Badge variant="outline" className="flex items-center gap-1">
                          <CheckSquare className="h-3 w-3" />
                          <span>{team.tasks}</span>
                        </Badge>
                      </div>
                    </div>
                    <div className="text-sm">
                      <p className="text-muted-foreground truncate">{team.recentActivity}</p>
                      <p className="text-xs text-muted-foreground mt-1">{team.timestamp}</p>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}
