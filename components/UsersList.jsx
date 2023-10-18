"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
// import userData from "../app/mocks/users.json";
import Link from "next/link";
import { BiLogoGithub } from "react-icons/bi";
import ProfileImg from "./ProfileImg";
import Error from "@/app/error";
import Loading from "@/app/loading";

const UsersList = () => {
  const [userData, setUsers] = useState([]);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchRepo = async () => {
      try {
        const userDataResponse = await fetch(
          "https://api.github.com/users?per_page=5"
        );

        const data = await userDataResponse.json();

        setUsers(data);
      } catch (error) {
        console.error("Error fetching data: ", error);
        setError(true);
      }
    };

    fetchRepo();
  }, []);

  if (error) {
    return <Error />;
  }
  if (!userData) {
    return <Loading />;
  }

  console.log(userData);
  return (
    <div className="user_layout">
      {userData?.map(
        (user, key) =>
          user.login && (
            <div
              key={key}
              className="user card card-transition flex flex-col items-center justify-between"
              style={{ position: "relative" }}
            >
              <Link href={`/profile/${user.login}`}>
                <div className="flex items-center gap-10">
                  <ProfileImg avatarUrl={user.avatar_url} />

                  <div className="flex flex-row flex-grow gap-3">
                    <BiLogoGithub className="text-2xl" />
                    <h3 className="sm:text-lg">{user.login}</h3>
                  </div>
                </div>

                <div className="text-xs absolute bottom-0 right-0 mb-4 mr-5">
                  Details →
                </div>
              </Link>
            </div>
          )
      )}
    </div>
  );
};

export default UsersList;
