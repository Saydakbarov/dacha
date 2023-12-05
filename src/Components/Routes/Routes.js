import Header from "Components/Header/Header";
import React, { Suspense, lazy } from "react";
import { useSelector } from "react-redux";
import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";

import ScrollToTop from "./ScrollToTop";
import Footer from "Components/Footer/Footer";
import NotFoundPage from "Components/Pages/NotFoundPage";
import { mainAuthBeginMine } from "store/auth/authSelector";

const Home = lazy(() => import("Components/Pages/Home"));
const Dacha = lazy(() => import("Components/Pages/Dacha"));
const Product = lazy(() => import("Components/Pages/Product"));
const Hotels = lazy(() => import("Components/Pages/Hotels"));
const Apartments = lazy(() => import("Components/Pages/Apartments"));
const Resorts = lazy(() => import("Components/Pages/Resorts"));
const Tours = lazy(() => import("Components/Pages/Tours"));
const Extreme = lazy(() => import("Components/Pages/Extreme"));
const SearchResults = lazy(() => import("Components/Pages/SearchResults"));

const AddDacha = lazy(() => import("../Pages/AddPoint/AddDacha"));
const AddHome = lazy(() => import("../Pages/AddPoint/AddHome"));
const AddHotel = lazy(() => import("../Pages/AddPoint/AddHotel"));
// const AddResort = lazy(() => import("../Pages/AddPoint/AddResort"));
const AddPoint = lazy(() => import("../Pages/AddPoint/AddPoint"));
const SignUp = lazy(() => import("../Pages/Auth/SignUp"));
const LoginMain = lazy(() => import("../Pages/Auth/Login"));
const ProfileAddRegion = lazy(() => import("../Pages/ProfileAddRegion"));
const ProfileEditPage = lazy(() => import("../Profile/ProfileEditPage"));
const Payment = lazy(() => import("../Pages/Payment"));
const ProfileAboutOwnProperties = lazy(() =>
  import("Components/Profile/ProfileAboutOwnProperties")
);

const ProfileRegionList = lazy(() => import("../Pages/ProfileRegionList"));
const ProfileDistrictList = lazy(() => import("../Pages/ProfileDistrictList"));
const NotificationList = lazy(() =>
  import("Components/Profile/NotificationList")
);
const InformationDirector = lazy(() =>
  import("Components/Profile/InformationDirector")
);
const ProfilePaymentInfoPage = lazy(() =>
  import("Components/Pages/ProfilePaymentInfoPage")
);
const ProfileConveniences = lazy(() =>
  import("Components/Pages/ProfileConveniences")
);

function Routes() {
  // const token = "birnima";
  // const token = localStorage.getItem("token")
  const token = localStorage.getItem("token");

  const mainAuthBegin = useSelector(mainAuthBeginMine);

  const ProtectedRoute = ({ component: Component, ...rest }) => (
    <Route
      {...rest}
      render={(props) =>
        token || mainAuthBegin ? (
          <Component {...props} />
        ) : (
          <Redirect
            to={{
              pathname: "/login",
              state: { from: props.location },
            }}
          />
        )
      }
    />
  );

  return (
    <BrowserRouter>
      <Suspense
        fallback={
          <>
            <div className="cssload-box-loading" />
          </>
        }
      >
        <Header />
        <ScrollToTop>
          <div className="content-wrapper">
            <Switch>
              <Route
                exact
                path="/booking"
                render={() => {
                  return <Payment />;
                }}
              />
              <Route
                path="/signup"
                render={() => {
                  return <SignUp />;
                }}
              />
              <Route
                path="/login"
                render={() => {
                  return <LoginMain />;
                }}
              />
              <Route
                exact
                path="/profile"
                component={ProfileAboutOwnProperties}
              />
              <Route exact path="/add-region" component={ProfileAddRegion} />
              <Route exact path="/region-list" component={ProfileRegionList} />
              <Route
                exact
                path="/region-district"
                component={ProfileDistrictList}
              />
              <Route exact path="/notification" component={NotificationList} />
              <Route
                exact
                path="/information-director"
                component={InformationDirector}
              />
              <Route
                exact
                path="/payment-info"
                component={ProfilePaymentInfoPage}
              />
              <Route
                exact
                path="/conveniences"
                component={ProfileConveniences}
              />
              <Route
                exact
                path="/profile/joy/:id"
                component={ProfileEditPage}
              />
              <ProtectedRoute path="/add-resort" component={AddPoint} />
              <Route path="/add-hotel" component={AddHotel} />
              <ProtectedRoute path="/add-apartment" component={AddHome} />
              <Route path="/add-dacha" component={AddDacha} />
              <Route
                path="/results"
                render={() => {
                  return <SearchResults />;
                }}
              />
              <Route
                path="/extreme/joy"
                render={() => {
                  return <Product />;
                }}
              />
              <Route
                exact
                path="/extreme"
                render={() => {
                  return <Extreme />;
                }}
              />
              <Route
                path="/tours/joy"
                render={() => {
                  return <Product />;
                }}
              />
              <Route
                exact
                path="/tours"
                render={() => {
                  return <Tours />;
                }}
              />
              <Route
                path="/resorts/joy"
                render={() => {
                  return <Product />;
                }}
              />
              <Route
                exact
                path="/resorts"
                render={() => {
                  return <Resorts />;
                }}
              />
              <Route
                path="/apartments/joy"
                render={() => {
                  return <Product />;
                }}
              />
              <Route
                exact
                path="/apartments"
                render={() => {
                  return <Apartments />;
                }}
              />
              <Route
                exact
                path="/hotels"
                render={() => {
                  return <Hotels />;
                }}
              />
              <Route
                path="/hotels/joy"
                render={() => {
                  return <Product />;
                }}
              />
              <Route
                exact
                path="/dachas"
                render={() => {
                  return <Dacha />;
                }}
              />
              <Route
                exact
                path="/dachas/joy/:id"
                render={() => {
                  return <Product />;
                }}
              />
              <Route
                exact
                path="/"
                render={() => {
                  return <Home />;
                }}
              />
              <Route path="*" component={NotFoundPage} />
            </Switch>
          </div>
        </ScrollToTop>
        <Footer />
      </Suspense>
    </BrowserRouter>
  );
}

export default Routes;
