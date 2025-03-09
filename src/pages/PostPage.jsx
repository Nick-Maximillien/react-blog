import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const PostPage = () => {
    const { documentId } = useParams(); // ✅ Get documentId from URL
    const [post, setPost] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const content = post?.Content || ""
    const paragraphs = content.split("\n\n")
    const firstParagraphWords = paragraphs[0].split(" ")
    const firstWord = firstParagraphWords.shift() || "";
    const firstParagraphRest = firstParagraphWords.join(" ")
    console.log("First word:", firstWord)
    console.log("The rest:", firstParagraphRest)

    

    useEffect(() => {
        console.log('Captured documentId: ', documentId);
        axios
            .get(`http://localhost:1337/api/blog-posts?filters[documentId][$eq]=${documentId}&populate=Images`)
            .then((response) => {
                if (response.data.data.length > 0) {
                    console.log("Fetched Post Data:", response.data.data[0]);
                    setPost(response.data.data[0]); // ✅ Get first matching post
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

    if (loading) return <p>Loading post...</p>;
    if (error) return <p>{error}</p>;
    if (!post) return <p>Post not found.</p>;

    return (
        <div className="container mt-4 post-page">
            <button className="postDate">{post.Date}</button>
            <h1 className="postTitle">{post.Title || "Untitled Post"}</h1>
                <figure className='blogProfile'>
                    <img
                    src={`../images/blogProfile.jpg`}
                    alt='author profile'
                    className="left-image img-fluid"
                />
                <figcaption>Rev. Muema William</figcaption>
                </figure>
            {/* Content */}
              {paragraphs.map((paragraph, index) => (
                 <p key={index} className="postContent">
                    {index === 0 ? (
                        <>
                        <span style={{ fontWeight: "bold", fontSize: "150%"}}>{firstWord}</span> {" "} {firstParagraphRest}
                        </>
                    ) : (
                        paragraph
                    )}
                 </p>
              ))}
            <section className="prevNext col-lg-12 col-md-12 col-sm-12 col-xs-12">
                    <p className='previous'>◄ Prev |</p><p className='next'>| Next ►</p>
                </section>
        </div>
    );
    
};

export default PostPage;
