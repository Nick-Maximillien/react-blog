import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const PostPage = () => {
    const { id } = useParams(); // Get post ID from URL
    const [post, setPost] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        console.log('Captured ID: ', id)
        axios
            .get(`http://localhost:1337/api/blog-posts/?populate=${id}`)
            .then((response) => {
                console.log("Fetched Post Data:", response.data);
                setPost(response.data.data); // ✅ Store post data
                setLoading(false);
            })
            .catch((error) => {
                console.error("Error fetching post:", error);
                setError("Failed to load post.");
                setLoading(false);
            });
    }, [id]);

    if (loading) return <p>Loading post...</p>;
    if (error) return <p>{error}</p>;
    if (!post) return <p>Post not found.</p>;

    return (
        <div>
            <h1>{post.Title || "Untitled Post"}</h1>
            {/* ✅ Ensure Images field exists before accessing */}
            {post.Images?.data && (
                <img
                    src={`http://localhost:1337${post.Images.data.attributes.url}`}
                    alt={post.Title}
                    style={{ width: "500px", height: "auto" }}
                />
            )}
            <p>{post.Content || "No content available."}</p>
        </div>
    );
};

export default PostPage;
