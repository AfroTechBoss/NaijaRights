import { sections } from "@/content/sections";
import TopicPageClient from "./TopicPageClient";

export function generateStaticParams() {
  return sections.flatMap((s) =>
    s.topics.map((t) => ({ section: s.slug, topic: t.slug }))
  );
}

export default function TopicPage({ params }: { params: Promise<{ section: string; topic: string }> }) {
  return <TopicPageClient params={params} />;
}
