"use client"

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { AtSign, CheckSquare, FileText, ImageIcon, Paperclip, Plus, Send } from "lucide-react"
import { ChatMessage } from "@/components/chat-message"
import { MentionPopover } from "@/components/mention-popover"
import { Badge } from "@/components/ui/badge"

interface TaskChatPageProps {
  params: {
    id: string
  }
}

export default function TaskChatPage({ params }: TaskChatPageProps) {
  const taskId = params.id

  const tasks = {
    "homepage-design": {
      id: "homepage-design",
      name: "Homepage Design Discussion",
      task: "Homepage Design",
      project: "Website Redesign",
      description: "Discuss and finalize the homepage design for the website redesign project",
      status: "In Progress",
      dueDate: "Jun 28, 2023",
      priority: "High",
      assignee: { id: "sarah-johnson", name: "Sarah Johnson", initials: "SJ", avatar: "/placeholder.svg" },
      members: [
        { id: "john-doe", name: "John Doe", initials: "JD", avatar: "/placeholder.svg" },
        { id: "sarah-johnson", name: "Sarah Johnson", initials: "SJ", avatar: "/placeholder.svg" },
        { id: "michael-brown", name: "Michael Brown", initials: "MB", avatar: "/placeholder.svg" },
      ],
      subtasks: [
        { id: "st1", name: "Create wireframes", completed: true },
        { id: "st2", name: "Design desktop layout", completed: true },
        { id: "st3", name: "Design mobile layout", completed: false },
        { id: "st4", name: "Implement dark mode", completed: false },
      ],
    },
    // ... other tasks
  }

  const task = tasks[taskId as keyof typeof tasks] || {
    id: taskId,
    name: "Task Chat",
    task: "Unknown Task",
    project: "Unknown Project",
    description: "Task discussion",
    status: "Not Started",
    dueDate: "Unknown",
    priority: "Medium",
    assignee: { id: "john-doe", name: "John Doe", initials: "JD", avatar: "/placeholder.svg" },
    members: [{ id: "john-doe", name: "John Doe", initials: "JD", avatar: "/placeholder.svg" }],
    subtasks: [],
  }

  const currentUser = {
    id: "john-doe",
    name: "John Doe",
    initials: "JD",
    avatar: "/placeholder.svg",
  }

  const messages = [
    {
      id: "1",
      sender: currentUser,
      content: `Let's use this chat to discuss the ${task.task} task and coordinate our efforts.`,
      timestamp: "9:30 AM",
      attachments: [],
    },
    {
      id: "2",
      sender:
        task.assignee.id !== currentUser.id
          ? task.assignee
          : task.members.find((m) => m.id !== currentUser.id) || task.members[0],
      content: `I'm currently working on this task. Here's my initial approach.`,
      timestamp: "9:40 AM",
      attachments: [],
    },
    {
      id: "3",
      sender: task.members.find((m) => m.id !== currentUser.id && m.id !== task.assignee.id) || task.members[0],
      content: "That sounds like a good approach. Do you need any help with specific aspects of the task?",
      timestamp: "9:45 AM",
      attachments: [],
    },
  ]

  return (
    <div className="flex flex-col h-[calc(100vh-7rem)]">
      <div className="flex items-center justify-between border-b pb-4">
        <div className="flex items-center">
          <h1 className="text-2xl font-bold">{task.name}</h1>
          <Separator orientation="vertical" className="mx-4 h-6" />
          <div className="flex items-center text-muted-foreground">
            <CheckSquare className="h-4 w-4 mr-2" />
            <span>
              {task.task} • {task.project}
            </span>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <Button variant="outline" size="sm">
            <Plus className="h-4 w-4 mr-2" />
            Add Members
          </Button>
          <div className="flex -space-x-2">
            {task.members.slice(0, 3).map((member) => (
              <Avatar key={member.id} className="h-8 w-8 border-2 border-background">
                <AvatarImage src={member.avatar} alt={member.name} />
                <AvatarFallback>{member.initials}</AvatarFallback>
              </Avatar>
            ))}
            {task.members.length > 3 && (
              <div className="h-8 w-8 rounded-full bg-muted flex items-center justify-center text-xs border-2 border-background">
                +{task.members.length - 3}
              </div>
            )}
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-[1fr_250px] gap-6 flex-1 overflow-hidden mt-4">
        <div className="flex flex-col h-full">
          <div className="flex-1 overflow-y-auto pr-4 space-y-4">
            {messages.map((message) => (
              <ChatMessage key={message.id} message={message} isCurrentUser={message.sender.id === currentUser.id} />
            ))}
          </div>

          <div className="mt-4 border-t pt-4">
            <MentionPopover>
              <div className="flex items-end gap-2">
                <div className="flex-1 space-y-2">
                  <textarea
                    placeholder="Type your message..."
                    className="w-full min-h-[80px] resize-none py-4 px-3 rounded-md border border-input bg-background text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                  />
                  <div className="flex items-center gap-2">
                    <Button variant="ghost" size="icon" className="h-8 w-8 rounded-full">
                      <Paperclip className="h-4 w-4" />
                    </Button>
                    <Button variant="ghost" size="icon" className="h-8 w-8 rounded-full">
                      <ImageIcon className="h-4 w-4" />
                    </Button>
                    <Button variant="ghost" size="icon" className="h-8 w-8 rounded-full">
                      <AtSign className="h-4 w-4" />
                    </Button>
                    <Button variant="ghost" size="icon" className="h-8 w-8 rounded-full">
                      <FileText className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
                <Button className="bg-green-600 hover:bg-green-700">
                  <Send className="h-4 w-4" />
                  <span className="sr-only">Send</span>
                </Button>
              </div>
            </MentionPopover>
          </div>
        </div>

        <Card className="h-full overflow-hidden">
          <CardHeader>
            <CardTitle className="text-lg">Task Details</CardTitle>
          </CardHeader>
          <CardContent className="p-0">
            <div className="p-4 border-b">
              <h3 className="text-sm font-medium mb-1">Description</h3>
              <p className="text-sm text-muted-foreground">{task.description}</p>
            </div>
            <div className="p-4 border-b">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <h3 className="text-xs text-muted-foreground">Status</h3>
                  <Badge className="mt-1">{task.status}</Badge>
                </div>
                <div>
                  <h3 className="text-xs text-muted-foreground">Due Date</h3>
                  <p className="text-sm font-medium mt-1">{task.dueDate}</p>
                </div>
                <div>
                  <h3 className="text-xs text-muted-foreground">Priority</h3>
                  <Badge className="mt-1">{task.priority}</Badge>
                </div>
                <div>
                  <h3 className="text-xs text-muted-foreground">Assignee</h3>
                  <div className="flex items-center gap-2 mt-1">
                    <Avatar className="h-5 w-5">
                      <AvatarImage src={task.assignee.avatar} alt={task.assignee.name} />
                      <AvatarFallback>{task.assignee.initials}</AvatarFallback>
                    </Avatar>
                    <span className="text-sm">{task.assignee.name}</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="p-4 border-b">
              <h3 className="text-sm font-medium mb-2">Subtasks</h3>
              <div className="space-y-2">
                {task.subtasks.length > 0 ? (
                  task.subtasks.map((subtask) => (
                    <div key={subtask.id} className="flex items-center gap-2">
                      <input type="checkbox" checked={subtask.completed} readOnly className="h-4 w-4" />
                      <span className={`text-sm ${subtask.completed ? "line-through text-muted-foreground" : ""}`}>
                        {subtask.name}
                      </span>
                    </div>
                  ))
                ) : (
                  <p className="text-sm text-muted-foreground">No subtasks</p>
                )}
              </div>
            </div>
            <div className="p-4">
              <h3 className="text-sm font-medium mb-2">Team Members</h3>
              <div className="space-y-2">
                {task.members.map((member) => (
                  <div key={member.id} className="flex items-center gap-3 p-2 rounded-md hover:bg-muted">
                    <Avatar className="h-8 w-8">
                      <AvatarImage src={member.avatar} alt={member.name} />
                      <AvatarFallback>{member.initials}</AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="text-sm font-medium">{member.name}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
