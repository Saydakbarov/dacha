import React from "react";
import {
  InputNumberSecondJoy,
  InputSecondJoy,
  MaskedInputJoy,
} from "Components/Form/FormSections/FormPriceStyle";
import { Button, Modal } from "rsuite";
import MaskedInput from "react-text-mask";
import { useTranslation } from "react-i18next";

// images
import click from "assets/images/click.png";
import payme from "assets/images/payme.png";
import oson from "assets/images/oson.png";
import paynet from "assets/images/paynet.png";
import apelsin from "assets/images/apelsin.png";
import CustomHelmet from "./CustomHelmet";

const Payment = () => {
  const { t } = useTranslation();
  return (
    <div className="payment">
      <CustomHelmet title="To'lov bo'limi" content="to'lov qilish" />
      <div className="payment-container">
        <div className="d-flex justify-content-between my-2">
          <span className="payment-amount">{t("Сумма оплаты.1")}</span>
          <span className="payment-amount payment-amount--bold">
            5 600 000 сум
          </span>
        </div>

        <label className="payment-label">{t("Выберите способ оплаты.1")}</label>
        <div className="payment-options">
          <div className="payment-option-container">
            <img src={click} alt="click" className="payment-option-img" />
            <p className="payment-option-title">Click</p>
          </div>
          <div className="payment-option-container">
            <img src={payme} alt="payme" className="payment-option-img" />
            <p className="payment-option-title">Payme</p>
          </div>
          <div className="payment-option-container">
            <img src={oson} alt="oson" className="payment-option-img" />
            <p className="payment-option-title">Oson</p>
          </div>
          <div className="payment-option-container">
            <img src={paynet} alt="paynet" className="payment-option-img" />
            <p className="payment-option-title">Paynet</p>
          </div>
          <div className="payment-option-container">
            <img src={apelsin} alt="apelsin" className="payment-option-img" />
            <p className="payment-option-title">Apelsin</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Payment;
