import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Form, Schema, Button } from 'rsuite';
import { CustomField } from './CustomFieldProfile';
import { InputMine } from 'Components/Form/FormSections/FormPriceStyle';
import { useTranslation } from 'react-i18next';
import { addRegion } from 'store/region/regionAction';
import { beginAddRegionMine } from 'store/region/regionSelector';

const model = Schema.Model({
    nameUz: Schema.Types.StringType()
        .isRequired("Iltimos to'ldiring!"),
    nameRu: Schema.Types.StringType()
        .isRequired("Iltimos to'ldiring!"),
    nameEn: Schema.Types.StringType()
        .isRequired("Iltimos to'ldiring!"),
});

const AddRegion = () => {
    const { t } = useTranslation();
    const dispatch = useDispatch();
    const beginAddRegion = useSelector(beginAddRegionMine);
    const [formValue, setFormValue] = useState({
        nameUz: "",
        nameRu: "",
        nameEn: ""
    });

    const [formError, setFormError] = useState({});

    const handleFormChange = e => {
        setFormValue(e)
    };

    const handleErrorChange = error => {
        setFormError(error)
    };

    const handleAddRegion = e => {
        e.preventDefault();
        if (formValue.nameUz.length > 0 && formValue.nameRu.length > 0 && formValue.nameEn.length > 0) {
            dispatch(addRegion(formValue.nameUz, formValue.nameRu, formValue.nameEn));
            setFormValue({ nameEn: "", nameRu: "", nameUz: "" })
        }
    };

    return (
        <Form
            onChange={handleFormChange}
            onCheck={handleErrorChange}
            onSubmit={handleAddRegion}
            formError={formError}
            formValue={formValue}
            model={model}
            className="row ml-2 mt-3"
        >
            <div className="col-md-3 col-sm-12">
                <CustomField
                    accepter={InputMine}
                    inputWidth="100%"
                    scrollable={false}
                    name="nameUz"
                    label={t("Узбекский.1")}
                />
            </div>
            <div className="col-md-3 col-sm-12">
                <CustomField
                    accepter={InputMine}
                    inputWidth="100%"
                    scrollable={false}
                    name="nameRu"
                    label={t("Русский.1")}
                />
            </div>
            <div className="col-md-3 col-sm-12">
                <CustomField
                    accepter={InputMine}
                    inputWidth="100%"
                    scrollable={false}
                    name="nameEn"
                    label={t("Ангилийский.1")}
                />
            </div>

            <div className="col-md-3 col-sm-12" style={{ paddingTop: '3.5%' }}>
                <Button onClick={handleAddRegion} loading={beginAddRegion} appearance="primary" style={{ width: '100%', height: '52px' }}>{t("Добавить.1")}</Button>
            </div>

        </Form>
    )
};

export default React.memo(AddRegion)
