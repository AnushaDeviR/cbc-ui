"use client";

import React, { useEffect, useState } from "react";
// import userDetail from "../../mocks/user.json";
import { usePathname } from "next/navigation";
import LinkCard from "@/components/LinkCard";
import UserProfileCard from "@/components/UserProfileCard";
import { BiGitBranch } from "react-icons/bi";
import Loading from "@/app/loading";
import Error from "@/app/error";

const UserProfile = () => {
  const pathname = usePathname();

  const matchUser = pathname.match(/\/profile\/(.+)/);
  const username = matchUser ? matchUser[1] : null;
  const [error, setError] = useState(false);

  const [userDetail, setUserDetail] = useState(null);

  useEffect(() => {
    const fetchDetails = async () => {
      try {
        const userDataResponse = await fetch(
          `https://api.github.com/users/${username}`
        );
        const data = await userDataResponse.json();
        setUserDetail(data);
      } catch (error) {
        console.error("Error fetching data: ", error);
        setUserDetail(null);
        setError(true);
      }
    };

    fetchDetails();
  }, [username]);

  if (error) {
    return <Error />;
  }
  if (!userDetail) {
    return <Loading />;
  }

  const organizations =
    userDetail.company?.split(",").map((item) => item.trim()) || [];
  const gitHubUrl = userDetail.html_url;
  console.log(
    "[CMD] 🐨 | file: page.jsx:49 | UserProfile | gitHubUrl:",
    gitHubUrl
  );

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-4 sm:p-8 lg:p-8 xl:p-8">
      <h1 className="title mt-12 mb-10">
        <BiGitBranch className="text-3xl sm:text-4xl lg:text-5xl xl:text-5xl mr-2" />
        Git User Detail
      </h1>
      <UserProfileCard
        userDetail={userDetail}
        organizations={organizations}
        gitHubUrl={gitHubUrl}
      />

      <div className="flex flex-col sm:flex-row justify-between w-full sm:w-10/12 lg:w-9/12 xl:w-8/12 mt-8 mb-4 gap-3">
        <LinkCard
          linkType="users"
          textToDisplay="Explore User List"
          redirect="/"
          className="mb-4 sm:mb-0 sm:mr-4"
        />
        <LinkCard
          linkType="git"
          textToDisplay="Explore on GitHub"
          redirect={gitHubUrl}
        />
      </div>
    </div>
  );
};
export default UserProfile;
