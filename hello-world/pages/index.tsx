import Link from "next/link";

export default function Home() {
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
      </div>
    </>
  );
}
