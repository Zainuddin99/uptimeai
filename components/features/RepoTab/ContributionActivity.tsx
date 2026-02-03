"use client";

import React, { useState } from "react";
import { GitCommit, GitPullRequest, ChevronRight, FolderGit2 } from "lucide-react";
import { RepoTabSection } from "./Section";

interface RepositoryItem {
  repo: string;
  count: number;
}

export const ContributionActivity: React.FC = () => {
  const [showAllCommits, setShowAllCommits] = useState(false);
  const [showAllPRs, setShowAllPRs] = useState(false);

  // Exact data from the screenshot
  const commits: RepositoryItem[] = [
    { repo: "UplineAI/webapp_repo", count: 13 },
    { repo: "UplineAI/pipeline_ml", count: 8 },
    { repo: "UplineAI/pipeline_scripts", count: 15 },
    { repo: "UplineAI/pipeline_engine", count: 9 },
    { repo: "UplineAI/pipeline_ml_encrypted", count: 11 },
  ];

  const pullRequests: RepositoryItem[] = [
    { repo: "UplineAI/webapp_repo", count: 13 },
    { repo: "UplineAI/pipeline_ml", count: 8 },
    { repo: "UplineAI/pipeline_scripts", count: 3 },
    { repo: "UplineAI/pipeline_engine", count: 3 },
    { repo: "UplineAI/pipeline_ml_encrypted", count: 2 },
  ];

  const displayCommits = showAllCommits ? commits : commits.slice(0, 3);
  const displayPRs = showAllPRs ? pullRequests : pullRequests.slice(0, 3);

  return (
    <RepoTabSection title="Contribution Activity">
      <div className="">
        {/* Header */}
        <div className="pb-1">
          <h2 className="text-sm font-semibold text-gray-900">October 2025</h2>
          <button className="text-gray-500 hover:text-gray-700 ">⋮</button>
        </div>

        {/* Commits Section */}
        <div className="mb-6">
          <div className="flex items-start gap-2 mb-1">
            <GitCommit
              size={16}
              className="mt-0.5 text-gray-500 flex-shrink-0"
            />
            <span className="text-sm font-semibold text-gray-900 leading-5">
              Created 56 commits in 11 repositories
            </span>
          </div>

          <div className="ml-6">
            {displayCommits.map((item, i) => (
              <div
                key={i}
                className="flex items-center justify-between py-1"
              >
                <div className="flex items-center gap-1 flex-1">
                  <FolderGit2
                    size={16}
                    className="text-gray-500 flex-shrink-0"
                  />
                  <a
                    href="#"
                    className="text-sm text-blue-600 hover:underline font-normal"
                  >
                    {item.repo}
                  </a>
                </div>
                <div className="flex items-center gap-2 flex-shrink-0">
                  <span className="text-xs font-semibold text-gray-900">{item.count}</span>
                  <span className="text-xs px-1.5 h-5 inline-flex items-center bg-purple-600 text-white rounded-full font-medium">
                    merged
                  </span>
                  <ChevronRight
                    size={16}
                    className="text-gray-500"
                  />
                </div>
              </div>
            ))}

            {commits.length > 3 && (
              <button
                onClick={() => setShowAllCommits(!showAllCommits)}
                className="mt-2 text-sm text-(--mute-text) hover:underline font-normal"
              >
                {showAllCommits ? "Show less activity" : "Show more activity"}
              </button>
            )}
          </div>
        </div>

        {/* Pull Requests Section */}
        <div>
          <div className="flex items-start gap-2 mb-2">
            <GitPullRequest
              size={16}
              className="mt-0.5 text-gray-500 flex-shrink-0"
            />
            <span className="text-sm font-semibold text-gray-900 leading-5">
              Opened 29 pull requests in 5 repositories
            </span>
          </div>

          <div className="ml-6">
            {displayPRs.map((item, i) => (
              <div
                key={i}
                className="flex items-center justify-between py-1"
              >
                <div className="flex items-center gap-1 flex-1">
                  <FolderGit2
                    size={16}
                    className="text-gray-500 flex-shrink-0"
                  />
                  <a
                    href="#"
                    className="text-sm text-blue-600 hover:underline font-normal"
                  >
                    {item.repo}
                  </a>
                </div>
                <div className="flex items-center gap-2 flex-shrink-0">
                  <span className="text-xs font-semibold text-gray-900">{item.count}</span>
                  <span className="text-xs px-1.5 h-5 inline-flex items-center bg-purple-600 text-white rounded-full font-medium">
                    merged
                  </span>
                  <ChevronRight
                    size={16}
                    className="text-gray-500"
                  />
                </div>
              </div>
            ))}

            {pullRequests.length > 3 && (
              <button
                onClick={() => setShowAllPRs(!showAllPRs)}
                className="mt-2 text-sm text-(--mute-text) hover:underline font-normal"
              >
                {showAllPRs ? "Show less activity" : "Show more activity"}
              </button>
            )}
          </div>
        </div>
      </div>
    </RepoTabSection>
  );
};
