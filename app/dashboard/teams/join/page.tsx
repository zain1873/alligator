import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Search, Users } from "lucide-react"
import { TeamJoinButton } from "@/components/team-join-button"

export default function JoinTeamPage() {
  // Dummy teams data
  const teams = [
    {
      id: "design",
      name: "Design Team",
      description: "UI/UX design and brand identity",
      members: 6,
      avatar: "/placeholder.svg",
    },
    {
      id: "development",
      name: "Development",
      description: "Frontend and backend development",
      members: 8,
      avatar: "/placeholder.svg",
    },
    {
      id: "marketing",
      name: "Marketing",
      description: "Marketing campaigns and content creation",
      members: 5,
      avatar: "/placeholder.svg",
    },
    {
      id: "product",
      name: "Product",
      description: "Product management and roadmap planning",
      members: 4,
      avatar: "/placeholder.svg",
    },
    {
      id: "sales",
      name: "Sales",
      description: "Sales and customer relationship management",
      members: 7,
      avatar: "/placeholder.svg",
    },
    {
      id: "support",
      name: "Customer Support",
      description: "Customer support and success",
      members: 5,
      avatar: "/placeholder.svg",
    },
    {
      id: "engineering",
      name: "Engineering",
      description: "Core engineering and infrastructure",
      members: 12,
      avatar: "/placeholder.svg",
    },
    {
      id: "qa",
      name: "Quality Assurance",
      description: "Testing and quality control",
      members: 4,
      avatar: "/placeholder.svg",
    },
    {
      id: "hr",
      name: "Human Resources",
      description: "HR and talent acquisition",
      members: 3,
      avatar: "/placeholder.svg",
    },
  ]

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Join a Team</h1>
        <p className="text-muted-foreground">Browse available teams and request to join.</p>
      </div>

      <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between">
        <div className="relative w-full sm:w-[300px]">
          <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
          <Input placeholder="Search teams..." className="pl-10" />
        </div>
        <div className="flex gap-2 w-full sm:w-auto">
          <Button variant="outline" size="sm" className="w-full sm:w-auto">
            <Users className="h-4 w-4 mr-2" />
            All Teams
          </Button>
          <Button variant="outline" size="sm" className="w-full sm:w-auto">
            Popular
          </Button>
          <Button variant="outline" size="sm" className="w-full sm:w-auto">
            Recently Added
          </Button>
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {teams.map((team) => (
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
              </div>
            </CardHeader>
            <CardContent>
              <div className="flex items-center justify-between mb-4">
                <Badge variant="outline" className="flex items-center gap-1">
                  <Users className="h-3 w-3" />
                  <span>{team.members} members</span>
                </Badge>
                <span className="text-xs text-muted-foreground">Created May 15, 2025</span>
              </div>
              <TeamJoinButton className="w-full bg-green-600 hover:bg-green-700">Request to Join</TeamJoinButton>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}
