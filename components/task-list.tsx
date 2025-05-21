"use client"

import { useState } from "react"
import { Checkbox } from "@/components/ui/checkbox"
import { Button } from "@/components/ui/button"
import { MoreHorizontal, Trash, Edit, Calendar, Tag, User, LinkIcon, Plus } from "lucide-react"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Badge } from "@/components/ui/badge"
import { CreateTaskDialog } from "@/components/create-task-dialog"
import { TaskDetailDialog } from "@/components/task-detail-dialog"

interface Task {
  id: string
  title: string
  completed: boolean
  project?: string
  dueDate?: string
  progress?: number
  description?: string
  priority?: string
  assignee?: {
    name: string
    avatar: string
    initials: string
  }
  tags?: string[]
}

interface TaskListProps {
  tasks: Task[]
  showProject?: boolean
}

export function TaskList({ tasks: initialTasks, showProject = true }: TaskListProps) {
  const [tasks, setTasks] = useState<Task[]>(
    initialTasks.map((task) => ({
      ...task,
      description: task.description || "This task needs to be completed according to the project specifications.",
      priority: task.priority || "Medium",
      assignee: task.assignee || {
        name: "John Doe",
        avatar: "/placeholder.svg",
        initials: "JD",
      },
      tags: task.tags || ["Frontend", "Design"],
    })),
  )

  const toggleTaskCompletion = (taskId: string) => {
    setTasks(tasks.map((task) => (task.id === taskId ? { ...task, completed: !task.completed } : task)))
  }

  const deleteTask = (taskId: string) => {
    setTasks(tasks.filter((task) => task.id !== taskId))
  }

  if (tasks.length === 0) {
    return (
      <div className="flex h-32 items-center justify-center rounded-md border border-dashed">
        <div className="text-center">
          <p className="text-sm text-muted-foreground">No tasks yet</p>
          <CreateTaskDialog>
            <Button variant="outline" size="sm" className="mt-2">
              <Plus className="mr-2 h-4 w-4" /> Add Task
            </Button>
          </CreateTaskDialog>
        </div>
      </div>
    )
  }

  return (
    <div className="space-y-4">
      {tasks.map((task) => (
        <Card key={task.id} className="overflow-hidden">
          <CardHeader className="pb-2">
            <div className="flex items-start justify-between">
              <div className="flex items-start gap-3">
                <Checkbox
                  id={`task-${task.id}`}
                  checked={task.completed}
                  onCheckedChange={() => toggleTaskCompletion(task.id)}
                  className="mt-1"
                />
                <div>
                  <CardTitle className={`text-base ${task.completed ? "line-through text-muted-foreground" : ""}`}>
                    {task.title}
                  </CardTitle>
                  {showProject && task.project && (
                    <CardDescription className="mt-1">Project: {task.project}</CardDescription>
                  )}
                </div>
              </div>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                    <MoreHorizontal className="h-4 w-4" />
                    <span className="sr-only">Open menu</span>
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                  <DropdownMenuLabel>Actions</DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem>
                    <Edit className="mr-2 h-4 w-4" /> Edit
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <Calendar className="mr-2 h-4 w-4" /> Set due date
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <Tag className="mr-2 h-4 w-4" /> Add label
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <User className="mr-2 h-4 w-4" /> Assign
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <LinkIcon className="mr-2 h-4 w-4" /> Copy link
                  </DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem className="text-red-600" onClick={() => deleteTask(task.id)}>
                    <Trash className="mr-2 h-4 w-4" />
                    Delete
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </CardHeader>
          <CardContent className="pb-2">
            {task.dueDate && (
              <div className="flex items-center text-sm text-muted-foreground">
                <Calendar className="mr-2 h-4 w-4" />
                {task.dueDate}
              </div>
            )}
            {typeof task.progress === "number" && (
              <div className="mt-2">
                <div className="flex justify-between items-center mb-1 text-sm">
                  <span>Progress</span>
                  <span>{task.progress}%</span>
                </div>
                <Progress value={task.progress} className="h-2" />
              </div>
            )}
          </CardContent>
          <CardFooter className="pt-2 flex justify-between">
            <div className="flex gap-2">
              <Badge variant="outline">Priority: {task.priority || "Medium"}</Badge>
              {task.tags &&
                task.tags.map((tag, index) => (
                  <Badge key={index} variant="outline">
                    {tag}
                  </Badge>
                ))}
            </div>
            <TaskDetailDialog task={task}>
              <Button variant="outline" size="sm">
                View Details
              </Button>
            </TaskDetailDialog>
          </CardFooter>
        </Card>
      ))}
    </div>
  )
}
