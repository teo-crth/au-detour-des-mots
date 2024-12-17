import React from 'react';

const Button = ({text, onClick, type, className}) => {
    return (
        <button onClick={onClick} type={type} className={className}>
            {text}            
        </button>
    );
};

export default Button;