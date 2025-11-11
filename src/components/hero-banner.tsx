export default function HeroBanner() {
  return (
    <div className="bg-linear-to-r from-orange-400 to-orange-500 rounded-xl p-6 text-white flex items-end gap-6 overflow-hidden relative">
      <div className="z-10">
        <h2 className="text-3xl font-bold mb-3">Track Your Daily Activities</h2>
        <p className="text-sm text-orange-100 max-w-md">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
      </div>

      {/* Image section */}
      <div className="ml-auto -mb-6 -mr-6 w-64 h-40 bg-orange-300/30 rounded-tl-3xl flex items-end justify-end overflow-hidden">
        <img
          src="/woman-doing-yoga-stretching-fitness-exercise.jpeg"
          alt="Woman exercising"
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  );
}
