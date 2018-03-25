import React from "react";
import PostLink from "../components/post-link";
import './style.css'

const SecondPage   = ({ data: { allMarkdownRemark: { edges } } }) => {
  const Posts = edges
    .filter(edge => !!edge.node.frontmatter.date)
    .map(edge => <PostLink key={edge.node.id} post={edge.node} />);
  return (
    <div className='card'>
      <h1>Documentation Page</h1>
      {Posts}
    </div>
  );
};

export default SecondPage;

export const pageQuery = graphql`
  query IndexQuery {
    allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
      edges {
        node {
          id
          excerpt(pruneLength: 250)
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            path
            title,
            author
          }
        }
      }
    }
  }
`;