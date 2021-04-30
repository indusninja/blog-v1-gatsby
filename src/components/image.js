import React from "react";
import { StaticQuery, graphql } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";

const Image = () => (
  <StaticQuery
    query={graphql`
      query {
        placeholderImage: file(relativePath: { eq: "images" }) {
          childImageSharp {
            gatsbyImageData(layout: CONSTRAINED, width: 800)
          }
        }
      }
    `}
    render={data => (
      <GatsbyImage
        image={data.placeholderImage.childImageSharp.gatsbyImageData}
        alt=""
      />
    )}
  />
);
export default Image;
