import styled from "styled-components";
import { Calendar, Icon } from "rsuite";

export const CustomCalendar = styled(Calendar)`
  .rs-calendar-table-cell-selected {
    background-color: rgba(0, 0, 0, 0.4) !important;
  }
`;


export const CustomImageDiv = styled.div`
  width: 100px;
  height: 100px;
  position: relative;

  &:hover {
    i {
      color: #da3e3e;
      display: block;
    }
    cursor: pointer;
  }
`

export const DeleteIcon = styled(Icon)`
  position: absolute;
  top: 30%;
  right: 20%;
  left: 30%;
  bottom: 20%;
  color: #d86d6d;
  display: none;
`