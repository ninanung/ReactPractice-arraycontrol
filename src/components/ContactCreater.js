import React from "react";

class ContactCreater extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "",
            phone: ""
        }
    }
    handleChange = (e) => {
        let nextState = {};
        nextState[e.target.name] = e.target.value;
        this.setState(nextState);
    }
    handleClick = (e) => {
        this.props.onInsert(this.state.name, this.state.phone);
        this.setState = {
            name: "",
            phone: ""
        }
    }
    render() {
        return(
            <div>
                <p>
                    <input type="text" name="name" placeholder="name" value={ this.state.name } onChange={ this.handlechange(this) }/>
                    <input type="text" name="phone" placeholder="phone" value={ this.state.phone } onChange={ this.handlechange(this) }/>
                    <button onClick={ this.handleClick(this) }>Insert</button> 
                </p>
            </div>
        );
    }
}