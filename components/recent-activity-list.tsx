"use client"

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { CheckCircle2, FileText, MessageSquare, Plus, Users } from "lucide-react"

type ActivityType = "task_completed" | "comment_added" | "project_created" | "member_added"

interface Activity {
  id: string
  type: ActivityType
  user: {
    name: string
    avatar?: string
    initials: string
  }
  content: string
  project?: string
  timestamp: string
}

const activities: Activity[] = [
  {
    id: "1",
    type: "task_completed",
    user: {
      name: "John Doe",
      initials: "JD",
    },
    content: "Completed task: Create wireframes",
    project: "Website Redesign",
    timestamp: "2 hours ago",
  },
  {
    id: "2",
    type: "comment_added",
    user: {
      name: "Sarah Johnson",
      initials: "SJ",
    },
    content: "Commented on: Homepage design review",
    project: "Website Redesign",
    timestamp: "3 hours ago",
  },
  {
    id: "3",
    type: "project_created",
    user: {
      name: "Michael Brown",
      initials: "MB",
    },
    content: "Created new project",
    project: "Marketing Campaign",
    timestamp: "5 hours ago",
  },
  {
    id: "4",
    type: "member_added",
    user: {
      name: "Emily Davis",
      initials: "ED",
    },
    content: "Added Alex Wilson to",
    project: "Mobile App",
    timestamp: "Yesterday",
  },
  {
    id: "5",
    type: "task_completed",
    user: {
      name: "Alex Wilson",
      initials: "AW",
    },
    content: "Completed task: API Integration",
    project: "Mobile App",
    timestamp: "Yesterday",
  },
  {
    id: "6",
    type: "comment_added",
    user: {
      name: "Lisa Chen",
      initials: "LC",
    },
    content: "Commented on: User authentication flow",
    project: "Mobile App",
    timestamp: "2 days ago",
  },
]

const getActivityIcon = (type: ActivityType) => {
  switch (type) {
    case "task_completed":
      return <CheckCircle2 className="h-4 w-4 text-green-500" />
    case "comment_added":
      return <MessageSquare className="h-4 w-4 text-blue-500" />
    case "project_created":
      return <FileText className="h-4 w-4 text-purple-500" />
    case "member_added":
      return <Users className="h-4 w-4 text-orange-500" />
    default:
      return <Plus className="h-4 w-4" />
  }
}

export function RecentActivityList() {
  return (
    <div className="space-y-0">
      {activities.map((activity) => (
        <div key={activity.id} className="flex items-start gap-4 p-4 border-b last:border-0 hover:bg-muted/50">
          <Avatar className="h-8 w-8">
            <AvatarImage src={activity.user.avatar || "/placeholder.svg"} alt={activity.user.name} />
            <AvatarFallback>{activity.user.initials}</AvatarFallback>
          </Avatar>
          <div className="flex-1 space-y-1">
            <div className="flex items-center gap-2">
              {getActivityIcon(activity.type)}
              <p className="text-sm font-medium">{activity.user.name}</p>
            </div>
            <p className="text-sm text-muted-foreground">
              {activity.content}
              {activity.project && <span className="font-medium text-foreground"> {activity.project}</span>}
            </p>
            <p className="text-xs text-muted-foreground">{activity.timestamp}</p>
          </div>
        </div>
      ))}
    </div>
  )
}
