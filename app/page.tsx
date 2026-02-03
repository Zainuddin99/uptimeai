import { SideProfileSection } from "@/components/features/SideProfileSection";
import { Tabs } from "@/components/features/Tabs";

export default async function Home({ searchParams }: any) {
  const params = await searchParams;
  return (
    <main className="max-w-314 w-full mx-auto px-4 py-10 grid md:grid-cols-[0.3fr_1fr] gap-8">
      <SideProfileSection />
      <Tabs params={params} />
    </main>
  );
}
