import React from 'react';
import styles from './Cockpit.module.css'

const Cockpit = (props) => {

    const assignedClasses = [];
    let btnClass = '';

    if(props.showPersons){
        btnClass = styles.Red;
    }

    if (props.persons.length <= 2) {
        assignedClasses.push(styles.red);
    }

    if (props.persons.length <= 1) {
        assignedClasses.push(styles.bold);
    }

    return(
        <div className={styles.Cockpit}>
            <h1>My react App</h1>
            <p className={assignedClasses.join(' ')}>Let's go deeper</p>
            <button className={btnClass} onClick={props.clicked}>
                Toggle Persons
            </button>
        </div>
        );
};

export default Cockpit;