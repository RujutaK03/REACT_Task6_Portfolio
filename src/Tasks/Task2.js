import React, { Component } from 'react'
import "../Tasks/Task2_styles.css"

class Task2 extends Component {
    constructor(props) {
        super(props)

        this.state = {
            input: '',
            result: '',
        };
    };

    handleButtonClick = (value) => {
        const { input } = this.state;

        if (value === '=') {
            try {
                const result = eval(input);
                this.setState({ result: result });
            } catch (error) {
                this.setState({ result: 'error' });
            }
        }

        else if (value === 'C') {
            this.setState({ input: '', result: '' });
        }

        else if (value === ' ') {
            this.setState({ input: input.slice(0, -1) });
        }

        else {
            this.setState({ input: input + value });
        }
    };

    render() {
        const { input, result } = this.state
        return (
            <div className='body'>
                <div className='calculator'>
                    <div className='display'>
                        <input type='text' value={input} readOnly />
                        <p>{result}</p>
                    </div>
                    <div className='table'>
                        <div>
                            <button onClick={() => this.handleButtonClick('7')}>7</button>
                            <button onClick={() => this.handleButtonClick('8')}>8</button>
                            <button onClick={() => this.handleButtonClick('9')}>9</button>
                            <button onClick={() => this.handleButtonClick('.')}>.</button>
                        </div>
                        <div>
                            <button onClick={() => this.handleButtonClick('4')}>4</button>
                            <button onClick={() => this.handleButtonClick('5')}>5</button>
                            <button onClick={() => this.handleButtonClick('6')}>6</button>
                            <button onClick={() => this.handleButtonClick('/')}>/</button>
                        </div>
                        <div>
                            <button onClick={() => this.handleButtonClick('1')}>1</button>
                            <button onClick={() => this.handleButtonClick('2')}>2</button>
                            <button onClick={() => this.handleButtonClick('3')}>3</button>
                            <button onClick={() => this.handleButtonClick('*')}>x</button>
                        </div>
                        <div>
                            <button onClick={() => this.handleButtonClick('0')}>0</button>
                            <button onClick={() => this.handleButtonClick('-')}>-</button>
                            <button onClick={() => this.handleButtonClick('+')}>+</button>
                            <button onClick={() => this.handleButtonClick('=')}>=</button>
                        </div>
                        <div>
                            <button onClick={() => this.handleButtonClick(' ')}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-backspace" viewBox="0 0 15 15">
                                    <path d="M5.83 5.146a.5.5 0 0 0 0 .708L7.975 8l-2.147 2.146a.5.5 0 0 0 .707.708l2.147-2.147 2.146 2.147a.5.5 0 0 0 .707-.708L9.39 8l2.146-2.146a.5.5 0 0 0-.707-.708L8.683 7.293 6.536 5.146a.5.5 0 0 0-.707 0z" />
                                    <path d="M13.683 1a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-7.08a2 2 0 0 1-1.519-.698L.241 8.65a1 1 0 0 1 0-1.302L5.084 1.7A2 2 0 0 1 6.603 1h7.08zm-7.08 1a1 1 0 0 0-.76.35L1 8l4.844 5.65a1 1 0 0 0 .759.35h7.08a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1h-7.08z" />
                                </svg>
                            </button>
                            <button onClick={() => this.handleButtonClick('C')}>C</button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Task2
