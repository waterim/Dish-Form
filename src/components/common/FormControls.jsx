export const renderFieldInput = ({
    input,
    label,
    type,
    step,
    meta: { touched, error },
}) => {
    return (
        <div>
            <input {...input} step={step && step} required type={type} />
            {touched && error && <span className='errorMessage'>{error}</span>}
            <label style={touched && error ? { color: 'red' } : {}}>
                {label}
            </label>
            <div
                className='underline'
                style={touched && error ? { background: 'red', transform: 'scaleX(1)'} : {}}
            ></div>
            <span className='validationSign'></span>
        </div>
    );
};
