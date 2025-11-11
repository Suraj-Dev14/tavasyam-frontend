import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

export default function PremiumCard() {
  return (
    <Card className="bg-linear-to-br from-purple-500 to-purple-600 text-white p-6 relative overflow-hidden">
      <div className="relative z-10">
        <p className="text-2xl font-bold mb-2">50% off on Premium Membership</p>
        <p className="text-sm text-purple-100 mb-6">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
        <Button className="bg-orange-500 hover:bg-orange-600 text-white font-semibold w-full transition-transform hover:scale-[1.02]">
          Upgrade
        </Button>
      </div>

      {/* Decorative element */}
      <div className="absolute bottom-0 right-0 w-32 h-32 bg-white/20 rounded-full blur-2xl"></div>
    </Card>
  );
}
