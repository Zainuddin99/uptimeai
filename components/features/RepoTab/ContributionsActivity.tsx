"use client";

import React from "react";
import { ActivityCalendar, Activity } from "react-activity-calendar";
import { Tooltip } from "react-tooltip";

interface ContributionDay {
  date: string;
  contributionCount: number;
  color: string;
}

interface ContributionCalendarProps {
  data: ContributionDay[];
  year?: number;
}

export const ContributionCalendar: React.FC<ContributionCalendarProps> = ({ data }) => {
  /* -------------------- SAFETY -------------------- */
  if (!Array.isArray(data)) {
    return (
      <div className="p-6 text-gray-500 bg-white rounded-lg shadow-sm">
        No contribution data available
      </div>
    );
  }

  if (!data.length) {
    return (
      <div className="p-6 text-gray-500 bg-white rounded-lg shadow-sm">
        No contribution data available
      </div>
    );
  }

  /* -------------------- TOTAL COUNT -------------------- */

  /* -------------------- COLOR MAP (API SOURCE OF TRUTH) -------------------- */
  const colorMap = new Map(data.map((d) => [d.date, d.color || "#ebedf0"]));

  /* -------------------- GITHUB OFFICIAL COLORS -------------------- */
  const githubColors = [
    "#ebedf0", // 0
    "#9be9a8", // low
    "#40c463", // medium
    "#30a14e", // high
    "#216e39", // very high
  ];

  const theme = {
    light: githubColors,
    dark: githubColors,
  };

  /* -------------------- CALENDAR DATA -------------------- */
  const calendarData: Activity[] = data.map((d) => ({
    date: d.date,
    count: d.contributionCount,
    level: 0, // overridden via renderBlock
  }));

  return (
    <div className="w-full border border-gray-300 mx-auto p-6 bg-white rounded-t-lg">
      {/* -------------------- CALENDAR -------------------- */}
      <ActivityCalendar
        data={calendarData}
        theme={theme}
        style={{ width: "100%" }}
        className="[&_svg]:w-full!"
        colorScheme="light"
        showWeekdayLabels
        blockSize={10}
        blockMargin={2}
        fontSize={10}
        labels={{
          months: [
            "Jan",
            "Feb",
            "Mar",
            "Apr",
            "May",
            "Jun",
            "Jul",
            "Aug",
            "Sep",
            "Oct",
            "Nov",
            "Dec",
          ],
          weekdays: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
        }}
        renderBlock={(block, activity) => {
          if (!activity?.date) return block;

          const fill = colorMap.get(activity.date) ?? "#ebedf0";

          const formattedDate = new Date(activity.date).toLocaleDateString("en-US", {
            month: "short",
            day: "numeric",
            year: "numeric",
          });

          const tooltip =
            activity.count === 0
              ? `No contributions on ${formattedDate}`
              : `${activity.count} contribution${
                  activity.count !== 1 ? "s" : ""
                } on ${formattedDate}`;

          return React.cloneElement(block, {
            style: {
              ...block.props.style,
              fill,
              rx: 2,
            },
            "data-tooltip-id": "contribution-tooltip",
            "data-tooltip-content": tooltip,
          });
        }}
      />

      {/* -------------------- TOOLTIP -------------------- */}
      <Tooltip
        id="contribution-tooltip"
        place="top"
        style={{
          backgroundColor: "rgba(0,0,0,0.8)",
          color: "#fff",
          fontSize: "12px",
          borderRadius: "6px",
          padding: "6px 10px",
          zIndex: 1000,
        }}
      />
    </div>
  );
};
