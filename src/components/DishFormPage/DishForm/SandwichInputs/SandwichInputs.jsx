import React from 'react';
import { Field } from 'redux-form';
import { required } from '../../../../utils/validators';
import {renderFieldInput} from '../../../common/FormControls'

const SandwichInputs = ({number}) => {
    return (
        <>
            <Field
                name='slices_of_bread'
                component={renderFieldInput}
                type='number'
                validate={[required]}
                label="Slices of bread"
                normalize={number}
            />
            <div className='underline'></div>
        </>
    );
};

export default SandwichInputs;
