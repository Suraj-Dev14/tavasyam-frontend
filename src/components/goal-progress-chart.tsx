import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import { Card } from "@/components/ui/card";

const data = [
  { day: "Mon", Workout: 60, Calories: 40, Steps: 50 },
  { day: "Tue", Workout: 50, Calories: 35, Steps: 45 },
  { day: "Wed", Workout: 70, Calories: 55, Steps: 60 },
  { day: "Thu", Workout: 65, Calories: 45, Steps: 55 },
  { day: "Fri", Workout: 75, Calories: 60, Steps: 70 },
  { day: "Sat", Workout: 80, Calories: 65, Steps: 75 },
  { day: "Sun", Workout: 55, Calories: 40, Steps: 50 },
];

export default function GoalProgressChart() {
  return (
    <Card className="p-4 sm:p-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4 sm:mb-6 gap-3">
        <h3 className="text-base sm:text-lg font-bold text-gray-900">
          Goal Progress
        </h3>
        <select className="text-sm border border-gray-200 rounded px-3 py-1 bg-white focus:outline-none focus:ring-1 focus:ring-cyan-500">
          <option>Weekly</option>
          <option>Monthly</option>
        </select>
      </div>

      {/* Chart */}
      <div className="w-full h-[250px] sm:h-[300px]">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            data={data}
            margin={{ top: 20, right: 20, left: 0, bottom: 0 }}
          >
            <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
            <XAxis
              dataKey="day"
              stroke="#9ca3af"
              tick={{ fontSize: 12 }}
              interval={0}
            />
            <YAxis stroke="#9ca3af" tick={{ fontSize: 12 }} />
            <Tooltip
              contentStyle={{
                backgroundColor: "#fff",
                border: "1px solid #e5e7eb",
                borderRadius: "8px",
              }}
            />
            <Legend
              wrapperStyle={{
                fontSize: "12px",
                paddingTop: "8px",
              }}
            />
            <Bar dataKey="Workout" fill="#06b6d4" radius={[4, 4, 0, 0]} />
            <Bar dataKey="Calories" fill="#f97316" radius={[4, 4, 0, 0]} />
            <Bar dataKey="Steps" fill="#a855f7" radius={[4, 4, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </Card>
  );
}
