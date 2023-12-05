import React from "react";
import { Placeholder } from "rsuite";

const { Paragraph } = Placeholder;

const ProductPageLoading = () => {
  return (
    <div className="row" style={{ width: "100%" }}>
      <div
        className="row"
        style={{ width: "100%", height: "100px", paddingLeft: "15px" }}
      >
        <Paragraph active style={{ width: "70%", height: "70px" }} />
      </div>

      <div className="row" style={{ height: "400px", width: "100%" }}>
        <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 pb-2">
          <Placeholder.Graph style={{ width: "100%", height: "100%" }} active />
        </div>
        <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12">
          <div className="row" style={{ height: "48.5%" }}>
            <div className="col-6">
              <Placeholder.Graph
                style={{ width: "100%", height: "100%" }}
                active
              />
            </div>
            <div className="col-6">
              <Placeholder.Graph
                style={{ width: "100%", height: "100%" }}
                active
              />
            </div>
          </div>
          <div className="row pt-3" style={{ height: "48.5%" }}>
            <div className="col-6 ">
              <Placeholder.Graph
                style={{ width: "100%", height: "100%" }}
                active
              />
            </div>
            <div className="col-6 product-inner-middle-img">
              <Placeholder.Graph
                style={{ width: "100%", height: "100%" }}
                active
              />
            </div>
          </div>
        </div>
      </div>

      <div className="row" style={{ width: "100%", height: "100px" }}>
        <div className="col-md-6 col-12 col-sm-12">
          <Paragraph active style={{ width: "70%", height: "70px" }} />
        </div>
        <div className="col-md-6 col-12 col-sm-12">
          <Paragraph active style={{ width: "70%", height: "70px" }} />
        </div>
      </div>
    </div>
  );
};

export default ProductPageLoading;
