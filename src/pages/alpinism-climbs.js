import React from "react";
import { Consumer } from "../layouts/Context";
import { Content } from "../components/atoms";
import SEO from "../components/seo";
import { Cz, En } from "../content/alpinism/climbs";

const Climbs = () => {
  return (
    <Consumer>
      {({ int }) => {
        const content = int === "en" ? <En /> : <Cz />;
        return (
          <>
            <SEO title="Climbing" />
            {content}
          </>
        );
      }}
    </Consumer>
  );
};

export default Climbs;
