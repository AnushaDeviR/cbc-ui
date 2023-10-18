import Image from "next/image";
import React from "react";

const ProfileImg = ({ avatarUrl }) => {
  if (
    avatarUrl &&
    avatarUrl !== "null" &&
    avatarUrl !== "undefined" &&
    !avatarUrl.includes("/error")
  ) {
    return (
      <Image
        src={avatarUrl}
        alt="GitHub user profile pictures"
        width={100}
        height={100}
        className="rounded-full"
      />
    );
  } else {
    return (
      <Image
        src="/assets/images/noProfile.png"
        alt="Avatar not found"
        width={100}
        height={100}
        className="rounded-full"
      />
    );
  }
};

export default ProfileImg;
