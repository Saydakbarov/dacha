import React, { useEffect, useCallback } from "react";
import CardContainer from "Components/Category/CardContainer";
import { useSelector, useDispatch } from "react-redux";
import { createSelector } from "reselect";
import SearchBar from "Components/SearchBar/SearchBar";
import { CategoriesSmaller } from "Components/Categories/CategoriesSmaller";
import { useTranslation } from "react-i18next";
import { data } from "./dataExtreme";
import { getAllDacha } from "store/addDacha/addDachaAction";
import CustomHelmet from "./CustomHelmet";

const dacha = (state) => state.dacha;

const allDachaDataMine = createSelector([dacha], (state) => state.allDachaData);

const Extreme = () => {
  const dispatch = useDispatch();
  const allDachaData = useSelector(allDachaDataMine);
  const { t } = useTranslation();
  const fetchAllData = useCallback(() => {
    dispatch(getAllDacha());
  }, [dispatch]);

  useEffect(() => {
    fetchAllData();
  }, [fetchAllData]);

  return (
    <>
      <CustomHelmet title="Ekstrim" content="ekstrim sport" />
      <CategoriesSmaller />
      <SearchBar />
      <CardContainer categoryType={t("Экстрим.1")} data={data} />
    </>
  );
};

export default React.memo(Extreme);
