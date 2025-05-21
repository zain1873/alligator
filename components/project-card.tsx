import Link from "next/link"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { CalendarDays, CheckSquare, MoreHorizontal } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

interface ProjectCardProps {
  title: string
  description: string
  progress: number
  dueDate: string
  members: number
  tasks: number
  completedTasks: number
}

export function ProjectCard({
  title,
  description,
  progress,
  dueDate,
  members,
  tasks,
  completedTasks,
}: ProjectCardProps) {
  // Convert date string to formatted date
  const formattedDate = new Date(dueDate).toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  })

  // Generate a URL-friendly slug from the title
  const slug = title.toLowerCase().replace(/\s+/g, "-")

  return (
    <Card className="overflow-hidden">
      <CardHeader className="pb-2">
        <div className="flex justify-between items-start">
          <CardTitle className="text-lg font-semibold">
            <Link href={`/dashboard/projects/${slug}`} className="hover:underline">
              {title}
            </Link>
          </CardTitle>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="icon" className="h-8 w-8">
                <MoreHorizontal className="h-4 w-4" />
                <span className="sr-only">Open menu</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuLabel>Actions</DropdownMenuLabel>
              <DropdownMenuItem>Edit project</DropdownMenuItem>
              <DropdownMenuItem>Add members</DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem className="text-red-600">Delete project</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
        <p className="text-sm text-muted-foreground">{description}</p>
      </CardHeader>
      <CardContent className="pb-2">
        <div className="space-y-4">
          <div>
            <div className="flex justify-between items-center mb-1 text-sm">
              <span>Progress</span>
              <span>{progress}%</span>
            </div>
            <Progress value={progress} className="h-2" />
          </div>
          <div className="flex justify-between text-sm">
            <div className="flex items-center">
              <CalendarDays className="h-4 w-4 mr-1 text-muted-foreground" />
              <span>Due {formattedDate}</span>
            </div>
            <div className="flex items-center">
              <CheckSquare className="h-4 w-4 mr-1 text-muted-foreground" />
              <span>
                {completedTasks}/{tasks} tasks
              </span>
            </div>
          </div>
        </div>
      </CardContent>
      <CardFooter className="pt-2">
        <div className="flex items-center justify-between w-full">
          <div className="flex -space-x-2">
            {Array.from({ length: Math.min(members, 3) }).map((_, i) => (
              <Avatar key={i} className="border-2 border-background h-8 w-8">
                <AvatarImage src={`/placeholder.svg?${i}`} alt="Team member" />
                <AvatarFallback>{String.fromCharCode(65 + i)}</AvatarFallback>
              </Avatar>
            ))}
            {members > 3 && (
              <div className="flex items-center justify-center h-8 w-8 rounded-full bg-muted text-xs font-medium">
                +{members - 3}
              </div>
            )}
          </div>
          <Button variant="outline" size="sm" asChild>
            <Link href={`/dashboard/projects/${slug}`}>View</Link>
          </Button>
        </div>
      </CardFooter>
    </Card>
  )
}
