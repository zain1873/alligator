export default function TaskBoardPage() {
  // Dummy tasks data
  const tasks = {
    notStarted: [
      {
        id: "task-1",
        title: "Research competitors",
        description: "Analyze top competitors in the market and identify their strengths and weaknesses.",
        status: "Not Started",
        priority: "Medium",
        dueDate: "2023-06-25",
        assignee: {
          id: "john-doe",
          name: "John Doe",
          avatar: "/placeholder.svg",
          initials: "JD",
        },
        project: "Marketing Campaign",
        tags: ["Research", "Marketing"],
        subtasks: [
          { id: "st-1", title: "Identify top 5 competitors", completed: false },
          { id: "st-2", title: "Analyze their websites", completed: false },
          { id: "st-3", title: "Review their social media presence", completed: false },
        ],
        attachments: [],
        comments: [],
        createdAt: "June 15, 2023",
        updatedAt: "June 15, 2023",
      },
      {
        id: "task-2",
        title: "Create user personas",
        description: "Develop detailed user personas for our target audience.",
        status: "Not Started",
        priority: "High",
        dueDate: "2023-06-28",
        assignee: {
          id: "emily-davis",
          name: "Emily Davis",
          avatar: "/placeholder.svg",
          initials: "ED",
        },
        project: "Website Redesign",
        tags: ["UX", "Research"],
        subtasks: [
          { id: "st-4", title: "Conduct user interviews", completed: false },
          { id: "st-5", title: "Analyze survey results", completed: false },
          { id: "st-6", title: "Create persona documents", completed: false },
        ],
        attachments: [],
        comments: [],
        createdAt: "June 16, 2023",
        updatedAt: "June 16, 2023",
      },
    ],
    inProgress: [
      {
        id: "task-3",
        title: "Design homepage mockup",
        description: "Create a mockup for the new homepage design based on the approved wireframes.",
        status: "In Progress",
        priority: "High",
        dueDate: "2023-06-30",
        assignee: {
          id: "sarah-johnson",
          name: "Sarah Johnson",
          avatar: "/placeholder.svg",
          initials: "SJ",
        },
        project: "Website Redesign",
        tags: ["Design", "UI"],
        subtasks: [\
          { id: "
