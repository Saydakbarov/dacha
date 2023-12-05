import styled from "styled-components";
import { SelectPicker } from "rsuite";

export const LanguageInput = styled(SelectPicker)`
  width: 70px !important;
  
  .rs-picker-toggle-value {
    width: 30px;
  }
  .rs-picker-toggle-clean {
    display: none !important;
  }
`;
