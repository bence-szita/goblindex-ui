import ItemsSidebar from "./items-sidebar";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex h-screen flex-col md:flex-row md:overflow-hidden max-w-7xl mx-auto">
      <ItemsSidebar />
      {children}
    </div>
  );
}
