import React from 'react';
import { FormGroup, ControlLabel, FormControl } from 'rsuite';

export const CustomField = ({ name, message, label, accepter, error, ...props }) => {
    return (
        <FormGroup>
            <ControlLabel>{label}</ControlLabel>
            <FormControl
                name={name}
                accepter={accepter}
                errorMessage={error}
                {...props}
            />
        </FormGroup>
    );
};