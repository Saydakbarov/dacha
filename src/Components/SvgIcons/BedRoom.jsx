import React from "react";
import { SvgDiv } from "./SvgStyle";

const BedRoom = ({ width, height }) => {
  return (
    <SvgDiv
      width={width}
      height={height}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M6.00336 6.98523V10.9078H3.57744V4.86891C9.43584 3.03435 14.5757 3.10203 20.4394 4.87371V10.9083H18.0134V6.97803C13.6469 5.54811 10.3637 5.49531 6.00336 6.98523ZM16.6498 10.9078H7.36704V7.97979C10.6766 6.99243 13.3392 7.02699 16.6498 7.98363V10.9078ZM1.60368 20.0998H22.3963L22.6363 21.8479H24V10.9078H21.803V3.87339C14.941 1.62075 9.06528 1.53435 2.21376 3.88107V10.9078H0V21.8479H1.36368L1.60368 20.0998ZM1.36368 17.4147H22.6368V18.7366H1.36368V17.4147ZM1.36368 12.2715H22.6368V16.0505H1.36368V12.2715Z"
        fill="#444444"
      />
    </SvgDiv>
  );
};

export default BedRoom;
