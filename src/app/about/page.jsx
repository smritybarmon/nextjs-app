"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";

export default function AboutPage() {
  const router = useRouter();
  const isLoggedIn = false;
  const handleNavigation = () => {
    if (isLoggedIn) {
      router.push("/about/adress");
    } else alert("You need to be logged in to access this page.");
  };
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold text-center mb-8">About Us</h1>

      <div className="max-w-4xl mx-auto text-center">
        <p className="text-lg text-gray-700 mb-6">
          Welcome to <span className="font-semibold">My Website</span>! We are
          passionate about delivering the best digital solutions to help your
          business grow. Our team specializes in web development, design, and
          digital strategy.
        </p>

        <p className="text-lg text-gray-700 mb-6">
          Since our founding, we have worked with clients from all over the
          world, focusing on building modern, responsive, and user-friendly
          websites and applications. We take pride in our work and strive to
          exceed client expectations on every project.
        </p>

        <p className="text-lg text-gray-700">
          If you want to know more about how we can help your business succeed
          online, feel free to{" "}
          <a href="/contact" className="text-blue-500 hover:underline">
            contact us
          </a>
          .
        </p>
      </div>

      <div className="mt-12 flex justify-center">
        <img
          src="/about-image.jpg"
          alt="About us image"
          className="rounded-lg shadow-lg w-full max-w-md"
        />
      </div>
      <Link href="/about/adress">Adress</Link>
      <button className="btn bg-blue-500" onClick={handleNavigation}>
        Adress
      </button>
    </div>
  );
}
