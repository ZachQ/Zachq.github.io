import React, {Component} from 'react';
import {Segment, Item, Grid} from 'semantic-ui-react'
import './Education.css'

class Education extends Component {

    render() {
        return (
            <div id='education'>
                <Segment basic padded size='large' textAlign='left'>
                    <Grid divided='vertically' verticalAlign='middle' columns='equal'>
                        <Grid.Row columns={2}>
                            <Grid.Column>
                                <Item.Image id='osu-logo' src='OSU.png'/>
                            </Grid.Column>
                            <Grid.Column>
                                Bachelor of Science in Computer Science & Engineering
                            </Grid.Column>
                        </Grid.Row>
                    </Grid>
                </Segment>
            </div>
        )
    }
}

export default Education;