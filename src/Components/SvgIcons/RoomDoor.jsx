import React from 'react';
import {SvgDiv} from './SvgStyle'

const RoomDoor = ({ width, height }) => {
  return (
    <SvgDiv
      width={width}
      height={height}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M20.625 19.8748V4.12477H16.5V0.609375L4.125 2.74298V19.8748H0.75V21.3748H4.82344L16.5 22.9853V5.62477H19.125V21.3748H23.25V19.8748H20.625ZM15 21.2642L5.625 19.9711V4.00655L15 2.39039V21.2642Z"
        fill="#444444"
      />
      <path d="M12 10.875H13.5V13.875H12V10.875Z" fill="#444444" />
    </SvgDiv>
  );
};

export default RoomDoor
