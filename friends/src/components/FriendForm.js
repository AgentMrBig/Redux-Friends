import React, { Component } from 'react';
import styled from 'styled-components';

const Input = styled.input`
    border: solid 1px green;
`

const Button = styled.button`
    border: solid 1px red;
`

class SmurfForm extends Component {
    constructor(props) {
        super(props);

    }

    addSmurf = event => {
        event.preventDefault();
        // add code to create the smurf using the api
        this.props.addSmurf(event, {
            ...this.state
        })

        this.setState({
            id: '',
            name: '',
            age: '',
            height: ''
        });

        setTimeout(() => {
            //this.props.loadSmurfs()
            this.props.history.push('/');
            //this.props.loadSmurfs();
        }, 1000);
    }

    handleInputChange = e => {
        this.setState({ [e.target.name]: e.target.value });
    };

    render() {
        return (
            <div className="SmurfForm">
                <form onSubmit={this.addSmurf}>
                    <h2>Who's That Smurf?</h2>
                    <Input
                        onChange={this.handleInputChange}
                        placeholder="name"
                        value={this.state.name}
                        name="name"
                    />
                    <Input
                        onChange={this.handleInputChange}
                        placeholder="age"
                        value={this.state.age}
                        name="age"
                    />
                    <Input
                        onChange={this.handleInputChange}
                        placeholder="height"
                        value={this.state.height}
                        name="height"
                    />
                    <Button type="submit">Add to the village</Button>
                </form>
            </div>
        );
    }
}
export default SmurfForm;