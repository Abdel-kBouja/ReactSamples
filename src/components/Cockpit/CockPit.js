import React, { useEffect, useRef } from 'react';
import styles from './CockPit.css';
import AuthContext from '../../context/auth-context';

const CockPit = (props) =>{

    const btnRef= useRef(null);

    // this effect get executed for the first time only or you can use a state to be conditioned to it's change
    useEffect(() => {
        btnRef.current.click();
        setTimeout(()=>{
            console.log('[CockPit.js][useEffect1] Some init changes')
            //alert("Some init changes");
        },1000);
        return ()=>{
            console.log('[CockPit.js][useEffect1] Some clean up work')
        };
    },[]);

    // this effect get executed when ever the persons changes
    useEffect(() => {
        setTimeout(()=>{
           console.log('[CockPit.js][useEffect2] data saved to cloud')
        },1000);
        return ()=>{ console.log('[CockPit.js][useEffect2] Some clean up work') } ;
    });

    let btnClass = '';
    if(props.personsDisplayed){
        btnClass = styles.red;
    }
    return (
        <AuthContext.Consummer>
            {(context) => 
                (<div className={styles.CockPit}>
                    <h3>{props.title}</h3>
                    <button onClick={props.clicked} className={btnClass} ref= {btnRef}>
                        Toogle Persons
                    </button>
                    <button onClick={context.login}> Log In </button>
                </div>)
            }
        </AuthContext.Consummer>
    );
}

//React.memo(MyComponent) equiv to shouldComponentUpdate
export default React.memo(CockPit);
//export default CockPit;