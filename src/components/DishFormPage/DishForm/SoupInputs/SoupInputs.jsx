import React from 'react';
import { Field } from 'redux-form';
import {required, maxLengthCreator, minValueCreator} from '../../../../utils/validators'
import {renderFieldInput} from '../../../common/FormControls'

const maxLength10 = maxLengthCreator(10);
const minValue1 = minValueCreator(1);
const SoupInputs = ({number}) => {
    return (
        <>
            <Field
                name='spiciness_scale'
                component={renderFieldInput}
                type='number'
                min='1'
                max='10'
                validate={[ required, maxLength10, minValue1 ]}
                label="Spiciness scale"
                normalize={number}
            />
            <div className="underline"></div>
        </>
    );
};

export default SoupInputs;
