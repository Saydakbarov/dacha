import React from "react";
import { useTranslation } from "react-i18next";
import { CustomSideNav } from "./PageItemStyles";

const Profile = ({ children }) => {

  const { t } = useTranslation()
  return (
    <div className="container px-0" style={{ minHeight: "60vh" }}>
      <div className="row">
        <div className="col-12 col-md-2 col-sm-12 d-flex flex-column">
          <CustomSideNav activeClassName="activePage" to="/profile">{t("Профиль.1")}</CustomSideNav>
          <CustomSideNav activeClassName="activePage" to="/add-region">{t("Добавить Регион.1")}</CustomSideNav>
          <CustomSideNav activeClassName="activePage" to="/region-list">{t("Лист Регион.1")}</CustomSideNav>
          <CustomSideNav activeClassName="activePage" to="/region-district">{t("Лист Район.1")}</CustomSideNav>
          <CustomSideNav activeClassName="activePage" to="/notification">{t("Уведомление.1")}</CustomSideNav>
          <CustomSideNav activeClassName="activePage" to="/information-director">{t("Информации о директора.1")}</CustomSideNav>
          <CustomSideNav activeClassName="activePage" to="/payment-info">To'lov ma'lumotlari</CustomSideNav>
          <CustomSideNav activeClassName="activePage" to="/conveniences">{t("Удобства.1")}</CustomSideNav>
          </div>
        <div className="col-12 col-md-8 col-sm-12">
          <div className="row">
            {children}
          </div>
        </div>

      </div>
    </div>
  );
};

export default React.memo(Profile);

// <Switch>
//   <Route exact path="/profile" component={ProfileAboutOwnProperties} />
//   <Route exact path="/profile/add-region" component={ProfileAddRegion} />
// </Switch>