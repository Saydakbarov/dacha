import React from 'react';
import DistrictTable from 'Components/Profile/DistrictTable';
import Profile from './Profile';


const ProfileDistrictList = () => {
    return (
        <Profile>
            <DistrictTable />
        </Profile>
    )
}

export default React.memo(ProfileDistrictList)
