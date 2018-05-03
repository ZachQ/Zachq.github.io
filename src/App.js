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

                <Grid columns='three' stackable divided>
                    <p/>
                    <Grid.Row>
                        <Grid.Column>
                            <Icon.Group>
                                <Icon size='huge' name='laptop'/>
                            </Icon.Group>
                            <p/>
                            I enjoy working with Java and Spring Framework for backend development and Javascript,
                            React/Redux for the front end.
                            I also enjoy search technologies and have extensive knowledge as an Endeca developer for 5
                            years.
                        </Grid.Column>
                        <Grid.Column>
                            <Icon.Group>
                                <Icon size='huge' name='line chart'/>
                            </Icon.Group>
                            <p/>
                            I have over 6 years of software development experience in Fortune 100 companies.
                            I have experience as the search and navigation technical lead for a Fortune 50 retail
                            company.
                            I am currently a full-stack developer utilizing Extreme Programming (XP), TDD and Pair
                            Programming.
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
