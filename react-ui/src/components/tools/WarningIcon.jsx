import * as React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExclamationCircle } from '@fortawesome/free-solid-svg-icons';

const WarningIcon = (isVisible) => {
    return (
        <span
            className={`icon is-small is-right ${isVisible ? '' : "is-invisible"}`}
        >
            <FontAwesomeIcon icon={faExclamationCircle} className={'dark-red'}/>
        </span>
    )
}

export default WarningIcon;
