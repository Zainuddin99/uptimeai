import { NavIcon } from "@/components/ui/NavIcon";
import { data } from "@/data";
import { Menu } from "lucide-react";
import Image from "next/image";
import { NavIcons } from "./NavIcons";

export const MainNavs = () => {
  return (
    <nav className="flex items-center justify-between ">
      <ul className="flex gap-2 items-center">
        <li>
          <NavIcon icon={Menu} />
        </li>
        <li>
          <Image
            src={"/icons/github-icon.svg"}
            alt="github icon"
            height={36}
            width={36}
          />
        </li>
        <li>
          <div className="font-semibold text-sm">{data.profile.username}</div>
        </li>
      </ul>

      <ul className="flex gap-2 items-center justify-end">
        <NavIcons />

        <li className="h-8 w-8 rounded-full overflow-hidden">
          <Image
            src="/profile.jpg"
            alt="profile"
            width={32}
            height={32}
            className="object-cover"
          />
        </li>
      </ul>
    </nav>
  );
};
