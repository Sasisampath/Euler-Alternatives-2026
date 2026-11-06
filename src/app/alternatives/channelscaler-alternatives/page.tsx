import type { Metadata } from "next";
import { ComparisonGuide } from "@/components/alternatives/comparison-guide";
import {
  bookCallLabel,
  buyingCriteria,
  comparison,
  channelscalerGuide,
  faq,
  intro,
  metaTitle,
  products,
  productsTitle,
  takeaways,
  verdict,
} from "@/data/channelscaler-alternatives";
import { pageSeo } from "@/lib/seo";

const path = `/alternatives/${channelscalerGuide.slug}`;

export const metadata: Metadata = {
  ...pageSeo({
    title: metaTitle,
    description: channelscalerGuide.description,
    path,
    indexable: false,
  }),
  openGraph: {
    type: "article",
    title: metaTitle,
    description: channelscalerGuide.description,
    url: path,
  },
};

export default function ChannelscalerAlternativesPage() {
  return (
    <ComparisonGuide
      guide={channelscalerGuide}
      subject="Channelscaler"
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
