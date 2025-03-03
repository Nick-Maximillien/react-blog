import React from "react";
import { Link } from "react-router-dom";

function PostList({ posts }) {
  return (
    <div className="post-list">
      {posts.length === 0 ? (
        <p>No posts available.</p>
      ) : (
        posts.map((post) => {
          if (!post) return null; // Ensure post exists

          return (
            <div key={post.documentId} className="card">
              {/* ✅ Ensure Images field exists before accessing */}
              {post.Images?.data && (
                <img
                src={`http://localhost:1337${post.Images.data.attributes.url}`} 
                  alt={post.Title || "Untitled Post"}
                  className="card-img-top"
                />
              )}
              <div className="card-body">
                <h5 className="card-title">{post.Title || "Untitled Post"}</h5>
                <p className="card-text">
                  {post.Content
                    ? post.Content.substring(0, 100)
                    : "No content available."}
                  ...
                </p>
                {/* ✅ Link using documentId instead of id */}
                <Link to={`/post/${post.documentId}`} className="btn btn-primary">
                  Read More
                </Link>
              </div>
            </div>
          );
        })
      )}
    </div>
  );
}

export default PostList;

