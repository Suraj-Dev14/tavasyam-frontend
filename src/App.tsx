import Sidebar from "@/components/sidebar"
import Header from "@/components/header"
import HeroBanner from "@/components/hero-banner"
import StatCards from "@/components/stat-cards"
import GoalProgressChart from "@/components/goal-progress-chart"
import FoodTable from "@/components/food-table"
import SchedulePanel from "@/components/schedule-panel"
import GoalsPanel from "@/components/goals-panel"
import PremiumCard from "@/components/premium-card"

export default function Home() {
  return (
    <div className="flex flex-col md:flex-row h-screen bg-gray-50">
      {/* Sidebar */}
      <div className="hidden md:block">
        <Sidebar />
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        <Header />

        <div className="flex-1 overflow-auto">
          <div className="flex flex-col xl:flex-row gap-6 p-4 sm:p-6 max-w-7xl mx-auto">
            {/* Main Section */}
            <div className="flex-1 flex flex-col gap-6">
              <HeroBanner />
              <StatCards />
              <GoalProgressChart />
              <FoodTable />
            </div>

            {/* Right Sidebar (moves below on small screens) */}
            <div className="w-full xl:w-80 flex flex-col gap-6">
              <SchedulePanel />
              <GoalsPanel />
              <PremiumCard />
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Sidebar (if needed, toggle via button in Header) */}
    </div>
  )
}
