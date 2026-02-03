"use client";

import { useRouter, useSearchParams } from "next/navigation";

export const DateSelector = () => {
  const searchParams = useSearchParams();
  const router = useRouter();

  const handleParams = (item: number) => {
    const from = `${item}-01-01`;
    const to = `${item}-12-31`;

    // Preserve existing query params
    const params = new URLSearchParams(searchParams);
    params.set("from", from);
    params.set("to", to);
    return router.push(`?${params.toString()}`, { scroll: false });
  };

  const activeItem = new Date(searchParams.get("from") as string).getFullYear();
  return (
    <div className="flex flex-col gap-4 w-full">
      {[2026, 2025, 2024, 2023, 2022].map((item) => (
        <button
          className={`p-2 text-sm  w-full rounded-md cursor-pointer hover:bg-gray-100 ${activeItem === item ? "bg-[#0969da] text-white" : ""}`}
          key={item}
          onClick={() => handleParams(item)}
        >
          {item}
        </button>
      ))}
    </div>
  );
};
