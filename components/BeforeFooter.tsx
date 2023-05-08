import Image from "next/image";
import SquigglyLines from "../components/SquigglyLines";
import Link from "next/link";

export function BeforeFooter() {
  return (
    <section
      id="abovefooter"
      aria-label="You made it this far"
      className="py-10"
    >
      <div className="mx-auto px-4 sm:px-6 lg:px-8 md:px-7">
        <div className="flex flex-1 w-full flex-col items-center justify-center text-center px-4 sm:mt-20 mt-20 background-gradient">
          <a
          href="https://vercel.fyi/roomGPT"
          target="_blank"
          rel="noreferrer"
          className="border border-gray-700 rounded-lg py-2 px-4 text-gray-400 text-sm mb-5  items-center justify-center text-center transition duration-300 ease-in-out hover:text-gray-300"
        >
          Get started with  {" "}
          <span className="text-blue-600">Renovate AI</span> today!
          </a> 
          <h1 className="mx-auto max-w-4xl font-display text-4xl font-bold tracking-normal text-gray-300 sm:text-4xl">
          You made it this far, why not {" "}
          <span className="relative whitespace-nowrap text-blue-600">
            <SquigglyLines />
            <span className="relative"> make it official?</span>
          </span>{" "}
          </h1>
          <Link
          className="bg-blue-600 rounded-xl text-white font-medium px-4 py-3 sm:mt-10 mt-8 hover:bg-blue-500 transition"
          href="/dream"
        >
          Try Renovate AI for free
        </Link>
        </div>
      </div>
    </section>
  );
}
