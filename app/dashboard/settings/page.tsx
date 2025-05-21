import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export default function SettingsPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Settings</h1>
        <p className="text-muted-foreground">
          Manage your account settings and preferences.
        </p>
      </div>
      
      <Tabs defaultValue="general" className="space-y-4">
        <TabsList>
          <TabsTrigger value="general">General</TabsTrigger>
          <TabsTrigger value="appearance">Appearance</TabsTrigger>
          <TabsTrigger value="notifications">Notifications</TabsTrigger>
          <TabsTrigger value="integrations">Integrations</TabsTrigger>
        </TabsList>
        
        <TabsContent value="general" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>General Settings</CardTitle>
              <CardDescription>
                Manage your basic account settings.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="language">Language</Label>
                <Select defaultValue="en">
                  <SelectTrigger id="language">
                    <SelectValue placeholder="Select language" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="en">English</SelectItem>
                    <SelectItem value="es">Spanish</SelectItem>
                    <SelectItem value="fr">French</SelectItem>
                    <SelectItem value="de">German</SelectItem>
                    <SelectItem value="ja">Japanese</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="timezone">Timezone</Label>
                <Select defaultValue="america-los_angeles">
                  <SelectTrigger id="timezone">
                    <SelectValue placeholder="Select timezone" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="america-los_angeles">Pacific Time (US & Canada)</SelectItem>
                    <SelectItem value="america-new_york">Eastern Time (US & Canada)</SelectItem>
                    <SelectItem value="europe-london">London</SelectItem>
                    <SelectItem value="europe-paris">Paris</SelectItem>
                    <SelectItem value="asia-tokyo">Tokyo</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="date-format">Date Format</Label>
                <Select defaultValue="mm-dd-yyyy">
                  <SelectTrigger id="date-format">
                    <SelectValue placeholder="Select date format" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="mm-dd-yyyy">MM/DD/YYYY</SelectItem>
                    <SelectItem value="dd-mm-yyyy">DD/MM/YYYY</SelectItem>
                    <SelectItem value="yyyy-mm-dd">YYYY/MM/DD</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              
              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label htmlFor="auto-save">Auto-save</Label>
                  <p className="text-sm text-muted-foreground">
                    Automatically save changes to tasks and projects
                  </p>
                </div>
                <Switch id="auto-save" defaultChecked />
              </div>
            </CardContent>
            <CardFooter>
              <Button>Save Changes</Button>
            </CardFooter>
          </Card>
          
          <Card>
            <CardHeader>
              <CardTitle>Email Settings</CardTitle>
              <CardDescription>
                Manage your email preferences.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="primary-email">Primary Email</Label>
                <Input id="primary-email" defaultValue="john.doe@example.com" />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="recovery-email">Recovery Email</Label>
                <Input id="recovery-email" defaultValue="johndoe.personal@gmail.com" />
              </div>
              
              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label htmlFor="marketing-emails">Marketing emails</Label>
                  <p className="text-sm text-muted-foreground">
                    Receive emails about new features and updates
                  </p>
                </div>
                <Switch id="marketing-emails" defaultChecked />
              </div>
            </CardContent>
            <CardFooter>
              <Button>Save Changes</Button>
            </CardFooter>
          </Card>
        </TabsContent>
        
        <TabsContent value="appearance" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Appearance</CardTitle>
              <CardDescription>
                Customize the look and feel of the application.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label>Theme</Label>
                <div className="grid grid-cols-3 gap-2">
                  <div className="flex flex-col items-center space-y-2">
                    <div className="border rounded-md p-2 cursor-pointer bg-white">
                      <div className="w-full h-10 bg-gray-100 rounded-md"></div>
                      <div className="w-full h-4 mt-2 bg-gray-100 rounded-md"></div>
                      <div className="w-full h-4 mt-1 bg-gray-100 rounded-md"></div>
                    </div>
                    <Label className="text-sm">Light</Label>
                  </div>
                  <div className="flex flex-col items-center space-y-2">
                    <div className="border rounded-md p-2 cursor-pointer bg-gray-900">
                      <div className="w-full h-10 bg-gray-800 rounded-md"></div>
                      <div className="w-full h-4 mt-2 bg-gray-800 rounded-md"></div>
                      <div className="w-full h-4 mt-1 bg-gray-800 rounded-md"></div>
                    </div>
                    <Label className="text-sm">Dark</Label>
                  </div>
                  <div className="flex flex-col items-center space-y-2">
                    <div className="border rounded-md p-2 cursor-pointer bg-gradient-to-b from-white to-gray-900">
                      <div className="w-full h-10 bg-gradient-to-r from-gray-100 to-gray-800 rounded-md"></div>
                      <div className="w-full h-4 mt-2 bg-gradient-to-r from-gray-100 to-gray-800 rounded-md"></div>
                      <div className="w-full h-4 mt-1 bg-gradient-to-r from-gray-100 to-gray-800 rounded-md"></div>
                    </div>
                    <Label className="text-sm">System</Label>
                  </div>
                </div>
              </div>
              
              <div className="space-y-2">
                <Label>Accent Color</Label>
                <div className="grid grid-cols-6 gap-2">
                  <div className="w-8 h-8 rounded-full bg-green-600 cursor-pointer ring-2 ring-offset-2 ring-green-600"></div>
                  <div className="w-8 h-8 rounded-full bg-blue-600 cursor-pointer"></div>
                  <div className="w-8 h-8 rounded-full bg-purple-600 cursor-pointer"></div>
                  <div className="w-8 h-8 rounded-full bg-red-600 cursor-pointer"></div>
                  <div className="w-8 h-8 rounded-full bg-orange-600 cursor-pointer"></div>
                  <div className="w-8 h-8 rounded-full bg-gray-600 cursor-pointer"></div>
                </div>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="font-size">Font Size</Label>
                <Select defaultValue="medium">
                  <SelectTrigger id="font-size">
                    <SelectValue placeholder="Select font size" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="small">Small</SelectItem>
                    <SelectItem value="medium">Medium</SelectItem>
                    <SelectItem value="large">Large</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              
              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label htmlFor="reduce-motion">Reduce motion</Label>
                  <p className="text-sm text-muted-foreground">
                    Reduce the amount of animations in the interface
                  </p>
                </div>
                <Switch id="reduce-motion" />
              </div>
            </CardContent>
            <CardFooter>
              <Button>Save Changes</Button>
            </CardFooter>
          </Card>
          
          <Card>
            <CardHeader>
              <CardTitle>Sidebar Settings</CardTitle>
              <CardDescription>
                Customize your sidebar experience.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label htmlFor="collapsed-sidebar">Collapsed sidebar by default</Label>
                  <p className="text-sm text-muted-foreground">
                    Start with a collapsed sidebar when you open the app
                  </p>
                </div>
                <Switch id="collapsed-sidebar" />
              </div>
              
              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label htmlFor="show-recent">Show recent items in sidebar\
