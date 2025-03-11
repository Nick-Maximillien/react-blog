import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";

const PostPage = () => {
    const { documentId } = useParams(); // ✅ Get documentId from URL
    const navigate = useNavigate();
    const [post, setPost] = useState(null);
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    
    useEffect(() => {
        console.log('Captured documentId: ', documentId);
        axios
            .get(`https://my-strapi-blog-1.onrender.com/api/blog-posts?populate=Images`)
            .then((response) => {
                if (response.data.data.length > 0) {
                    setPosts(response.data.data);
                    const currentPost = response.data.data.find(p => p.attributes.documentId === documentId);
                    if (currentPost) {
                        setPost(currentPost);
                    } else {
                        setError("Post not found.");
                    }
                } else {
                    setError("No posts available.");
                }
                setLoading(false);
            })
            .catch((error) => {
                console.error("Error fetching posts:", error);
                setError("Failed to load posts.");
                setLoading(false);
            });
    }, [documentId]);

    if (loading) return <p>Loading post...</p>;
    if (error) return <p>{error}</p>;
    if (!post) return <p>Post not found.</p>;
    
    const currentIndex = posts.findIndex(p => p.attributes.documentId === documentId);
    const prevPost = currentIndex > 0 ? posts[currentIndex - 1] : null;
    const nextPost = currentIndex < posts.length - 1 ? posts[currentIndex + 1] : null;

    return (
        <div className="container mt-4 post-page">
            <button className="postDate">{post.attributes.Date}</button>
            <h1 className="postTitle">{post.attributes.Title || "Untitled Post"}</h1>
                <figure className='blogProfile'>
                    <img
                    src={`../images/blogProfile.jpg`}
                    alt='author profile'
                    className="left-image img-fluid"
                />
                <figcaption>Rev. Muema William</figcaption>
                </figure>
            {/* Content */}
            {post.attributes.Content.split("\n\n").map((paragraph, index) => (
                 <p key={index} className="postContent">{paragraph}</p>
            ))}
            <section className="prevNext col-lg-12 col-md-12 col-sm-12 col-xs-12">
                {prevPost && <p className='previous' onClick={() => navigate(`/post/${prevPost.attributes.documentId}`)}>◄ Prev |</p>}
                {nextPost && <p className='next' onClick={() => navigate(`/post/${nextPost.attributes.documentId}`)}>| Next ►</p>}
            </section>
        </div>
    );
};

export default PostPage;
