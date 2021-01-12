import Link from "next/link";
import { IPost } from "src/Models/Post";
import { useEffect, useState } from "react";
import Header from "src/components/Header";

export default function Usuarios() {
  const [posts, setPosts] = useState<IPost[]>([]);
  useEffect(() => {
    const asyncGetPosts = async () => {
      const { origin } = window.location;
      const data = await fetch(origin + "/api/posts");
      const posts = await data.json();
      return posts;
    };
    if (window) {
      asyncGetPosts()
        .then((posts) => {
          setPosts(posts);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }, []);

  const mappedPosts = posts.reverse().map((post, i) => (
    <div
      style={{
        transition: "0.12s",
      }}
      className="break-words p-4 rounded-md text-sm w-full sm:w-1/3 md:w-1/4 lg:w-1/6 xl:w-1/6 border-2 hover:bg-gray-100 m-1 cursor-pointer"
      key={Math.random()}
    >
      <b className="my-2">{post.title}</b>
      <br />
      <p className="my-4">{post.content}</p>
    </div>
  ));

  return (
    <div>
      <Header>Total posts: {posts.length}</Header>
      <div className="flex space-x-4">
        <Link href="/">
          <div className="bg-red-400 inline-block px-2 py-1 text-white cursor-pointer">
            Back
          </div>
        </Link>
        <Link href="/posts/create">
          <div className="bg-blue-400 inline-block px-2 py-1 text-white cursor-pointer">
            Add one
          </div>
        </Link>
      </div>
      <div className="py-4 flex flex-wrap overflow-y-scroll h-96 md:h-72 my-4 border-4 rounded-md">
        {mappedPosts}
      </div>
    </div>
  );
}
