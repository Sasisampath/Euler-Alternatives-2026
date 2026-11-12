import { channelscalerGuide } from "@/data/channelscaler-alternatives";
import { eulerGuide } from "@/data/euler-alternatives";
import { kifloGuide } from "@/data/kiflo-alternatives";
import { mindmatrixGuide } from "@/data/mindmatrix-alternatives";
import { salesforceGuide } from "@/data/salesforce-prm-alternatives";

export type AlternativeArticle = {
  slug: string; title: string; description: string; image: string;
  wordCount: number; author?: {name: string; role?: string; photo?: string};
  publishedAt?: string; updatedAt?: string;
};
export const readingMinutes = (wordCount: number) => Math.max(1, Math.ceil(wordCount / 225));
export const partnerstackGuide: AlternativeArticle = {
  slug: "partnerstack-alternatives",
  title: "Best PartnerStack Alternatives in 2026",
  description: "Here is a list of the top PartnerStack alternatives worth considering, compared by their top features, who they’re best suited for, and what you can expect to pay.",
  image: "/buyers-guide/partnerstack/jazzhq.png",
  // Actual rendered article text, including headings, lists, tables and FAQs.
  // Recount when editorial copy changes; no author or publication history supplied.
  wordCount: 3409,
};
export type GalleryArticle = AlternativeArticle & { galleryImage: string };

export const alternativeArticles: GalleryArticle[] = [
  { ...partnerstackGuide, galleryImage: "/buyers-guide/euler/partnerstack.webp" },
  { ...salesforceGuide, galleryImage: "/buyers-guide/channelscaler/salesforce-prm.webp" },
  { ...eulerGuide, galleryImage: "/buyers-guide/channelscaler/euler.webp" },
  { ...channelscalerGuide, galleryImage: "/buyers-guide/euler/channelscaler.webp" },
  { ...mindmatrixGuide, galleryImage: "/buyers-guide/channelscaler/mindmatrix.webp" },
  { ...kifloGuide, galleryImage: "/buyers-guide/channelscaler/kiflo.webp" },
];
