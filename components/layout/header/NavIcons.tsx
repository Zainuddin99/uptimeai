import { NavIcon } from "@/components/ui/NavIcon";
import { BookMinus, Bot, CircleDot, GitPullRequest, LucideIcon, Plus, Search } from "lucide-react";
import { ReactNode } from "react";

const data: {
  key: number;
  icon: LucideIcon | "divide";
  withDropdown?: boolean;
  withDivider?: boolean;
  afterElement?: ReactNode;
}[] = [
  {
    key: 7,
    icon: Search,
    afterElement: (
      <div className="hidden md:block text-[14px] text-(--icon-color) w-35">Type / to search</div>
    ),
  },
  { key: 6, icon: Bot, withDivider: true, withDropdown: true },
  { key: 5, icon: "divide" },
  { key: 4, icon: Plus, withDropdown: true },
  { key: 3, icon: CircleDot },
  { key: 2, icon: GitPullRequest },
  { key: 1, icon: BookMinus },
];

export const NavIcons = () => {
  return data.map((item) => {
    if (item.icon === "divide")
      return (
        <li
          key={item.key}
          className="h-5 mx-1 w-[0.5px] bg-gray-300 hidden sm:block"
        />
      );
    return (
      <li
        key={item.key}
        className={item.key !== 7 ? "hidden sm:flex" : ""}
      >
        <NavIcon
          icon={item.icon}
          withDropdown={item.withDropdown}
          withDivider={item.withDivider}
          afterElement={item.afterElement}
        />
      </li>
    );
  });
};
