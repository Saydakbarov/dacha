import React, { useEffect, useCallback } from "react";
import CardContainer from "Components/Category/CardContainer";
import SearchBar from "Components/SearchBar/SearchBar";
import { CategoriesSmaller } from "Components/Categories/CategoriesSmaller";
import { useTranslation } from "react-i18next";
import { data } from "./dataDacha";
import { useSelector, useDispatch } from "react-redux";
import { getAllDacha } from "store/addDacha/addDachaAction";
import CustomHelmet from "./CustomHelmet";
import { allDachaDataMine } from "store/addDacha/addDachaSelector";

// const beginGetAllDachaMine = createSelector(
//   [dacha],
//   (state) => state.beginGetAllDacha
// );

const Dacha = () => {
  const { t } = useTranslation();

  const dispatch = useDispatch();

  const allDachaData = useSelector(allDachaDataMine);
  // const beginGetAllDacha = useSelector(beginGetAllDachaMine);

  const fetchAllData = useCallback(() => {
    dispatch(getAllDacha());
  }, [dispatch]);

  useEffect(() => {
    fetchAllData();
  }, [fetchAllData]);
  return (
    <>
      <CustomHelmet title="Dachalar" content="Dachalar ro'yxati" />
      <CategoriesSmaller />
      <SearchBar />
      <CardContainer categoryType={t("Дачи.1")} data={data} />
      {/* <CardContainer categoryType={t("Дачи.1")} data={allDachaData} /> */}
    </>
  );
};

export default React.memo(Dacha);
