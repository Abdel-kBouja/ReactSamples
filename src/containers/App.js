import React, { Component } from 'react';
import Persons from '../components/Persons/Persons';
import styles from './App.css';
import CockPit from '../components/Cockpit/CockPit';
import WithClass from '../HOC/WithClass';
import AuthContext from '../context/auth-context';

class App extends Component {
  constructor(props){
    super(props);
    console.log('[App.js] constructor');
  }

  /*static getDerivedStateFromProps(props,state) {
    console.log('[App.js] getDerivedStateFromProps', props);
    return state;
  }*/

  /*componentWillMount(){
    console.log('[App.js] willMount');
  }*/
  componentDidMount(){
    console.log('[App.js] componentDidMount');
  }

  shouldComponentUpdate(prevProps, prevState) {
    console.log('[App.js] shouldComponentUpdate');
    return true;
  }

  state = {
    persons:[
      {id:1,name:'ahmed',age: 18},
      {id:2,name:'abdelkabir',age: 19},
      {id:3,name:'lahcen',age: 20}
    ],
    toogleContent: true,
    showCockpit: true,
    authenticated:  false
  };

  updatePersonName = (event,id) => {
    const persons = [...this.state.persons];
    const personIndex = persons.findIndex((p)=> {
      return p.id === id;
    });
    const person = {...persons[personIndex]};
    person.name = event.target.value;

    persons[personIndex] = person;

    this.setState({persons:persons});
  }

  toogleContent = () => {
    this.setState({toogleContent:!this.state.toogleContent});
  }

  deletePerson = (id) => {
    const persons = [...this.state.persons];
    const personIndex = persons.findIndex((p)=> {
      return p.id === id;
    });

    persons.splice(personIndex,1);

    this.setState({persons:persons});
  }

  logInHandler = ()=>{
    this.setState({authenticated: true});
    console.log('Authenticated : ', this.state.authenticated);
  }

  render(){
    console.log('[App.js] render');
    let personsComponent = null;
    if(this.state.toogleContent){
      personsComponent = (
          <Persons
            persons={this.state.persons}
            changed={this.updatePersonName}
            clicked={this.deletePerson}
            authenticated={this.state.authenticated}
          />
      );
    }
    
    return (
        //<div className={styles.App}>
        <WithClass classe={styles.App}>
           <button onClick={ ()=>{ this.setState({showCockpit: !this.state.showCockpit}) } }>
            Toogle the Cockpit
          </button>
          <AuthContext.Provider value={{authenticated:this.state.authenticated, login: this.logInHandler}}>
            {this.state.showCockpit ?
              <CockPit
                title={this.props.title}
                clicked={this.toogleContent}
                personsDisplayed={this.state.toogleContent}
              /> : null}
            {personsComponent}
          </AuthContext.Provider>
        </WithClass>
        //</div>
    );
  } 
}

export default App;
