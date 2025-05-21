import Link from "next/link"
import { CheckCircle, ArrowLeft, Tag, User, Calendar, List, Kanban } from "lucide-react"
import { Button } from "@/components/ui/button"
import { LandingNavbar } from "@/components/landing-navbar"
import { Card, CardContent } from "@/components/ui/card"

export default function TaskManagementPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <LandingNavbar />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-green-50 dark:bg-green-900">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <Link href="/features" className="flex items-center text-sm text-muted-foreground mb-4">
                <ArrowLeft className="mr-1 h-4 w-4" />
                Back to all features
              </Link>
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-green-100 px-3 py-1 text-sm dark:bg-green-800 mb-4">
                  <CheckCircle className="h-4 w-4 inline mr-2" />
                  Task Management
                </div>
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                  Perfect tasks every time
                </h1>
                <p className="max-w-[600px] text-gray-500 md:text-xl dark:text-gray-400">
                  Create, organize, and track your tasks with ease. Never miss a deadline again.
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row mt-6">
                <Link href="/signup">
                  <Button size="lg" className="bg-green-600 hover:bg-green-700">
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

        {/* Feature Highlights */}
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
              <div className="space-y-4">
                <h2 className="text-3xl font-bold tracking-tighter">Create and organize tasks your way</h2>
                <p className="text-gray-500 dark:text-gray-400">
                  DoItAlligator makes it easy to create, organize, and track tasks. Add details, set deadlines, assign
                  tasks to team members, and track progress all in one place.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <CheckCircle className="mr-2 h-4 w-4 text-green-600" />
                    <span>Create tasks with rich descriptions and attachments</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="mr-2 h-4 w-4 text-green-600" />
                    <span>Set priorities and deadlines</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="mr-2 h-4 w-4 text-green-600" />
                    <span>Organize tasks with tags and categories</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="mr-2 h-4 w-4 text-green-600" />
                    <span>Track progress with visual indicators</span>
                  </li>
                </ul>
              </div>
              <div className="rounded-xl border bg-card p-6 shadow-sm">
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <h3 className="text-lg font-semibold">Website Redesign</h3>
                    <span className="text-sm text-muted-foreground">Due: Jun 30, 2023</span>
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-start gap-2">
                      <input type="checkbox" className="mt-1" />
                      <div>
                        <p className="font-medium">Finalize homepage design</p>
                        <div className="flex items-center gap-2 text-xs text-muted-foreground mt-1">
                          <span className="flex items-center">
                            <Calendar className="mr-1 h-3 w-3" /> Jun 28
                          </span>
                          <span className="flex items-center">
                            <Tag className="mr-1 h-3 w-3" /> Design
                          </span>
                          <span className="flex items-center">
                            <User className="mr-1 h-3 w-3" /> Sarah
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="flex items-start gap-2">
                      <input type="checkbox" className="mt-1" />
                      <div>
                        <p className="font-medium">Create responsive layouts</p>
                        <div className="flex items-center gap-2 text-xs text-muted-foreground mt-1">
                          <span className="flex items-center">
                            <Calendar className="mr-1 h-3 w-3" /> Jun 29
                          </span>
                          <span className="flex items-center">
                            <Tag className="mr-1 h-3 w-3" /> Development
                          </span>
                          <span className="flex items-center">
                            <User className="mr-1 h-3 w-3" /> Michael
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="flex items-start gap-2">
                      <input type="checkbox" className="mt-1" />
                      <div>
                        <p className="font-medium">Implement dark mode</p>
                        <div className="flex items-center gap-2 text-xs text-muted-foreground mt-1">
                          <span className="flex items-center">
                            <Calendar className="mr-1 h-3 w-3" /> Jun 30
                          </span>
                          <span className="flex items-center">
                            <Tag className="mr-1 h-3 w-3" /> Development
                          </span>
                          <span className="flex items-center">
                            <User className="mr-1 h-3 w-3" /> John
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex justify-between items-center text-sm">
                    <span>Progress</span>
                    <span>60%</span>
                  </div>
                  <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                    <div className="h-full bg-green-600 rounded-full" style={{ width: "60%" }}></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Multiple Views */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-50 dark:bg-gray-900">
          <div className="container px-4 md:px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold tracking-tighter">View tasks your way</h2>
              <p className="mt-4 text-gray-500 md:text-xl dark:text-gray-400 max-w-3xl mx-auto">
                Choose from multiple views to visualize your tasks in the way that works best for you.
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-3">
              <Card>
                <CardContent className="p-6">
                  <div className="flex flex-col items-center text-center space-y-4">
                    <div className="rounded-full bg-green-100 p-3 dark:bg-green-800">
                      <List className="h-6 w-6 text-green-600 dark:text-green-200" />
                    </div>
                    <h3 className="text-xl font-bold">List View</h3>
                    <p className="text-gray-500 dark:text-gray-400">
                      See all your tasks in a simple list format. Sort and filter to find exactly what you need.
                    </p>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <div className="flex flex-col items-center text-center space-y-4">
                    <div className="rounded-full bg-green-100 p-3 dark:bg-green-800">
                      <Kanban className="h-6 w-6 text-green-600 dark:text-green-200" />
                    </div>
                    <h3 className="text-xl font-bold">Board View</h3>
                    <p className="text-gray-500 dark:text-gray-400">
                      Visualize your workflow with a Kanban board. Drag and drop tasks between columns.
                    </p>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <div className="flex flex-col items-center text-center space-y-4">
                    <div className="rounded-full bg-green-100 p-3 dark:bg-green-800">
                      <Calendar className="h-6 w-6 text-green-600 dark:text-green-200" />
                    </div>
                    <h3 className="text-xl font-bold">Calendar View</h3>
                    <p className="text-gray-500 dark:text-gray-400">
                      See your tasks in a calendar format to better plan your schedule and manage deadlines.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Task Details */}
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
              <div className="rounded-xl border bg-card p-6 shadow-sm order-2 lg:order-1">
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <h3 className="text-lg font-semibold">Task Details</h3>
                    <span className="text-sm text-muted-foreground">ID: TASK-123</span>
                  </div>
                  <div className="space-y-2">
                    <h4 className="font-medium">Finalize homepage design</h4>
                    <p className="text-sm text-muted-foreground">
                      Complete the final design for the homepage, including responsive layouts and dark mode support.
                    </p>
                    <div className="grid grid-cols-2 gap-2 text-sm">
                      <div>
                        <p className="text-muted-foreground">Assignee</p>
                        <p className="font-medium">Sarah Johnson</p>
                      </div>
                      <div>
                        <p className="text-muted-foreground">Due Date</p>
                        <p className="font-medium">Jun 28, 2023</p>
                      </div>
                      <div>
                        <p className="text-muted-foreground">Priority</p>
                        <p className="font-medium">High</p>
                      </div>
                      <div>
                        <p className="text-muted-foreground">Status</p>
                        <p className="font-medium">In Progress</p>
                      </div>
                    </div>
                    <div>
                      <p className="text-muted-foreground">Subtasks</p>
                      <div className="space-y-1 mt-1">
                        <div className="flex items-center">
                          <input type="checkbox" checked className="mr-2" />
                          <p className="text-sm line-through">Create wireframes</p>
                        </div>
                        <div className="flex items-center">
                          <input type="checkbox" checked className="mr-2" />
                          <p className="text-sm line-through">Design desktop layout</p>
                        </div>
                        <div className="flex items-center">
                          <input type="checkbox" className="mr-2" />
                          <p className="text-sm">Design mobile layout</p>
                        </div>
                        <div className="flex items-center">
                          <input type="checkbox" className="mr-2" />
                          <p className="text-sm">Implement dark mode</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="space-y-4 order-1 lg:order-2">
                <h2 className="text-3xl font-bold tracking-tighter">Detailed task information</h2>
                <p className="text-gray-500 dark:text-gray-400">
                  Every task in DoItAlligator comes with detailed information to help you and your team stay on track.
                  Add descriptions, subtasks, attachments, and more.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <CheckCircle className="mr-2 h-4 w-4 text-green-600" />
                    <span>Add detailed descriptions and instructions</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="mr-2 h-4 w-4 text-green-600" />
                    <span>Break down tasks into subtasks</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="mr-2 h-4 w-4 text-green-600" />
                    <span>Attach files and documents</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="mr-2 h-4 w-4 text-green-600" />
                    <span>Add comments and @mentions</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="mr-2 h-4 w-4 text-green-600" />
                    <span>Track time spent on tasks</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-green-600 dark:bg-green-800">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-white">
                  Ready to get more done?
                </h2>
                <p className="max-w-[600px] text-white md:text-xl/relaxed mx-auto">
                  Join thousands of teams who use DoItAlligator to organize their work and boost productivity.
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Link href="/signup">
                  <Button size="lg" className="bg-white text-green-600 hover:bg-gray-100">
                    Get started for free
                  </Button>
                </Link>
                <Link href="/pricing">
                  <Button size="lg" variant="outline" className="text-white border-white hover:bg-green-700">
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
