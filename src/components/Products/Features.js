import React from 'react';

const Features = (props) => {
    return (
        <div>
            
            <li>{props.description}</li>
            <li>{props.value}</li>
            
        </div>
    );
};

export default Features;