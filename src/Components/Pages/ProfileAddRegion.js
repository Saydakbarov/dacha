import React from 'react';
import Profile from './Profile';
import { useTranslation } from 'react-i18next';
import AddDistrict from 'Components/Profile/AddDistrict';
import AddRegion from 'Components/Profile/AddRegion';

const ProfileAddRegion = () => {

    const { t } = useTranslation();
    return (
        <Profile>
            <div className="row d-flex flex-column" style={{ paddingLeft: '30px' }}>
                <h6 className="price-text mb-2 ml-4">{t("Добавить Регион.1")}</h6>
                <AddRegion />
            </div>
            <div className="row mt-5 d-flex flex-column" style={{ paddingLeft: '30px', width: '100%' }}>
                <h6 className="price-text mb-2 ml-4">{t("Добавить Район.1")}</h6>
                <AddDistrict />
            </div>
        </Profile>
    )
}

export default React.memo(ProfileAddRegion)
