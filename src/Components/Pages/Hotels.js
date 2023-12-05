import React, { useCallback, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { createSelector } from "reselect";
import CardContainer from "Components/Category/CardContainer";
import SearchBar from "Components/SearchBar/SearchBar";
import { CategoriesSmaller } from "Components/Categories/CategoriesSmaller";
import { useTranslation } from "react-i18next";
import { data } from "./dataHotels";
import { getAllDacha } from "store/addDacha/addDachaAction";
import CustomHelmet from "./CustomHelmet";

const dacha = (state) => state.dacha;

const allDachaDataMine = createSelector([dacha], (state) => state.allDachaData);

const Hotels = () => {
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
      <CustomHelmet title="Mehmonhonalar" content="Mehmonhonalar bo'limi" />
      <CategoriesSmaller />
      <SearchBar />
      <CardContainer categoryType={t("Гостиницы.1")} data={data} />
    </>
  );
};

export default Hotels;
