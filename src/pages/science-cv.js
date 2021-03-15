import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import Layout from "../components/layout"
import {Cz} from "../content/science/cv"
import SEO from "../components/seo"

const IndexPage = props => {
  return (
  <Layout location={props.location}>
    <SEO title="Science" />
    <Cz />

  </Layout>
)}

export default IndexPage
