import React, {Component} from 'react';
import {Segment} from 'semantic-ui-react'

const aboutPadding = {
    paddingRight: '40px',
    paddingLeft: '40px',
};

class About extends Component {
    render() {
        return (
            <div id='about' style={aboutPadding}>
                <Segment basic padded size='large' textAlign='left'>
                    As a full stack software engineer I strive for quality, maintainability and
                    a well performing system to ensure the long-term success of the team and product.
                    I am very passionate about writing better performing code and enhancing the system
                    to allow for more functionality to be present without the typical cost incurred
                    from these features.
                    <br/>
                    <br/>
                    I am well versed in a number of technologies, some of them
                    include Endeca, Java, Spring, Javascript, React, Redux, SQL, and Bash scripting.
                    I enjoy learning about search technologies and enhancements that can be done to
                    improve the overall customer experience.
                </Segment>
            </div>
        )
    }
}

export default About;