import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import { Consumer } from "../layouts/Context";
import { useStaticQuery, graphql } from "gatsby";
import { Content } from "../components/atoms";
import Gallery from "@browniebroke/gatsby-image-gallery";
import SEO from "../components/seo";
import { Cz, En } from "../content/alpinism/climbs";

const Climbs = () => {
  /*   const { gallery } = useStaticQuery(getGallery);
  const images = gallery.edges.map(({ node }) => ({
    ...node.src.childImageSharp,
    caption: <p className="text-xl">{node.caption}</p>,
  })); */
  return (
    <Consumer>
      {({ int }) => {
        const content = int === "en" ? <En /> : <Cz />;
        return (
          <Content>
            <SEO title="Climbing" />
            {content}
            {/*    <GalleryWrapper>
            <Gallery images={images} />
          </GalleryWrapper> */}
            IN PROGRESS
          </Content>
        );
      }}
    </Consumer>
  );
};

export default Climbs;

/* const getGallery = graphql`
  query test {
    gallery: allGallery1Json {
      edges {
        node {
          caption
          src {
            childImageSharp {
              thumb: gatsbyImageData(
                width: 350
                height: 350
                placeholder: BLURRED
              )
              full: gatsbyImageData(layout: FULL_WIDTH)
            }
          }
        }
      }
    }
  }
`; */
/* 
const GalleryWrapper = styled.div`
  > div > div > div {
    margin: 0 3px;
  }
  img {
    cursor: pointer;
  }
`;
 */
