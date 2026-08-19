import { useMemo, useState } from "react";
import { members } from "@/data/members";
import type { Member, MemberCategory } from "@/types";

export type MemberFilterValue = MemberCategory | "all";

export interface UseMembersResult {
  category: MemberFilterValue;
  setCategory: (value: MemberFilterValue) => void;
  query: string;
  setQuery: (value: string) => void;
  results: Member[];
  counts: Record<MemberFilterValue, number>;
}

export function useMembers(): UseMembersResult {
  const [category, setCategory] = useState<MemberFilterValue>("all");
  const [query, setQuery] = useState("");

  const counts = useMemo(() => {
    const base = { all: members.length } as Record<MemberFilterValue, number>;
    for (const member of members) {
      base[member.category] = (base[member.category] ?? 0) + 1;
    }
    return base;
  }, []);

  const results = useMemo(() => {
    const needle = query.trim().toLowerCase();
    return members.filter((member) => {
      const matchesCategory = category === "all" || member.category === category;
      const matchesQuery =
        needle.length === 0 ||
        member.name.toLowerCase().includes(needle) ||
        member.designation.toLowerCase().includes(needle) ||
        member.interests.some((interest) => interest.toLowerCase().includes(needle));
      return matchesCategory && matchesQuery;
    });
  }, [category, query]);

  return { category, setCategory, query, setQuery, results, counts };
}
