import { Bell, Settings, Search, Menu } from "lucide-react";

export default function Header() {
  return (
    <header className="bg-white border-b border-gray-200 px-4 sm:px-6 py-3 sm:py-4 flex flex-wrap items-center justify-between gap-3">
      {/* Left Section */}
      <div className="flex items-center gap-3 shrink-0">
        {/* (Optional) Mobile Menu Icon — visible only on small screens */}
        <button className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition">
          <Menu className="w-5 h-5 text-gray-600" />
        </button>

        <div>
          <p className="text-xs text-gray-500 font-medium">Good Morning</p>
          <h1 className="text-lg sm:text-2xl font-bold text-gray-900">
            Welcome Back!
          </h1>
        </div>
      </div>

      {/* Search Bar */}
      <div className="w-full sm:flex-1 sm:max-w-md order-3 sm:order-2">
        <div className="relative w-full mt-2 sm:mt-0">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
          <input
            type="text"
            placeholder="Search"
            className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-lg bg-gray-50 text-sm focus:outline-none focus:ring-2 focus:ring-orange-500"
          />
        </div>
      </div>

      {/* Right Icons */}
      <div className="flex items-center gap-3 sm:gap-4 order-2 sm:order-3">
        <button className="p-2 hover:bg-gray-100 rounded-lg transition">
          <Bell className="w-5 h-5 text-gray-600" />
        </button>
        <button className="p-2 hover:bg-gray-100 rounded-lg transition">
          <Settings className="w-5 h-5 text-gray-600" />
        </button>
        <div className="w-8 h-8 bg-linear-to-br from-orange-400 to-orange-600 rounded-full flex items-center justify-center text-white font-bold text-sm">
          U
        </div>
      </div>
    </header>
  );
}
