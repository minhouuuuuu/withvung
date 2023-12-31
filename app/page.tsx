import { Button } from "@/components/ui/button";
import { Instagram, FacebookIcon, YoutubeIcon, PartyPopper} from "lucide-react";
import Link from "next/link";
import { Announce } from "@/components/announce";


export default function Home() {
  return (
    <main className="flex items-center justify-center h-screen flex-col px-4">
      <h1 className='text-xl font-semibold text-center'>
        withvung&apos;s portfolio :3 <br />
        Working in progress... with&nbsp;
        <Link href="https://nguyen-minh.dev" target="_blank" className="underline">
          @terminhator
        </Link>
      </h1>

      <p className="text-center px-8">But don&apos;t worry, you can still check vung&apos;s other social network here:</p>
      <div className="flex space-x-3 py-7">
        <Link href="https://www.instagram.com/withvung/" target="_blank">
          <Button>
            <Instagram size={24} />
          </Button>
        </Link>
        <Link href="https://www.facebook.com/withvung" target="_blank">
          <Button>
            <FacebookIcon size={24} />
          </Button>
        </Link>
        <Link href="https://www.youtube.com/@withvung" target="_blank">
          <Button>
            <YoutubeIcon size={24} />
          </Button>
        </Link>
      </div>

      <p className="pb-7 px-8 text-center">...or you can check our present for the waiting: </p>
      <Announce />
    </main>
  )
}
