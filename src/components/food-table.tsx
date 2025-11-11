import { Card } from "@/components/ui/card";

const foodData = [
  {
    id: 1,
    food: "🌯 Burrito",
    meal: "Pizza Burger",
    calories: "Receiving",
    time: "01:00 AM",
    carbs: "20 gm",
  },
  {
    id: 2,
    food: "🍔 Burger",
    meal: "Pizza Burger",
    calories: "Receiving",
    time: "01:00 AM",
    carbs: "20 gm",
  },
];

export default function FoodTable() {
  return (
    <Card className="p-4 sm:p-6">
      <h2 className="text-lg font-semibold text-gray-800 mb-4">Food Table</h2>

      {/* Desktop Table */}
      <div className="hidden sm:block overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-gray-200">
              <th className="text-left py-3 px-4 font-semibold text-gray-700">
                Food
              </th>
              <th className="text-left py-3 px-4 font-semibold text-gray-700">
                Meal
              </th>
              <th className="text-left py-3 px-4 font-semibold text-gray-700">
                Calories
              </th>
              <th className="text-left py-3 px-4 font-semibold text-gray-700">
                Priorities
              </th>
              <th className="text-left py-3 px-4 font-semibold text-gray-700">
                Carbs
              </th>
            </tr>
          </thead>
          <tbody>
            {foodData.map((item) => (
              <tr
                key={item.id}
                className="border-b border-gray-100 hover:bg-gray-50 transition"
              >
                <td className="py-4 px-4">{item.food}</td>
                <td className="py-4 px-4 text-gray-600">{item.meal}</td>
                <td className="py-4 px-4 text-gray-600">{item.calories}</td>
                <td className="py-4 px-4 text-gray-600">{item.time}</td>
                <td className="py-4 px-4 text-gray-600">{item.carbs}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Mobile Card Layout */}
      <div className="sm:hidden flex flex-col gap-4">
        {foodData.map((item) => (
          <div
            key={item.id}
            className="border border-gray-200 rounded-xl p-4 shadow-sm bg-white"
          >
            <div className="flex justify-between items-center mb-2">
              <span className="font-semibold text-gray-800">{item.food}</span>
              <span className="text-sm text-gray-500">{item.time}</span>
            </div>
            <div className="text-sm text-gray-600 space-y-1">
              <p>
                <span className="font-medium text-gray-700">Meal:</span>{" "}
                {item.meal}
              </p>
              <p>
                <span className="font-medium text-gray-700">Calories:</span>{" "}
                {item.calories}
              </p>
              <p>
                <span className="font-medium text-gray-700">Carbs:</span>{" "}
                {item.carbs}
              </p>
            </div>
          </div>
        ))}
      </div>
    </Card>
  );
}
