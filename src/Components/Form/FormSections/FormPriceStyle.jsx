import styled from "styled-components";
import {
  InputNumber,
  SelectPicker,
  InputGroup,
  CheckPicker,
  Input,
  DatePicker,
  Modal,
} from "rsuite";
import MaskedInput from "react-text-mask";

export const InputNumberJoy = styled(InputNumber)`
  height: 52px;
  width: ${(props) => props.inputnumberWidth} !important;

  transition: none !important;
  .rs-input-number-btn-group-vertical > .rs-btn {
    margin-bottom: 15px;
  }

  .rs-input-number-btn-group-vertical {
    display: none !important;
  }
`;

export const InputMine = styled(Input)`
  width: ${(props) => props.inputWidth} !important;
  height: 52px !important;
`;

export const SelectPickerJoy = styled(SelectPicker)`
  height: 52px;
  width: 282px !important;

  .rs-picker-default .rs-picker-toggle.rs-btn {
    height: 100% !important;
  }

  a {
    height: 100%;
    padding-top: 14px !important;

    &:hover {
      border-color: #ff7e47 !important;
    }

    &:focus {
      border-color: #ff7e47 !important;
    }

    .rs-picker-toggle-clean {
      display: none;
    }

    .rs-picker-toggle-caret {
      top: 14px !important;
    }

    .rs-picker-toggle-value {
      color: black !important;
    }
  }
`;

export const InputNumberGroupJoy = styled(InputGroup)`
  height: 50px;
  width: ${(props) => props.widthInptGroup} !important;

  &:hover {
    border-color: #ff7e47 !important;
  }

  &:focus {
    border-color: #ff7e47 !important;
  }
`;

export const InputNumberGroupButtonJoy = styled(InputGroup.Button)`
  background-color: white;
  color: #ff7e47 !important;

  &:hover {
    border-color: #ff7e47 !important;
  }

  &:focus {
    border-color: #ff7e47 !important;
  }
`;

export const UploaderDiv = styled.div`
  display: flex !important;
  flex-direction: row !important;
  height: 300px;
`;

export const InputJoy = styled(InputGroup)`
  padding-top: ${(props) => props.pTop};
  display: flex !important;
  flex-direction: column !important;
  height: ${(props) => props.height} !important;
  width: ${(props) => props.width} !important;
`;

export const InputJoySecond = styled(InputGroup)`
  padding-top: ${(props) => props.pTop};
  display: flex !important;
  flex-direction: row !important;
  height: ${(props) => props.height} !important;
  width: ${(props) => props.width} !important;
  line-height: ${(props) => props.lineHeight} !important;
`;

export const InputNumberSecondJoy = styled(InputNumber)`
  height: ${(props) => props.heightnum} !important;
  width: ${(props) => props.widthNum} !important;
  font-size: ${(props) => props.fontSize} !important;
  padding: ${(props) => props.padding};
  .rs-input-number-btn-group-vertical {
    display: none !important;
  }
`;

export const InputSecondJoy = styled(Input)`
  height: ${(props) => props.heightnum} !important;
  width: ${(props) => props.widthNum} !important;
  font-size: ${(props) => props.fontSize} !important;
  padding: ${(props) => props.padding};
  .rs-input-number-btn-group-vertical {
    display: none !important;
  }
`;

export const MaskedInputJoy = styled(MaskedInput)`
  height: ${(props) => props.heightnum} !important;
  width: ${(props) => props.widthNum} !important;
  font-size: ${(props) => props.fontSize} !important;
  padding: ${(props) => props.padding};
  border-radius: 6px;
  border: 1px solid rgb(229, 229, 234);
  transition: border 0.3s ease;
  &:focus {
    outline: none;
    border: 1px solid #ff7e47;
  }
  .rs-input-number-btn-group-vertical {
    display: none !important;
  }
`;

export const CheckPickerJoy = styled(CheckPicker)`
  width: 100%;

  .rs-picker-value-count {
    background: #ff7e47 !important;
  }
`;

export const LanguageInputSelect = styled(SelectPicker)`
  width: ${(props) => props.widthSelect} !important;
  padding: ${(props) => props.paddingSelect} !important;
  height: ${(props) => props.heightSelect} !important;

  .rs-picker-toggle {
    height: 100%;
    line-height: 35px;
  }
  .rs-picker-toggle-value {
    width: 100%;
  }
  .rs-picker-toggle-clean {
    display: none !important;
  }
`;

export const DatePickerJoy = styled(DatePicker)`
  height: 52px !important;
  width: 100% important;

  a {
    height: 100% !important;
    width: 100% !important;
    line-height: 32px !important;
  }
`;

export const MapModal = styled(Modal)`
  top: 60px !important;

  @media (max-width: 968px) {
    width: 90% !important;
  }
`;
