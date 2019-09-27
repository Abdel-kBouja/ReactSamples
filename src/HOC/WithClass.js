import React from 'react';

const WithClass = props => {
    return <div className={props.classe}>{props.children}</div>
};

export default WithClass;