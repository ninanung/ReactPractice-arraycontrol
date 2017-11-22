import React from 'react';
import Contacts from "./Contacts";

class App extends React.Component {
    render(){
        return (
                <Contacts title={ this.props.arrayTitle }/>
        );
    }
}

App.defaultProps = {
    arrayTitle: "This is default title"
}

export default App;
