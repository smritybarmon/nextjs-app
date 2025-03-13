import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gray-100 px-4">
      {/* Hero Section */}
      <section className="text-center py-20">
        <h1 className="text-5xl font-extrabold text-gray-800 mb-6">
          Welcome to Our Website
        </h1>
        <p className="text-xl text-gray-600 mb-8">
          We provide modern web solutions to help your business grow and
          succeed.
        </p>
        <Link
          className="bg-blue-600  px-6 py-3 rounded-full text-lg hover:bg-blue-700 transition duration-300"
          href="/services"
        >
          Explore Our Services
        </Link>
      </section>

      {/* About Preview Section */}
      <section className="max-w-4xl mx-auto mt-16 text-center">
        <h2 className="text-3xl text-gray-700 font-bold mb-4">Who We Are</h2>
        <p className="text-gray-700 text-lg mb-6">
          We are a team of creative designers and developers dedicated to
          building high-quality web and mobile applications.
        </p>
        <Link className="text-blue-500 hover:underline" href="/about">
          Learn more about us →
        </Link>
      </section>

      {/* Call to Action Section */}
      <section className="mt-16">
        <h3 className="text-2xl text-gray-700 font-semibold mb-4">
          Get in Touch
        </h3>
        <Link
          className="bg-green-600 px-5 py-2 rounded-full hover:bg-green-700 transition duration-300"
          href="/address"
        >
          Contact Us
        </Link>
      </section>
    </div>
  );
}
