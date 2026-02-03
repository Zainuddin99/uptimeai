import { RepoGrid } from "./RepoGrid";
import { Contributions } from "./Contributions";
import { ContributionActivity } from "./ContributionActivity";

export const RepoTab = async ({ params }) => {
  return (
    <div className="flex flex-col gap-8">
      <RepoGrid />
      <Contributions params={params} />
      <ContributionActivity />
    </div>
  );
};
