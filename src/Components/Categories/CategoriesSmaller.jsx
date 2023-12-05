import React from "react";
import Tilt from "./Tilt";
import { useLocation } from "react-router-dom";

import {
  SmallAppartment,
  SmallDacha,
  SmallExtreme,
  SmallHotel,
  SmallResort,
  SmallTour,
} from "Components/Categories/SmallCategories";

import {
  dachaImg,
  homeImg,
  hotelImg,
  resortImg,
  tourImg,
  extremeImg,
  dachaIcon,
  homeIcon,
  hotelIcon,
  resortIcon,
  tourIcon,
  extremeIcon,
} from "./images";

export const CategoriesSmaller = () => {
  let location = useLocation().pathname;
  let categories;

  if (location === "/dachas") {
    categories = (
      <>
        <SmallAppartment img={homeImg} icon={homeIcon} />
        <SmallHotel img={hotelImg} icon={hotelIcon} />
        <SmallResort img={resortImg} icon={resortIcon} />
        <SmallTour img={tourImg} icon={tourIcon} />
        <SmallExtreme img={extremeImg} icon={extremeIcon} />
      </>
    );
  } else if (location === "/apartments") {
    categories = (
      <>
        <SmallDacha img={dachaImg} icon={dachaIcon} />
        <SmallHotel img={hotelImg} icon={hotelIcon} />
        <SmallResort img={resortImg} icon={resortIcon} />
        <SmallTour img={tourImg} icon={tourIcon} />
        <SmallExtreme img={extremeImg} icon={extremeIcon} />
      </>
    );
  } else if (location === "/hotels") {
    categories = (
      <>
        <SmallDacha img={dachaImg} icon={dachaIcon} />
        <SmallAppartment img={homeImg} icon={homeIcon} />
        <SmallResort img={resortImg} icon={resortIcon} />
        <SmallTour img={tourImg} icon={tourIcon} />
        <SmallExtreme img={extremeImg} icon={extremeIcon} />
      </>
    );
  } else if (location === "/resorts") {
    categories = (
      <>
        <SmallDacha img={dachaImg} icon={dachaIcon} />
        <SmallAppartment img={homeImg} icon={homeIcon} />
        <SmallHotel img={hotelImg} icon={hotelIcon} />
        <SmallTour img={tourImg} icon={tourIcon} />
        <SmallExtreme img={extremeImg} icon={extremeIcon} />
      </>
    );
  } else if (location === "/tours") {
    categories = (
      <>
        <SmallDacha img={dachaImg} icon={dachaIcon} />
        <SmallAppartment img={homeImg} icon={homeIcon} />
        <SmallResort img={resortImg} icon={resortIcon} />
        <SmallHotel img={hotelImg} icon={hotelIcon} />
        <SmallExtreme img={extremeImg} icon={extremeIcon} />
      </>
    );
  } else if (location === "/extreme") {
    categories = (
      <>
        <SmallDacha img={dachaImg} icon={dachaIcon} />
        <SmallAppartment img={homeImg} icon={homeIcon} />
        <SmallResort img={resortImg} icon={resortIcon} />
        <SmallHotel img={hotelImg} icon={hotelIcon} />
        <SmallTour img={tourImg} icon={tourIcon} />
      </>
    );
  }
  return (
    <div className="category mb-4">
      <Tilt
        options={{
          max: 5,
          speed: 400,
          perspective: 1500,
          glare: true,
          scale: 1.1,
          "max-glare": 1,
          "glare-prerender": false,
        }}
      />

      <div className="container category-container p-md-0">
        <div className="category-card-grid">{categories}</div>
      </div>
    </div>
  );
};
