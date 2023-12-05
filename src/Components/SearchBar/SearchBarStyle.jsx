import styled from "styled-components";
import {
  DateRangePicker,
  RangeSlider,
  InputNumber,
  AutoComplete,
} from "rsuite";

export const DatePickerJoy = styled(DateRangePicker)`
  padding: 0 !important;
  display: flex !important;
  width: ${(props) => props.dateWidth} !important;
  height: ${(props) => props.dateHeight} !important;
  align-items: center !important;

  .rs-picker-default {
    height: ${(props) => props.pickerHeight} !important;
  }
`;

export const RangeSliderJoy = styled(RangeSlider)`
  margin-top: 10px;
  margin-left: 15px;
  width: 250px;
`;

export const InputJoy = styled(InputNumber)`
  margin-top: 8px;
  width: 128px;
  .rs-input-number-btn-group-vertical {
    display: none !important;
  }
`;

export const AutoCompleteJoy = styled(AutoComplete)`
  input {
    height: 70px !important;
  }
`;
