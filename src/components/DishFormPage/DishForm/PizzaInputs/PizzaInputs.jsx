import React from 'react';
import { Field } from 'redux-form';
import { required } from '../../../../utils/validators';
import {renderFieldInput} from '../../../common/FormControls'

const PizzaInputs = ({number}) => {
    return (
        <>
            <div className='pizzaInputs'>
                <Field
                    name='no_of_slices'
                    component={renderFieldInput}
                    type='number'
                    step='1'
                    label="Slices"
                    validate={[required]}
                    normalize={number}
                />
                <div className='underline'></div>
            </div>
            <div className='pizzaInputs'>
                <Field
                    name='diameter'
                    component={renderFieldInput}
                    type='number'
                    step='0.01'
                    validate={[required]}
                    label="Diameter"
                    normalize={number}
                />
                <div className='underline'></div>
            </div>
        </>
    );
};

export default PizzaInputs;
