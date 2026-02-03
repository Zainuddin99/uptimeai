import { fetchContributionCalendar } from "@/lib/github";
import { RepoTabSection } from "./Section";
import { ContributionCalendar } from "./ContributionsActivity";
import ActivityOverview from "./ActivityOverview";
import { ContributionBreakdown } from "./ContributionBreakdown";
import { DateSelector } from "./DateSelector";

export const Contributions = async ({ params }) => {
  const data = await fetchContributionCalendar("shreeramk", {
    from: params.from || null,
    to: params.to || null,
  });
  const validData = data.flatMap((week: any) => week?.contributionDays ?? []);
  const totalContributions = validData.reduce((sum: any, d: any) => sum + d.contributionCount, 0);
  const year = params.from ? new Date(params.from).getFullYear() : 2026;
  return (
    <div className="w-full">
      <RepoTabSection title={`${totalContributions} contributions in ${year}`}>
        <div className="grid grid-cols-[85%_13%] gap-4 w-full">
          <div className="w-full">
            <ContributionCalendar data={validData} />
            <div className="grid p-4 grid-cols-2 border border-gray-300 border-t-0 rounded-b-lg">
              <ActivityOverview />
              <ContributionBreakdown />
            </div>
          </div>

          <DateSelector />
        </div>
      </RepoTabSection>
    </div>
  );
};
