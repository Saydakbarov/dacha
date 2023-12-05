import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const CustomSideNav = styled(NavLink)`
    height: auto;
    width: 100%;
    padding: 5px;
    margin-top: 10px;
    /* text-align: center; */

    @media (max-width: 768px){
        height: auto;
        font-size: 13px;
    }
`;