import { sections } from "@/content/sections";
import SectionPageClient from "./SectionPageClient";

export function generateStaticParams() {
  return sections.map((s) => ({ section: s.slug }));
}

export default function SectionPage({ params }: { params: Promise<{ section: string }> }) {
  return <SectionPageClient params={params} />;
}
