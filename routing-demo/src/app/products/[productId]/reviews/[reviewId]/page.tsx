export default async function ProductReview({params}:{params : Promise<{reviewId: String, productId: String}>}){

    const {productId, reviewId} = (await params);

    return (<h1>Review {reviewId} for product {productId}</h1>)
}