import { useRouter } from "next/router";

function ProductDetail() {
  const router = useRouter();
  const productId = router.query.productId; // 동적 파일명인 productId로 해야 1,2,3 ... 등 을 쓸 수 있다.
  return <h1>Details about product {productId}</h1>;
}

export default ProductDetail;
