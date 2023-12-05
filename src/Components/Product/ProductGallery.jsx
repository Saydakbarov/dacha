import React, { useState } from "react";
import { Room1, Room2, Room3, Room4, Room5 } from "./ProductImg";
import ReactBnbGallery from "react-bnb-gallery";
import "react-bnb-gallery/dist/style.css";

export const ProductGallery = () => {
  const [isOpen, setIsOpen] = useState(false);

  const PHOTOS = [
    {
      // photo: "https://source.unsplash.com/aZjw7xI3QAA/1144x763",
      photo: Room1,
      caption: "Viñales, Pinar del Río, Cuba",
      subcaption: "Photo by Simon Matzinger on Unsplash",
      thumbnail: Room1
      // thumbnail: "https://source.unsplash.com/aZjw7xI3QAA/100x67",
    },
    {
      // photo:
      //   "https://images.unsplash.com/photo-1588392382834-a891154bca4d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1055&q=80",
      photo: Room2,
      caption: "First Room",
      subcaption: "Photo",
      thumbnail: Room2
      // thumbnail:
      //   "https://images.unsplash.com/photo-1588392382834-a891154bca4d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1055&q=80",
    },
    {
      // photo:
      //   "https://images.unsplash.com/photo-1447752875215-b2761acb3c5d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80",
      photo: Room3,
      caption: "Second Room",
      subcaption: "Photo",
      thumbnail: Room3
      // thumbnail:
      //   "https://images.unsplash.com/photo-1447752875215-b2761acb3c5d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80",
    },
    {
      // photo:
      //   "https://images.unsplash.com/photo-1502082553048-f009c37129b9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80",
      photo: Room4,
      caption: "Third Room",
      subcaption: "Photo",
      thumbnail: Room4
      // thumbnail:
      //   "https://images.unsplash.com/photo-1502082553048-f009c37129b9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80",
    },
    {
      // photo:
      //   "https://images.unsplash.com/photo-1469474968028-56623f02e42e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1053&q=80",
      photo: Room5,
      caption: "Fourth Room",
      subcaption: "Photo",
      thumbnail: Room5
      // thumbnail:
      //   "https://images.unsplash.com/photo-1469474968028-56623f02e42e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1053&q=80",
    },
    {
      photo:
        "https://images.unsplash.com/photo-1470813740244-df37b8c1edcb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1051&q=80",
      caption: "Fourth Room",
      subcaption: "Photo",
      thumbnail:
        "https://images.unsplash.com/photo-1470813740244-df37b8c1edcb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1051&q=80",
    },
  ];

 

  return (
    <div className="product">
      <div className="row">
        <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 pb-2">
          <img
            className="product-img"
            src={Room1}
            alt=""
            width="100%"
            height="auto"
            onClick={() => setIsOpen(true)}
          />
        </div>
        <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12">
          <div className="row">
            <div className="col-6">
              <img
                className="product-img"
                src={Room2}
                alt=""
                width="100%"
                height="auto"
                onClick={() => setIsOpen(true)}
              />
            </div>
            <div className="col-6">
              <img
                className="product-img"
                src={Room3}
                alt=""
                width="100%"
                height="auto"
                onClick={() => setIsOpen(true)}
              />
            </div>
          </div>
          <div className="row pt-3">
            <div className="col-6 ">
              <img
                className="product-img"
                src={Room4}
                alt=""
                width="100%"
                height="auto"
                onClick={() => setIsOpen(true)}
              />
            </div>
            <div className="col-6 product-inner-middle-img">
              <img
                onClick={() => setIsOpen(true)}
                className="product-img"
                src={Room5}
                alt=""
                width="100%"
                height="auto"
              />
              <button className="product-btn" onClick={() => setIsOpen(true)}>
                Показать все фото
              </button>
              <ReactBnbGallery
                show={isOpen}
                keyboard={true}
                backgroundColor="#474545"
                zIndex={9999999}
                photos={PHOTOS}
                onClose={() => setIsOpen(false)}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
