import Link from "next/link";
import React from "react";

export default function NotFoundPage404() {
  return (
    <div className="flex justify-center items-center w-full h-full">
      <h1>Not found the page 404</h1>
      <br></br>
      <Link href="/">Go back home</Link>
    </div>
  );
}
