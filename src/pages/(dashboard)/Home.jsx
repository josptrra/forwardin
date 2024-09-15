import FeatureHomeSection from "@/components/FeatureHomeSection";
import MainHomeSection from "@/components/MainHomeSection";
import Navbar from "@/components/ui/Navbar";

export default function Home() {
  return (
    <div className="h-full bg-[#ECF2FA]">
      <Navbar />
      <MainHomeSection />
      <FeatureHomeSection />
    </div>
  );
}
