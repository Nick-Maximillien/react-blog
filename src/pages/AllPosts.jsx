import React, { useEffect, useState } from "react";
import axios from "axios";
import PostList from "../components/PostList";

function AllPosts() {
  const [posts, setPosts] = useState([]); // ✅ Fixed variable name

  useEffect(() => {
    axios.get("https://my-strapi-blog-1.onrender.com/api/blog-posts?populate=*") // ✅ Correct API endpoint
      .then((response) => setPosts(response.data.data)) // ✅ Extract posts properly
      .catch((error) => console.error("Error fetching posts:", error));
  }, []);

  return (
    <div className="container AllPostsContainer">
      <h1 className="postListTitle">Transformational Nuggets of Wisdom</h1>
      <h4 className="postListSubtitle">Check previous articles</h4>
      <PostList posts={posts} />
    </div>
  );
}

export default AllPosts;
