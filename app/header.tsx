import Search from "./search";
import { concert, philosopher } from "./fonts";
import Image from "next/image";
import { Suspense } from "react";

export default function Header({ bigMobile }: { bigMobile: boolean }) {
  return (
    <div
      className={
        `w-full p-2 ` +
        (bigMobile ? `flex flex-col md:flex-row` : `flex flex-row`) +
        ` items-center justify-between`
      }
    >
      <div className="flex flex-row items-center mb-4">
        <Image
          src="/will-it-table-logo.png"
          width={80}
          height={80}
          alt="A board game piece atop a table"
          className="dark:bg-gradient-radial dark:from-blue-300 dark:from-0% dark:via-transparent dark:via-80%"
        />
        <h1 className={`${philosopher.className} pl-8 text-4xl md:text-5xl`}>
          Will It Table?
        </h1>
      </div>
      <div>
        <Suspense>
          <Search placeholder="Search" />
        </Suspense>
        {/* Button? */}
      </div>
    </div>
  );
}
