import React from "react";
import { BiLogoGithub, BiUserCircle } from "react-icons/bi";
import Link from "next/link";

const LinkCard = ({ linkType, textToDisplay, redirect }) => {
  return (
    <Link href={redirect}>
      <div className="link card card-transition">
        {linkType === "git" ? <BiLogoGithub /> : <BiUserCircle />}{" "}
        <p>{textToDisplay}</p>
      </div>
    </Link>
  );
};

export default LinkCard;
