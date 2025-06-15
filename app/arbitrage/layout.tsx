import ArbitrageSidebar from "@/app/arbitrage/arbitrage-sidebar";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-col md:flex-row md:overflow-hidden max-w-7xl mx-auto">
      <ArbitrageSidebar />
      {children}
    </div>
  );
}
