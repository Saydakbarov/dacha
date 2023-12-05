import React, { useState } from "react";
import { CardsMap } from "./CardsMap";
import { motion } from "framer-motion";
import SearchMobile from "Components/SearchBar/SearchMobile";
import searchIcon from "assets/images/search-icon.svg";
import { Drawer, ButtonToolbar, Button } from "rsuite";
import { useTranslation } from "react-i18next";

const CardContainer = ({ categoryType, data }) => {
  const [showBtn, setShowBtn] = useState(true);
  const [showMobile, setShowMobile] = useState(false);
  const { t } = useTranslation();


  return (
    <div className="dacha-top top">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ ease: "backOut", duration: 0.5 }}
        >
          <h2 className="top-title d-lg-block d-none"> {categoryType} </h2>
          <div className="row justify-content-between d-lg-none p-3 p-lg-0">
            <h2 className="top-title"> {categoryType} </h2>
            <ButtonToolbar>
              <Button onClick={() => setShowMobile(true)}>
                <img src={searchIcon} alt="искать" />
              </Button>
            </ButtonToolbar>
            <Drawer
              backdrop={true}
              show={showMobile}
              onHide={() => setShowMobile(false)}
              size="xs"
              placement="left"
            >
              <Drawer.Header>
                <Drawer.Title>{t("Поиск.1")}</Drawer.Title>
              </Drawer.Header>
              <Drawer.Body>
                <SearchMobile />
              </Drawer.Body>
            </Drawer>
          </div>
        </motion.div>
        <CardsMap cardsinfo={data} />
        <div className="d-flex w-100 justify-content-center">
          {showBtn ? (
            <button
              className="btn btn-outline btn-more col-lg-2 col-md-4 col-sm-12 mt-5"
              // onClick={handleShowMorePosts}
            >
              {t("Показать больше.1")}
            </button>
          ) : null}
        </div>
      </div>
    </div>
  );
};

export default React.memo(CardContainer);
