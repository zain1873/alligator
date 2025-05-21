"use client"

import * as Dialog from "@radix-ui/react-dialog"
import { X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { cn } from "@/lib/utils"
import React from "react"

export function CreateTeamDialog({ children }: { children: React.ReactNode }) {
  return (
    <Dialog.Root>
      <Dialog.Trigger asChild>{children}</Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 bg-black/50 z-50" />
        <Dialog.Content
          className={cn(
            "fixed left-1/2 top-1/2 z-50 w-full max-w-md -translate-x-1/2 -translate-y-1/2 bg-white p-6 rounded-md shadow-lg"
          )}
        >
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-lg font-semibold">Create New Team</h2>
            <Dialog.Close className="hover:bg-muted p-1 rounded">
              <X className="h-4 w-4" />
            </Dialog.Close>
          </div>
          <form className="space-y-4">
            <div>
              <label htmlFor="team-name" className="block text-sm font-medium mb-1">
                Team Name
              </label>
              <Input id="team-name" placeholder="e.g. Marketing" />
            </div>
            <div className="flex justify-end gap-2 pt-4">
              <Dialog.Close asChild>
                <Button variant="outline">Cancel</Button>
              </Dialog.Close>
              <Button type="submit">Create Team</Button>
            </div>
          </form>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  )
}
