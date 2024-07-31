import { DashboardCard } from "@/components/dashboard/DashboardCard";

export default function Home() {
  return (
    <main>
      <h1 className="text-2xl">Dashboard</h1>
      <div className="flex flex-col md:flex-row justify-between gap-5 mb-5">
        <DashboardCard />
      </div>
    </main>
  );
}
