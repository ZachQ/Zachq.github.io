import './App.css';
import React, {Component} from 'react';
import About from "./components/About/About";
import Header from "./components/Header/Header";
import Experience from "./components/Experience/Experience";
import {Divider, Grid, Icon, Image, Segment} from 'semantic-ui-react'
import Education from "./components/Education/Education";

class App extends Component {
    render() {
        return (
            <div className="App">
                {/*<Sticky>*/}
                <Header/>
                {/*</Sticky>*/}
                <Image id='jumbotron-image' src='Header2.png' fluid/>
                <div id='jumbotron-text'>Hi, I am Zach Quinn, a full-stack software engineer</div>
                <Segment size='massive' inverted>
                    <Divider horizontal inverted>About</Divider>
                </Segment>
                <About/>
                <Segment size='massive' inverted>
                    <Divider horizontal inverted>Experience</Divider>
                </Segment>
                <Experience/>
                <Segment size='massive' inverted>
                    <Divider horizontal inverted>Skills</Divider>
                </Segment>

                <Grid columns='three' stackable divided padded>
                    <p/>
                    <Grid.Row>
                        <Grid.Column textAlign='left'>
                            <Icon.Group>
                                <Icon size='huge' name='laptop'/>
                            </Icon.Group>
                            <p/>
                            Java
                            <br/>Spring Boot
                            <br/>Spring
                            <br/>Javascript
                            <br/>React
                            <br/>Redux
                            <br/>HTML
                            <br/>CSS
                            <br/>SQL
                            <br/>Endeca
                            <br/>Bash Scripting
                            <br/>Groovy configuration
                        </Grid.Column>
                        <Grid.Column textAlign='left'>
                            <Icon.Group>
                                <Icon size='huge' name='line chart'/>
                            </Icon.Group>
                            <p/>
                            <br/>Pair Programming
                            <br/>Test Driven Development (TDD)
                            <br/>Extreme Programming (XP)
                            <br/>Agile / Scrum
                            <br/>Waterfall
                            <br/>Continuous Integration / Continuous Delivery using Jenkins
                            <br/>Gradle / Maven
                            <br/>
                        </Grid.Column>
                        <Grid.Column>
                            <Icon.Group>
                                <Icon size='huge' name='student'/>
                            </Icon.Group>
                            <p/>
                            I have a Computer Science & Engineering degree from The Ohio State University with
                            specialization in software development.
                        </Grid.Column>
                    </Grid.Row>
                </Grid>

                <Segment size='massive' inverted>
                    <Divider horizontal inverted>Education</Divider>
                </Segment>
                <Education/>
            </div>
        );
    }
}

export default App;
