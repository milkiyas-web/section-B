// import Link from "next/link"
// import { Button } from "@/components/ui/Button"

// import { db } from "@/db"
// import { projects } from "@/db/schema"

// export default async function Component() {
  
//   const getProjects = await db.select().from(projects);
//   console.log(getProjects);
 
//   return (
//     <div className="flex flex-col w-full min-h-screen bg-muted/40">
//       <main className="flex min-h-[calc(100vh_-_theme(spacing.16))] flex-1 flex-col gap-4 p-4 md:gap-8 md:p-10">
//         <div className="max-w-6xl w-full mx-auto flex items-center gap-4">
//           {/* <Button variant="outline" onClick={handleCreateSpace}>Add Space</Button> */}
//           <Button className=" bg-dark-200 text-white" asChild>
//             <Link href="/dashboard/space">
//               Add Space
//             </Link>
//           </Button>
//         </div>
//         <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 max-w-6xl w-full mx-auto">
//         </div>
//       </main>
//     </div>
//   )
// }

// function FrameIcon(props : any) {
//   return (
//     <svg
//       {...props}
//       xmlns="http://www.w3.org/2000/svg"
//       width="24"
//       height="24"
//       viewBox="0 0 24 24"
//       fill="none"
//       stroke="currentColor"
//       strokeWidth="2"
//       strokeLinecap="round"
//       strokeLinejoin="round"
//     >
//       <line x1="22" x2="2" y1="6" y2="6" />
//       <line x1="22" x2="2" y1="18" y2="18" />
//       <line x1="6" x2="6" y1="2" y2="22" />
//       <line x1="18" x2="18" y1="2" y2="22" />
//     </svg>
//   )
// }


// function HomeIcon(props : any) {
//   return (
//     <svg
//       {...props}
//       xmlns="http://www.w3.org/2000/svg"
//       width="24"
//       height="24"
//       viewBox="0 0 24 24"
//       fill="none"
//       stroke="currentColor"
//       strokeWidth="2"
//       strokeLinecap="round"
//       strokeLinejoin="round"
//     >
//       <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
//       <polyline points="9 22 9 12 15 12 15 22" />
//     </svg>
//   )
// }


// function XIcon(props : any) {
//   return (
//     <svg
//       {...props}
//       xmlns="http://www.w3.org/2000/svg"
//       width="24"
//       height="24"
//       viewBox="0 0 24 24"
//       fill="none"
//       stroke="currentColor"
//       strokeWidth="2"
//       strokeLinecap="round"
//       strokeLinejoin="round"
//     >
//       <path d="M18 6 6 18" />
//       <path d="m6 6 12 12" />
//     </svg>
//   )
// }


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
import { Plus } from "lucide-react";
import { createProject } from "@/actions/createProject";
import { Button } from "@/components/ui/MovingBorders";
import SubmitButton from "@/components/SubmitProjBtn";



const NewProjBtn = () => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="rounded-full">
          <Plus className="w-4 h-4" />New Space</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px] rounded-md">
        <DialogHeader>
          <DialogTitle>New Project</DialogTitle>
          <DialogDescription>
            Create a new project to get started
          </DialogDescription>
        </DialogHeader>
        <form className="flex gap-4 flex-col" action={createProject}>
          <div className="grid sm:grid-cols-2 gap-4">
            <div className="flex flex-col gap-2">
              <Label htmlFor="name">Name</Label>
              <Input id="name" name="name" placeholder="Project Name" />
            </div>
            <div className="flex flex-col gap-2">
              <Label htmlFor="url">URL</Label>
              <Input id="url" name="url" placeholder="https://example.com" />
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <Label htmlFor="description">Description</Label>
            <Textarea name="description" id="description" placeholder="Description (optional)" />
          </div>
          <SubmitButton />        
          </form>
      </DialogContent>
    </Dialog>
  )
};

export default NewProjBtn;