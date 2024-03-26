import Search from "./search";
import { concert, philosopher } from "./fonts";
import Image from "next/image";

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
        />
        <h1 className={`${philosopher.className} pl-8 text-4xl md:text-5xl`}>
          Will It Table?
        </h1>
      </div>
      <div>
        <Search placeholder="Search" />
        {/* Button? */}
      </div>
    </div>
  );
}
