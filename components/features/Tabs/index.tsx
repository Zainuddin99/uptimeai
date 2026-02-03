import { RepoTab } from "../RepoTab";

export const Tabs = ({ params }: { params: Record<string, string> }) => {
  const tab = params.tab;

  return !tab ? <RepoTab params={params} /> : <div className="w-full">Not found</div>;
};
