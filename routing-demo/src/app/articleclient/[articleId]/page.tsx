"use client";

import Link from "next/link";
import { use } from "react";

export default function NewsAritcle({
  params,
  searchParams,
}: {
  params: Promise<{ articleId: string }>;
  searchParams: Promise<{ lang?: "en" | "es" | "fr" }>;
}) {
  const { articleId } = use(params);
  const { lang = "en" } = use(searchParams);
  return (
    <div>
      <h1>News article {articleId}</h1>
      <p>Reading in {lang}</p>
      <div>
        <Link href={`/articleclient/${articleId}?lang=en`}>English</Link>
        <Link href={`/articleclient/${articleId}?lang=es`}>Spanish</Link>
        <Link href={`/articleclient/${articleId}?lang=fr`}>French</Link>
      </div>
    </div>
  );
}
