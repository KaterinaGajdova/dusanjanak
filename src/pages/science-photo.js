import React from "react";
import styled from "styled-components";
import { useStaticQuery, graphql } from "gatsby";
import { Content } from "../components/atoms";
import Gallery from "@browniebroke/gatsby-image-gallery";
import SEO from "../components/seo";

const PhotoGallery = () => {
  const { gallery } = useStaticQuery(getGallery);
  const images = gallery.edges.map(({ node }) => ({
    ...node.src.childImageSharp,
    caption: <p className="text-xl">{node.caption}</p>,
  }));
  return (
    <Content>
      <SEO title="Science" />
      <GalleryWrapper>
        <Gallery images={images} />
      </GalleryWrapper>
    </Content>
  );
};

export default PhotoGallery;

const getGallery = graphql`
  query ScienceGallery {
    gallery: allScienceGalleryJson {
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
`;

const GalleryWrapper = styled.div`
  > div > div > div {
    margin: 0 3px;
  }
  img {
    cursor: pointer;
    transition: transform 0.2s;
    &:hover {
      transform: scale(1.1);
    }
  }
`;
