"use client";

const mockActivity = {
  username: "uptimeAI",
  repos: ["uptimeAI/uptime_webapp", "uptimeAI/uptime_server", "uptimeAI/uptime_ml"],
  otherRepoCount: 13,
};

export default function ActivityOverview() {
  return (
    <div className=" w-full pr-4 sm:border-r sm:border-r-gray-200">
      <h3 className="text-sm font-semibold text-gray-700 mb-3">Activity overview</h3>

      <p className="text-sm text-gray-600">
        Contributed to{" "}
        {mockActivity.repos.map((repo, i) => (
          <span key={repo}>
            <a
              href="#"
              className="text-blue-600 hover:underline"
            >
              {repo}
            </a>
            {i < mockActivity.repos.length - 1 && ", "}
          </span>
        ))}
        , and <span className="font-medium">{mockActivity.otherRepoCount} other repositories</span>
      </p>
    </div>
  );
}
