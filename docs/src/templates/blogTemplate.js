import React from "react";
import Link from "gatsby-link";

export default function Template({
  data,
}) {
  
  let disqus_config = function () {
    this.page.url = frontmatter.path;  
    this.page.identifier = frontmatter.title;
  };
  
  if(typeof window !== 'undefined') {
    let d = document;
    let s = d.createElement('script');
    s.src = 'https://sut-2.disqus.com/embed.js';
    s.setAttribute('data-timestamp', + new Date());
    (d.head || d.body).appendChild(s);
  }

  const { markdownRemark } = data;
  const { frontmatter, html } = markdownRemark;
  
  return (
    <div className='wrapper'>
    <div className="card">  
      <div className="blog-post">
        <h1>{frontmatter.title}</h1>
        <span style={{
          color: '#888'
        }}>Published on {frontmatter.date} By {frontmatter.author}</span>
        <div
          style={{marginTop: 10}}
          className="blog-post-content"
          dangerouslySetInnerHTML={{ __html: html }}
        />
      </div>
      <Link className='button' style={{position: 'relative'}} to="/docs/">Go Back</Link>     
    </div>
      <div className='comment' id="disqus_thread"></div>
    </div>
  );                      
}

export const pageQuery = graphql`
  query BlogPostByPath($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        path
        title
        author
      }
    }
  }
`;