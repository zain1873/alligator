import Link from "next/link"
import { CheckCircle, ArrowLeft, FileText, Copy, Clock, Folder, Plus } from "lucide-react"
import { Button } from "@/components/ui/button"
import { LandingNavbar } from "@/components/landing-navbar"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export default function TemplatesPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <LandingNavbar />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-amber-50 dark:bg-amber-900">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <Link href="/features" className="flex items-center text-sm text-muted-foreground mb-4">
                <ArrowLeft className="mr-1 h-4 w-4" />
                Back to all features
              </Link>
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-amber-100 px-3 py-1 text-sm dark:bg-amber-800 mb-4">
                  <FileText className="h-4 w-4 inline mr-2" />
                  Templates
                </div>
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                  Start faster with templates
                </h1>
                <p className="max-w-[600px] text-gray-500 md:text-xl dark:text-gray-400">
                  Save time and ensure consistency with pre-built task and project templates.
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row mt-6">
                <Link href="/signup">
                  <Button size="lg" className="bg-amber-600 hover:bg-amber-700">
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

        {/* Template Categories */}
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold tracking-tighter">Templates for every need</h2>
              <p className="mt-4 text-gray-500 md:text-xl dark:text-gray-400 max-w-3xl mx-auto">
                Choose from a variety of templates designed for different industries, projects, and workflows.
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              <Card className="flex flex-col justify-between">
                <CardHeader>
                  <div className="inline-block rounded-lg bg-amber-100 p-2 dark:bg-amber-800">
                    <FileText className="h-6 w-6 text-amber-600 dark:text-amber-200" />
                  </div>
                  <CardTitle className="mt-4 text-2xl font-bold">Project Management</CardTitle>
                  <CardDescription>Templates for planning and executing projects of all sizes.</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    <li className="flex items-center justify-between">
                      <div className="flex items-center">
                        <FileText className="mr-2 h-4 w-4 text-amber-600" />
                        <span>Website Redesign</span>
                      </div>
                      <Badge variant="outline">Popular</Badge>
                    </li>
                    <li className="flex items-center">
                      <FileText className="mr-2 h-4 w-4 text-amber-600" />
                      <span>Product Launch</span>
                    </li>
                    <li className="flex items-center">
                      <FileText className="mr-2 h-4 w-4 text-amber-600" />
                      <span>Marketing Campaign</span>
                    </li>
                    <li className="flex items-center">
                      <FileText className="mr-2 h-4 w-4 text-amber-600" />
                      <span>Software Development</span>
                    </li>
                    <li className="flex items-center">
                      <FileText className="mr-2 h-4 w-4 text-amber-600" />
                      <span>Event Planning</span>
                    </li>
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button className="w-full">Browse Project Templates</Button>
                </CardFooter>
              </Card>

              <Card className="flex flex-col justify-between">
                <CardHeader>
                  <div className="inline-block rounded-lg bg-amber-100 p-2 dark:bg-amber-800">
                    <Copy className="h-6 w-6 text-amber-600 dark:text-amber-200" />
                  </div>
                  <CardTitle className="mt-4 text-2xl font-bold">Task Lists</CardTitle>
                  <CardDescription>Ready-to-use task lists for common activities and processes.</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    <li className="flex items-center justify-between">
                      <div className="flex items-center">
                        <FileText className="mr-2 h-4 w-4 text-amber-600" />
                        <span>Daily Standup</span>
                      </div>
                      <Badge variant="outline">Popular</Badge>
                    </li>
                    <li className="flex items-center">
                      <FileText className="mr-2 h-4 w-4 text-amber-600" />
                      <span>Weekly Review</span>
                    </li>
                    <li className="flex items-center">
                      <FileText className="mr-2 h-4 w-4 text-amber-600" />
                      <span>Client Onboarding</span>
                    </li>
                    <li className="flex items-center">
                      <FileText className="mr-2 h-4 w-4 text-amber-600" />
                      <span>Bug Tracking</span>
                    </li>
                    <li className="flex items-center">
                      <FileText className="mr-2 h-4 w-4 text-amber-600" />
                      <span>Content Calendar</span>
                    </li>
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button className="w-full">Browse Task Templates</Button>
                </CardFooter>
              </Card>

              <Card className="flex flex-col justify-between">
                <CardHeader>
                  <div className="inline-block rounded-lg bg-amber-100 p-2 dark:bg-amber-800">
                    <Folder className="h-6 w-6 text-amber-600 dark:text-amber-200" />
                  </div>
                  <CardTitle className="mt-4 text-2xl font-bold">Industry-Specific</CardTitle>
                  <CardDescription>Templates tailored for specific industries and business types.</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    <li className="flex items-center">
                      <FileText className="mr-2 h-4 w-4 text-amber-600" />
                      <span>Healthcare</span>
                    </li>
                    <li className="flex items-center justify-between">
                      <div className="flex items-center">
                        <FileText className="mr-2 h-4 w-4 text-amber-600" />
                        <span>Education</span>
                      </div>
                      <Badge variant="outline">Popular</Badge>
                    </li>
                    <li className="flex items-center">
                      <FileText className="mr-2 h-4 w-4 text-amber-600" />
                      <span>E-commerce</span>
                    </li>
                    <li className="flex items-center">
                      <FileText className="mr-2 h-4 w-4 text-amber-600" />
                      <span>Real Estate</span>
                    </li>
                    <li className="flex items-center">
                      <FileText className="mr-2 h-4 w-4 text-amber-600" />
                      <span>Nonprofit</span>
                    </li>
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button className="w-full">Browse Industry Templates</Button>
                </CardFooter>
              </Card>
            </div>
          </div>
        </section>

        {/* Featured Templates */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-50 dark:bg-gray-900">
          <div className="container px-4 md:px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold tracking-tighter">Featured Templates</h2>
              <p className="mt-4 text-gray-500 md:text-xl dark:text-gray-400 max-w-3xl mx-auto">
                Our most popular templates used by thousands of teams.
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              <Card>
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <FileText className="h-5 w-5 text-amber-600" />
                      <CardTitle>Website Redesign</CardTitle>
                    </div>
                    <Badge className="bg-amber-100 text-amber-800 hover:bg-amber-100">Popular</Badge>
                  </div>
                  <CardDescription>A complete template for managing website redesign projects.</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <div className="flex items-center justify-between text-sm">
                      <span className="flex items-center">
                        <Clock className="mr-1 h-4 w-4 text-gray-500" /> 4-8 weeks
                      </span>
                      <span>15 tasks</span>
                    </div>
                    <div className="space-y-1 mt-4">
                      <p className="text-sm font-medium">Includes:</p>
                      <ul className="space-y-1">
                        <li className="flex items-center text-sm">
                          <CheckCircle className="mr-2 h-3 w-3 text-green-600" />
                          <span>Discovery phase tasks</span>
                        </li>
                        <li className="flex items-center text-sm">
                          <CheckCircle className="mr-2 h-3 w-3 text-green-600" />
                          <span>Design and development workflow</span>
                        </li>
                        <li className="flex items-center text-sm">
                          <CheckCircle className="mr-2 h-3 w-3 text-green-600" />
                          <span>Testing and QA checklists</span>
                        </li>
                        <li className="flex items-center text-sm">
                          <CheckCircle className="mr-2 h-3 w-3 text-green-600" />
                          <span>Launch preparation tasks</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button className="w-full">Use This Template</Button>
                </CardFooter>
              </Card>

              <Card>
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <FileText className="h-5 w-5 text-amber-600" />
                      <CardTitle>Sprint Planning</CardTitle>
                    </div>
                    <Badge className="bg-amber-100 text-amber-800 hover:bg-amber-100">Agile</Badge>
                  </div>
                  <CardDescription>Organize your development sprints with this comprehensive template.</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <div className="flex items-center justify-between text-sm">
                      <span className="flex items-center">
                        <Clock className="mr-1 h-4 w-4 text-gray-500" /> 2 weeks
                      </span>
                      <span>12 tasks</span>
                    </div>
                    <div className="space-y-1 mt-4">
                      <p className="text-sm font-medium">Includes:</p>
                      <ul className="space-y-1">
                        <li className="flex items-center text-sm">
                          <CheckCircle className="mr-2 h-3 w-3 text-green-600" />
                          <span>Backlog refinement</span>
                        </li>
                        <li className="flex items-center text-sm">
                          <CheckCircle className="mr-2 h-3 w-3 text-green-600" />
                          <span>Sprint planning meeting agenda</span>
                        </li>
                        <li className="flex items-center text-sm">
                          <CheckCircle className="mr-2 h-3 w-3 text-green-600" />
                          <span>Daily standup structure</span>
                        </li>
                        <li className="flex items-center text-sm">
                          <CheckCircle className="mr-2 h-3 w-3 text-green-600" />
                          <span>Sprint review and retrospective</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button className="w-full">Use This Template</Button>
                </CardFooter>
              </Card>

              <Card>
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <FileText className="h-5 w-5 text-amber-600" />
                      <CardTitle>Content Calendar</CardTitle>
                    </div>
                    <Badge className="bg-amber-100 text-amber-800 hover:bg-amber-100">Marketing</Badge>
                  </div>
                  <CardDescription>Plan and organize your content creation and publishing schedule.</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <div className="flex items-center justify-between text-sm">
                      <span className="flex items-center">
                        <Clock className="mr-1 h-4 w-4 text-gray-500" /> Monthly
                      </span>
                      <span>10 tasks</span>
                    </div>
                    <div className="space-y-1 mt-4">
                      <p className="text-sm font-medium">Includes:</p>
                      <ul className="space-y-1">
                        <li className="flex items-center text-sm">
                          <CheckCircle className="mr-2 h-3 w-3 text-green-600" />
                          <span>Content ideation workflow</span>
                        </li>
                        <li className="flex items-center text-sm">
                          <CheckCircle className="mr-2 h-3 w-3 text-green-600" />
                          <span>Creation and review process</span>
                        </li>
                        <li className="flex items-center text-sm">
                          <CheckCircle className="mr-2 h-3 w-3 text-green-600" />
                          <span>Publishing schedule</span>
                        </li>
                        <li className="flex items-center text-sm">
                          <CheckCircle className="mr-2 h-3 w-3 text-green-600" />
                          <span>Performance tracking tasks</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button className="w-full">Use This Template</Button>
                </CardFooter>
              </Card>
            </div>
          </div>
        </section>

        {/* Custom Templates */}
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
              <div className="space-y-4">
                <h2 className="text-3xl font-bold tracking-tighter">Create your own templates</h2>
                <p className="text-gray-500 dark:text-gray-400">
                  Don't see a template that fits your needs? Create your own custom templates to standardize your
                  workflows and save time on repetitive tasks.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <CheckCircle className="mr-2 h-4 w-4 text-amber-600" />
                    <span>Convert any project or task list into a reusable template</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="mr-2 h-4 w-4 text-amber-600" />
                    <span>Customize templates to match your specific workflows</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="mr-2 h-4 w-4 text-amber-600" />
                    <span>Share templates with your team for consistent processes</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="mr-2 h-4 w-4 text-amber-600" />
                    <span>Update templates as your processes evolve</span>
                  </li>
                </ul>
                <div className="pt-4">
                  <Button className="bg-amber-600 hover:bg-amber-700">
                    <Plus className="mr-2 h-4 w-4" />
                    Create Custom Template
                  </Button>
                </div>
              </div>
              <div className="rounded-xl border bg-card p-6 shadow-sm">
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <h3 className="text-lg font-semibold">New Template</h3>
                    <Badge variant="outline">Draft</Badge>
                  </div>
                  <div className="space-y-2">
                    <div>
                      <label htmlFor="template-name" className="text-sm font-medium">
                        Template Name
                      </label>
                      <input
                        id="template-name"
                        type="text"
                        placeholder="Client Onboarding Process"
                        className="mt-1 w-full rounded-md border border-input bg-background px-3 py-2 text-sm"
                      />
                    </div>
                    <div>
                      <label htmlFor="template-description" className="text-sm font-medium">
                        Description
                      </label>
                      <textarea
                        id="template-description"
                        placeholder="A standardized process for onboarding new clients to our services."
                        className="mt-1 w-full rounded-md border border-input bg-background px-3 py-2 text-sm"
                        rows={3}
                      ></textarea>
                    </div>
                    <div>
                      <label className="text-sm font-medium">Tasks</label>
                      <div className="mt-1 space-y-2">
                        <div className="flex items-center gap-2">
                          <input type="checkbox" checked className="rounded" />
                          <input
                            type="text"
                            value="Initial client meeting"
                            className="flex-1 rounded-md border border-input bg-background px-3 py-1 text-sm"
                          />
                        </div>
                        <div className="flex items-center gap-2">
                          <input type="checkbox" checked className="rounded" />
                          <input
                            type="text"
                            value="Collect client requirements"
                            className="flex-1 rounded-md border border-input bg-background px-3 py-1 text-sm"
                          />
                        </div>
                        <div className="flex items-center gap-2">
                          <input type="checkbox" checked className="rounded" />
                          <input
                            type="text"
                            value="Set up client in system"
                            className="flex-1 rounded-md border border-input bg-background px-3 py-1 text-sm"
                          />
                        </div>
                        <div className="flex items-center gap-2">
                          <input type="checkbox" className="rounded" />
                          <input
                            type="text"
                            placeholder="Add new task..."
                            className="flex-1 rounded-md border border-input bg-background px-3 py-1 text-sm"
                          />
                          <Button size="sm" variant="ghost">
                            <Plus className="h-4 w-4" />
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex justify-between pt-4 border-t">
                    <Button variant="outline">Cancel</Button>
                    <Button className="bg-amber-600 hover:bg-amber-700">Save Template</Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-amber-600 dark:bg-amber-800">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-white">
                  Ready to streamline your workflow?
                </h2>
                <p className="max-w-[600px] text-white md:text-xl/relaxed mx-auto">
                  Join thousands of teams who use DoItAlligator templates to work more efficiently.
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Link href="/signup">
                  <Button size="lg" className="bg-white text-amber-600 hover:bg-gray-100">
                    Get started for free
                  </Button>
                </Link>
                <Link href="/pricing">
                  <Button size="lg" variant="outline" className="text-white border-white hover:bg-amber-700">
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
