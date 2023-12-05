import React, { useEffect, useCallback } from "react";
import { createSelector } from "reselect";
import { useSelector, useDispatch } from "react-redux";
import CardContainer from "Components/Category/CardContainer";
import SearchBar from "Components/SearchBar/SearchBar";
import { CategoriesSmaller } from "Components/Categories/CategoriesSmaller";
import { useTranslation } from "react-i18next";
import { data } from "./dataApartments";
import { getAllDacha } from "store/addDacha/addDachaAction";
import CustomHelmet from "./CustomHelmet";

const dacha = (state) => state.dacha;

const allDachaDataMine = createSelector([dacha], (state) => state.allDachaData);
const Apartments = () => {
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
      <CustomHelmet title="Honadonlar" content="Honadonlar ro'yxati" />
      <CategoriesSmaller />
      <SearchBar />
      <CardContainer categoryType={t("Квартиры и дома.1")} data={data} />
    </>
  );
};

export default Apartments;
