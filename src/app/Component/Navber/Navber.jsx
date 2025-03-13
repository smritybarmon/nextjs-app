import Link from "next/link";

const Navber = () => {
  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-white text-2xl font-bold">My Website</h1>
        <ul className="flex space-x-6">
          <li>
            <Link href="/" className="text-white hover:text-gray-400">
              Home
            </Link>
          </li>
          <li>
            <Link href="/services" className="text-white hover:text-gray-400">
              Services
            </Link>
          </li>
          <li>
            <Link href="/about" className="text-white hover:text-gray-400">
              About
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navber;
