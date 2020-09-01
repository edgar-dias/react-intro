import React, { Component } from 'react';
import styles from './App.module.css';
import Person from './Person/Person';
import ErrorBoundary from './ErrorBoundary/ErrorBoundary';

class App extends Component {
    state = {
        persons: [
            { id: 'ds3f', name: 'Daniel', age: 11 },
            { id: 'f43f', name: 'Rafael', age: 8 },
            { id: 'h6h7', name: 'Joana', age: 5 },
        ],
        otherState: ' some value',
        showPersons: false,
    };

    nameChangeHandler = (event, id) => {
        const personIndex = this.state.persons.findIndex((p) => {
            return p.id === id;
        });
        const person = { ...this.state.persons[personIndex] };
        person.name = event.target.value;
        const persons = [...this.state.persons];
        persons[personIndex] = person;

        this.setState({ persons: persons });
    };

    deletePersonHandler = (personIndex) => {
        const persons = [...this.state.persons];
        persons.splice(personIndex, 1);
        this.setState({ persons: persons });
    };

    togglePersonsHandler = () => {
        const doesShow = this.state.showPersons;
        this.setState({ showPersons: !doesShow });
    };

    render() {
     
        let persons = null;
        let btnClass = '';

        if (this.state.showPersons) {
            persons = (
                <div>
                    {this.state.persons.map((person, index) => {
                        return (
                            <ErrorBoundary key={person.id}>
                            <Person
                                click={() => this.deletePersonHandler(index)}
                                name={person.name}
                                age={person.age}
                                changed={(event) => this.nameChangeHandler(event, person.id)}
                            /></ErrorBoundary>
                        );
                    })}
                </div>
            );

            btnClass = styles.Red;
            
        }

        const assignedClasses = [];
        if (this.state.persons.length <= 2) {
            assignedClasses.push(styles.red);
        } 
        if (this.state.persons.length <= 1) {
            assignedClasses.push(styles.bold);
        } 

        return (
            <div className={styles.App}>
                <h1>My react App</h1>
                <p className={assignedClasses.join(' ')}>Let's go deeper</p>
                <button className={btnClass} onClick={this.togglePersonsHandler}>
                    Toggle Persons
                </button>

                {persons}
            </div>
        );
    }
}

export default App;
