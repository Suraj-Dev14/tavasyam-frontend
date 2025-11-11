import { Card } from "@/components/ui/card";
import { ChevronRight } from "lucide-react";

const goals = [
  {
    name: "ABS & Stretch",
    date: "Saturday, Apr 14 08:00 AM",
    duration: "30 Mins",
  },
  {
    name: "Push Up",
    date: "Sunday, Apr 15 08:00 AM",
    duration: "50 Reps",
  },
];

export default function GoalsPanel() {
  return (
    <Card className="p-4 sm:p-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4 gap-2">
        <h3 className="text-base sm:text-lg font-bold text-gray-900">
          Goals
        </h3>
        <button className="text-orange-500 text-sm font-semibold flex items-center gap-1 hover:text-orange-600 transition-colors">
          View All <ChevronRight className="w-4 h-4" />
        </button>
      </div>

      {/* Goal List */}
      <div className="space-y-4">
        {goals.map((goal) => (
          <div
            key={goal.name}
            className="pb-4 border-b border-gray-100 last:border-b-0 last:pb-0"
          >
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2 gap-1">
              <span className="text-sm sm:text-base font-semibold text-gray-900">
                {goal.name}
              </span>
              <span className="text-xs sm:text-sm text-orange-500 font-semibold">
                {goal.duration}
              </span>
            </div>
            <p className="text-xs sm:text-sm text-gray-500">{goal.date}</p>
          </div>
        ))}
      </div>
    </Card>
  );
}
