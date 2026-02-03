import { MainNavs } from "./MainNavs";
import { PageNavs } from "./PageNavs";

export const Header = () => {
  return (
    <header className="bg-(--header) px-4 pt-3.5 flex flex-col gap-2 w-full">
      <MainNavs />
      <PageNavs />
    </header>
  );
};
