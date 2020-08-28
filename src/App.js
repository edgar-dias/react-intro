import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
    state = {
        persons: [
            { name: 'Daniel', age: 11},
            { name: 'Rafael', age: 8},
            { name: 'Joana', age: 5}
        ],
        otherState: ' some value'
    }

    switchNameHandler = (newName) => {
        this.setState({persons: [
            { name: newName, age: 12},
            { name: 'Rafael D', age: 9},
            { name: 'Joana D', age: 6}
        ] })
    }

    nameChangeHandler = (event) => {
        this.setState({persons: [
            { name: 'Daniel', age: 12},
            { name: event.target.value, age: 9},
            { name: 'Joana', age: 6}
        ] })
    }

    render() {
        const style = {
            backgroundColor: 'white',
            font: 'inherit',
            border: '1px solid blue',
            padding: '8px',
            cursor: 'pointer'
        };

        return (
            <div className="App">
                <h1>My react App</h1>
                <p>Let's go deeper</p>
                <button 
                style={style}
                onClick={() => this.switchNameHandler('Dani')}
                >Switch Name</button>
                <Person name={this.state.persons[0].name} age={this.state.persons[0].age} />
                <Person
                 name={this.state.persons[1].name} 
                 age={this.state.persons[1].age}
                 click={this.switchNameHandler.bind(this, 'Dan!')}
                 changed={this.nameChangeHandler}
                 >
                    My hobbies: Swimming
                </Person>
                <Person name={this.state.persons[2].name} age={this.state.persons[2].age} />
            </div>
        );
    }
}

export default App;
