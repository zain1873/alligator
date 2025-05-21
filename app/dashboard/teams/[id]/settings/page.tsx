import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Switch } from "@/components/ui/switch"
import { Separator } from "@/components/ui/separator"
import { AlertTriangle } from "lucide-react"
import { Plus } from "lucide-react" // Import Plus component

interface TeamSettingsPageProps {
  params: {
    id: string
  }
}

export default function TeamSettingsPage({ params }: TeamSettingsPageProps) {
  const teamId = params.id

  // Dummy team data based on ID
  const teamData = {
    id: teamId,
    name: teamId === "design" ? "Design Team" : teamId === "development" ? "Development" : "Marketing",
    description:
      teamId === "design"
        ? "UI/UX design and brand identity"
        : teamId === "development"
          ? "Frontend and backend development"
          : "Marketing campaigns and content creation",
    createdAt: "January 15, 2023",
    createdBy: "John Doe",
  }

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">{teamData.name} Settings</h1>
        <p className="text-muted-foreground">Manage team settings and preferences.</p>
      </div>

      <Tabs defaultValue="general" className="w-full">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="general">General</TabsTrigger>
          <TabsTrigger value="permissions">Permissions</TabsTrigger>
          <TabsTrigger value="integrations">Integrations</TabsTrigger>
          <TabsTrigger value="danger">Danger Zone</TabsTrigger>
        </TabsList>

        <TabsContent value="general" className="space-y-4 mt-4">
          <Card>
            <CardHeader>
              <CardTitle>Team Information</CardTitle>
              <CardDescription>Update your team's basic information.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="team-name">Team Name</Label>
                <Input id="team-name" defaultValue={teamData.name} />
              </div>
              <div className="space-y-2">
                <Label htmlFor="team-description">Description</Label>
                <Textarea id="team-description" defaultValue={teamData.description} className="min-h-[100px]" />
              </div>
              <div className="space-y-2">
                <Label>Team Creation</Label>
                <div className="text-sm text-muted-foreground">
                  Created on {teamData.createdAt} by {teamData.createdBy}
                </div>
              </div>
            </CardContent>
            <CardFooter className="flex justify-end gap-2">
              <Button variant="outline">Cancel</Button>
              <Button className="bg-green-600 hover:bg-green-700">Save Changes</Button>
            </CardFooter>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Team Avatar</CardTitle>
              <CardDescription>Upload a team avatar or logo.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center gap-4">
                <div className="h-20 w-20 rounded-full bg-muted flex items-center justify-center text-2xl font-bold">
                  {teamData.name.charAt(0)}
                </div>
                <div className="space-y-2">
                  <Button variant="outline">Upload New Avatar</Button>
                  <p className="text-xs text-muted-foreground">
                    Recommended size: 256x256px. Max file size: 5MB. Supported formats: JPG, PNG, GIF.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="permissions" className="space-y-4 mt-4">
          <Card>
            <CardHeader>
              <CardTitle>Member Permissions</CardTitle>
              <CardDescription>Control what team members can do within the team.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label>Members can invite others</Label>
                    <p className="text-sm text-muted-foreground">Allow team members to invite new people to the team</p>
                  </div>
                  <Switch defaultChecked />
                </div>
                <Separator />
                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label>Members can create projects</Label>
                    <p className="text-sm text-muted-foreground">Allow team members to create new projects</p>
                  </div>
                  <Switch defaultChecked />
                </div>
                <Separator />
                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label>Members can manage tasks</Label>
                    <p className="text-sm text-muted-foreground">
                      Allow team members to create, edit, and delete tasks
                    </p>
                  </div>
                  <Switch defaultChecked />
                </div>
                <Separator />
                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label>Members can delete comments</Label>
                    <p className="text-sm text-muted-foreground">Allow team members to delete any comments</p>
                  </div>
                  <Switch />
                </div>
                <Separator />
                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label>Members can export data</Label>
                    <p className="text-sm text-muted-foreground">Allow team members to export team data</p>
                  </div>
                  <Switch />
                </div>
              </div>
            </CardContent>
            <CardFooter className="flex justify-end gap-2">
              <Button variant="outline">Reset to Default</Button>
              <Button className="bg-green-600 hover:bg-green-700">Save Changes</Button>
            </CardFooter>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Role Management</CardTitle>
              <CardDescription>Define and manage team roles and their permissions.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <div className="flex items-center justify-between p-2 border rounded-md">
                  <div>
                    <p className="font-medium">Admin</p>
                    <p className="text-sm text-muted-foreground">Full access to all team settings and features</p>
                  </div>
                  <Button variant="outline" size="sm">
                    Edit
                  </Button>
                </div>
                <div className="flex items-center justify-between p-2 border rounded-md">
                  <div>
                    <p className="font-medium">Team Lead</p>
                    <p className="text-sm text-muted-foreground">
                      Can manage team members and projects, but not team settings
                    </p>
                  </div>
                  <Button variant="outline" size="sm">
                    Edit
                  </Button>
                </div>
                <div className="flex items-center justify-between p-2 border rounded-md">
                  <div>
                    <p className="font-medium">Member</p>
                    <p className="text-sm text-muted-foreground">
                      Can view and edit assigned tasks and participate in discussions
                    </p>
                  </div>
                  <Button variant="outline" size="sm">
                    Edit
                  </Button>
                </div>
              </div>
              <Button variant="outline" className="w-full">
                <Plus className="mr-2 h-4 w-4" />
                Create New Role
              </Button>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="integrations" className="space-y-4 mt-4">
          <Card>
            <CardHeader>
              <CardTitle>Connected Services</CardTitle>
              <CardDescription>Manage integrations with external services.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <div className="flex items-center justify-between p-3 border rounded-md">
                  <div className="flex items-center gap-3">
                    <div className="h-10 w-10 rounded bg-blue-100 flex items-center justify-center">
                      <svg
                        className="h-6 w-6 text-blue-600"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
                      </svg>
                    </div>
                    <div>
                      <p className="font-medium">Slack</p>
                      <p className="text-sm text-muted-foreground">Receive notifications in your Slack workspace</p>
                    </div>
                  </div>
                  <Button variant="outline" size="sm">
                    Connect
                  </Button>
                </div>
                <div className="flex items-center justify-between p-3 border rounded-md">
                  <div className="flex items-center gap-3">
                    <div className="h-10 w-10 rounded bg-blue-100 flex items-center justify-center">
                      <svg
                        className="h-6 w-6 text-blue-600"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
                        <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
                      </svg>
                    </div>
                    <div>
                      <p className="font-medium">Google Drive</p>
                      <p className="text-sm text-muted-foreground">Access and share files from Google Drive</p>
                    </div>
                  </div>
                  <Button variant="outline" size="sm">
                    Connect
                  </Button>
                </div>
                <div className="flex items-center justify-between p-3 border rounded-md">
                  <div className="flex items-center gap-3">
                    <div className="h-10 w-10 rounded bg-blue-100 flex items-center justify-center">
                      <svg
                        className="h-6 w-6 text-blue-600"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M21 2H3v16h5v4l4-4h5l4-4V2zM11 11V7M16 11V7" />
                      </svg>
                    </div>
                    <div>
                      <p className="font-medium">Twitch</p>
                      <p className="text-sm text-muted-foreground">Stream your team's activities on Twitch</p>
                    </div>
                  </div>
                  <Button variant="outline" size="sm">
                    Connect
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Webhooks</CardTitle>
              <CardDescription>Set up webhooks to connect with other services.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="webhook-url">Webhook URL</Label>
                <div className="flex gap-2">
                  <Input id="webhook-url" placeholder="https://example.com/webhook" className="flex-1" />
                  <Button variant="outline">Add</Button>
                </div>
              </div>
              <div className="text-sm text-muted-foreground">
                No webhooks configured. Add a webhook URL to receive events from this team.
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="danger" className="space-y-4 mt-4">
          <Card>
            <CardHeader>
              <CardTitle className="text-red-600">Danger Zone</CardTitle>
              <CardDescription>
                These actions are destructive and cannot be undone. Please proceed with caution.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="rounded-md border border-red-200 bg-red-50 p-4">
                <div className="flex items-start">
                  <AlertTriangle className="h-5 w-5 text-red-600 mr-3 mt-0.5" />
                  <div>
                    <h3 className="text-sm font-medium text-red-800">Archive Team</h3>
                    <div className="mt-2 text-sm text-red-700">
                      <p>
                        Archiving this team will make it read-only. Team members will no longer be able to create or
                        modify projects, tasks, or discussions. You can unarchive the team later.
                      </p>
                    </div>
                    <div className="mt-4">
                      <Button variant="outline" className="border-red-300 text-red-600 hover:bg-red-50">
                        Archive Team
                      </Button>
                    </div>
                  </div>
                </div>
              </div>

              <div className="rounded-md border border-red-200 bg-red-50 p-4">
                <div className="flex items-start">
                  <AlertTriangle className="h-5 w-5 text-red-600 mr-3 mt-0.5" />
                  <div>
                    <h3 className="text-sm font-medium text-red-800">Delete Team</h3>
                    <div className="mt-2 text-sm text-red-700">
                      <p>
                        Deleting this team will permanently remove all team data, including projects, tasks, and
                        discussions. This action cannot be undone.
                      </p>
                    </div>
                    <div className="mt-4">
                      <Button variant="destructive">Delete Team</Button>
                    </div>
                  </div>
                </div>
              </div>

              <div className="rounded-md border border-red-200 bg-red-50 p-4">
                <div className="flex items-start">
                  <AlertTriangle className="h-5 w-5 text-red-600 mr-3 mt-0.5" />
                  <div>
                    <h3 className="text-sm font-medium text-red-800">Leave Team</h3>
                    <div className="mt-2 text-sm text-red-700">
                      <p>
                        You will be removed from this team and will no longer have access to its projects, tasks, or
                        discussions.
                      </p>
                    </div>
                    <div className="mt-4">
                      <Button variant="outline" className="border-red-300 text-red-600 hover:bg-red-50">
                        Leave Team
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
