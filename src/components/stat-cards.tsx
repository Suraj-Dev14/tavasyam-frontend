import { Dumbbell, Flame, Footprints } from "lucide-react";
import { Card } from "@/components/ui/card";

const stats = [
  {
    icon: Dumbbell,
    label: "Workout",
    value: "4.7 hrs",
    color: "text-cyan-500",
    bg: "bg-cyan-100",
  },
  {
    icon: Flame,
    label: "Calories",
    value: "1800 kcal",
    color: "text-orange-500",
    bg: "bg-orange-100",
  },
  {
    icon: Footprints,
    label: "Steps",
    value: "5200 steps",
    color: "text-purple-500",
    bg: "bg-purple-100",
  },
];

export default function StatCards() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
      {stats.map((stat) => (
        <Card
          key={stat.label}
          className="p-6 transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
        >
          <div className="flex items-start justify-between">
            {/* Text Section */}
            <div>
              <p className="text-gray-500 text-sm mb-1">{stat.label}</p>
              <p className="text-2xl font-bold text-gray-900">{stat.value}</p>
            </div>

            {/* Icon Section */}
            <div className={`${stat.bg} p-3 rounded-xl`}>
              <stat.icon className={`w-6 h-6 ${stat.color}`} />
            </div>
          </div>
        </Card>
      ))}
    </div>
  );
}
