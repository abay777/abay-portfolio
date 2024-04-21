import Image from "next/image";
import { About, Hero } from "./components";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-normal gap-10 pt-5 px-10  lg:px-16 py-20">
      <Hero/>
      <About/>
    </main>
  );
}
