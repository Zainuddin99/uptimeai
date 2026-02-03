import { data } from "@/data";
import { RepoTabSection } from "./Section";
import Link from "next/link";

export const RepoGrid = () => {
  return (
    <RepoTabSection title="Popular repositories">
      <div className="grid sm:grid-cols-2 gap-4">
        {data.repositories.map((item) => {
          return (
            <div
              className="p-4 border border-gray-300 rounded-md"
              key={item.name}
            >
              <div className="flex items-center justify-between">
                <Link
                  className="text-[#0969DA] text-sm font-semibold"
                  href={item.url as string}
                >
                  {item.name}
                </Link>
                <div className="text-xs border border-gray-300 px-1 rounded-md">
                  {item.visibility}
                </div>
              </div>
              <div className="text-xs mt-1 text-(--mute-text)">
                <span className="mr-0.5">Forked from</span>
                <Link
                  href={item.forkedFrom}
                  className="hover:underline cursor-pointer break-all"
                >
                  {item.forkedFrom}
                </Link>
              </div>

              <p className="mt-4 text-(--mute-text) text-xs">{item.description}</p>

              <div className="mt-4 text-(--mute-text) text-xs flex gap-1 items-center">
                <span
                  className={`inline-block h-3 w-3 rounded-full`}
                  style={{ background: item.languageColor }}
                ></span>
                {item.language}
              </div>
            </div>
          );
        })}
      </div>
    </RepoTabSection>
  );
};
