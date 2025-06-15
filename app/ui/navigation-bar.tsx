"use client";
import clsx from "clsx";
import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { name: "Items", href: "/items" },
  { name: "Deals", href: "/deals" },
  { name: "Arbitrage", href: "/arbitrage" },
];

export default function NavigationBar() {
  const pathname = usePathname();

  return (
    <nav className="bg-zinc-800 flex  justify-center">
      <div className="max-w-8xl">
        <div className="flex gap-8 list-none m-0">
          {links.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className={clsx("hover:border-b-2 hover:border-cyan-200 p-4", {
                "font-bold border-b-2 border-cyan-200": pathname.startsWith(link.href),
              })}
            >
              {link.name}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}
