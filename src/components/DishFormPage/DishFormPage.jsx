import React, { useState } from 'react';
import DishForm from './DishForm/DishForm';
import './DishFormPage.scss';
import { useDispatch } from 'react-redux';
import axios from 'axios';
import { SubmissionError, reset } from 'redux-form';

const DishFormPage = (props) => {
    const [loading, setLoading] = useState();
    const dispatch = useDispatch();

    const onSubmit = (data) => {
        const url = 'https://frosty-wood-6558.getsandbox.com:443/dishes';
        setLoading(true);
        return axios
            .post(url, data)
            .then((res) => {
                setLoading(false);
                dispatch(reset('dishForm'))
                console.log(res.data);
            })
            .catch((err) => {
                setLoading(false);
                // setErrors(JSON.stringify(err.response.data))
                console.log('Error during uploading new data: ', err);
                if (err.response.data) {
                    throw new SubmissionError(err.response.data);
                }
            });
    };
    return (
        <div className='dishFormContainer'>
            <h1 className='dishHeader'>Dish form</h1>
            <DishForm onSubmit={onSubmit} loading={loading} />
        </div>
    );
};

export default DishFormPage;
