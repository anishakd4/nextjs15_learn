import { notFound } from "next/navigation";

// function getRandomInt(count: number) {
//   return Math.floor(Math.random() * count);
// }

export default async function ProductReview({
  params,
}: {
  params: Promise<{ reviewId: string; productId: string }>;
}) {
  // const randomInt = getRandomInt(2);
  // console.log({ randomInt });
  // if (randomInt === 1) {
  //   throw new Error("Error loading reviewwwww");
  // }

  const { productId, reviewId } = await params;
  if (parseInt(reviewId) > 1000) {
    notFound();
  }

  return (
    <h1>
      Review {reviewId} for product {productId}
    </h1>
  );
}
