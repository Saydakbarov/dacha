import styled from "styled-components";
import InputMask from "react-input-mask";
import { Loader, InputGroup } from "rsuite";

export const InputTelephone = styled(InputMask)`
  width: 300px !important;
  outline: none !important;

  &:hover {
    border: 2px solid #1675e0;
  }

  &:focus {
    border: 2px solid #1675e0;
  }
`;

export const ButtonSubmit = styled.input`
  width: ${(props) => props.width} !important;
`;

export const LoaderJoy = styled(Loader)`
  .rs-loader-spin {
    width: 30px !important;
    height: 30px !important;
    margin-top: 5px !important;
  }
`;

export const InputJoySignUp = styled(InputGroup)`
  padding-top: ${(props) => props.pTop} !important;
  display: flex !important;
  flex-direction: row !important;
  height: ${(props) => props.height} !important;
  width: ${(props) => props.width} !important;
  line-height: ${(props) => props.lineHeight} !important;
`;
