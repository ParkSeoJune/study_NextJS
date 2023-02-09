import Link from "next/link";

function Home() {
  return (
    <>
      <h1>Next JS pre-rendering</h1>
      <Link href={"/users"}>
        <div>Users</div>
      </Link>
      <Link href={"/posts"}>
        <div>Posts</div>
      </Link>
    </>
  );
}

export default Home;
