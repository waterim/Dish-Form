import React from 'react';
import './DishForm.scss';
import {
    Field,
    formValueSelector,
    reduxForm,
    change,
    untouch,
} from 'redux-form';
import { useSelector } from 'react-redux';
//validators
import { required } from '../../../utils/validators';

//helpers
import PizzaInputs from './PizzaInputs/PizzaInputs';
import SandwichInputs from './SandwichInputs/SandwichInputs';
import SoupInputs from './SoupInputs/SoupInputs';

//form controls
import { renderFieldInput } from '../../common/FormControls';

const DishForm = ({
    dispatch,
    handleSubmit,
    submitting,
    invalid,
    pristine,
    loading
}) => {
    const selector = formValueSelector('dishForm');
    const typeValue = useSelector((state) => selector(state, 'type'));

    const resetFields = (formName, fieldsObject) => {
        Object.keys(fieldsObject).forEach((fieldKey) => {
            //reset the field's value
            dispatch(change(formName, fieldKey, fieldsObject[fieldKey]));

            //reset the field's error
            dispatch(untouch(formName, fieldKey));
        });
    };

    const handleTypeSelect = (value) => {
        if (value === '') {
            resetFields('dishForm', {
                spiciness_scale: '',
                slices_of_bread: '',
                diameter: '',
                no_of_slices: '',
            });
        }
        if (value === 'pizza') {
            resetFields('dishForm', {
                spiciness_scale: '',
                slices_of_bread: '',
            });
        }
        if (value === 'sandwich') {
            resetFields('dishForm', {
                no_of_slices: '',
                diameter: '',
                spiciness_scale: '',
            });
        }
        if (value === 'soup') {
            resetFields('dishForm', {
                no_of_slices: '',
                diameter: '',
                slices_of_bread: '',
            });
        }
    };

    const number = (value) => value && Number(value);

    return (
        <form onSubmit={handleSubmit} className='dishForm' noValidate>
            <div className='name'>
                <Field
                    name='name'
                    component={renderFieldInput}
                    type='text'
                    label='Name'
                    validate={[required]}
                />
                <div className='underline'></div>
            </div>
            <div className='time'>
                <Field
                    name='preparation_time'
                    component={renderFieldInput}
                    type='time'
                    label='Preparation Time'
                    step='1'
                    validate={[required]}
                />
            </div>
            <div className='type'>
                <Field
                    name='type'
                    component='select'
                    required
                    onChange={(event) => handleTypeSelect(event.target.value)}
                    validate={[required]}
                >
                    <option value='' disabled='disabled'>
                        Select your dish...
                    </option>
                    <option value='pizza'>Pizza</option>
                    <option value='soup'>Soup</option>
                    <option value='sandwich'>Sandwich</option>
                </Field>
            </div>
            <div className='typeInputs'>
                {typeValue && typeValue === 'pizza' ? (
                    <PizzaInputs number={number} />
                ) : typeValue === 'soup' ? (
                    <SoupInputs number={number} />
                ) : (
                    typeValue === 'sandwich' && <SandwichInputs number={number} />
                )}
            </div>
            <div className='submitButton'>
                <button
                    type='submit'
                    disabled={invalid || submitting || pristine}
                >
                    {loading && <div className="loader"></div>}
                    Submit
                </button>
            </div>
        </form>
    );
};

export default reduxForm({ form: 'dishForm' })(DishForm);
