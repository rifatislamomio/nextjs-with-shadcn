import Link from "next/link";
import MainNav from "./mainNav";
import MobileNav from "./mobileNav";
import { ShoppingBag } from "lucide-react";

export default function Header() {
  return (
    <header className="sticky top-0 w-screen border-b">
      <div className="container flex h-14 items-center justify-between md:justify-normal">
        {/* Desktop and mobile  */}
        <Link href="/">
          <ShoppingBag className="text-red-500" />
        </Link>
        {/* for tab/desktop view */}
        <MainNav />

        {/* for mobile view */}
        <MobileNav />

        {/* <h1 className="flex w-full items-center justify-end">
          <Link href="/">Some social media icons</Link>
        </h1> */}
      </div>
    </header>
  );
}
