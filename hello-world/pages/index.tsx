import Link from "next/link";
import { useRouter } from "next/router";

export default function Home() {
  const router = useRouter();

  const handleClick = () => {
    console.log("Placing your order");
    router.push("/product");
  };

  return (
    <>
      <div>
        <h1>Home Page</h1>
        <Link href={"/blog"}>
          <div>Blog</div>
        </Link>
        <Link href={"/product"}>
          <div>Products</div>
        </Link>
        <button onClick={handleClick}>Place Order</button>
      </div>
    </>
  );
}
