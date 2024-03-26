"use client";
import CSClassesComponent from "./CSClassesComponent";

import TabbedQuotes from "./chatgpt";
import TabbedClasses from "./display_classes";
import Header from "./header";
import { display } from "./fonts";

export default function Home() {
  return (
    // <main className="flex min-h-screen flex-col items-center justify-between p-24">
    //   <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
    //     <Card quoteTxt="Hey a quote" source="me" tags={tags} />
    //   </div>
    // </main>
    <main className="flex flex-col items-center justify-between p-24">
      <Header bigMobile={true} />
      {/* Explore items */}
      <div className="pt-12">
        <h1 className={`${display.className} text-center text-5xl`}>
          Tabletop games should fit on your table
        </h1>
        {/* <p>
          'Will It Table?' is the ultimate repository of how much table space
          your games will need.
        </p> */}
      </div>
      {/* <CSClassesComponent /> */}
      {/* <TabbedClasses /> */}
    </main>
  );
}
