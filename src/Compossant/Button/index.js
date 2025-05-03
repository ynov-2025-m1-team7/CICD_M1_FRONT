import React from 'react';

function SubmitButton(props) {
    return React.createElement('button', {
        type: 'submit',
        disabled: props.disabled || false
    }, 'Se connecter');
}

export default SubmitButton;