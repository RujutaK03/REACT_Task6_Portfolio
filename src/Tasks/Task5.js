import React, { Component } from 'react'
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css"

class Task5 extends Component {
    constructor(props) {
        super(props)

        this.state = {
            dob: '',
            age: null,
            error: '',
        };
    };

    handleInput = (input) => {
        this.setState({ dob: input.target.value });
    };

    calculateAge = () => {
        if (!this.state.dob) {
            this.setState({ age: null, error: '' });
            return;
        }

        const today = new Date();
        const birthDate = new Date(this.state.dob);

        if (isNaN(birthDate)) {
            this.setState({ dob: '', age: null, error: 'Invalid Date' });
            return;
        }

        let ageInYears = today.getFullYear() - birthDate.getFullYear();
        if ((today.getMonth() < birthDate.getMonth()) || (today.getMonth() === birthDate.getMonth() && today.getDate() < birthDate.getDate())) {
            ageInYears--;
        }

        if (ageInYears < 0) {
            this.setState({ dob: '', age: null, error: 'Invalid Date' });
            return;
        }

        this.setState({ age: ageInYears });
    }

    render() {
        const { dob, age, error } = this.state;
        console.log('testing');

        return (
            <div className='justify-content align-items-center'>
                <h1 className='mt-5'> Age Calculator </h1>
                <h5 className='py-3'> Enter your date of birth </h5>
                <input type='date' id='dob' value={dob} className='form-control input mx-auto' style={{ width: '250px' }} onChange={this.handleInput} /><br /><br />
                <button className='btn btn-primary mb-3' onClick={this.calculateAge}> Calculate Age </button>
                {age !== null && !error && <h5> You are {age} years old </h5>}
                {error && <h5> {error} </h5>}
            </div>
        );
    };
}

export default Task5
