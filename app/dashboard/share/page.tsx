import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Copy, Mail, Users } from "lucide-react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

export default function SharePage() {
  return (
    <div className="mx-auto max-w-2xl">
      <h1 className="text-3xl font-bold mb-6">Share Task List</h1>

      <Card>
        <CardHeader>
          <CardTitle>Work Tasks</CardTitle>
          <CardDescription>Share this task list with your team members</CardDescription>
        </CardHeader>
        <CardContent>
          <Tabs defaultValue="link">
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="link">Share Link</TabsTrigger>
              <TabsTrigger value="email">Invite by Email</TabsTrigger>
            </TabsList>
            <TabsContent value="link" className="space-y-4">
              <div className="flex items-center space-x-2 mt-4">
                <Input readOnly value="https://doitalligator.com/share/work-tasks-xyz123" className="flex-1" />
                <Button variant="outline" size="icon">
                  <Copy className="h-4 w-4" />
                  <span className="sr-only">Copy link</span>
                </Button>
              </div>

              <div className="space-y-2 mt-6">
                <Label>Permission settings</Label>
                <div className="grid grid-cols-2 gap-2">
                  <Button variant="outline" className="justify-start">
                    <Users className="mr-2 h-4 w-4" />
                    Can view
                  </Button>
                  <Button variant="outline" className="justify-start">
                    <Users className="mr-2 h-4 w-4" />
                    Can edit
                  </Button>
                </div>
              </div>
            </TabsContent>
            <TabsContent value="email" className="space-y-4">
              <div className="space-y-2 mt-4">
                <Label htmlFor="email">Email address</Label>
                <div className="flex items-center space-x-2">
                  <Input id="email" placeholder="Enter email address" type="email" className="flex-1" />
                  <Button>
                    <Mail className="mr-2 h-4 w-4" />
                    Invite
                  </Button>
                </div>
              </div>

              <div className="space-y-2 mt-6">
                <Label>Permission settings</Label>
                <div className="grid grid-cols-2 gap-2">
                  <Button variant="outline" className="justify-start">
                    <Users className="mr-2 h-4 w-4" />
                    Can view
                  </Button>
                  <Button variant="outline" className="justify-start">
                    <Users className="mr-2 h-4 w-4" />
                    Can edit
                  </Button>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </CardContent>
        <CardFooter className="border-t pt-6">
          <h3 className="text-sm font-medium mb-4">People with access</h3>
          <div className="w-full space-y-3">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <Avatar className="h-8 w-8">
                  <AvatarImage src="/placeholder.svg" />
                  <AvatarFallback>JD</AvatarFallback>
                </Avatar>
                <div>
                  <p className="text-sm font-medium">John Doe (You)</p>
                  <p className="text-xs text-muted-foreground">john.doe@example.com</p>
                </div>
              </div>
              <div className="text-sm text-muted-foreground">Owner</div>
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <Avatar className="h-8 w-8">
                  <AvatarImage src="/placeholder.svg" />
                  <AvatarFallback>AJ</AvatarFallback>
                </Avatar>
                <div>
                  <p className="text-sm font-medium">Alex Johnson</p>
                  <p className="text-xs text-muted-foreground">alex.johnson@example.com</p>
                </div>
              </div>
              <div className="text-sm text-muted-foreground">Editor</div>
            </div>
          </div>
        </CardFooter>
      </Card>
    </div>
  )
}
