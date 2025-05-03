import React from 'react';

function Input(props) {
    return React.createElement(
        'div',
        { className: 'input-container' },
        props.label ? React.createElement('label', { htmlFor: props.name, className: 'label' }, props.label) : null,
        React.createElement('input', {
            className: 'input',
            name: props.name,
            type: props.type || 'text',
            placeholder: props.placeholder || '',
            value: props.value,
            onChange: props.onChange
        })
    );
}

export default Input;