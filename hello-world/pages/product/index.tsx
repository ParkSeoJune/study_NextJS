import Link from "next/link";

function ProductList({ productId = 100 }) {
  return (
    <>
      <Link href={"/"}>
        <div>Home</div>
      </Link>
      <h2>
        <Link href={"/product/1"}>
          <div>Product 1</div>
        </Link>
      </h2>
      <h2>
        <Link href={"/product/2"}>
          <div>Product 2</div>
        </Link>
      </h2>
      <h2>
        <Link href={"/product/3"} replace>
          <div>Product 3</div>
        </Link>
      </h2>
      <h2>
        <Link href={`/product/${productId}`}>
          <div>Product {productId}</div>
        </Link>
      </h2>
    </>
  );
}

export default ProductList;
