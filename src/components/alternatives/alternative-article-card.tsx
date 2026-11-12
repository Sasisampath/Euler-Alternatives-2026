import Image from "next/image";
import Link from "next/link";
import { readingMinutes, type GalleryArticle } from "@/data/alternatives";

export function AlternativeArticleCard({ article }: { article: GalleryArticle }) {
  return (
    <Link className="alternative-card" href={`/alternatives/${article.slug}`}>
      <div className="alternative-card__image">
        <Image
          src={article.galleryImage}
          alt=""
          fill
          sizes="(max-width: 639px) calc(100vw - 40px), (max-width: 1023px) calc((100vw - 100px) / 2), (max-width: 1359px) calc((100vw - 120px) / 3), 414px"
        />
      </div>
      <div className="alternative-card__body">
        <h2>{article.title}</h2>
        <p>{article.description}</p>
        <span className="alternative-card__meta">
          {readingMinutes(article.wordCount)} min read
          <span className="alternative-card__arrow" aria-hidden="true">→</span>
        </span>
      </div>
    </Link>
  );
}
