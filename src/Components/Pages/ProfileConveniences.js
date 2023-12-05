import React from 'react'
import Profile from './Profile';
import {useTranslation} from 'react-i18next'
import ConsForm from 'Components/Profile/ConsForm';
import ConsTable from 'Components/Profile/ConsTable';

const ProfileConveniences = () => {
    const {t} = useTranslation();

    return (
        <Profile>
         {t("Удобства.1")}
         <ConsForm />
         <ConsTable />
        </Profile>
    )
}

export default React.memo(ProfileConveniences)
