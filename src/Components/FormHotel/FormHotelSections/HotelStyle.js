import styled from "styled-components";
import { Modal } from "rsuite";

export const RoomAddField = styled.div`
  border-style: dashed;
  border-width: 1px;
  border-color: black;
  display: flex;
  flex-direction: row;
  justify-content: center;
  height: 100px;
  line-height: 100px;
  user-select: none;

  &:hover {
    border-color: #ff7e47;
    cursor: pointer;
  }

  h4,
  svg {
    line-height: 100px;
  }

  svg {
    fill: #ff7e47;
    margin-top: 2.8%;
    width: 24px;
    margin-right: 5px;

    @media (max-width: 968px) {
      margin-top: 4.5%;
    }

    @media (max-width: 768px) {
      margin-top: 6%;
    }
  }
`;

export const RoomSingleModal = styled(Modal)`
  top: 100px !important;

  @media (max-width: 968px) {
    width: 90% !important;
  }
`;
