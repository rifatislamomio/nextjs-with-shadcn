import Link from "next/link";

export default function MainNav() {
  return (
    <div className="hidden items-center md:flex">
      <nav className="ml-8 flex items-center gap-4 text-nowrap lg:gap-7">
        <Link className="p-1 hover:bg-gray-200" href="/">
          Dashboard
        </Link>
        <Link className="p-1 hover:bg-gray-200" href="/purchase">
          Purchase
        </Link>
        <Link className="p-1 hover:bg-gray-200" href="/">
          History
        </Link>
        <Link className="p-1 hover:bg-gray-200" href="/">
          Vendors
        </Link>
        <Link className="p-1 hover:bg-gray-200" href="/">
          Payment Methods
        </Link>
      </nav>
    </div>
  );
}
