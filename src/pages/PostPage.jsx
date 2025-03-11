import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";

const PostPage = () => {
    const { documentId } = useParams();
    const navigate = useNavigate();
    const [post, setPost] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [allPosts, setAllPosts] = useState([]);

    useEffect(() => {
        console.log('Captured documentId: ', documentId);

        // Fetch all posts to determine previous/next
        axios
            .get(`https://my-strapi-blog-1.onrender.com/api/blog-posts?populate=Images`)
            .then((response) => {
                const posts = response.data.data;
                setAllPosts(posts);

                // Find the current post
                const currentPost = posts.find(p => p.id.toString() === documentId);
                if (currentPost) {
                    setPost(currentPost);
                } else {
                    setError("Post not found.");
                }
                setLoading(false);
            })
            .catch((error) => {
                console.error("Error fetching post:", error);
                setError("Failed to load post.");
                setLoading(false);
            });
    }, [documentId]);

    const handleNavigation = (direction) => {
        const currentIndex = allPosts.findIndex(p => p.id.toString() === documentId);
        if (currentIndex !== -1) {
            const newIndex = direction === "prev" ? currentIndex - 1 : currentIndex + 1;
            if (allPosts[newIndex]) {
                navigate(`/post/${allPosts[newIndex].id}`);
            }
        }
    };

    if (loading) return <p>Loading post...</p>;
    if (error) return <p>{error}</p>;
    if (!post) return <p>Post not found.</p>;

    const content = post?.Content || "";
    const paragraphs = content.split("\n\n");
    const firstParagraphWords = paragraphs[0]?.split(" ") || [];
    const firstWord = firstParagraphWords.shift() || "";
    const firstParagraphRest = firstParagraphWords.join(" ");

    return (
        <div className="container mt-4 post-page">
            <button className="postDate">{post.Date}</button>
            <h1 className="postTitle">{post.Title || "Untitled Post"}</h1>
            <figure className='blogProfile'>
                <img src={`../images/blogProfile.jpg`} alt='author profile' className="left-image img-fluid" />
                <figcaption>Rev. Muema William</figcaption>
            </figure>
            {/* Content */}
            {paragraphs.map((paragraph, index) => (
                <p key={index} className="postContent">
                    {index === 0 ? (
                        <>
                            <span style={{ fontWeight: "bold", fontSize: "150%" }}>{firstWord}</span> {" "} {firstParagraphRest}
                        </>
                    ) : (
                        paragraph
                    )}
                </p>
            ))}
            <section className="prevNext col-lg-12 col-md-12 col-sm-12 col-xs-12">
                <p className='previous' onClick={() => handleNavigation("prev")} style={{ cursor: "pointer" }}>
                    ◄ Prev |
                </p>
                <p className='next' onClick={() => handleNavigation("next")} style={{ cursor: "pointer" }}>
                    | Next ►
                </p>
            </section>
        </div>
    );
};

export default PostPage;
