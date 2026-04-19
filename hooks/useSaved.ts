"use client";

import { useEffect, useState } from "react";

const KEY = "nr-saved-topics";

export type SavedTopic = {
  sectionSlug: string;
  topicSlug: string;
  title: string;
  summary: string;
  savedAt: number;
};

export function useSaved() {
  const [saved, setSaved] = useState<SavedTopic[]>([]);

  useEffect(() => {
    try {
      const raw = localStorage.getItem(KEY);
      if (raw) setSaved(JSON.parse(raw));
    } catch {}
  }, []);

  function persist(next: SavedTopic[]) {
    setSaved(next);
    localStorage.setItem(KEY, JSON.stringify(next));
  }

  function isSaved(topicSlug: string) {
    return saved.some((s) => s.topicSlug === topicSlug);
  }

  function toggle(topic: SavedTopic) {
    if (isSaved(topic.topicSlug)) {
      persist(saved.filter((s) => s.topicSlug !== topic.topicSlug));
    } else {
      persist([...saved, { ...topic, savedAt: Date.now() }]);
    }
  }

  function remove(topicSlug: string) {
    persist(saved.filter((s) => s.topicSlug !== topicSlug));
  }

  return { saved, isSaved, toggle, remove };
}
