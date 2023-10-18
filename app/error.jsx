"use client";
import { useEffect } from "react";
import { BiError } from "react-icons/bi";

export default function Error({ error }) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="mt-32 text-gray-700 text-center">
      <BiError className="m-auto text-8xl" />
      <h2>Something went wrong!</h2>
      <p>Please try again later.</p>
    </div>
  );
}
