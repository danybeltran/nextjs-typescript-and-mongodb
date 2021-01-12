import Link from "next/link";
import Header from "src/components/Header";

export default function Home() {
  return (
    <div>
      <Header>NextJS with TS and mongo:)</Header>
      <Link href="/posts">Posts</Link>
    </div>
  );
}
