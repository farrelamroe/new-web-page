import * as en from "@/resources/content-en";
import * as id from "@/resources/content-id";
import type { Person, Social, Newsletter, Home, About, Blog, Work, Gallery } from "@/types";
import { cookies } from "next/headers";

type DictionaryType = {
  person: Person;
  social: Social;
  newsletter: Newsletter;
  home: Home;
  about: About;
  blog: Blog;
  work: Work;
  gallery: Gallery;
};

const dictionaries: Record<string, () => Promise<DictionaryType>> = {
  en: async () => en as unknown as DictionaryType,
  id: async () => id as unknown as DictionaryType,
};

export const getLocale = async (): Promise<"en" | "id"> => {
  const cookieStore = await cookies();
  const locale = cookieStore.get("NEXT_LOCALE")?.value as "en" | "id";
  return ["en", "id"].includes(locale) ? locale : "en";
};

export const getDictionary = async () => {
  const locale = await getLocale();
  return dictionaries[locale]?.() ?? dictionaries.en();
};
