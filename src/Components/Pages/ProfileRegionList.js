import React from 'react';
import Profile from './Profile';
import RegionTable from '../Profile/RegionTable';




const ProfileRegionList = () => {
    return (
        <Profile>
            <RegionTable />
        </Profile>
    )
}

export default React.memo(ProfileRegionList)
