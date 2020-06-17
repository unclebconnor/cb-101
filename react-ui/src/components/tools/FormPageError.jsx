import * as React from 'react';

const FormPageError = ({errorText = ''}) => {
    if(errorText === ''){
        errorText = 'Please Enter Required Fields'
    }

    return (
        <div className="field">
            <label>
                <div className="form-page-error">
                    {errorText}
                </div>
            </label>
        </div>
    )
}

export default FormPageError;