import { ProjectCard } from "@/components/ProjectCard"
import { TotalVists } from "@/components/TotalVisits"
import { UserCard } from "@/components/UserCard"

type ProfilePageParams = {
  profileId: string
}

type ProfilePageProps = {
  params: Promise<ProfilePageParams>
}

export default async function ProfilePage({ params }: ProfilePageProps) {
  return (
    <div className="flex relative h-screen p-20 overflow-hidden">
      <div className="w-1/2 flex flex-col justify-center h-min gap-y-4">
        <UserCard />
        <TotalVists  />
      </div>
      <div className="flex flex-wrap content-start w-full justify-center gap-4 ">
        <ProjectCard/>
        <ProjectCard/>
        <ProjectCard/>
        <ProjectCard/>
      </div>
    </div>
  )
}
