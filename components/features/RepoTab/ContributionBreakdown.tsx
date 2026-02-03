"use client";

import {
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  Radar,
  ResponsiveContainer,
} from "recharts";

interface DataPoint {
  metric: string;
  value: number;
}

interface CustomAxisTickProps {
  payload?: { value: string };
  x?: number;
  y?: number;
  cx?: number;
  cy?: number;
}

export function ContributionBreakdown() {
  // Mock data - arranged in order: top, right, bottom, left to create the cross pattern
  // Only Commits and Pull requests have values as shown in the original image
  const data: DataPoint[] = [
    {
      metric: "Code review",
      value: 0,
    },
    {
      metric: "Issues",
      value: 0,
    },
    {
      metric: "Pull requests",
      value: 21,
    },
    {
      metric: "Commits",
      value: 79,
    },
  ];

  // Custom label renderer to position labels around the chart
  const renderCustomAxisTick = ({
    payload,
    x,
    y,
  }: CustomAxisTickProps): React.JSX.Element | null => {
    if (!payload || x === undefined || y === undefined) return null;

    let textAnchor: "middle" | "start" | "end" = "middle";
    let dx = 0;
    let dy = 0;

    // Position labels based on which metric
    if (payload.value === "Code review") {
      // Top
      dy = -12;
      textAnchor = "middle";
    } else if (payload.value === "Issues") {
      // Right
      dx = 12;
      dy = 4;
      textAnchor = "start";
    } else if (payload.value === "Pull requests") {
      // Bottom - with percentage
      dy = 15;
      textAnchor = "middle";
      return (
        <g>
          <text
            x={x}
            y={y + 15}
            textAnchor="middle"
            fill="#4b5563"
            fontSize="11"
          >
            21%
          </text>
          <text
            x={x}
            y={y + 28}
            textAnchor="middle"
            fill="#6b7280"
            fontSize="11"
          >
            Pull requests
          </text>
        </g>
      );
    } else if (payload.value === "Commits") {
      // Left - with percentage
      dx = -12;
      dy = 4;
      textAnchor = "end";
      return (
        <g>
          <text
            x={x - 12}
            y={y}
            textAnchor="end"
            fill="#4b5563"
            fontSize="11"
          >
            79%
          </text>
          <text
            x={x - 12}
            y={y + 13}
            textAnchor="end"
            fill="#6b7280"
            fontSize="11"
          >
            Commits
          </text>
        </g>
      );
    }

    return (
      <text
        x={x + dx}
        y={y + dy}
        textAnchor={textAnchor}
        fill="#6b7280"
        fontSize="11"
      >
        {payload.value}
      </text>
    );
  };

  return (
    <div className="w-full flex items-center justify-center bg-white ">
      <div className="w-full">
        <ResponsiveContainer
          width="100%"
          height={250}
        >
          <RadarChart
            data={data}
            cx="50%"
            cy="50%"
            margin={{ top: 30, right: 30, bottom: 45, left: 45 }}
          >
            <PolarGrid
              stroke="#4b5563"
              strokeWidth={1}
            />
            <PolarAngleAxis
              dataKey="metric"
              tick={renderCustomAxisTick as unknown as JSX.Element}
              stroke="#4b5563"
              strokeWidth={1}
            />
            <PolarRadiusAxis
              domain={[0, 100]}
              tick={false}
              axisLine={false}
            />
            <Radar
              dataKey="value"
              stroke="#22c55e"
              fill="#22c55e"
              fillOpacity={0.5}
              strokeWidth={2}
              dot={{ fill: "#fff", r: 4, strokeWidth: 2, stroke: "#22c55e" }}
            />
          </RadarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
