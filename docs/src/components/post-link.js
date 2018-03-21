import React from "react";
import Link from "gatsby-link";
import './style.css';

const PostLink = ({ post }) => (
  <div className='post-item' style={{width: 100+'%', marginBottom: 10}}>
    <div className='post-item-header'>
    <div className='link-wrapper'>
      <Link to={post.frontmatter.path}>{post.frontmatter.title}</Link>
    </div>
    </div>
    <div className='info'>
      <span>By {post.frontmatter.author} on {post.frontmatter.date}</span>
    </div>
  </div>
);

export default PostLink;