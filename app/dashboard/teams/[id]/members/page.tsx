import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { MoreHorizontal, Search, Shield, UserPlus } from "lucide-react"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

interface TeamMembersPageProps {
  params: {
    id: string
  }
}

export default function TeamMembersPage({ params }: TeamMembersPageProps) {
  const teamId = params.id

  // Dummy team data based on ID
  const teamData = {
    id: teamId,
    name: teamId === "design" ? "Design Team" : teamId === "development" ? "Development" : "Marketing",
    members: [
      {
        id: "john-doe",
        name: "John Doe",
        email: "john.doe@example.com",
        role: "Team Lead",
        avatar: "/placeholder.svg",
        initials: "JD",
        status: "online",
        joinDate: "Jan 15, 2023",
        permissions: "Admin",
      },
      {
        id: "sarah-johnson",
        name: "Sarah Johnson",
        email: "sarah.johnson@example.com",
        role: "Senior Designer",
        avatar: "/placeholder.svg",
        initials: "SJ",
        status: "online",
        joinDate: "Feb 3, 2023",
        permissions: "Member",
      },
      {
        id: "michael-brown",
        name: "Michael Brown",
        email: "michael.brown@example.com",
        role: "Developer",
        avatar: "/placeholder.svg",
        initials: "MB",
        status: "offline",
        joinDate: "Mar 12, 2023",
        permissions: "Member",
      },
      {
        id: "emily-davis",
        name: "Emily Davis",
        email: "emily.davis@example.com",
        role: "Content Writer",
        avatar: "/placeholder.svg",
        initials: "ED",
        status: "online",
        joinDate: "Apr 5, 2023",
        permissions: "Member",
      },
      {
        id: "alex-wilson",
        name: "Alex Wilson",
        email: "alex.wilson@example.com",
        role: "QA Tester",
        avatar: "/placeholder.svg",
        initials: "AW",
        status: "offline",
        joinDate: "May 20, 2023",
        permissions: "Member",
      },
      {
        id: "lisa-chen",
        name: "Lisa Chen",
        email: "lisa.chen@example.com",
        role: "UI Designer",
        avatar: "/placeholder.svg",
        initials: "LC",
        status: "online",
        joinDate: "Jun 10, 2023",
        permissions: "Member",
      },
      {
        id: "david-kim",
        name: "David Kim",
        email: "david.kim@example.com",
        role: "Frontend Developer",
        avatar: "/placeholder.svg",
        initials: "DK",
        status: "offline",
        joinDate: "Jul 8, 2023",
        permissions: "Member",
      },
      {
        id: "rachel-green",
        name: "Rachel Green",
        email: "rachel.green@example.com",
        role: "UX Researcher",
        avatar: "/placeholder.svg",
        initials: "RG",
        status: "online",
        joinDate: "Aug 15, 2023",
        permissions: "Member",
      },
    ],
  }

  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">{teamData.name} Members</h1>
          <p className="text-muted-foreground">Manage team members and their permissions.</p>
        </div>
        <div className="flex flex-wrap gap-2">
          <Button className="bg-green-600 hover:bg-green-700">
            <UserPlus className="mr-2 h-4 w-4" />
            Invite Members
          </Button>
        </div>
      </div>

      <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between">
        <div className="relative w-full sm:w-[300px]">
          <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
          <Input placeholder="Search members..." className="pl-10" />
        </div>
        <div className="flex gap-2 w-full sm:w-auto">
          <Button variant="outline" size="sm" className="w-full sm:w-auto">
            <Shield className="h-4 w-4 mr-2" />
            All Roles
          </Button>
          <Button variant="outline" size="sm" className="w-full sm:w-auto">
            Active
          </Button>
        </div>
      </div>

      <Card>
        <CardContent className="p-0">
          <div className="relative overflow-x-auto">
            <table className="w-full text-sm text-left">
              <thead className="text-xs uppercase bg-muted">
                <tr>
                  <th scope="col" className="px-6 py-3">
                    Member
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Role
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Permissions
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Joined
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Status
                  </th>
                  <th scope="col" className="px-6 py-3">
                    <span className="sr-only">Actions</span>
                  </th>
                </tr>
              </thead>
              <tbody>
                {teamData.members.map((member) => (
                  <tr key={member.id} className="border-b">
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-3">
                        <Avatar className="h-8 w-8">
                          <AvatarImage src={member.avatar || "/placeholder.svg"} alt={member.name} />
                          <AvatarFallback>{member.initials}</AvatarFallback>
                        </Avatar>
                        <div>
                          <p className="font-medium">{member.name}</p>
                          <p className="text-xs text-muted-foreground">{member.email}</p>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4">{member.role}</td>
                    <td className="px-6 py-4">
                      <Badge
                        className={
                          member.permissions === "Admin"
                            ? "bg-purple-100 text-purple-800 hover:bg-purple-100"
                            : "bg-blue-100 text-blue-800 hover:bg-blue-100"
                        }
                      >
                        {member.permissions}
                      </Badge>
                    </td>
                    <td className="px-6 py-4">{member.joinDate}</td>
                    <td className="px-6 py-4">
                      <div className="flex items-center">
                        <div
                          className={`h-2.5 w-2.5 rounded-full mr-2 ${
                            member.status === "online" ? "bg-green-500" : "bg-gray-300"
                          }`}
                        ></div>
                        {member.status === "online" ? "Online" : "Offline"}
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
                          <DropdownMenuItem>View Profile</DropdownMenuItem>
                          <DropdownMenuItem>Message</DropdownMenuItem>
                          <DropdownMenuSeparator />
                          <DropdownMenuItem>Change Role</DropdownMenuItem>
                          <DropdownMenuItem>Manage Permissions</DropdownMenuItem>
                          <DropdownMenuSeparator />
                          <DropdownMenuItem className="text-red-600">Remove from Team</DropdownMenuItem>
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
    </div>
  )
}
