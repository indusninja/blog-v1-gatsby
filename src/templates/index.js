import React from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";
import Layout from "../components/layout";
import Post from "../components/post";
import Navigation from "../components/navigation";

const Index = ({ data, pageContext: { nextPagePath, previousPagePath } }) => {
  const {
    allMarkdownRemark: { edges: posts },
  } = data;

  return (
    <Layout>
      {posts.map(({ node }) => {
        const {
          id,
          excerpt: autoExcerpt,
          frontmatter: { title, date, path, author, coverImage, excerpt },
        } = node;

        return (
          <Post
            key={id}
            title={title}
            date={date}
            path={path}
            author={author}
            coverImage={coverImage}
            excerpt={excerpt || autoExcerpt}
          />
        );
      })}

      <Navigation
        previousPath={previousPagePath}
        previousLabel="Newer posts"
        nextPath={nextPagePath}
        nextLabel="Older posts"
      />
    </Layout>
  );
};

Index.propTypes = {
  data: PropTypes.object.isRequired,
  pageContext: PropTypes.shape({
    nextPagePath: PropTypes.string,
    previousPagePath: PropTypes.string,
  }),
};

export const postsQuery = graphql`
  query($limit: Int!, $skip: Int!) {
    allMarkdownRemark(
      filter: {fileAbsolutePath: {regex: "//posts//"}}
      sort: {frontmatter: {date: DESC}}
      limit: $limit
      skip: $skip
    ) {
      edges {
        node {
          id
          excerpt
          frontmatter {
            title
            date(formatString: "DD MMMM YYYY")
            path
            author
            excerpt
            coverImage {
              childImageSharp {
                gatsbyImageData(layout: CONSTRAINED, width: 800)
              }
            }
          }
        }
      }
    }
  }
`;

export default Index;
