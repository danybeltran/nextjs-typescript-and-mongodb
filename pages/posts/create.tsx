import { FormEvent, useState } from "react";
import Header from "src/components/Header";
import Input from "src/components/Input";
import Router from "next/router";

export default function create() {
  const [post, setPost] = useState({
    title: "",
    content: "",
  });

  const updatePost = (e) => {
    setPost({ ...post, [e.target.name]: e.target.value });
  };

  const [sent, setSent] = useState(false);

  async function sendPost(data) {
    const saved = await fetch(window.location.origin + "/api/posts/create", {
      method: "POSt",
      body: JSON.stringify({
        ...data,
        date: new Date(),
      }),
    });
  }

  function handlePostDelivery(e: FormEvent) {
    e.preventDefault();
    sendPost(post)
      .then((saved) => {
        Router.push("/posts");
        setSent(typeof saved !== "undefined");
      })
      .catch((err) => {
        console.log(err);
      });
  }

  return (
    <div>
      <Header>Add post</Header>
      <form
        onSubmit={handlePostDelivery}
        className="flex flex-wrap w-full md:w-64 items-center justify-center space-y-2"
      >
        <div className="w-full">
          <Input
            value={post.title}
            name="title"
            onChange={updatePost}
            placeholder="Title"
          />
        </div>
        <div className="w-full">
          <textarea
            placeholder="Content"
            className="border-2 border-gray-300 w-full px-3 py-1.5 rounded-md shadow-md focus:border-gray-400 resize-none"
            name="content"
            onChange={updatePost}
          ></textarea>
        </div>
        <div className="w-full text-center">
          <button className="px-3 py-1.5 bg-blue-400 text-white rounded-md">
            Save
          </button>
        </div>
      </form>
    </div>
  );
}
