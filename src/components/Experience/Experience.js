import React, {Component} from 'react';
import {Segment, Item, Grid} from 'semantic-ui-react'
import './Experience.css'


class Experience extends Component {

    render() {

        return (
            <div id='experience'>
                <Segment basic padded size='large' textAlign='left'>
                    <Grid divided='vertically' verticalAlign='middle' columns='equal'>
                        <Grid.Row columns={2}>
                            <Grid.Column>
                                <Item.Image id='allstate-logo' src='allstate.png'/>
                            </Grid.Column>
                            <Grid.Column>
                                Sr. Software Engineer
                            </Grid.Column>
                        </Grid.Row>
                        <Grid.Row>
                            <Item.Content verticalAlign='middle'>
                                Full Stack Extreme Programming Engineer for Allstate Roadside Services.
                                <ul>
                                    <li>Utilizing Test Driven Development (TDD) 100% of the time</li>
                                    <li>Utilizing Pair Programming 100% of the time</li>
                                    <li>Created a marketing website to allow existing Allstate customers to sign up for roadside assistance</li>
                                    <li>Enhanced marketing website to allow anyone to sign up for Allstate roadside assistance</li>
                                    <li>Created status texting application to send 300,000 messages per month to customers being rescued</li>
                                    <li>Modernizing legacy web services to use the latest RESTful conventions and technologies</li>
                                </ul>
                            </Item.Content>
                        </Grid.Row>
                    </Grid>
                </Segment>
                <Segment basic padded size='large' textAlign='left'>
                    <Grid divided='vertically' verticalAlign='middle' columns='equal'>
                        <Grid.Row columns={2}>
                            <Grid.Column>
                                <Item.Image id='lowes-logo' src='Lowes.svg'/>
                            </Grid.Column>
                            <Grid.Column>
                                Sr. Software Developer
                            </Grid.Column>
                        </Grid.Row>
                        <Grid.Row>
                            <Item.Content verticalAlign='middle'>
                                Technical lead for the search and navigation team.
                                <ul>
                                    <li>The full re-index process of getting 600,000+ products into Endeca</li>
                                    <li>The partial re-index process of getting specific products updated
                                        immediately
                                    </li>
                                    <li>The Assembler service and the Catalog Search wrapper service</li>
                                    <li>The deployment and daily bash scripts</li>
                                    <li>The HTML site directory and XML sitemap</li>
                                    <li>The typeahead/autocomplete service</li>
                                </ul>
                            </Item.Content>
                        </Grid.Row>
                    </Grid>
                </Segment>
            </div>
        )
    }
}

export default Experience;