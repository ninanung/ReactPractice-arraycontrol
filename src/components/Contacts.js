import React from "react";
import Contact from "./Contact";
import ContactCreater from "./ContactCreater";
import update from "react-addons-update";

class Contacts extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            Contactdata: [
                { name: "kim", phone: "010-7914-1990" },
                { name: "jun", phone: "010-3260-1990" },
                { name: "su", phone: "010-8988-1723" }
            ]
        }
    }
    _insertContact = (name, phone) => {
        let newState = this.state.Contactdata;
        newState.push({
            name: name,
            phone: phone
        });
        this.setState(newState);
    }
    render() {
        return (
            <div>
                <h1>{ this.props.title }</h1>
                <ul>
                    { this.state.Contactdata.map((contact, i) => {
                        return(
                            <Contact name={ contact.name } phone={ contact.phone } key={i}/>
                        );
                    }) }
                </ul>
                <ContactCreater onInsert={ this._insertContact }/>
            </div>
        );
    }
}

export default Contacts;
