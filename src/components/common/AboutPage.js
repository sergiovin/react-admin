// ./src/components/common/AboutPage.js
import React from 'react';
import { Button } from 'react-toolbox/lib/button';

class About extends React.Component {
    constructor(props) {
        super(props);
        this.state = {primary: true, raised:true, r:true};
    }

    //const p = {label: "Hello Wor2ld1222!",  flat,  primary };
    handleToggle = () => {
        this.setState({primary: !this.state.primary,raised: !this.state.raised});
    };

    render() {
        const r=true;
console.log(this.state);
        return (<div>
            <Button  raised={this.state.raised} onClick={this.handleToggle} {...{label: "Hello Wor2ld1222!", primary: this.state.primary}}/>
        </div>);
    }
}

export default About;