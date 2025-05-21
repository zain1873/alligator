"use client"

import type React from "react"

import { useState, useRef, useEffect } from "react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"

interface User {
  id: string
  name: string
  initials: string
  avatar?: string
}

interface MentionPopoverProps {
  children: React.ReactNode
}

export function MentionPopover({ children }: MentionPopoverProps) {
  const [open, setOpen] = useState(false)
  const [searchTerm, setSearchTerm] = useState("")
  const [position, setPosition] = useState({ x: 0, y: 0 })
  const triggerRef = useRef<HTMLDivElement>(null)

  const users: User[] = [
    { id: "john-doe", name: "John Doe", initials: "JD", avatar: "/placeholder.svg" },
    { id: "sarah-johnson", name: "Sarah Johnson", initials: "SJ", avatar: "/placeholder.svg" },
    { id: "michael-brown", name: "Michael Brown", initials: "MB", avatar: "/placeholder.svg" },
    { id: "emily-davis", name: "Emily Davis", initials: "ED", avatar: "/placeholder.svg" },
    { id: "alex-wilson", name: "Alex Wilson", initials: "AW", avatar: "/placeholder.svg" },
    { id: "lisa-chen", name: "Lisa Chen", initials: "LC", avatar: "/placeholder.svg" },
  ]

  const filteredUsers = users.filter((user) => user.name.toLowerCase().includes(searchTerm.toLowerCase()))

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "@") {
        const selection = window.getSelection()
        if (selection && selection.rangeCount > 0) {
          const range = selection.getRangeAt(0)
          const rect = range.getBoundingClientRect()
          setPosition({ x: rect.left, y: rect.bottom })
          setOpen(true)
          setSearchTerm("")
        }
      } else if (e.key === "Escape") {
        setOpen(false)
      }
    }

    document.addEventListener("keydown", handleKeyDown)
    return () => document.removeEventListener("keydown", handleKeyDown)
  }, [])

  const handleUserSelect = (user: User) => {
    // In a real app, this would insert the mention into the text field
    console.log(`Mentioned ${user.name}`)
    setOpen(false)
  }

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <div ref={triggerRef}>{children}</div>
      </PopoverTrigger>
      <PopoverContent
        className="w-[200px] p-0"
        style={{ position: "absolute", left: `${position.x}px`, top: `${position.y}px` }}
      >
        <div className="p-2">
          <input
            type="text"
            placeholder="Search users..."
            className="w-full rounded-md border border-input px-3 py-1 text-sm"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            autoFocus
          />
        </div>
        <div className="max-h-[200px] overflow-y-auto">
          {filteredUsers.length > 0 ? (
            filteredUsers.map((user) => (
              <div
                key={user.id}
                className="flex items-center gap-2 p-2 hover:bg-muted cursor-pointer"
                onClick={() => handleUserSelect(user)}
              >
                <Avatar className="h-6 w-6">
                  <AvatarImage src={user.avatar || "/placeholder.svg"} alt={user.name} />
                  <AvatarFallback>{user.initials}</AvatarFallback>
                </Avatar>
                <span className="text-sm">{user.name}</span>
              </div>
            ))
          ) : (
            <div className="p-2 text-sm text-muted-foreground">No users found</div>
          )}
        </div>
      </PopoverContent>
    </Popover>
  )
}
