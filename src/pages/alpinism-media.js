import React from "react";

import { Consumer } from "../layouts/Context";

import { Cz, En } from "../content/alpinism/media";

const IndexPage = (props) => {
  return (
    <Consumer>
      {({ int }) => {
        const content = int === "en" ? <En /> : <Cz />;
        return content;
      }}
    </Consumer>
  );
};

export default IndexPage;
