import React, { useEffect, useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";
import { ProductGallery } from "Components/Product/ProductGallery";
import { ProductInfo } from "Components/Product/ProductInfo";
import { Breadcrumb, Button } from "rsuite";
import { Link, useLocation } from "react-router-dom";
import bread from "assets/images/bread.svg";
import { useTranslation } from "react-i18next";
import ProductPageLoading from "Components/Product/ProductPageLoading";
import { getUniqueDacha } from "store/addDacha/addDachaAction";
import { useParams } from "react-router-dom";
import CustomHelmet from "./CustomHelmet";
import { Label } from "Components/Label/Label";
import { beginGetUniqueDachaMine, uniqueDachaDataMine } from "store/addDacha/addDachaSelector";


const Product = () => {
  const { t } = useTranslation();

  const location = useLocation();
  console.log(location, "product location")
  let params = useParams();

  const beginGetUniqueDacha = useSelector(beginGetUniqueDachaMine);
  const uniqueDachaData = useSelector(uniqueDachaDataMine);
  const dispatch = useDispatch();

  const fetchUniqeDacha = useCallback(() => {
    dispatch(getUniqueDacha(params.id));
  }, [params, dispatch]);

  console.log(uniqueDachaData, "uniqueDacha");
  useEffect(() => {
    fetchUniqeDacha();
  }, [fetchUniqeDacha]);

  const NavLink = (props) => (
    <Breadcrumb.Item componentClass={Link} {...props} />
  );
  return (
    <>
      <CustomHelmet title="Joy bo'limi" content="Asosiy joy" />
      <div className="container p-md-0">
        {beginGetUniqueDacha ? (
          <ProductPageLoading />
        ) : (
          <>
            <div
              className="pt-3"
              style={{ display: "flex", gap: 10, flexWrap: "wrap" }}
            >
              <Label recommended />
              <Label superPrice />
              <Label superComfort />
            </div>
            <div className="d-flex align-items-center">
              <Link to={location?.state?.from}>
                <Button
                  size="xs"
                  className="mr-2 my-3 d-flex justify-content-center align-items-center"
                  style={{ height: 40 }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="feather feather-arrow-left"
                  >
                    <line x1="19" y1="12" x2="5" y2="12"></line>
                    <polyline points="12 19 5 12 12 5"></polyline>
                  </svg>
                </Button>
              </Link>
              <h2
                className="my-2"
                style={{
                  fontSize: 24,
                  fontWeight: 500,
                  lineHeight: "28px",
                }}
              >
                {" "}
                Роскошная дача в близи Чимгана{" "}
              </h2>
            </div>
            <Breadcrumb
              separator={
                <img
                  className="separator mx-2 mb-1"
                  src={bread}
                  alt="стрелка"
                />
              }
            >
              <Link to="/">{t("Главное.1")}</Link>
              <Link vLink to="/dachas">
                {t("Дачи.1")}
              </Link>
              <NavLink active>
                {t("Дачи.1")} {params.id}
              </NavLink>
            </Breadcrumb>
            <ProductGallery />
            <ProductInfo />
          </>
        )}
      </div>
    </>
  );
};

export default Product;
