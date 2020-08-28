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

    switchNameHandler = () => {
        this.setState({persons: [
            { name: 'Daniel D', age: 12},
            { name: 'Rafael D', age: 9},
            { name: 'Joana D', age: 6}
        ] })
    }

    render() {
        return (
            <div className="App">
                <h1>My react App</h1>
                <p>Let's go deeper</p>
                <button onClick={this.switchNameHandler}>Switch Name</button>
                <Person name={this.state.persons[0].name} age={this.state.persons[0].age} />
                <Person name={this.state.persons[1].name} age={this.state.persons[1].age}>
                    My hobbies: Swimming
                </Person>
                <Person name={this.state.persons[2].name} age={this.state.persons[2].age} />
            </div>
        );
    }
}

export default App;
