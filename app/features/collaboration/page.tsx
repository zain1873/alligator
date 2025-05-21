import Link from "next/link"
import { CheckCircle, ArrowLeft, MessageSquare, FileText, Users, Share2, Bell } from "lucide-react"
import { Button } from "@/components/ui/button"
import { LandingNavbar } from "@/components/landing-navbar"
import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

export default function CollaborationPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <LandingNavbar />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-blue-50 dark:bg-blue-900">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <Link href="/features" className="flex items-center text-sm text-muted-foreground mb-4">
                <ArrowLeft className="mr-1 h-4 w-4" />
                Back to all features
              </Link>
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-blue-100 px-3 py-1 text-sm dark:bg-blue-800 mb-4">
                  <Share2 className="h-4 w-4 inline mr-2" />
                  Collaboration
                </div>
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                  One platform for everything
                </h1>
                <p className="max-w-[600px] text-gray-500 md:text-xl dark:text-gray-400">
                  Share task lists with your team, assign responsibilities, and track progress together.
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row mt-6">
                <Link href="/signup">
                  <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
                    Get started for free
                  </Button>
                </Link>
                <Link href="/pricing">
                  <Button size="lg" variant="outline">
                    View pricing
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Chat Features */}
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
              <div className="space-y-4">
                <h2 className="text-3xl font-bold tracking-tighter">Real-time communication</h2>
                <p className="text-gray-500 dark:text-gray-400">
                  DoItAlligator's integrated chat system keeps all your team's communication in one place, organized by
                  team, project, or task.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <CheckCircle className="mr-2 h-4 w-4 text-blue-600" />
                    <span>Team, project, and task-specific chat channels</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="mr-2 h-4 w-4 text-blue-600" />
                    <span>Direct messaging between team members</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="mr-2 h-4 w-4 text-blue-600" />
                    <span>@mentions to notify specific team members</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="mr-2 h-4 w-4 text-blue-600" />
                    <span>Rich text formatting and emoji support</span>
                  </li>
                </ul>
              </div>
              <div className="rounded-xl border bg-card p-6 shadow-sm">
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <MessageSquare className="h-5 w-5 text-blue-600" />
                      <h3 className="text-lg font-semibold">Website Redesign Chat</h3>
                    </div>
                    <span className="text-xs text-muted-foreground">3 members</span>
                  </div>
                  <div className="space-y-4">
                    <div className="flex gap-3">
                      <Avatar className="h-8 w-8">
                        <AvatarImage src="/placeholder.svg" alt="Sarah" />
                        <AvatarFallback>SJ</AvatarFallback>
                      </Avatar>
                      <div className="flex-1">
                        <div className="flex items-center justify-between">
                          <p className="text-sm font-medium">Sarah Johnson</p>
                          <span className="text-xs text-muted-foreground">10:30 AM</span>
                        </div>
                        <p className="text-sm">
                          I've updated the homepage design based on yesterday's feedback. Take a look when you get a
                          chance!
                        </p>
                        <div className="mt-1 flex items-center gap-1 text-xs text-blue-600">
                          <FileText className="h-3 w-3" />
                          <span>homepage-v2.fig</span>
                        </div>
                      </div>
                    </div>
                    <div className="flex gap-3">
                      <Avatar className="h-8 w-8">
                        <AvatarImage src="/placeholder.svg" alt="Michael" />
                        <AvatarFallback>MB</AvatarFallback>
                      </Avatar>
                      <div className="flex-1">
                        <div className="flex items-center justify-between">
                          <p className="text-sm font-medium">Michael Brown</p>
                          <span className="text-xs text-muted-foreground">10:45 AM</span>
                        </div>
                        <p className="text-sm">
                          Looks great! @JohnDoe can you review the mobile responsiveness when you get a chance?
                        </p>
                      </div>
                    </div>
                    <div className="flex gap-3">
                      <Avatar className="h-8 w-8">
                        <AvatarImage src="/placeholder.svg" alt="John" />
                        <AvatarFallback>JD</AvatarFallback>
                      </Avatar>
                      <div className="flex-1">
                        <div className="flex items-center justify-between">
                          <p className="text-sm font-medium">John Doe</p>
                          <span className="text-xs text-muted-foreground">11:15 AM</span>
                        </div>
                        <p className="text-sm">
                          Will do! I'll check it on different devices and get back to you by EOD.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 pt-2 border-t">
                    <input
                      type="text"
                      placeholder="Type a message..."
                      className="flex-1 rounded-md border border-input bg-background px-3 py-2 text-sm"
                    />
                    <Button size="sm">Send</Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* File Sharing */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-50 dark:bg-gray-900">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
              <div className="rounded-xl border bg-card p-6 shadow-sm order-2 lg:order-1">
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <FileText className="h-5 w-5 text-blue-600" />
                      <h3 className="text-lg font-semibold">Project Files</h3>
                    </div>
                    <Button size="sm">Upload</Button>
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center justify-between p-2 border rounded-md">
                      <div className="flex items-center gap-2">
                        <div className="h-10 w-10 bg-blue-100 rounded flex items-center justify-center">
                          <FileText className="h-5 w-5 text-blue-600" />
                        </div>
                        <div>
                          <p className="text-sm font-medium">homepage-v2.fig</p>
                          <p className="text-xs text-muted-foreground">
                            3.2 MB • Uploaded by Sarah Johnson on May 20, 2025
                          </p>
                        </div>
                      </div>
                      <Button variant="ghost" size="sm">
                        Download
                      </Button>
                    </div>
                    <div className="flex items-center justify-between p-2 border rounded-md">
                      <div className="flex items-center gap-2">
                        <div className="h-10 w-10 bg-blue-100 rounded flex items-center justify-center">
                          <FileText className="h-5 w-5 text-blue-600" />
                        </div>
                        <div>
                          <p className="text-sm font-medium">requirements.pdf</p>
                          <p className="text-xs text-muted-foreground">1.8 MB • Uploaded by John Doe on May 19, 2025</p>
                        </div>
                      </div>
                      <Button variant="ghost" size="sm">
                        Download
                      </Button>
                    </div>
                    <div className="flex items-center justify-between p-2 border rounded-md">
                      <div className="flex items-center gap-2">
                        <div className="h-10 w-10 bg-blue-100 rounded flex items-center justify-center">
                          <FileText className="h-5 w-5 text-blue-600" />
                        </div>
                        <div>
                          <p className="text-sm font-medium">feedback.docx</p>
                          <p className="text-xs text-muted-foreground">
                            0.9 MB • Uploaded by Michael Brown on May 21, 2025
                          </p>
                        </div>
                      </div>
                      <Button variant="ghost" size="sm">
                        Download
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="space-y-4 order-1 lg:order-2">
                <h2 className="text-3xl font-bold tracking-tighter">File sharing and attachments</h2>
                <p className="text-gray-500 dark:text-gray-400">
                  Share files and documents directly within DoItAlligator. Attach files to tasks, projects, or share
                  them in chat for easy access by your team.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <CheckCircle className="mr-2 h-4 w-4 text-blue-600" />
                    <span>Attach files to tasks and projects</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="mr-2 h-4 w-4 text-blue-600" />
                    <span>Share files in chat</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="mr-2 h-4 w-4 text-blue-600" />
                    <span>Preview documents without downloading</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="mr-2 h-4 w-4 text-blue-600" />
                    <span>Version history for important documents</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Activity Tracking */}
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold tracking-tighter">Stay in the loop</h2>
              <p className="mt-4 text-gray-500 md:text-xl dark:text-gray-400 max-w-3xl mx-auto">
                Keep track of all activity across your projects and teams with real-time notifications and activity
                feeds.
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-2">
              <Card>
                <CardContent className="p-6">
                  <div className="space-y-4">
                    <div className="flex items-center gap-2">
                      <Bell className="h-5 w-5 text-blue-600" />
                      <h3 className="text-lg font-semibold">Notifications</h3>
                    </div>
                    <div className="space-y-2">
                      <div className="flex items-center gap-3 p-2 border rounded-md">
                        <Avatar className="h-8 w-8">
                          <AvatarImage src="/placeholder.svg" alt="Sarah" />
                          <AvatarFallback>SJ</AvatarFallback>
                        </Avatar>
                        <div className="flex-1">
                          <p className="text-sm">
                            <span className="font-medium">Sarah Johnson</span> mentioned you in a comment on{" "}
                            <span className="font-medium">Homepage Design</span>
                          </p>
                          <p className="text-xs text-muted-foreground">10 minutes ago</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-3 p-2 border rounded-md">
                        <Avatar className="h-8 w-8">
                          <AvatarImage src="/placeholder.svg" alt="John" />
                          <AvatarFallback>JD</AvatarFallback>
                        </Avatar>
                        <div className="flex-1">
                          <p className="text-sm">
                            <span className="font-medium">John Doe</span> assigned you a task:{" "}
                            <span className="font-medium">Review mobile responsiveness</span>
                          </p>
                          <p className="text-xs text-muted-foreground">30 minutes ago</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-3 p-2 border rounded-md">
                        <Avatar className="h-8 w-8">
                          <AvatarImage src="/placeholder.svg" alt="Michael" />
                          <AvatarFallback>MB</AvatarFallback>
                        </Avatar>
                        <div className="flex-1">
                          <p className="text-sm">
                            <span className="font-medium">Michael Brown</span> uploaded a new file to{" "}
                            <span className="font-medium">Website Redesign</span>
                          </p>
                          <p className="text-xs text-muted-foreground">1 hour ago</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <div className="space-y-4">
                    <div className="flex items-center gap-2">
                      <Users className="h-5 w-5 text-blue-600" />
                      <h3 className="text-lg font-semibold">Activity Feed</h3>
                    </div>
                    <div className="space-y-4">
                      <div className="flex gap-3">
                        <div className="h-8 w-8 rounded-full bg-blue-100 flex items-center justify-center">
                          <FileText className="h-4 w-4 text-blue-600" />
                        </div>
                        <div className="flex-1">
                          <p className="text-sm">
                            <span className="font-medium">Sarah Johnson</span> uploaded{" "}
                            <span className="font-medium">homepage-v2.fig</span>
                          </p>
                          <p className="text-xs text-muted-foreground">Today at 10:30 AM</p>
                        </div>
                      </div>
                      <div className="flex gap-3">
                        <div className="h-8 w-8 rounded-full bg-blue-100 flex items-center justify-center">
                          <MessageSquare className="h-4 w-4 text-blue-600" />
                        </div>
                        <div className="flex-1">
                          <p className="text-sm">
                            <span className="font-medium">Michael Brown</span> commented on{" "}
                            <span className="font-medium">Homepage Design</span>
                          </p>
                          <p className="text-xs text-muted-foreground">Today at 10:45 AM</p>
                        </div>
                      </div>
                      <div className="flex gap-3">
                        <div className="h-8 w-8 rounded-full bg-blue-100 flex items-center justify-center">
                          <CheckCircle className="h-4 w-4 text-blue-600" />
                        </div>
                        <div className="flex-1">
                          <p className="text-sm">
                            <span className="font-medium">John Doe</span> completed{" "}
                            <span className="font-medium">Create wireframes</span>
                          </p>
                          <p className="text-xs text-muted-foreground">Today at 9:15 AM</p>
                        </div>
                      </div>
                      <div className="flex gap-3">
                        <div className="h-8 w-8 rounded-full bg-blue-100 flex items-center justify-center">
                          <Users className="h-4 w-4 text-blue-600" />
                        </div>
                        <div className="flex-1">
                          <p className="text-sm">
                            <span className="font-medium">Emily Davis</span> joined{" "}
                            <span className="font-medium">Website Redesign</span>
                          </p>
                          <p className="text-xs text-muted-foreground">Yesterday at 2:30 PM</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-blue-600 dark:bg-blue-800">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-white">
                  Ready to collaborate better?
                </h2>
                <p className="max-w-[600px] text-white md:text-xl/relaxed mx-auto">
                  Join thousands of teams who use DoItAlligator to work together more efficiently.
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Link href="/signup">
                  <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100">
                    Get started for free
                  </Button>
                </Link>
                <Link href="/pricing">
                  <Button size="lg" variant="outline" className="text-white border-white hover:bg-blue-700">
                    View pricing
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="w-full py-6 bg-gray-100 dark:bg-gray-900">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <p className="text-sm text-gray-500 dark:text-gray-400">
                © {new Date().getFullYear()} DoItAlligator. All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
