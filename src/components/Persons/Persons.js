import React, {Component} from 'react';
import ErrorBoundry from '../ErrorBoundry/ErrorBoundry';
import Person from '../Persons/Person/Person';

class Persons extends Component {

  /*static getDerivedStateFromProps(state, props) {
    console.log('[Persons.js] getDerivedStateFromProps');
    return state;
  }*/

  shouldComponentUpdate(nextProps, nextState) {
    console.log("[Persons.js] shouldComponentUpdate");
    return nextProps.persons !== this.props.persons || this.props.authenticated !== nextProps.authenticated;
  }
  getSnapshotBeforeUpdate(prevProps, prevState){
    console.log('[Persons.js] getSnapshotBeforeUpdate');
    return {message : 'snapshot'};
  }

  componentDidUpdate() {
    console.log('[Persons.js] componentDidUpdate');
  }

  componentWillUnmount() {
    console.log('[Persons.js] componentWillUnmount');
  }

  render() {
    console.log('[Persons.js] rendering');
    return this.props.persons.map((p)=>{
        return(
          <ErrorBoundry key= {p.id} >
            <Person name= {p.name} 
              age= {p.age}
              id= {p.id} 
              changeContent= {this.props.changed} 
              deletePerson= {this.props.clicked} 
              authen= {this.props.authenticated} />
          </ErrorBoundry>
        );
      }) ;
  }

}

export default Persons;