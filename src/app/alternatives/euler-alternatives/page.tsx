import type { Metadata } from "next";
import { ComparisonGuide } from "@/components/alternatives/comparison-guide";
import {
  bookCallLabel,
  buyingCriteria,
  comparison,
  eulerGuide,
  faq,
  intro,
  metaTitle,
  products,
  productsTitle,
  takeaways,
  verdict,
} from "@/data/euler-alternatives";
import { pageSeo } from "@/lib/seo";

const path = `/alternatives/${eulerGuide.slug}`;

export const metadata: Metadata = {
  ...pageSeo({
    title: metaTitle,
    description: eulerGuide.description,
    path,
    indexable: false,
  }),
  openGraph: {
    type: "article",
    title: metaTitle,
    description: eulerGuide.description,
    url: path,
  },
};

export default function EulerAlternativesPage() {
  return (
    <ComparisonGuide
      guide={eulerGuide}
      subject="Euler"
      intro={intro}
      takeaways={takeaways}
      productsTitle={productsTitle}
      products={products}
      comparison={comparison}
      buyingCriteria={buyingCriteria}
      verdict={verdict}
      faq={faq}
      bookCallLabel={bookCallLabel}
    />
  );
}
