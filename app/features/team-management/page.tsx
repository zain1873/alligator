import Link from "next/link"
import { CheckCircle, ArrowLeft, Users, Shield, BarChart, Calendar, Settings } from "lucide-react"
import { Button } from "@/components/ui/button"
import { LandingNavbar } from "@/components/landing-navbar"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"

export default function TeamManagementPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <LandingNavbar />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-purple-50 dark:bg-purple-900">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <Link href="/features" className="flex items-center text-sm text-muted-foreground mb-4">
                <ArrowLeft className="mr-1 h-4 w-4" />
                Back to all features
              </Link>
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-purple-100 px-3 py-1 text-sm dark:bg-purple-800 mb-4">
                  <Users className="h-4 w-4 inline mr-2" />
                  Team Management
                </div>
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">Build better teams</h1>
                <p className="max-w-[600px] text-gray-500 md:text-xl dark:text-gray-400">
                  Create teams, assign roles, and manage permissions to keep everyone on the same page.
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row mt-6">
                <Link href="/signup">
                  <Button size="lg" className="bg-purple-600 hover:bg-purple-700">
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

        {/* Team Organization */}
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
              <div className="space-y-4">
                <h2 className="text-3xl font-bold tracking-tighter">Organize your teams effectively</h2>
                <p className="text-gray-500 dark:text-gray-400">
                  Create and manage teams with ease. Assign members, set roles, and organize teams by department,
                  project, or any other structure that works for your organization.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <CheckCircle className="mr-2 h-4 w-4 text-purple-600" />
                    <span>Create multiple teams for different purposes</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="mr-2 h-4 w-4 text-purple-600" />
                    <span>Add members and assign roles</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="mr-2 h-4 w-4 text-purple-600" />
                    <span>Customize team settings and permissions</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="mr-2 h-4 w-4 text-purple-600" />
                    <span>Manage team resources and projects</span>
                  </li>
                </ul>
              </div>
              <div className="rounded-xl border bg-card p-6 shadow-sm">
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <Users className="h-5 w-5 text-purple-600" />
                      <h3 className="text-lg font-semibold">Design Team</h3>
                    </div>
                    <Badge variant="outline">8 members</Badge>
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <Avatar className="h-8 w-8">
                          <AvatarImage src="/placeholder.svg" alt="Sarah" />
                          <AvatarFallback>SJ</AvatarFallback>
                        </Avatar>
                        <div>
                          <p className="text-sm font-medium">Sarah Johnson</p>
                          <p className="text-xs text-muted-foreground">Team Lead</p>
                        </div>
                      </div>
                      <Badge className="bg-purple-100 text-purple-800 hover:bg-purple-100">Admin</Badge>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <Avatar className="h-8 w-8">
                          <AvatarImage src="/placeholder.svg" alt="Michael" />
                          <AvatarFallback>MB</AvatarFallback>
                        </Avatar>
                        <div>
                          <p className="text-sm font-medium">Michael Brown</p>
                          <p className="text-xs text-muted-foreground">Senior Designer</p>
                        </div>
                      </div>
                      <Badge className="bg-blue-100 text-blue-800 hover:bg-blue-100">Member</Badge>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <Avatar className="h-8 w-8">
                          <AvatarImage src="/placeholder.svg" alt="Emily" />
                          <AvatarFallback>ED</AvatarFallback>
                        </Avatar>
                        <div>
                          <p className="text-sm font-medium">Emily Davis</p>
                          <p className="text-xs text-muted-foreground">UI Designer</p>
                        </div>
                      </div>
                      <Badge className="bg-blue-100 text-blue-800 hover:bg-blue-100">Member</Badge>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <div className="h-8 w-8 rounded-full bg-purple-100 flex items-center justify-center text-xs font-medium">
                          +5
                        </div>
                        <p className="text-sm text-muted-foreground">5 more members</p>
                      </div>
                      <Button variant="outline" size="sm">
                        View All
                      </Button>
                    </div>
                  </div>
                  <div className="flex justify-between pt-2 border-t">
                    <Button variant="outline" size="sm">
                      <Settings className="mr-1 h-4 w-4" />
                      Manage Team
                    </Button>
                    <Button size="sm">
                      <Users className="mr-1 h-4 w-4" />
                      Add Member
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Roles and Permissions */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-50 dark:bg-gray-900">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
              <div className="rounded-xl border bg-card p-6 shadow-sm order-2 lg:order-1">
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <Shield className="h-5 w-5 text-purple-600" />
                      <h3 className="text-lg font-semibold">Roles & Permissions</h3>
                    </div>
                    <Button size="sm">Edit Roles</Button>
                  </div>
                  <div className="space-y-2">
                    <div className="p-2 border rounded-md">
                      <div className="flex items-center justify-between">
                        <p className="text-sm font-medium">Admin</p>
                        <Badge className="bg-purple-100 text-purple-800 hover:bg-purple-100">Highest Access</Badge>
                      </div>
                      <p className="text-xs text-muted-foreground mt-1">
                        Full access to all features, can manage teams, projects, and settings
                      </p>
                    </div>
                    <div className="p-2 border rounded-md">
                      <div className="flex items-center justify-between">
                        <p className="text-sm font-medium">Team Lead</p>
                        <Badge className="bg-blue-100 text-blue-800 hover:bg-blue-100">High Access</Badge>
                      </div>
                      <p className="text-xs text-muted-foreground mt-1">
                        Can manage team members, create projects, and assign tasks
                      </p>
                    </div>
                    <div className="p-2 border rounded-md">
                      <div className="flex items-center justify-between">
                        <p className="text-sm font-medium">Member</p>
                        <Badge className="bg-green-100 text-green-800 hover:bg-green-100">Standard Access</Badge>
                      </div>
                      <p className="text-xs text-muted-foreground mt-1">
                        Can view and edit assigned tasks, participate in team discussions
                      </p>
                    </div>
                    <div className="p-2 border rounded-md">
                      <div className="flex items-center justify-between">
                        <p className="text-sm font-medium">Guest</p>
                        <Badge className="bg-gray-100 text-gray-800 hover:bg-gray-100">Limited Access</Badge>
                      </div>
                      <p className="text-xs text-muted-foreground mt-1">
                        Can view specific projects and tasks they are invited to
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="space-y-4 order-1 lg:order-2">
                <h2 className="text-3xl font-bold tracking-tighter">Flexible roles and permissions</h2>
                <p className="text-gray-500 dark:text-gray-400">
                  Define roles and set permissions to ensure the right people have access to the right information.
                  Customize access levels for different team members based on their responsibilities.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <CheckCircle className="mr-2 h-4 w-4 text-purple-600" />
                    <span>Predefined roles for quick setup</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="mr-2 h-4 w-4 text-purple-600" />
                    <span>Custom permission sets for specific needs</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="mr-2 h-4 w-4 text-purple-600" />
                    <span>Granular control over feature access</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="mr-2 h-4 w-4 text-purple-600" />
                    <span>Guest access for external collaborators</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Team Analytics */}
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
              <div className="space-y-4">
                <h2 className="text-3xl font-bold tracking-tighter">Team performance analytics</h2>
                <p className="text-gray-500 dark:text-gray-400">
                  Track team performance with detailed analytics. Monitor task completion rates, project progress, and
                  individual contributions to identify areas for improvement.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <CheckCircle className="mr-2 h-4 w-4 text-purple-600" />
                    <span>Team productivity metrics</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="mr-2 h-4 w-4 text-purple-600" />
                    <span>Project completion tracking</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="mr-2 h-4 w-4 text-purple-600" />
                    <span>Individual performance insights</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="mr-2 h-4 w-4 text-purple-600" />
                    <span>Customizable reports and dashboards</span>
                  </li>
                </ul>
              </div>
              <div className="rounded-xl border bg-card p-6 shadow-sm">
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <BarChart className="h-5 w-5 text-purple-600" />
                      <h3 className="text-lg font-semibold">Team Performance</h3>
                    </div>
                    <select className="text-sm border rounded-md px-2 py-1">
                      <option>This Month</option>
                      <option>Last Month</option>
                      <option>Last Quarter</option>
                    </select>
                  </div>
                  <div className="space-y-4">
                    <div>
                      <div className="flex justify-between items-center mb-1 text-sm">
                        <span>Tasks Completed</span>
                        <span>78%</span>
                      </div>
                      <Progress value={78} className="h-2" />
                    </div>
                    <div>
                      <div className="flex justify-between items-center mb-1 text-sm">
                        <span>On-time Completion</span>
                        <span>85%</span>
                      </div>
                      <Progress value={85} className="h-2" />
                    </div>
                    <div>
                      <div className="flex justify-between items-center mb-1 text-sm">
                        <span>Team Collaboration</span>
                        <span>92%</span>
                      </div>
                      <Progress value={92} className="h-2" />
                    </div>
                    <div className="pt-4 border-t">
                      <h4 className="text-sm font-medium mb-2">Top Contributors</h4>
                      <div className="space-y-2">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-2">
                            <Avatar className="h-6 w-6">
                              <AvatarImage src="/placeholder.svg" alt="Sarah" />
                              <AvatarFallback>SJ</AvatarFallback>
                            </Avatar>
                            <p className="text-sm">Sarah Johnson</p>
                          </div>
                          <p className="text-sm font-medium">24 tasks</p>
                        </div>
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-2">
                            <Avatar className="h-6 w-6">
                              <AvatarImage src="/placeholder.svg" alt="Michael" />
                              <AvatarFallback>MB</AvatarFallback>
                            </Avatar>
                            <p className="text-sm">Michael Brown</p>
                          </div>
                          <p className="text-sm font-medium">19 tasks</p>
                        </div>
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-2">
                            <Avatar className="h-6 w-6">
                              <AvatarImage src="/placeholder.svg" alt="Emily" />
                              <AvatarFallback>ED</AvatarFallback>
                            </Avatar>
                            <p className="text-sm">Emily Davis</p>
                          </div>
                          <p className="text-sm font-medium">17 tasks</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Team Calendar */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-50 dark:bg-gray-900">
          <div className="container px-4 md:px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold tracking-tighter">Team scheduling made easy</h2>
              <p className="mt-4 text-gray-500 md:text-xl dark:text-gray-400 max-w-3xl mx-auto">
                Coordinate team activities with shared calendars. Schedule meetings, set deadlines, and manage team
                availability all in one place.
              </p>
            </div>

            <div className="rounded-xl border bg-card p-6 shadow-sm max-w-4xl mx-auto">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Calendar className="h-5 w-5 text-purple-600" />
                    <h3 className="text-lg font-semibold">Team Calendar</h3>
                  </div>
                  <div className="flex items-center gap-2">
                    <Button variant="outline" size="sm">
                      Month
                    </Button>
                    <Button variant="outline" size="sm">
                      Week
                    </Button>
                    <Button variant="outline" size="sm">
                      Day
                    </Button>
                  </div>
                </div>
                <div className="grid grid-cols-7 gap-1 text-center text-sm">
                  <div className="p-2 font-medium">Sun</div>
                  <div className="p-2 font-medium">Mon</div>
                  <div className="p-2 font-medium">Tue</div>
                  <div className="p-2 font-medium">Wed</div>
                  <div className="p-2 font-medium">Thu</div>
                  <div className="p-2 font-medium">Fri</div>
                  <div className="p-2 font-medium">Sat</div>
                </div>
                <div className="grid grid-cols-7 gap-1 text-sm">
                  {Array.from({ length: 35 }).map((_, i) => {
                    const day = i - 3 + 1 // Adjust to start from previous month
                    const isCurrentMonth = day > 0 && day <= 31
                    const isToday = day === 15
                    const hasEvent = [3, 8, 15, 22, 27].includes(day)

                    return (
                      <div
                        key={i}
                        className={`p-2 min-h-[80px] border rounded-md ${
                          isCurrentMonth ? "" : "text-gray-400"
                        } ${isToday ? "bg-purple-50 border-purple-200" : ""}`}
                      >
                        <div className="flex justify-between items-start">
                          <span>{isCurrentMonth ? day : day <= 0 ? 30 + day : day - 31}</span>
                          {hasEvent && <div className="h-2 w-2 rounded-full bg-purple-500"></div>}
                        </div>
                        {day === 3 && isCurrentMonth && (
                          <div className="mt-1 p-1 text-xs bg-blue-100 text-blue-800 rounded">Team Meeting</div>
                        )}
                        {day === 8 && isCurrentMonth && (
                          <div className="mt-1 p-1 text-xs bg-green-100 text-green-800 rounded">Project Deadline</div>
                        )}
                        {day === 15 && isCurrentMonth && (
                          <div className="mt-1 p-1 text-xs bg-purple-100 text-purple-800 rounded">Design Review</div>
                        )}
                        {day === 22 && isCurrentMonth && (
                          <div className="mt-1 p-1 text-xs bg-orange-100 text-orange-800 rounded">Client Call</div>
                        )}
                        {day === 27 && isCurrentMonth && (
                          <div className="mt-1 p-1 text-xs bg-red-100 text-red-800 rounded">Sprint Planning</div>
                        )}
                      </div>
                    )
                  })}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-purple-600 dark:bg-purple-800">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-white">
                  Ready to build better teams?
                </h2>
                <p className="max-w-[600px] text-white md:text-xl/relaxed mx-auto">
                  Join thousands of organizations who use DoItAlligator to manage their teams more effectively.
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Link href="/signup">
                  <Button size="lg" className="bg-white text-purple-600 hover:bg-gray-100">
                    Get started for free
                  </Button>
                </Link>
                <Link href="/pricing">
                  <Button size="lg" variant="outline" className="text-white border-white hover:bg-purple-700">
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
