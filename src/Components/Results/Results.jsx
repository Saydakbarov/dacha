import React, { useState, useRef } from "react";
import ResultsCard from "./ResultsCard";
import ResultsMap from "./ResultsMap";
import ResultsMapMobile from "./ResultsMapMobile";
import { Button, Drawer, Affix } from "rsuite";
import { useTranslation } from "react-i18next";

import { data } from "./data";

const Results = () => {
  const [showMobile, setShowMobile] = useState(false);

  const containerRef = useRef();
  const { t } = useTranslation();

  return (
    <div className="place-section" style={{ position: "relative" }}>
      <div className="container-fluid">
        <div className="row m-0" style={{ position: "relative" }}>
          <div className="col-12 col-md-7 col-lg-5 pr-md-3 px-0">
            <div className="heading-block-items" ref={containerRef}>
              <h1 className="heading-text mb-2">
                Найдено 500 точек в Ташкенте
              </h1>
              <div className=" d-flex justify-content-between align-items-center">
                <h2 className="results-heading">{t("Дачи.1")}</h2>
                <div className="d-blcok d-md-none">
                  <Affix
                    top={100}
                    container={() => {
                      return containerRef.current;
                    }}
                  >
                    <Button
                      appearance="primary"
                      onClick={() => setShowMobile(true)}
                      style={{
                        left: "50%",
                        transform: "translateX(-50%)",
                      }}
                    >
                      {t("Открыть карту.1")}
                    </Button>
                  </Affix>
                </div>
                <Drawer
                  full
                  placement="bottom"
                  show={showMobile}
                  onHide={() => setShowMobile(false)}
                >
                  <Drawer.Header>
                    <Drawer.Title>Drawer Title</Drawer.Title>
                  </Drawer.Header>
                  <Drawer.Body>
                    <div
                      className="results-mobile-map-container"
                      style={{
                        width: "100vw",
                        height: "75vh",
                        position: "relative",
                      }}
                    >
                      <ResultsMapMobile />
                    </div>
                  </Drawer.Body>
                  <Drawer.Footer></Drawer.Footer>
                </Drawer>
              </div>
              {data.map((card) => (
                <ResultsCard
                  img={card.img}
                  name={card.name}
                  price={card.price}
                  locationMain={card.location}
                  beds={card.beds}
                  guests={card.guests}
                  superPrice={card.superPrice}
                  superComfort={card.superComfort}
                  recommended={card.recommended}
                  key={card.id}
                  id={card.id}
                />
              ))}
            </div>
          </div>
          <div
            className="col-12 col-md-5 px-0 col-lg-7 d-none d-md-block"
            style={{
              width: "100%",
              height: "82vh",
              marginBottom: 220,
              position: "fixed",
              right: "0",
            }}
          >
            <ResultsMap />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Results;
