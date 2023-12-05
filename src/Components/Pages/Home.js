import React from "react";
import { Categories } from "Components/Categories/Categories";
import CustomHelmet from "./CustomHelmet";

const Home = () => {
  return (
    <>
      <CustomHelmet title="Asosiy" content="Asosiy bo'lim" />
      <Categories />
    </>
  );
};

export default Home;
