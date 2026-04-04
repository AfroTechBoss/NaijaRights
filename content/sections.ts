import { generalPublic } from "./general-public";
import { drivers } from "./drivers";
import { traders } from "./traders";
import { women } from "./women";
import { youth } from "./youth";
import { tenants } from "./tenants";
import type { Section } from "./types";

export const sections: Section[] = [
  generalPublic,
  drivers,
  traders,
  women,
  youth,
  tenants,
];

export function getSectionBySlug(slug: string): Section | undefined {
  return sections.find((s) => s.slug === slug);
}

export function getTopicBySlug(sectionSlug: string, topicSlug: string) {
  const section = getSectionBySlug(sectionSlug);
  return section?.topics.find((t) => t.slug === topicSlug);
}
