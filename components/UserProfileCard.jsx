import React from "react";
import Image from "next/image";
import {
  BiUserCheck,
  BiUserPlus,
  BiEnvelopeOpen,
  BiLogoTwitter,
  BiLink,
  BiLogoLinkedin,
  BiBuildings,
  BiGitPullRequest,
} from "react-icons/bi";
import ProfileImg from "./ProfileImg";

const UserProfileCard = ({ userDetail, organizations, gitHubUrl }) => {
  return (
    <div className="bg-white p-8 rounded-lg shadow-lg mb-8 max-w-md w-full card-transition">
      <h1 className="text-4xl mb-4 font-semibold text-gray-700">
        {userDetail.name}
      </h1>
      <div className="flex items-center gap-4 mb-6 flex-col sm:flex-row">
        <ProfileImg avatarUrl={userDetail.avatar_url} />

        <div className="flex flex-col">
          <div className="text-gray-700 flex gap-4">
            <div className="flex gap-1">
              <BiUserCheck className="text-gray-500 hover:text-gray-700 text-xl" />
              <p className="text-sm font-semibold mb-1">
                {userDetail.followers} followers
              </p>
            </div>
            <div className="flex gap-1">
              <BiUserPlus className="text-gray-500 hover:text-gray-700 text-xl" />
              <p className="text-sm font-semibold mb-1">
                {userDetail.following} following
              </p>
            </div>
          </div>
          <div className="text-gray-700">
            <p className="text-base">{userDetail.location}</p>
          </div>
          <div className="flex items-center gap-2 mt-2 text-base">
            <b>Socials: </b>
            {userDetail.email && (
              <a
                href={`mailto:${userDetail.email}`}
                title="Click to email user"
              >
                <BiEnvelopeOpen className="text-gray-500 hover:text-gray-700 cursor-pointer" />
              </a>
            )}
            {userDetail.twitter_username && (
              <a
                href={`https://twitter.com/${userDetail.twitter_username}`}
                title="Twitter"
              >
                <BiLogoTwitter className="text-gray-500 hover:text-gray-700 cursor-pointer" />
              </a>
            )}
            {userDetail.blog && (
              <a href={userDetail.blog} title="blog">
                <BiLink className="text-gray-500 hover:text-gray-700 cursor-pointer" />
              </a>
            )}
            {userDetail.linkedin && (
              <a
                href={`https://linkedin.com/in/${userDetail.linkedin}`}
                title="LinkedIn"
              >
                <BiLogoLinkedin className="text-gray-500 hover:text-gray-700 cursor-pointer" />
              </a>
            )}
          </div>
        </div>
      </div>
      {userDetail.bio !== null && (
        <p className="text-base mb-6">
          <b>Bio: </b>
          {userDetail.bio}
        </p>
      )}

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="flex flex-col">
          <div className="flex flex-col">
            <div className="flex flex-row">
              <BiBuildings className="text-xl text-gray-500 hover:text-gray-700" />
              <p className="text-base font-semibold mb-2">Organization:</p>
            </div>
            {organizations.length > 0 ? (
              <div className="flex flex-col">
                {organizations.map((org, orgIndex) => (
                  <div key={orgIndex}>
                    <a
                      href={`https://github.com/${org.substring(1)}`}
                      className="text-gray-700 hover:text-gray-500 cursor-pointer"
                    >
                      <p className="text-sm">{org}</p>
                    </a>
                  </div>
                ))}
              </div>
            ) : (
              <p className="text-sm">
                <i>not found</i>
              </p>
            )}
          </div>
        </div>

        <div>
          <div className="flex flex-row">
            <BiGitPullRequest className="text-xl text-gray-500 hover:text-gray-700" />
            <p className="text-base font-semibold mb-2">Repositories:</p>
          </div>
          <p className="text-sm text-gray-700">
            Public repositories: {userDetail.public_repos}
          </p>
          <p className="text-sm text-gray-700">
            Public Gists: {userDetail.public_gists}
          </p>
        </div>
      </div>
    </div>
  );
};

export default UserProfileCard;
