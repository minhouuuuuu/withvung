import { Copy, PartyPopper } from "lucide-react"

import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import Link from "next/link"
import Image from "next/image"

export function Announce() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button>
            <PartyPopper size={24} />
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Get ready for your present!</DialogTitle>
          <DialogDescription>
            What is better than a surprise present right?
          </DialogDescription>
        </DialogHeader>
        <Image 
          src="/bart.gif"
          alt="bart"
          width={400}
          height={400}
        />
        <div className="flex items-center justify-center space-x-2">
          <Link href="https://www.youtube.com/watch?v=dQw4w9WgXcQ&pp=ygUIcmlja3JvbGw%3D" target="_blank">
            <Button>
              Get it!
            </Button>
          </Link>
          <DialogClose asChild>
            <Button type="button" variant="secondary">
              Go back
            </Button>
          </DialogClose>
        </div>
      </DialogContent>
    </Dialog>
  )
}
