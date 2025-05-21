"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { Clock, FileText, MessageSquare, Paperclip, Plus, Tag, User, X } from "lucide-react"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Progress } from "@/components/ui/progress"

interface Task {
  id: string
  title: string
  description: string
  status: "Not Started" | "In Progress" | "Completed" | "Blocked"
  priority: "Low" | "Medium" | "High"
  dueDate: string
  assignee: {
    id: string
    name: string
    avatar?: string
    initials: string
  }
  project: string
  tags: string[]
  subtasks: {
    id: string
    title: string
    completed: boolean
  }[]
  attachments: {
    id: string
    name: string
    type: string
    size: string
    uploadedBy: string
    uploadedAt: string
  }[]
  comments: {
    id: string
    user: {
      id: string
      name: string
      avatar?: string
      initials: string
    }
    content: string
    timestamp: string
  }[]
  createdAt: string
  updatedAt: string
}

interface TaskDetailDialogProps {
  task: Task
  children: React.ReactNode
}

export function TaskDetailDialog({ task, children }: TaskDetailDialogProps) {
  const [open, setOpen] = useState(false)
  const [currentTask, setCurrentTask] = useState<Task>({
    ...task,
    subtasks: task.subtasks || [],
    comments: task.comments || [],
    attachments: task.attachments || [],
    tags: task.tags || [],
  })
  const [newSubtask, setNewSubtask] = useState("")
  const [newComment, setNewComment] = useState("")

  const members = [
    { id: "john-doe", name: "John Doe", initials: "JD", avatar: "/placeholder.svg" },
    { id: "sarah-johnson", name: "Sarah Johnson", initials: "SJ", avatar: "/placeholder.svg" },
    { id: "michael-brown", name: "Michael Brown", initials: "MB", avatar: "/placeholder.svg" },
    { id: "emily-davis", name: "Emily Davis", initials: "ED", avatar: "/placeholder.svg" },
    { id: "alex-wilson", name: "Alex Wilson", initials: "AW", avatar: "/placeholder.svg" },
  ]

  const toggleSubtask = (subtaskId: string) => {
    setCurrentTask({
      ...currentTask,
      subtasks: currentTask.subtasks.map((subtask) =>
        subtask.id === subtaskId ? { ...subtask, completed: !subtask.completed } : subtask,
      ),
    })
  }

  const addSubtask = () => {
    if (!newSubtask.trim()) return
    setCurrentTask({
      ...currentTask,
      subtasks: [
        ...currentTask.subtasks,
        {
          id: `st-${Date.now()}`,
          title: newSubtask,
          completed: false,
        },
      ],
    })
    setNewSubtask("")
  }

  const addComment = () => {
    if (!newComment.trim()) return
    setCurrentTask({
      ...currentTask,
      comments: [
        ...currentTask.comments,
        {
          id: `c-${Date.now()}`,
          user: {
            id: "john-doe",
            name: "John Doe",
            initials: "JD",
            avatar: "/placeholder.svg",
          },
          content: newComment,
          timestamp: "Just now",
        },
      ],
    })
    setNewComment("")
  }

  const completedSubtasks = currentTask.subtasks?.filter((subtask) => subtask.completed)?.length || 0
  const totalSubtasks = currentTask.subtasks?.length || 0
  const progress = totalSubtasks > 0 ? (completedSubtasks / totalSubtasks) * 100 : 0

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className="sm:max-w-[900px] max-h-[90vh] overflow-hidden flex flex-col">
        <DialogHeader>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Badge
                variant="outline"
                className={
                  currentTask.status === "Completed"
                    ? "bg-green-100 text-green-800 hover:bg-green-100"
                    : currentTask.status === "In Progress"
                      ? "bg-blue-100 text-blue-800 hover:bg-blue-100"
                      : currentTask.status === "Blocked"
                        ? "bg-red-100 text-red-800 hover:bg-red-100"
                        : "bg-gray-100 text-gray-800 hover:bg-gray-100"
                }
              >
                {currentTask.status}
              </Badge>
              <DialogTitle className="text-xl">{currentTask.title}</DialogTitle>
            </div>
            <div className="flex items-center gap-2">
              <Badge variant="outline" className="flex items-center gap-1">
                <Tag className="h-3 w-3" />
                <span>{currentTask.project}</span>
              </Badge>
              <Badge
                variant="outline"
                className={
                  currentTask.priority === "High"
                    ? "bg-red-100 text-red-800 hover:bg-red-100"
                    : currentTask.priority === "Medium"
                      ? "bg-yellow-100 text-yellow-800 hover:bg-yellow-100"
                      : "bg-green-100 text-green-800 hover:bg-green-100"
                }
              >
                {currentTask.priority} Priority
              </Badge>
            </div>
          </div>
          <DialogDescription>
            Task ID: {currentTask.id} • Created: {currentTask.createdAt} • Updated: {currentTask.updatedAt}
          </DialogDescription>
        </DialogHeader>

        <div className="flex-1 overflow-y-auto pr-2">
          <Tabs defaultValue="details" className="w-full">
            <TabsList className="grid w-full grid-cols-4">
              <TabsTrigger value="details">Details</TabsTrigger>
              <TabsTrigger value="subtasks">Subtasks</TabsTrigger>
              <TabsTrigger value="comments">Comments</TabsTrigger>
              <TabsTrigger value="attachments">Attachments</TabsTrigger>
            </TabsList>

            <TabsContent value="details" className="space-y-4 mt-4">
              <div className="space-y-4">
                <div className="space-y-2">
                  <Label>Description</Label>
                  <Textarea
                    value={currentTask.description}
                    onChange={(e) => setCurrentTask({ ...currentTask, description: e.target.value })}
                    className="min-h-[100px]"
                  />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label>Status</Label>
                    <Select
                      value={currentTask.status}
                      onValueChange={(value) =>
                        setCurrentTask({
                          ...currentTask,
                          status: value as "Not Started" | "In Progress" | "Completed" | "Blocked",
                        })
                      }
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Select status" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="Not Started">Not Started</SelectItem>
                        <SelectItem value="In Progress">In Progress</SelectItem>
                        <SelectItem value="Completed">Completed</SelectItem>
                        <SelectItem value="Blocked">Blocked</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label>Priority</Label>
                    <Select
                      value={currentTask.priority}
                      onValueChange={(value) =>
                        setCurrentTask({ ...currentTask, priority: value as "Low" | "Medium" | "High" })
                      }
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Select priority" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="Low">Low</SelectItem>
                        <SelectItem value="Medium">Medium</SelectItem>
                        <SelectItem value="High">High</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label>Due Date</Label>
                    <div className="flex items-center border rounded-md">
                      <Input
                        type="date"
                        value={currentTask.dueDate}
                        onChange={(e) => setCurrentTask({ ...currentTask, dueDate: e.target.value })}
                        className="border-0"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label>Assignee</Label>
                    <Select
                      value={currentTask.assignee.id}
                      onValueChange={(value) => {
                        const member = members.find((m) => m.id === value)
                        if (member) {
                          setCurrentTask({
                            ...currentTask,
                            assignee: {
                              id: member.id,
                              name: member.name,
                              avatar: member.avatar,
                              initials: member.initials,
                            },
                          })
                        }
                      }}
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Select assignee" />
                      </SelectTrigger>
                      <SelectContent>
                        {members.map((member) => (
                          <SelectItem key={member.id} value={member.id}>
                            <div className="flex items-center gap-2">
                              <Avatar className="h-6 w-6">
                                <AvatarImage src={member.avatar || "/placeholder.svg"} alt={member.name} />
                                <AvatarFallback>{member.initials}</AvatarFallback>
                              </Avatar>
                              <span>{member.name}</span>
                            </div>
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="space-y-2">
                  <Label>Tags</Label>
                  <div className="flex flex-wrap gap-2">
                    {currentTask.tags?.map((tag) => (
                      <Badge key={tag} variant="secondary">
                        {tag}
                      </Badge>
                    ))}
                    <Button variant="outline" size="sm" className="h-6">
                      <Plus className="h-3 w-3 mr-1" />
                      Add Tag
                    </Button>
                  </div>
                </div>

                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <Label>Progress</Label>
                    <span className="text-sm text-muted-foreground">
                      {completedSubtasks} of {totalSubtasks} subtasks
                    </span>
                  </div>
                  <Progress value={progress} className="h-2" />
                </div>
              </div>
            </TabsContent>

            <TabsContent value="subtasks" className="space-y-4 mt-4">
              <div className="flex items-center gap-2">
                <Input
                  placeholder="Add a new subtask..."
                  value={newSubtask}
                  onChange={(e) => setNewSubtask(e.target.value)}
                  onKeyDown={(e) => {
                    if (e.key === "Enter") {
                      addSubtask()
                    }
                  }}
                />
                <Button onClick={addSubtask}>Add</Button>
              </div>

              <div className="space-y-2">
                {currentTask.subtasks?.length > 0 ? (
                  currentTask.subtasks.map((subtask) => (
                    <div
                      key={subtask.id}
                      className="flex items-center gap-2 p-2 border rounded-md hover:bg-muted transition-colors"
                    >
                      <input
                        type="checkbox"
                        checked={subtask.completed}
                        onChange={() => toggleSubtask(subtask.id)}
                        className="h-4 w-4"
                      />
                      <span className={`flex-1 ${subtask.completed ? "line-through text-muted-foreground" : ""}`}>
                        {subtask.title}
                      </span>
                      <Button variant="ghost" size="icon" className="h-8 w-8">
                        <X className="h-4 w-4" />
                      </Button>
                    </div>
                  ))
                ) : (
                  <div className="text-center p-4 text-muted-foreground">
                    No subtasks yet. Add some to break down this task.
                  </div>
                )}
              </div>
            </TabsContent>

            <TabsContent value="comments" className="space-y-4 mt-4">
              <div className="space-y-4">
                {currentTask.comments?.map((comment) => (
                  <div key={comment.id} className="flex gap-3">
                    <Avatar className="h-8 w-8">
                      <AvatarImage src={comment.user.avatar || "/placeholder.svg"} alt={comment.user.name} />
                      <AvatarFallback>{comment.user.initials}</AvatarFallback>
                    </Avatar>
                    <div className="flex-1 space-y-1">
                      <div className="flex items-center justify-between">
                        <p className="text-sm font-medium">{comment.user.name}</p>
                        <span className="text-xs text-muted-foreground">{comment.timestamp}</span>
                      </div>
                      <p className="text-sm">{comment.content}</p>
                    </div>
                  </div>
                ))}

                {(!currentTask.comments || currentTask.comments.length === 0) && (
                  <div className="text-center p-4 text-muted-foreground">No comments yet. Start the conversation!</div>
                )}

                <Separator />

                <div className="flex gap-3">
                  <Avatar className="h-8 w-8">
                    <AvatarImage src="/placeholder.svg" alt="John Doe" />
                    <AvatarFallback>JD</AvatarFallback>
                  </Avatar>
                  <div className="flex-1 space-y-2">
                    <Textarea
                      placeholder="Add a comment..."
                      value={newComment}
                      onChange={(e) => setNewComment(e.target.value)}
                      className="min-h-[80px]"
                    />
                    <div className="flex justify-between">
                      <div className="flex gap-2">
                        <Button variant="ghost" size="sm">
                          <Paperclip className="h-4 w-4 mr-1" />
                          Attach
                        </Button>
                        <Button variant="ghost" size="sm">
                          <User className="h-4 w-4 mr-1" />
                          Mention
                        </Button>
                      </div>
                      <Button size="sm" onClick={addComment}>
                        Comment
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="attachments" className="space-y-4 mt-4">
              <div className="flex justify-between items-center">
                <h3 className="text-lg font-medium">Attachments</h3>
                <Button>
                  <Plus className="h-4 w-4 mr-2" />
                  Add File
                </Button>
              </div>

              <div className="space-y-2">
                {currentTask.attachments?.length > 0 ? (
                  currentTask.attachments.map((attachment) => (
                    <div key={attachment.id} className="flex items-center justify-between p-3 border rounded-md">
                      <div className="flex items-center gap-3">
                        <div className="h-10 w-10 bg-blue-100 rounded flex items-center justify-center">
                          <FileText className="h-5 w-5 text-blue-600" />
                        </div>
                        <div>
                          <p className="font-medium">{attachment.name}</p>
                          <div className="flex items-center gap-2 text-xs text-muted-foreground">
                            <span>{attachment.size}</span>
                            <span>•</span>
                            <span>Uploaded by {attachment.uploadedBy}</span>
                            <span>•</span>
                            <span>{attachment.uploadedAt}</span>
                          </div>
                        </div>
                      </div>
                      <div className="flex gap-2">
                        <Button variant="outline" size="sm">
                          Download
                        </Button>
                        <Button variant="ghost" size="icon" className="h-8 w-8">
                          <X className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  ))
                ) : (
                  <div className="text-center p-4 text-muted-foreground">
                    No attachments yet. Add files to this task.
                  </div>
                )}
              </div>
            </TabsContent>
          </Tabs>
        </div>

        <DialogFooter className="border-t pt-4 mt-4">
          <div className="flex items-center gap-2 mr-auto">
            <Button variant="outline" size="sm" asChild>
              <a href={`/dashboard/chats/task/${currentTask.id}`}>
                <MessageSquare className="h-4 w-4 mr-2" />
                Open Chat
              </a>
            </Button>
            <Button variant="outline" size="sm">
              <Clock className="h-4 w-4 mr-2" />
              Time Tracking
            </Button>
          </div>
          <Button variant="outline" onClick={() => setOpen(false)}>
            Close
          </Button>
          <Button className="bg-green-600 hover:bg-green-700">Save Changes</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
