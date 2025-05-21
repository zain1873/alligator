import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { X } from "lucide-react"
import { cn } from "@/lib/utils"

export default function CreateTeamPage() {
  const members = [
    { id: "john-doe", name: "John Doe", initials: "JD", email: "john.doe@example.com" },
    { id: "sarah-johnson", name: "Sarah Johnson", initials: "SJ", email: "sarah.johnson@example.com" },
    { id: "michael-brown", name: "Michael Brown", initials: "MB", email: "michael.brown@example.com" },
    { id: "emily-davis", name: "Emily Davis", initials: "ED", email: "emily.davis@example.com" },
    { id: "alex-wilson", name: "Alex Wilson", initials: "AW", email: "alex.wilson@example.com" },
    { id: "lisa-chen", name: "Lisa Chen", initials: "LC", email: "lisa.chen@example.com" },
  ]

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Create New Team</h1>
        <p className="text-muted-foreground">Create a new team to collaborate with your colleagues.</p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Team Information</CardTitle>
          <CardDescription>Provide basic information about your team.</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="team-name">Team Name</Label>
            <Input id="team-name" placeholder="E.g., Design Team, Marketing Team" />
          </div>

          <div className="space-y-2">
            <Label htmlFor="team-description">Description</Label>
            <Textarea
              id="team-description"
              placeholder="Describe the purpose and goals of this team"
              className="min-h-[100px]"
            />
          </div>

          <div className="space-y-2">
            <Label>Team Members</Label>
            <div className="border rounded-md p-4">
              <div className="flex flex-wrap gap-2 mb-4">
                {/* Selected members would be managed by state in a real app */}
                <Badge variant="secondary" className="flex items-center gap-1">
                  <Avatar className="h-4 w-4">
                    <AvatarFallback className="text-[10px]">JD</AvatarFallback>
                  </Avatar>
                  <span>John Doe (You)</span>
                  <Button variant="ghost" size="icon" className="h-4 w-4 ml-1 p-0" disabled>
                    <X className="h-3 w-3" />
                  </Button>
                </Badge>
                <Badge variant="secondary" className="flex items-center gap-1">
                  <Avatar className="h-4 w-4">
                    <AvatarFallback className="text-[10px]">SJ</AvatarFallback>
                  </Avatar>
                  <span>Sarah Johnson</span>
                  <Button variant="ghost" size="icon" className="h-4 w-4 ml-1 p-0">
                    <X className="h-3 w-3" />
                  </Button>
                </Badge>
              </div>

              <div className="space-y-2">
                <Label htmlFor="search-members">Add Members</Label>
                <Input id="search-members" placeholder="Search by name or email" />
              </div>

              <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-2">
                {members.slice(2).map((member) => (
                  <div
                    key={member.id}
                    className={cn("flex items-center gap-2 p-2 rounded-md cursor-pointer hover:bg-muted")}
                  >
                    <Avatar className="h-8 w-8">
                      <AvatarFallback>{member.initials}</AvatarFallback>
                    </Avatar>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-medium truncate">{member.name}</p>
                      <p className="text-xs text-muted-foreground truncate">{member.email}</p>
                    </div>
                    <Button variant="outline" size="sm">
                      Add
                    </Button>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="space-y-2">
            <Label>Team Permissions</Label>
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium">All members can create projects</p>
                  <p className="text-xs text-muted-foreground">Allow all team members to create new projects</p>
                </div>
                <input type="checkbox" className="h-4 w-4" defaultChecked />
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium">All members can invite others</p>
                  <p className="text-xs text-muted-foreground">Allow all team members to invite new members</p>
                </div>
                <input type="checkbox" className="h-4 w-4" />
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium">All members can manage tasks</p>
                  <p className="text-xs text-muted-foreground">Allow all team members to create and assign tasks</p>
                </div>
                <input type="checkbox" className="h-4 w-4" defaultChecked />
              </div>
            </div>
          </div>
        </CardContent>
        <CardFooter className="flex justify-end gap-2">
          <Button variant="outline">Cancel</Button>
          <Button className="bg-green-600 hover:bg-green-700">Create Team</Button>
        </CardFooter>
      </Card>
    </div>
  )
}
