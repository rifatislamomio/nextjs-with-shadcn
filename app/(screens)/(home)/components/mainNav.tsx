import Link from "next/link";

export default function MainNav() {
  return (
    <div className="hidden items-center md:flex">
      <nav className="pl-8 flex items-center gap-2 text-nowrap lg:gap-6">
        <Link
          className="select-none p-1 px-2 hover:rounded-lg hover:bg-gray-200"
          href="/"
        >
          Dashboard
        </Link>
        <Link
          className="select-none p-1 px-2 hover:rounded-lg hover:bg-gray-200"
          href="/purchase"
        >
          Purchase
        </Link>
        <Link
          className="select-none p-1 px-2 hover:rounded-lg hover:bg-gray-200"
          href="/"
        >
          History
        </Link>
        <Link
          className="select-none p-1 px-2 hover:rounded-lg hover:bg-gray-200"
          href="/"
        >
          Vendors
        </Link>
        <Link
          className="select-none p-1 px-2 hover:rounded-lg hover:bg-gray-200"
          href="/"
        >
          Payment Methods
        </Link>
      </nav>
    </div>
  );
}
