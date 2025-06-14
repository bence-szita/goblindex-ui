"use client";
import clsx from "clsx";
import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { name: "Items", href: "/items" },
  { name: "Deals", href: "/deals" },
];

export default function NavigationBar() {
  const pathname = usePathname();

  return (
    <nav className="p-4 bg-zinc-800 flex  justify-center border-solid  border-b-teal-100/30">
      <div className="max-w-8xl">
        <div className="flex gap-8 list-none m-0 p-0">
          {links.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className={clsx("hover:bold", { "font-bold": pathname === link.href })}
            >
              {link.name}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}
