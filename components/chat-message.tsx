import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { FileText } from "lucide-react"
import { Button } from "@/components/ui/button"

interface Attachment {
  id: string
  name: string
  type: string
  url: string
}

interface User {
  id: string
  name: string
  initials: string
  avatar?: string
}

interface Message {
  id: string
  sender: User
  content: string
  timestamp: string
  attachments: Attachment[]
}

interface ChatMessageProps {
  message: Message
  isCurrentUser?: boolean
}

export function ChatMessage({ message, isCurrentUser = false }: ChatMessageProps) {
  return (
    <div className={`flex gap-3 ${isCurrentUser ? "flex-row-reverse" : ""}`}>
      <Avatar className="h-8 w-8 flex-shrink-0">
        <AvatarImage src={message.sender.avatar || "/placeholder.svg"} alt={message.sender.name} />
        <AvatarFallback>{message.sender.initials}</AvatarFallback>
      </Avatar>
      <div className={`flex-1 space-y-1 ${isCurrentUser ? "items-end text-right" : ""}`}>
        <div className="flex items-center gap-2">
          <p className={`text-sm font-medium ${isCurrentUser ? "order-2" : ""}`}>{message.sender.name}</p>
          <span className={`text-xs text-muted-foreground ${isCurrentUser ? "order-1" : ""}`}>{message.timestamp}</span>
        </div>
        <div
          className={`rounded-lg p-3 ${
            isCurrentUser ? "bg-green-600 text-white dark:bg-green-700" : "bg-muted text-foreground dark:bg-muted/70"
          }`}
        >
          <p className="text-sm whitespace-pre-wrap">{message.content}</p>
        </div>
        {message.attachments.length > 0 && (
          <div className="flex flex-wrap gap-2 mt-2">
            {message.attachments.map((attachment) => (
              <div key={attachment.id} className="relative">
                {attachment.type === "image" ? (
                  <div className="relative overflow-hidden rounded-md border">
                    <img
                      src={attachment.url || "/placeholder.svg"}
                      alt={attachment.name}
                      className="h-[150px] w-auto object-cover"
                    />
                    <div className="absolute inset-0 bg-black/5 opacity-0 transition-opacity hover:opacity-100">
                      <div className="absolute bottom-0 left-0 right-0 bg-black/50 p-2">
                        <p className="text-xs text-white truncate">{attachment.name}</p>
                      </div>
                    </div>
                  </div>
                ) : (
                  <Button variant="outline" size="sm" className="flex items-center gap-2 h-auto py-2">
                    <FileText className="h-4 w-4" />
                    <span className="text-xs">{attachment.name}</span>
                  </Button>
                )}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}
