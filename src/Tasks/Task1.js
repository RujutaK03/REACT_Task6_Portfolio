import React, { Component } from 'react'
import "../../../react_tasks/node_modules/bootstrap/dist/css/bootstrap.min.css"

class Task1 extends Component {
    constructor(props) {
        super(props)

        this.state = {
            wordCount: 0,
        };
    }

    countWords = (input) => {
        input = input.trim()

        if (input === "") {
            return 0;
        }

        return input.split(/\s+/).length;
    }

    handleInput = (event) => {
        this.setState({
            wordCount: this.countWords(event.target.value),
        });
    };

    render() {
        return (
            <div>
                <div class="card text-center w-25 mx-auto my-5">
                    <div class="card-body">
                        <h2 class="card-title mb-4"> Responsive Paragraph Word Counter </h2>
                        <div class="mb-2">
                            <textarea class="form-control border border-dark border-2" id="input_text" rows="5" onChange={this.handleInput}></textarea>
                        </div>
                        <p id="word_count"> Word Count : {this.state.wordCount}</p>
                    </div>
                </div>
            </div>
        )
    };
}

export default Task1
