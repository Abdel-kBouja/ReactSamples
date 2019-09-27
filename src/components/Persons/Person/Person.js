import React, {PureComponent} from 'react';
import styles from './Person.css';
import withClass from '../../../HOC/withClass2';
import AUxillary from '../../../HOC/Auxillary';
import PropTypes from 'prop-types';

class Person extends PureComponent {

    constructor(props) {
        super(props);
        this.inputElementRef = React.createRef();
    }

    componentDidMount(){
        console.log('--[Person.js] rendering');
        //this.inputElement.focus();
        this.inputElementRef.current.focus();
    }

    render(){
        console.log('[Person.js] rendering');
    
        let a = Math.random();
        if( a > 0.99){
            throw new Error("Some msg");
        }
        console.log("++++person ",this.props.authen);
        return(
            //<div className={styles.person} >
            //<WithClass classe={styles.person}>
            <AUxillary>
                <p>{this.props.authen ? 'Authenticated!' : 'Please log In' }</p>
                <p onClick={this.props.deletePerson.bind(this,this.props.id)}>
                    I'm {this.props.name} and i am {this.props.age} years old
                </p>
                <p>
                    <input type="text" 
                    onChange={(event)=> this.props.changeContent(event,this.props.id)}
                    //ref={(inputElm) => this.inputElement = inputElm }
                    ref={this.inputElementRef}
                    />
                </p>
            </AUxillary>
            //</WithClass>
                
            //</div>
        );
    }
}

Person.propTypes = {
    authenticated: PropTypes.bool,
    id: PropTypes.number,
    name: PropTypes.string,
    age: PropTypes.number,
    deletePerson: PropTypes.func,
    changeContent: PropTypes.func
};

export default withClass(Person, styles.person);
//export default Person;