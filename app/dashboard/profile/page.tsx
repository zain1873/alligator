import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Separator } from "@/components/ui/separator"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Textarea } from "@/components/ui/textarea"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { MapPin } from "lucide-react"

export default function ProfilePage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Profile</h1>
        <p className="text-muted-foreground">Manage your account settings and profile information.</p>
      </div>

      <Tabs defaultValue="general" className="space-y-4">
        <TabsList>
          <TabsTrigger value="general">General</TabsTrigger>
          <TabsTrigger value="password">Password</TabsTrigger>
          <TabsTrigger value="notifications">Notifications</TabsTrigger>
          <TabsTrigger value="activity">Activity</TabsTrigger>
        </TabsList>

        <TabsContent value="general" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Profile Information</CardTitle>
              <CardDescription>Update your personal information and profile picture.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="flex flex-col md:flex-row gap-6">
                <div className="flex flex-col items-center space-y-2">
                  <Avatar className="h-24 w-24">
                    <AvatarImage src="/placeholder.svg" alt="John Doe" />
                    <AvatarFallback>JD</AvatarFallback>
                  </Avatar>
                  <Button variant="outline" size="sm">
                    Change Avatar
                  </Button>
                </div>

                <div className="flex-1 space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="first-name">First name</Label>
                      <Input id="first-name" defaultValue="John" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="last-name">Last name</Label>
                      <Input id="last-name" defaultValue="Doe" />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" type="email" defaultValue="john.doe@example.com" />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone number</Label>
                      <Input id="phone" type="tel" defaultValue="+1 (555) 123-4567" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="location">Location</Label>
                      <Input id="location" defaultValue="San Francisco, CA" />
                    </div>
                  </div>
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="bio">Bio</Label>
                <Textarea
                  id="bio"
                  placeholder="Write a short bio about yourself"
                  defaultValue="Product designer with 5+ years of experience in creating user-centered digital products. Passionate about solving complex problems through design thinking."
                  className="min-h-[120px]"
                />
              </div>
            </CardContent>
            <CardFooter className="flex justify-end">
              <Button>Save Changes</Button>
            </CardFooter>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Work Information</CardTitle>
              <CardDescription>Update your work-related information.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="job-title">Job Title</Label>
                <Input id="job-title" defaultValue="Senior Product Designer" />
              </div>

              <div className="space-y-2">
                <Label htmlFor="department">Department</Label>
                <Input id="department" defaultValue="Design" />
              </div>

              <div className="space-y-2">
                <Label htmlFor="skills">Skills</Label>
                <div className="flex flex-wrap gap-2 border rounded-md p-3">
                  <Badge>UI Design</Badge>
                  <Badge>UX Research</Badge>
                  <Badge>Prototyping</Badge>
                  <Badge>Wireframing</Badge>
                  <Badge>User Testing</Badge>
                  <Badge>Figma</Badge>
                  <Badge>Sketch</Badge>
                  <Button variant="outline" size="sm" className="h-6">
                    + Add
                  </Button>
                </div>
              </div>
            </CardContent>
            <CardFooter className="flex justify-end">
              <Button>Save Changes</Button>
            </CardFooter>
          </Card>
        </TabsContent>

        <TabsContent value="password" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Password</CardTitle>
              <CardDescription>Change your password or enable two-factor authentication.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="current-password">Current Password</Label>
                <Input id="current-password" type="password" />
              </div>

              <div className="space-y-2">
                <Label htmlFor="new-password">New Password</Label>
                <Input id="new-password" type="password" />
              </div>

              <div className="space-y-2">
                <Label htmlFor="confirm-password">Confirm New Password</Label>
                <Input id="confirm-password" type="password" />
              </div>
            </CardContent>
            <CardFooter className="flex justify-end">
              <Button>Update Password</Button>
            </CardFooter>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Two-Factor Authentication</CardTitle>
              <CardDescription>Add an extra layer of security to your account.</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex items-center justify-between">
                <div className="space-y-1">
                  <p className="font-medium">Two-factor authentication is disabled</p>
                  <p className="text-sm text-muted-foreground">Protect your account with two-factor authentication.</p>
                </div>
                <Button>Enable</Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="notifications" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Notification Preferences</CardTitle>
              <CardDescription>Choose how you want to be notified.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-4">
                <h3 className="text-lg font-medium">Email Notifications</h3>
                <div className="grid gap-2">
                  <div className="flex items-center justify-between">
                    <Label htmlFor="email-tasks" className="flex items-center gap-2">
                      <span>Task assignments and updates</span>
                    </Label>
                    <input
                      type="checkbox"
                      id="email-tasks"
                      className="h-4 w-4 rounded border-gray-300"
                      defaultChecked
                    />
                  </div>
                  <div className="flex items-center justify-between">
                    <Label htmlFor="email-projects" className="flex items-center gap-2">
                      <span>Project updates</span>
                    </Label>
                    <input
                      type="checkbox"
                      id="email-projects"
                      className="h-4 w-4 rounded border-gray-300"
                      defaultChecked
                    />
                  </div>
                  <div className="flex items-center justify-between">
                    <Label htmlFor="email-comments" className="flex items-center gap-2">
                      <span>Comments and mentions</span>
                    </Label>
                    <input
                      type="checkbox"
                      id="email-comments"
                      className="h-4 w-4 rounded border-gray-300"
                      defaultChecked
                    />
                  </div>
                  <div className="flex items-center justify-between">
                    <Label htmlFor="email-team" className="flex items-center gap-2">
                      <span>Team updates</span>
                    </Label>
                    <input type="checkbox" id="email-team" className="h-4 w-4 rounded border-gray-300" defaultChecked />
                  </div>
                </div>
              </div>

              <Separator />

              <div className="space-y-4">
                <h3 className="text-lg font-medium">In-App Notifications</h3>
                <div className="grid gap-2">
                  <div className="flex items-center justify-between">
                    <Label htmlFor="app-tasks" className="flex items-center gap-2">
                      <span>Task assignments and updates</span>
                    </Label>
                    <input type="checkbox" id="app-tasks" className="h-4 w-4 rounded border-gray-300" defaultChecked />
                  </div>
                  <div className="flex items-center justify-between">
                    <Label htmlFor="app-projects" className="flex items-center gap-2">
                      <span>Project updates</span>
                    </Label>
                    <input
                      type="checkbox"
                      id="app-projects"
                      className="h-4 w-4 rounded border-gray-300"
                      defaultChecked
                    />
                  </div>
                  <div className="flex items-center justify-between">
                    <Label htmlFor="app-comments" className="flex items-center gap-2">
                      <span>Comments and mentions</span>
                    </Label>
                    <input
                      type="checkbox"
                      id="app-comments"
                      className="h-4 w-4 rounded border-gray-300"
                      defaultChecked
                    />
                  </div>
                  <div className="flex items-center justify-between">
                    <Label htmlFor="app-team" className="flex items-center gap-2">
                      <span>Team updates</span>
                    </Label>
                    <input type="checkbox" id="app-team" className="h-4 w-4 rounded border-gray-300" defaultChecked />
                  </div>
                </div>
              </div>
            </CardContent>
            <CardFooter className="flex justify-end">
              <Button>Save Preferences</Button>
            </CardFooter>
          </Card>
        </TabsContent>

        <TabsContent value="activity" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Recent Activity</CardTitle>
              <CardDescription>Your recent account activity and login history.</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-8">
                <div className="space-y-4">
                  <h3 className="text-lg font-medium">Login History</h3>
                  <div className="space-y-4">
                    <div className="flex items-start justify-between">
                      <div className="space-y-1">
                        <p className="font-medium">Current session</p>
                        <div className="flex items-center text-sm text-muted-foreground">
                          <MapPin className="mr-1 h-4 w-4" />
                          <span>San Francisco, CA, USA</span>
                          <span className="mx-2">•</span>
                          <span>Chrome on macOS</span>
                        </div>
                      </div>
                      <Badge>Active Now</Badge>
                    </div>

                    <div className="flex items-start justify-between">
                      <div className="space-y-1">
                        <p className="font-medium">Previous login</p>
                        <div className="flex items-center text-sm text-muted-foreground">
                          <MapPin className="mr-1 h-4 w-4" />
                          <span>San Francisco, CA, USA</span>
                          <span className="mx-2">•</span>
                          <span>Chrome on macOS</span>
                        </div>
                      </div>
                      <div className="text-sm text-muted-foreground">Yesterday at 2:30 PM</div>
                    </div>

                    <div className="flex items-start justify-between">
                      <div className="space-y-1">
                        <p className="font-medium">Previous login</p>
                        <div className="flex items-center text-sm text-muted-foreground">
                          <MapPin className="mr-1 h-4 w-4" />
                          <span>New York, NY, USA</span>
                          <span className="mx-2">•</span>
                          <span>Safari on iOS</span>
                        </div>
                      </div>
                      <div className="text-sm text-muted-foreground">June 20, 2023 at 10:15 AM</div>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <h3 className="text-lg font-medium">Account Activity</h3>
                  <div className="space-y-4">
                    <div className="flex items-start justify-between">
                      <div className="space-y-1">
                        <p className="font-medium">Password changed</p>
                        <p className="text-sm text-muted-foreground">You changed your password</p>
                      </div>
                      <div className="text-sm text-muted-foreground">June 15, 2023 at 9:30 AM</div>
                    </div>

                    <div className="flex items-start justify-between">
                      <div className="space-y-1">
                        <p className="font-medium">Email updated</p>
                        <p className="text-sm text-muted-foreground">
                          You updated your email from j.doe@example.com to john.doe@example.com
                        </p>
                      </div>
                      <div className="text-sm text-muted-foreground">June 10, 2023 at 3:45 PM</div>
                    </div>

                    <div className="flex items-start justify-between">
                      <div className="space-y-1">
                        <p className="font-medium">Account created</p>
                        <p className="text-sm text-muted-foreground">You created your account</p>
                      </div>
                      <div className="text-sm text-muted-foreground">June 1, 2023 at 11:20 AM</div>
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
