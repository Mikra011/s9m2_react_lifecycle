import React from "react";

export default class SearchForm extends React.Component {
    constructor() {
        super()
        this.state = {
            inputValue: ''
        }
    }

    handleChange = (event) => {
        this.setState({ inputValue: event.target.value });
    }

    clearInput = () => {
        this.setState({ inputValue: '' });
    }

    render() {
        return (
            <div>
                <input placeholder="breed" value={this.state.inputValue} onChange={this.handleChange} />
                <button onClick={() => {
                    this.props.searchDog(this.state.inputValue)
                    this.clearInput()
                    }} >Submit</button>
            </div>
        )
    }
}