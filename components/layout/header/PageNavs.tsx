"use client";

import { BookMinus, BookOpen, Box, LucideIcon, PanelsTopLeft, Star } from "lucide-react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

const data: { icon: LucideIcon; name: string; link?: string; count?: number }[] = [
  { icon: BookOpen, name: "Overview", link: "/" },
  { icon: BookMinus, name: "Repositories", count: 8 },
  { icon: PanelsTopLeft, name: "Projects" },
  { icon: Box, name: "Packages" },
  { icon: Star, name: "Stars", count: 5 },
];

export const PageNavs = () => {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const navigate = (name: string) => {
    const params = new URLSearchParams(searchParams.toString());

    if (name === "Overview") {
      params.delete("tab");
    } else {
      params.set("tab", name);
    }
    router.push(`${pathname}?${params.toString()}`);
  };

  const activeTab = searchParams.get("tab") ?? "Overview";
  return (
    <nav>
      <ul className="flex items-center gap-2">
        {data.map((item) => {
          const Icon = item.icon;
          return (
            <li
              key={item.name}
              className={`pb-1.5 ${activeTab === item.name ? "border-b-2 border-amber-500" : ""}`}
            >
              <div
                onClick={() => navigate(item.name)}
                className="flex items-center p-2 hover:bg-[#818b981a] transition cursor-pointer rounded-md "
              >
                <Icon
                  className="text-(--icon-color) mr-1.5"
                  size={16}
                />
                <div className={`text-sm`}>{item.name}</div>
                {item.count && (
                  <div className="bg-gray-200 ml-1.5 rounded-full h-4 w-4 flex items-center justify-center text-xs">
                    {item.count}
                  </div>
                )}
              </div>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};
