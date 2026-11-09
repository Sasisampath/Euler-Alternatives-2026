import type { Metadata } from "next";
import { ComparisonGuide } from "@/components/alternatives/comparison-guide";
import {
  bookCallLabel,
  buyingCriteria,
  comparison,
  mindmatrixGuide,
  faq,
  intro,
  metaDescription,
  metaTitle,
  products,
  productsTitle,
  takeaways,
  verdict,
} from "@/data/mindmatrix-alternatives";
import { pageSeo } from "@/lib/seo";

const path = `/alternatives/${mindmatrixGuide.slug}`;

export const metadata: Metadata = {
  ...pageSeo({
    title: metaTitle,
    description: metaDescription,
    path,
    indexable: false,
  }),
  openGraph: {
    type: "article",
    title: metaTitle,
    description: metaDescription,
    url: path,
  },
};

export default function MindmatrixAlternativesPage() {
  return (
    <ComparisonGuide
      guide={mindmatrixGuide}
      subject="Mindmatrix"
      intro={intro}
      takeaways={takeaways}
      productsTitle={productsTitle}
      products={products}
      comparison={comparison}
      buyingCriteria={buyingCriteria}
      verdict={verdict}
      faq={faq}
      bookCallLabel={bookCallLabel}
      bookCallAfter="kiflo"
      showEndCta={false}
    />
  );
}
