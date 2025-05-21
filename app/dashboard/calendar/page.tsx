import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { ChevronLeft, ChevronRight, Plus, Filter, CalendarIcon, List, MoreHorizontal } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { CreateTaskDialog } from "@/components/create-task-dialog"

export default function CalendarPage() {
  // Current month and year
  const currentDate = new Date()
  const currentMonth = currentDate.toLocaleString("default", { month: "long" })
  const currentYear = currentDate.getFullYear()

  // Dummy calendar data
  const calendarDays = Array.from({ length: 35 }, (_, i) => {
    const day = i - 3 // Offset to start from previous month
    const isCurrentMonth = day > 0 && day <= 31
    const date = day > 0 ? day : 31 + day // Handle previous month days

    // Generate random events for some days
    const hasEvents = isCurrentMonth && Math.random() > 0.7
    const eventCount = hasEvents ? Math.floor(Math.random() * 3) + 1 : 0

    const events = Array.from({ length: eventCount }, (_, j) => {
      const eventTypes = ["task", "meeting", "deadline"]
      const eventType = eventTypes[Math.floor(Math.random() * eventTypes.length)]
      const eventNames = {
        task: ["Complete homepage design", "Review wireframes", "Update documentation"],
        meeting: ["Team standup", "Client presentation", "Project review"],
        deadline: ["Website launch", "Design handoff", "Content submission"],
      }
      const eventName = eventNames[eventType][Math.floor(Math.random() * eventNames[eventType].length)]

      return {
        id: `event-${i}-${j}`,
        type: eventType,
        name: eventName,
        time: `${Math.floor(Math.random() * 12) + 1}:${Math.random() > 0.5 ? "30" : "00"} ${Math.random() > 0.5 ? "AM" : "PM"}`,
      }
    })

    return {
      day: date,
      isCurrentMonth,
      events,
    }
  })

  // Upcoming events (next 5 days)
  const upcomingEvents = [
    {
      id: "event-1",
      name: "Team Standup",
      date: "Today",
      time: "10:00 AM",
      type: "meeting",
    },
    {
      id: "event-2",
      name: "Complete Homepage Design",
      date: "Today",
      time: "2:00 PM",
      type: "task",
    },
    {
      id: "event-3",
      name: "Client Presentation",
      date: "Tomorrow",
      time: "11:30 AM",
      type: "meeting",
    },
    {
      id: "event-4",
      name: "Website Launch",
      date: "Jun 28, 2023",
      time: "9:00 AM",
      type: "deadline",
    },
    {
      id: "event-5",
      name: "Project Review",
      date: "Jun 29, 2023",
      time: "3:30 PM",
      type: "meeting",
    },
  ]

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Calendar</h1>
          <p className="text-muted-foreground">Manage your schedule and upcoming events.</p>
        </div>
        <CreateTaskDialog>
          <Button className="bg-green-600 hover:bg-green-700">
            <Plus className="mr-2 h-4 w-4" /> New Event
          </Button>
        </CreateTaskDialog>
      </div>

      <div className="flex flex-col lg:flex-row gap-6">
        <div className="flex-1">
          <Card>
            <CardHeader className="pb-3">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <h2 className="text-xl font-bold">
                    {currentMonth} {currentYear}
                  </h2>
                </div>
                <div className="flex items-center gap-2">
                  <Button variant="outline" size="icon" className="h-8 w-8">
                    <ChevronLeft className="h-4 w-4" />
                  </Button>
                  <Button variant="outline" size="icon" className="h-8 w-8">
                    <ChevronRight className="h-4 w-4" />
                  </Button>
                  <Select defaultValue="month">
                    <SelectTrigger className="w-[120px]">
                      <SelectValue placeholder="View" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="day">Day</SelectItem>
                      <SelectItem value="week">Week</SelectItem>
                      <SelectItem value="month">Month</SelectItem>
                      <SelectItem value="year">Year</SelectItem>
                    </SelectContent>
                  </Select>
                  <Button variant="outline" size="sm">
                    <Filter className="mr-2 h-4 w-4" />
                    Filter
                  </Button>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-7 gap-1 text-center text-sm font-medium">
                <div className="py-2">Sun</div>
                <div className="py-2">Mon</div>
                <div className="py-2">Tue</div>
                <div className="py-2">Wed</div>
                <div className="py-2">Thu</div>
                <div className="py-2">Fri</div>
                <div className="py-2">Sat</div>
              </div>
              <div className="grid grid-cols-7 gap-1 text-sm">
                {calendarDays.map((day, index) => (
                  <div
                    key={index}
                    className={`min-h-[100px] p-1 border rounded-md ${day.isCurrentMonth ? "bg-card" : "bg-muted/30 text-muted-foreground"}`}
                  >
                    <div className="flex justify-between items-start">
                      <span
                        className={`text-sm font-medium ${day.day === currentDate.getDate() && day.isCurrentMonth ? "h-6 w-6 rounded-full bg-primary text-primary-foreground flex items-center justify-center" : ""}`}
                      >
                        {day.day}
                      </span>
                      {day.events.length > 0 && (
                        <Button variant="ghost" size="icon" className="h-6 w-6">
                          <MoreHorizontal className="h-3 w-3" />
                        </Button>
                      )}
                    </div>
                    <div className="mt-1 space-y-1">
                      {day.events.map((event) => (
                        <div
                          key={event.id}
                          className={`text-xs p-1 rounded truncate ${
                            event.type === "meeting"
                              ? "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300"
                              : event.type === "task"
                                ? "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300"
                                : "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300"
                          }`}
                        >
                          {event.name}
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="w-full lg:w-80">
          <Card>
            <CardHeader>
              <CardTitle>Upcoming Events</CardTitle>
              <CardDescription>Your schedule for the next few days</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              {upcomingEvents.map((event) => (
                <div key={event.id} className="flex items-start gap-3">
                  <div
                    className={`h-10 w-10 rounded-md flex items-center justify-center ${
                      event.type === "meeting"
                        ? "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300"
                        : event.type === "task"
                          ? "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300"
                          : "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300"
                    }`}
                  >
                    {event.type === "meeting" ? (
                      <CalendarIcon className="h-5 w-5" />
                    ) : event.type === "task" ? (
                      <List className="h-5 w-5" />
                    ) : (
                      <CalendarIcon className="h-5 w-5" />
                    )}
                  </div>
                  <div className="flex-1">
                    <p className="font-medium">{event.name}</p>
                    <div className="flex items-center text-sm text-muted-foreground">
                      <span>{event.date}</span>
                      <span className="mx-1">•</span>
                      <span>{event.time}</span>
                    </div>
                  </div>
                  <Badge
                    variant={event.type === "meeting" ? "default" : event.type === "task" ? "outline" : "destructive"}
                  >
                    {event.type === "meeting" ? "Meeting" : event.type === "task" ? "Task" : "Deadline"}
                  </Badge>
                </div>
              ))}
              <Button variant="outline" className="w-full">
                View All Events
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
