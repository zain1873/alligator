"use client"
import Link from "next/link"
import { usePathname } from "next/navigation"
import {
  Calendar,
  CheckSquare,
  Clock,
  Home,
  Plus,
  Settings,
  Users,
  FileText,
  Folder,
  MessageCircle,
  History,
  CreditCard,
  ChevronLeft,
  ChevronRight,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { CreateProjectDialog } from "@/components/create-project-dialog"
import { CreateTaskDialog } from "@/components/create-task-dialog"
import { CreateChatDialog } from "@/components/create-chat-dialog"
import { useSidebarStore } from "@/lib/sidebar-store"
import { cn } from "@/lib/utils"
import { useEffect, useState } from "react"
import { CreateTeamDialog } from "./create-team-dialog"

export function DashboardSidebar() {
  const pathname = usePathname() || ""
  const { isOpen, toggleSidebar } = useSidebarStore()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  return (
    <div
      className={cn(
        "fixed left-0 top-16 bottom-0 z-40 flex flex-col border-r bg-background transition-all duration-300",
        isOpen ? "w-64" : "w-16",
      )}
    >
      <div className="flex-1 overflow-y-auto p-3">
        <div className="flex justify-end mb-2">
          <Button variant="ghost" size="icon" onClick={toggleSidebar} className="h-8 w-8">
            {isOpen ? <ChevronLeft className="h-4 w-4" /> : <ChevronRight className="h-4 w-4" />}
          </Button>
        </div>

        <div className="mb-4">
          {isOpen ? (
            <CreateTaskDialog>
              <Button className="w-full bg-green-600 hover:bg-green-700">
                <Plus className="mr-2 h-4 w-4" /> New Task
              </Button>
            </CreateTaskDialog>
          ) : (
            <CreateTaskDialog>
              <Button size="icon" className="w-10 h-10 bg-green-600 hover:bg-green-700">
                <Plus className="h-4 w-4" />
              </Button>
            </CreateTaskDialog>
          )}
        </div>

        <div className="mb-6">
          {isOpen && <h3 className="px-2 mb-2 text-xs font-semibold text-muted-foreground">HOME</h3>}
          <nav className="space-y-1">
            <Link
              href="/dashboard"
              className={cn(
                "flex items-center gap-3 rounded-md px-3 py-2 text-sm font-medium",
                pathname === "/dashboard"
                  ? "bg-accent text-accent-foreground"
                  : "text-muted-foreground hover:bg-accent hover:text-accent-foreground",
              )}
            >
              <Home className="h-4 w-4" />
              {isOpen && <span>Dashboard</span>}
            </Link>
            <Link
              href="/dashboard/tasks"
              className={cn(
                "flex items-center gap-3 rounded-md px-3 py-2 text-sm font-medium",
                pathname === "/dashboard/tasks"
                  ? "bg-accent text-accent-foreground"
                  : "text-muted-foreground hover:bg-accent hover:text-accent-foreground",
              )}
            >
              <CheckSquare className="h-4 w-4" />
              {isOpen && <span>My Tasks</span>}
            </Link>
            <Link
              href="/dashboard/upcoming"
              className={cn(
                "flex items-center gap-3 rounded-md px-3 py-2 text-sm font-medium",
                pathname === "/dashboard/upcoming"
                  ? "bg-accent text-accent-foreground"
                  : "text-muted-foreground hover:bg-accent hover:text-accent-foreground",
              )}
            >
              <Clock className="h-4 w-4" />
              {isOpen && <span>Upcoming</span>}
            </Link>
            <Link
              href="/dashboard/calendar"
              className={cn(
                "flex items-center gap-3 rounded-md px-3 py-2 text-sm font-medium",
                pathname === "/dashboard/calendar"
                  ? "bg-accent text-accent-foreground"
                  : "text-muted-foreground hover:bg-accent hover:text-accent-foreground",
              )}
            >
              <Calendar className="h-4 w-4" />
              {isOpen && <span>Calendar</span>}
            </Link>
          </nav>
        </div>

        <div className="mb-6">
          {isOpen && <h3 className="px-2 mb-2 text-xs font-semibold text-muted-foreground">RECENT</h3>}
          <nav className="space-y-1">
            <Link
              href="/dashboard/projects/website-redesign"
              className={cn(
                "flex items-center gap-3 rounded-md px-3 py-2 text-sm font-medium",
                pathname === "/dashboard/projects/website-redesign"
                  ? "bg-accent text-accent-foreground"
                  : "text-muted-foreground hover:bg-accent hover:text-accent-foreground",
              )}
            >
              <FileText className="h-4 w-4" />
              {isOpen && <span>Website Redesign</span>}
            </Link>
            <Link
              href="/dashboard/tasks/homepage-design"
              className={cn(
                "flex items-center gap-3 rounded-md px-3 py-2 text-sm font-medium",
                pathname === "/dashboard/tasks/homepage-design"
                  ? "bg-accent text-accent-foreground"
                  : "text-muted-foreground hover:bg-accent hover:text-accent-foreground",
              )}
            >
              <CheckSquare className="h-4 w-4" />
              {isOpen && <span>Homepage Design</span>}
            </Link>
            <Link
              href="/dashboard/recent"
              className={cn(
                "flex items-center gap-3 rounded-md px-3 py-2 text-sm font-medium",
                pathname === "/dashboard/recent"
                  ? "bg-accent text-accent-foreground"
                  : "text-muted-foreground hover:bg-accent hover:text-accent-foreground",
              )}
            >
              <History className="h-4 w-4" />
              {isOpen && <span>View All Recent</span>}
            </Link>
          </nav>
        </div>

        <div className="mb-6">
          {isOpen && (
            <div className="flex items-center justify-between px-2 mb-2">
              <h3 className="text-xs font-semibold text-muted-foreground">PROJECTS</h3>
              <CreateProjectDialog>
                <Button variant="ghost" size="icon" className="h-5 w-5">
                  <Plus className="h-4 w-4" />
                </Button>
              </CreateProjectDialog>
            </div>
          )}
          <nav className="space-y-1">
            <Link
              href="/dashboard/projects/website-redesign"
              className={cn(
                "flex items-center gap-3 rounded-md px-3 py-2 text-sm font-medium",
                pathname === "/dashboard/projects/website-redesign"
                  ? "bg-accent text-accent-foreground"
                  : "text-muted-foreground hover:bg-accent hover:text-accent-foreground",
              )}
            >
              <FileText className="h-4 w-4" />
              {isOpen && <span>Website Redesign</span>}
            </Link>
            <Link
              href="/dashboard/projects/mobile-app"
              className={cn(
                "flex items-center gap-3 rounded-md px-3 py-2 text-sm font-medium",
                pathname === "/dashboard/projects/mobile-app"
                  ? "bg-accent text-accent-foreground"
                  : "text-muted-foreground hover:bg-accent hover:text-accent-foreground",
              )}
            >
              <FileText className="h-4 w-4" />
              {isOpen && <span>Mobile App</span>}
            </Link>
            <Link
              href="/dashboard/projects/marketing-campaign"
              className={cn(
                "flex items-center gap-3 rounded-md px-3 py-2 text-sm font-medium",
                pathname === "/dashboard/projects/marketing-campaign"
                  ? "bg-accent text-accent-foreground"
                  : "text-muted-foreground hover:bg-accent hover:text-accent-foreground",
              )}
            >
              <FileText className="h-4 w-4" />
              {isOpen && <span>Marketing Campaign</span>}
            </Link>
            <Link
              href="/dashboard/projects"
              className={cn(
                "flex items-center gap-3 rounded-md px-3 py-2 text-sm font-medium",
                pathname === "/dashboard/projects"
                  ? "bg-accent text-accent-foreground"
                  : "text-muted-foreground hover:bg-accent hover:text-accent-foreground",
              )}
            >
              <Folder className="h-4 w-4" />
              {isOpen && <span>All Projects</span>}
            </Link>
          </nav>
        </div>

        <div className="mb-6">
          {isOpen && (
       <div className="flex items-center justify-between px-2 mb-2">
        <h3 className="text-xs font-semibold text-muted-foreground">TEAMS</h3>
        <CreateTeamDialog>
          <Button variant="ghost" size="icon" className="h-5 w-5">
            <Plus className="h-4 w-4" />
          </Button>
        </CreateTeamDialog>
      </div>

          )}
          <nav className="space-y-1">
            <Link
              href="/dashboard/teams/design"
              className={cn(
                "flex items-center gap-3 rounded-md px-3 py-2 text-sm font-medium",
                pathname === "/dashboard/teams/design"
                  ? "bg-accent text-accent-foreground"
                  : "text-muted-foreground hover:bg-accent hover:text-accent-foreground",
              )}
            >
              <Users className="h-4 w-4" />
              {isOpen && (
                <>
                  <span>Design Team</span>
                  <Badge variant="outline" className="ml-auto text-xs">Owner</Badge>
                </>
              )}
            </Link>
            <Link
              href="/dashboard/teams/development"
              className={cn(
                "flex items-center gap-3 rounded-md px-3 py-2 text-sm font-medium",
                pathname === "/dashboard/teams/development"
                  ? "bg-accent text-accent-foreground"
                  : "text-muted-foreground hover:bg-accent hover:text-accent-foreground",
              )}
            >
              <Users className="h-4 w-4" />
              {isOpen && (
                <>
                  <span>Development</span>
                  <Badge variant="outline" className="ml-auto text-xs">Member</Badge>
                </>
              )}
            </Link>
            <Link
              href="/dashboard/teams/marketing"
              className={cn(
                "flex items-center gap-3 rounded-md px-3 py-2 text-sm font-medium",
                pathname === "/dashboard/teams/marketing"
                  ? "bg-accent text-accent-foreground"
                  : "text-muted-foreground hover:bg-accent hover:text-accent-foreground",
              )}
            >
              <Users className="h-4 w-4" />
              {isOpen && (
                <>
                  <span>Marketing</span>
                  <Badge variant="outline" className="ml-auto text-xs">Member</Badge>
                </>
              )}
            </Link>
            <Link
              href="/dashboard/teams"
              className={cn(
                "flex items-center gap-3 rounded-md px-3 py-2 text-sm font-medium",
                pathname === "/dashboard/teams"
                  ? "bg-accent text-accent-foreground"
                  : "text-muted-foreground hover:bg-accent hover:text-accent-foreground",
              )}
            >
              <Users className="h-4 w-4" />
              {isOpen && <span>All Teams</span>}
            </Link>
          </nav>
        </div>

        <div className="mb-6">
          {isOpen && (
            <div className="flex items-center justify-between px-2 mb-2">
              <h3 className="text-xs font-semibold text-muted-foreground">CHATS</h3>
              <CreateChatDialog>
                <Button variant="ghost" size="icon" className="h-5 w-5">
                  <Plus className="h-4 w-4" />
                </Button>
              </CreateChatDialog>
            </div>
          )}
          <nav className="space-y-1">
            <Link
              href="/dashboard/chats/team"
              className={cn(
                "flex items-center gap-3 rounded-md px-3 py-2 text-sm font-medium",
                pathname === "/dashboard/chats/team" || pathname.startsWith("/dashboard/chats/team/")
                  ? "bg-accent text-accent-foreground"
                  : "text-muted-foreground hover:bg-accent hover:text-accent-foreground",
              )}
            >
              <Users className="h-4 w-4" />
              {isOpen && (
                <>
                  <span>Team Chats</span>
                  <Badge className="ml-auto bg-red-500 text-white text-xs">3</Badge>
                </>
              )}
            </Link>
            <Link
              href="/dashboard/chats/project"
              className={cn(
                "flex items-center gap-3 rounded-md px-3 py-2 text-sm font-medium",
                pathname === "/dashboard/chats/project" || pathname.startsWith("/dashboard/chats/project/")
                  ? "bg-accent text-accent-foreground"
                  : "text-muted-foreground hover:bg-accent hover:text-accent-foreground",
              )}
            >
              <FileText className="h-4 w-4" />
              {isOpen && (
                <>
                  <span>Project Chats</span>
                  <Badge className="ml-auto bg-red-500 text-white text-xs">2</Badge>
                </>
              )}
            </Link>
            <Link
              href="/dashboard/chats/task"
              className={cn(
                "flex items-center gap-3 rounded-md px-3 py-2 text-sm font-medium",
                pathname === "/dashboard/chats/task" || pathname.startsWith("/dashboard/chats/task/")
                  ? "bg-accent text-accent-foreground"
                  : "text-muted-foreground hover:bg-accent hover:text-accent-foreground",
              )}
            >
              <CheckSquare className="h-4 w-4" />
              {isOpen && <span>Task Chats</span>}
            </Link>
            <Link
              href="/dashboard/chats/direct"
              className={cn(
                "flex items-center gap-3 rounded-md px-3 py-2 text-sm font-medium",
                pathname === "/dashboard/chats/direct" || pathname.startsWith("/dashboard/chats/direct/")
                  ? "bg-accent text-accent-foreground"
                  : "text-muted-foreground hover:bg-accent hover:text-accent-foreground",
              )}
            >
              <MessageCircle className="h-4 w-4" />
              {isOpen && (
                <>
                  <span>Direct Messages</span>
                  <Badge className="ml-auto bg-red-500 text-white text-xs">5</Badge>
                </>
              )}
            </Link>
          </nav>
        </div>
      </div>

      <div className="border-t p-3">
        <nav className="space-y-1">
          <Link
            href="/dashboard/profile"
            className={cn(
              "flex items-center gap-3 rounded-md px-3 py-2 text-sm font-medium",
              pathname === "/dashboard/profile"
                ? "bg-accent text-accent-foreground"
                : "text-muted-foreground hover:bg-accent hover:text-accent-foreground",
            )}
          >
            <Users className="h-4 w-4" />
            {isOpen && <span>Profile</span>}
          </Link>
          <Link
            href="/dashboard/settings"
            className={cn(
              "flex items-center gap-3 rounded-md px-3 py-2 text-sm font-medium",
              pathname === "/dashboard/settings"
                ? "bg-accent text-accent-foreground"
                : "text-muted-foreground hover:bg-accent hover:text-accent-foreground",
            )}
          >
            <Settings className="h-4 w-4" />
            {isOpen && <span>Settings</span>}
          </Link>
          <Link
            href="/dashboard/billing"
            className={cn(
              "flex items-center gap-3 rounded-md px-3 py-2 text-sm font-medium",
              pathname === "/dashboard/billing"
                ? "bg-accent text-accent-foreground"
                : "text-muted-foreground hover:bg-accent hover:text-accent-foreground",
            )}
          >
            <CreditCard className="h-4 w-4" />
            {isOpen && <span>Billing</span>}
          </Link>
        </nav>
      </div>
    </div>
  )
}


