export type Language = "en" | "pcm" | "yo" | "ha" | "ig";

export type MultiLang = Record<Language, string>;

export type MultiLangList = Record<Language, string[]>;

export interface LawReference {
  name: string;
  section: string;
  plainEnglish: MultiLang;
}

export interface Scenario {
  situation: MultiLang;
  steps: MultiLangList;
}

export interface Topic {
  slug: string;
  title: MultiLang;
  summary: MultiLang;
  readMinutes: number;
  canDo: MultiLangList;       // what officers/authorities CAN legally do
  cannotDo: MultiLangList;    // what they CANNOT legally do
  whatToDo: MultiLangList;    // what the citizen should do
  whatNotToDo: MultiLangList; // what the citizen should NOT do
  laws: LawReference[];
  scenarios: Scenario[];
}

export interface Section {
  slug: string;
  title: MultiLang;
  description: MultiLang;
  icon: string; // lucide icon name
  color: string; // tailwind bg class for the icon container
  topics: Topic[];
}
