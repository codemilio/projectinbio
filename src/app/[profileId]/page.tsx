import { ProjectCard } from "@/components/commons/project-card"
import { TotalVists } from "@/components/commons/total-visits"
import { UserCard } from "@/components/commons/user-card"

type ProfilePageParams = {
  profileId: string
}

type ProfilePageProps = {
  params: Promise<ProfilePageParams>
}

export default function ProfilePage({ params }: ProfilePageProps) {
  return (
    <div className="flex relative h-screen overflow-hidden gap-4 py-4">
      <div className="w-1/2 flex flex-col justify-center h-min gap-y-4 ">
        <UserCard />
        <TotalVists />
      </div>
      <div className="columns-1 sm:columns-2 gap-4 max-w-screen-md ">
        <div className="break-inside-avoid mb-4">
          <ProjectCard />
        </div>
        <div className="break-inside-avoid mb-4">
          <ProjectCard />
        </div>
        <div className="break-inside-avoid mb-4">
          <ProjectCard />
        </div>
        <div className="break-inside-avoid mb-4">
          <ProjectCard />
        </div>
      </div>
    </div>
  )
}
