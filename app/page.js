import UsersList from "@/components/UsersList";
import { BiGitBranch } from "react-icons/bi";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 font-mono">
      <div className="z-10 flex-col max-w-5xl w-full items-center justify-between lg:flex">
        <h1 className="title mt-2 mb-5">
          <BiGitBranch className="text-3xl sm:text-4xl lg:text-5xl xl:text-5xl mr-2" />
          Git User List
        </h1>
        <UsersList />
      </div>
    </main>
  );
}
