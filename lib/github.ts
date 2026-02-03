const GITHUB_GRAPHQL_ENDPOINT = "https://api.github.com/graphql";

interface ContributionCalendarOptions {
  from?: string; // ISO date string
  to?: string; // ISO date string
}

export const fetchContributionCalendar = async (
  username: string,
  options?: ContributionCalendarOptions,
): Promise<any> => {
  // Calculate date range for the query
  const to =
    (options?.to && new Date(options?.to)) ||
    new Date(new Date().setFullYear(new Date().getFullYear())).toISOString();
  const from =
    (options?.from && new Date(options?.from)) ||
    new Date(new Date().setFullYear(new Date().getFullYear() - 1)).toISOString();

  const query = `
    query ($login: String!, $from: DateTime!, $to: DateTime!) {
      user(login: $login) {
        contributionsCollection(from: $from, to: $to) {
          contributionCalendar {
            totalContributions
            weeks {
              contributionDays {
                date
                contributionCount
                color
              }
            }
          }
        }
      }
    }
  `;

  const res = await fetch(GITHUB_GRAPHQL_ENDPOINT, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${process.env.GITHUB_TOKEN}`, // Use environment variable
    },
    body: JSON.stringify({
      query,
      variables: {
        login: username,
        from,
        to,
      },
    }),
    // Add caching for better performance
    next: { revalidate: 3600 }, // Revalidate every hour
  });

  const json = await res.json();

  if (json.errors) {
    throw new Error(json.errors[0].message);
  }

  return json.data.user.contributionsCollection.contributionCalendar.weeks;
};
