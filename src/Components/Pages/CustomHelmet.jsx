import React from "react";
import { Helmet } from "react-helmet";

const CustomHelmet = ({title, content}) => {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={content} />
    </Helmet>
  );
};

export default CustomHelmet;
