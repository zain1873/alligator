import Link from "next/link"
import { ArrowRight, CheckCircle, Share2, Users, Zap, MessageSquare, FileText, Calendar } from "lucide-react"
import { Button } from "@/components/ui/button"
import { LandingNavbar } from "@/components/landing-navbar"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

export default function FeaturesPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <LandingNavbar />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-green-50 dark:bg-green-900">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                  Features that make work easier
                </h1>
                <p className="max-w-[600px] text-gray-500 md:text-xl dark:text-gray-400">
                  DoItAlligator provides all the tools you need to organize, track, and complete your tasks efficiently.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Main Features Section */}
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-3 lg:gap-12">
              <Card className="flex flex-col justify-between">
                <CardHeader>
                  <div className="inline-block rounded-lg bg-green-100 p-2 dark:bg-green-800">
                    <CheckCircle className="h-6 w-6 text-green-600 dark:text-green-200" />
                  </div>
                  <CardTitle className="mt-4 text-2xl font-bold">Task Management</CardTitle>
                  <CardDescription>
                    Create, organize, and track your tasks with ease. Never miss a deadline again.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    <li className="flex items-center">
                      <CheckCircle className="mr-2 h-4 w-4 text-green-600" />
                      <span>Create and organize tasks</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="mr-2 h-4 w-4 text-green-600" />
                      <span>Set priorities and deadlines</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="mr-2 h-4 w-4 text-green-600" />
                      <span>Track progress with visual indicators</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="mr-2 h-4 w-4 text-green-600" />
                      <span>Assign tasks to team members</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="mr-2 h-4 w-4 text-green-600" />
                      <span>Add subtasks and dependencies</span>
                    </li>
                  </ul>
                </CardContent>
                <CardFooter>
                  <Link href="/features/task-management">
                    <Button className="w-full">
                      Learn more <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                </CardFooter>
              </Card>

              <Card className="flex flex-col justify-between">
                <CardHeader>
                  <div className="inline-block rounded-lg bg-blue-100 p-2 dark:bg-blue-800">
                    <Share2 className="h-6 w-6 text-blue-600 dark:text-blue-200" />
                  </div>
                  <CardTitle className="mt-4 text-2xl font-bold">Collaboration</CardTitle>
                  <CardDescription>
                    Share task lists with your team, assign responsibilities, and track progress together.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    <li className="flex items-center">
                      <CheckCircle className="mr-2 h-4 w-4 text-green-600" />
                      <span>Real-time collaboration</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="mr-2 h-4 w-4 text-green-600" />
                      <span>Team, project, and task chats</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="mr-2 h-4 w-4 text-green-600" />
                      <span>File sharing and attachments</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="mr-2 h-4 w-4 text-green-600" />
                      <span>Comment and feedback system</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="mr-2 h-4 w-4 text-green-600" />
                      <span>Activity tracking and notifications</span>
                    </li>
                  </ul>
                </CardContent>
                <CardFooter>
                  <Link href="/features/collaboration">
                    <Button className="w-full">
                      Learn more <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                </CardFooter>
              </Card>

              <Card className="flex flex-col justify-between">
                <CardHeader>
                  <div className="inline-block rounded-lg bg-purple-100 p-2 dark:bg-purple-800">
                    <Users className="h-6 w-6 text-purple-600 dark:text-purple-200" />
                  </div>
                  <CardTitle className="mt-4 text-2xl font-bold">Team Management</CardTitle>
                  <CardDescription>
                    Create teams, assign roles, and manage permissions to keep everyone on the same page.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    <li className="flex items-center">
                      <CheckCircle className="mr-2 h-4 w-4 text-green-600" />
                      <span>Create and manage teams</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="mr-2 h-4 w-4 text-green-600" />
                      <span>Assign roles and permissions</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="mr-2 h-4 w-4 text-green-600" />
                      <span>Team performance analytics</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="mr-2 h-4 w-4 text-green-600" />
                      <span>Resource allocation</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="mr-2 h-4 w-4 text-green-600" />
                      <span>Team calendar and scheduling</span>
                    </li>
                  </ul>
                </CardContent>
                <CardFooter>
                  <Link href="/features/team-management">
                    <Button className="w-full">
                      Learn more <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                </CardFooter>
              </Card>
            </div>
          </div>
        </section>

        {/* Additional Features Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-50 dark:bg-gray-900">
          <div className="container px-4 md:px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">More Powerful Features</h2>
              <p className="mt-4 text-gray-500 md:text-xl dark:text-gray-400 max-w-3xl mx-auto">
                Discover all the tools DoItAlligator offers to help your team work more efficiently.
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              <Card>
                <CardHeader>
                  <div className="inline-block rounded-lg bg-green-100 p-2 dark:bg-green-800">
                    <Calendar className="h-6 w-6 text-green-600 dark:text-green-200" />
                  </div>
                  <CardTitle className="mt-4">Calendar View</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    View your tasks and deadlines in a calendar format to better plan your schedule.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <div className="inline-block rounded-lg bg-green-100 p-2 dark:bg-green-800">
                    <MessageSquare className="h-6 w-6 text-green-600 dark:text-green-200" />
                  </div>
                  <CardTitle className="mt-4">Integrated Chat</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    Communicate with your team directly within the platform, keeping all discussions in context.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <div className="inline-block rounded-lg bg-green-100 p-2 dark:bg-green-800">
                    <FileText className="h-6 w-6 text-green-600 dark:text-green-200" />
                  </div>
                  <CardTitle className="mt-4">Document Sharing</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    Share and collaborate on documents directly within tasks and projects.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <div className="inline-block rounded-lg bg-green-100 p-2 dark:bg-green-800">
                    <Zap className="h-6 w-6 text-green-600 dark:text-green-200" />
                  </div>
                  <CardTitle className="mt-4">Automation</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    Automate repetitive tasks and workflows to save time and reduce errors.
                  </p>
                </CardContent>
              </Card>
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
