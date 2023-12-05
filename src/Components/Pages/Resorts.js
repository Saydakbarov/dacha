import React, { useEffect, useCallback } from "react";
import { createSelector } from "reselect";
import { useSelector, useDispatch } from "react-redux";
import CardContainer from "Components/Category/CardContainer";
import SearchBar from "Components/SearchBar/SearchBar";
import { CategoriesSmaller } from "Components/Categories/CategoriesSmaller";
import { useTranslation } from "react-i18next";

import { getAllDacha } from "store/addDacha/addDachaAction";
import { data } from "./dataResorts";
import CustomHelmet from "./CustomHelmet";
const dacha = (state) => state.dacha;

const allDachaDataMine = createSelector([dacha], (state) => state.allDachaData);
const Resorts = () => {
  const { t } = useTranslation();

  const dispatch = useDispatch();

  const allDachaData = useSelector(allDachaDataMine);

  const fetchAllData = useCallback(() => {
    dispatch(getAllDacha());
  }, [dispatch]);
  useEffect(() => {
    fetchAllData();
  }, [fetchAllData]);

  return (
    <>
      <CustomHelmet title="Dam olish bo'limi" content="Dam olishlar qismi" />
      <CategoriesSmaller />
      <SearchBar />
      <CardContainer categoryType={t("Курортные зоны.1")} data={data} />
    </>
  );
};

export default Resorts;
