"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { CheckCircle2, MessageSquare, FileText, Users } from "lucide-react"

interface NotificationsPopoverProps {
  children: React.ReactNode
}

type NotificationType = "task_assigned" | "task_completed" | "comment" | "mention" | "project_update" | "team_invite"

interface Notification {
  id: string
  type: NotificationType
  title: string
  description: string
  time: string
  read: boolean
  user: {
    name: string
    avatar?: string
    initials: string
  }
}

const notifications: Notification[] = [
  {
    id: "1",
    type: "task_assigned",
    title: "New task assigned",
    description: "Sarah assigned you to 'Create wireframes'",
    time: "10 minutes ago",
    read: false,
    user: {
      name: "Sarah Johnson",
      initials: "SJ",
    },
  },
  {
    id: "2",
    type: "comment",
    title: "New comment",
    description: "Michael commented on 'Homepage design'",
    time: "1 hour ago",
    read: false,
    user: {
      name: "Michael Brown",
      initials: "MB",
    },
  },
  {
    id: "3",
    type: "task_completed",
    title: "Task completed",
    description: "Emily completed 'API Integration'",
    time: "3 hours ago",
    read: false,
    user: {
      name: "Emily Davis",
      initials: "ED",
    },
  },
  {
    id: "4",
    type: "project_update",
    title: "Project update",
    description: "Website Redesign is 75% complete",
    time: "Yesterday",
    read: true,
    user: {
      name: "System",
      initials: "SY",
    },
  },
  {
    id: "5",
    type: "team_invite",
    title: "Team invitation",
    description: "Alex invited you to join Marketing team",
    time: "2 days ago",
    read: true,
    user: {
      name: "Alex Wilson",
      initials: "AW",
    },
  },
]

const getNotificationIcon = (type: NotificationType) => {
  switch (type) {
    case "task_assigned":
    case "task_completed":
      return <CheckCircle2 className="h-4 w-4 text-green-500" />
    case "comment":
    case "mention":
      return <MessageSquare className="h-4 w-4 text-blue-500" />
    case "project_update":
      return <FileText className="h-4 w-4 text-purple-500" />
    case "team_invite":
      return <Users className="h-4 w-4 text-orange-500" />
    default:
      return null
  }
}

export function NotificationsPopover({ children }: NotificationsPopoverProps) {
  const [open, setOpen] = useState(false)
  const unreadCount = notifications.filter((n) => !n.read).length

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>{children}</PopoverTrigger>
      <PopoverContent className="w-[380px] p-0" align="end">
        <div className="p-4 border-b">
          <div className="flex items-center justify-between">
            <h4 className="font-semibold">Notifications</h4>
            <Button variant="ghost" size="sm" className="h-auto p-0 text-sm">
              Mark all as read
            </Button>
          </div>
        </div>
        <Tabs defaultValue="all" className="w-full">
          <div className="border-b">
            <TabsList className="w-full justify-start rounded-none border-b bg-transparent p-0">
              <TabsTrigger
                value="all"
                className="rounded-none border-b-2 border-transparent px-4 py-3 data-[state=active]:border-primary data-[state=active]:bg-transparent data-[state=active]:shadow-none"
              >
                All
                {unreadCount > 0 && (
                  <span className="ml-1 rounded-full bg-primary px-1.5 py-0.5 text-xs text-primary-foreground">
                    {unreadCount}
                  </span>
                )}
              </TabsTrigger>
              <TabsTrigger
                value="unread"
                className="rounded-none border-b-2 border-transparent px-4 py-3 data-[state=active]:border-primary data-[state=active]:bg-transparent data-[state=active]:shadow-none"
              >
                Unread
                {unreadCount > 0 && (
                  <span className="ml-1 rounded-full bg-primary px-1.5 py-0.5 text-xs text-primary-foreground">
                    {unreadCount}
                  </span>
                )}
              </TabsTrigger>
            </TabsList>
          </div>
          <TabsContent value="all" className="max-h-[300px] overflow-y-auto">
            {notifications.length > 0 ? (
              <div>
                {notifications.map((notification) => (
                  <div
                    key={notification.id}
                    className={cn(
                      "flex items-start gap-4 p-4 border-b last:border-0 hover:bg-muted/50",
                      !notification.read && "bg-muted/50",
                    )}
                  >
                    <Avatar className="h-8 w-8">
                      <AvatarImage src={notification.user.avatar || "/placeholder.svg"} alt={notification.user.name} />
                      <AvatarFallback>{notification.user.initials}</AvatarFallback>
                    </Avatar>
                    <div className="flex-1 space-y-1">
                      <div className="flex items-center gap-2">
                        {getNotificationIcon(notification.type)}
                        <p className="text-sm font-medium">{notification.title}</p>
                      </div>
                      <p className="text-sm text-muted-foreground">{notification.description}</p>
                      <p className="text-xs text-muted-foreground">{notification.time}</p>
                    </div>
                    {!notification.read && <div className="h-2 w-2 rounded-full bg-primary"></div>}
                  </div>
                ))}
              </div>
            ) : (
              <div className="flex flex-col items-center justify-center p-8 text-center">
                <p className="text-sm text-muted-foreground">No notifications yet</p>
              </div>
            )}
          </TabsContent>
          <TabsContent value="unread" className="max-h-[300px] overflow-y-auto">
            {notifications.filter((n) => !n.read).length > 0 ? (
              <div>
                {notifications
                  .filter((notification) => !notification.read)
                  .map((notification) => (
                    <div
                      key={notification.id}
                      className="flex items-start gap-4 p-4 border-b last:border-0 hover:bg-muted/50 bg-muted/50"
                    >
                      <Avatar className="h-8 w-8">
                        <AvatarImage
                          src={notification.user.avatar || "/placeholder.svg"}
                          alt={notification.user.name}
                        />
                        <AvatarFallback>{notification.user.initials}</AvatarFallback>
                      </Avatar>
                      <div className="flex-1 space-y-1">
                        <div className="flex items-center gap-2">
                          {getNotificationIcon(notification.type)}
                          <p className="text-sm font-medium">{notification.title}</p>
                        </div>
                        <p className="text-sm text-muted-foreground">{notification.description}</p>
                        <p className="text-xs text-muted-foreground">{notification.time}</p>
                      </div>
                      <div className="h-2 w-2 rounded-full bg-primary"></div>
                    </div>
                  ))}
              </div>
            ) : (
              <div className="flex flex-col items-center justify-center p-8 text-center">
                <p className="text-sm text-muted-foreground">No unread notifications</p>
              </div>
            )}
          </TabsContent>
        </Tabs>
        <div className="p-4 border-t">
          <Button variant="outline" size="sm" className="w-full" asChild>
            <a href="/dashboard/notifications">View all notifications</a>
          </Button>
        </div>
      </PopoverContent>
    </Popover>
  )
}

import { cn } from "@/lib/utils"
