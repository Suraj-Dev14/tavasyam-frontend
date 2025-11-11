import { Card } from "@/components/ui/card";
import { ChevronRight } from "lucide-react";

const schedule = [
  { day: "Monday", activity: "Stretch", time: "8:00 AM", duration: "20 Secs" },
  { day: "Tuesday", activity: "Back Stretch", time: "8:00 AM", duration: "10 Rounds" },
  { day: "Wednesday", activity: "Yoga", time: "8:00 AM", duration: "20 min" },
];

export default function SchedulePanel() {
  return (
    <Card className="p-6 shadow-sm border border-gray-100">
      {/* Header */}
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-bold text-gray-900">My Schedule</h3>
        <button className="text-orange-500 text-sm font-semibold flex items-center gap-1 hover:text-orange-600 transition">
          View All <ChevronRight className="w-4 h-4" />
        </button>
      </div>

      {/* Schedule Items */}
      <div className="space-y-4">
        {schedule.map((item) => (
          <div
            key={item.day}
            className="pb-4 border-b border-gray-100 last:border-b-0 last:pb-0"
          >
            <p className="text-xs text-gray-500 font-medium mb-1">{item.day}</p>

            <div className="flex items-center justify-between">
              {/* Left side: Activity */}
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-orange-100 rounded-full flex items-center justify-center text-orange-600 font-bold text-xs">
                  {item.activity.charAt(0)}
                </div>
                <span className="text-sm font-semibold text-gray-900">
                  {item.activity}
                </span>
              </div>

              {/* Right side: Duration */}
              <span className="text-xs text-orange-500 font-semibold bg-orange-50 px-2 py-1 rounded-full">
                {item.duration}
              </span>
            </div>

            <p className="text-xs text-gray-500 mt-1">{item.time}</p>
          </div>
        ))}
      </div>
    </Card>
  );
}
