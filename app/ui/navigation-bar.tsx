"use client";
import clsx from "clsx";
import Link from "next/link";
import { useParams, usePathname } from "next/navigation";

const links = [
  { name: "Items", href: "/items", routeParam: "itemid" },
  { name: "Deals", href: "/deals" },
  { name: "Arbitrage", href: "/arbitrage", routeParam: "itemid" },
];

export default function NavigationBar() {
  const pathname = usePathname();
  const params = useParams();

  return (
    <nav className="bg-zinc-800 flex  justify-center">
      <div className="max-w-8xl">
        <div className="flex gap-8 list-none m-0">
          {links.map((link) => {
            //Persist route params
            const href =
              link.routeParam && params[link.routeParam] ? `${link.href}/${params[link.routeParam]}` : link.href;
            return (
              <Link
                key={link.name}
                href={href}
                className={clsx("hover:border-b-2 hover:border-cyan-200 p-4", {
                  "font-bold border-b-2 border-cyan-200": pathname.startsWith(link.href),
                })}
              >
                {link.name}
              </Link>
            );
          })}
        </div>
      </div>
    </nav>
  );
}
