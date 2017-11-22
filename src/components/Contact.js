import React from "react";

class Contact extends React.Component {
    render() {
        return (
            <li>{ this.props.name } { this.props.phone }</li>
        );
    }
}

export default Contact;