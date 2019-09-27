import React from 'react';

const withClass2 = (WrappedComponent, classe) => {
    return (props) => (<div className={classe}>
                            <WrappedComponent {...props}/>
                        </div>);
};

export default withClass2;