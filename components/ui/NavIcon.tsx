import { ChevronDown, LucideIcon } from "lucide-react";
import { ReactNode } from "react";

export type NavIconProps = {
  icon: LucideIcon;
  withDropdown?: boolean;
  withDivider?: boolean;
  afterElement?: ReactNode;
  className?: string;
};

export const NavIcon = ({
  icon: Icon,
  withDropdown,
  withDivider,
  afterElement,
  className = "",
}: NavIconProps) => {
  return (
    <div
      className={`p-1.5 border border-[#d1d9e0] flex gap-1 transition items-center rounded-lg w-fit cursor-pointer hover:bg-[#818b981a] ${className}`}
    >
      <div className={`${withDivider ? "border-r border-[#d1d9e0] pr-1.5 mr-0.5" : ""}`}>
        <Icon
          size={18}
          className="text-(--icon-color)"
        />
      </div>
      {afterElement && afterElement}
      {withDropdown && (
        <ChevronDown
          size={12}
          className="text-(--icon-color)"
        />
      )}
    </div>
  );
};
