import React, {Component} from 'react';
import {Menu, Icon, Button} from 'semantic-ui-react'

class Header extends Component {

    state = {};

    handleItemClick = (e, {name}) => {
        console.log(name);
        this.setState({activeItem: name});
    };

    render() {
        const {activeItem} = this.state;

        return (
            <Menu id='header' compact fluid borderless>
                <Menu.Item
                    name='Home'
                    active={activeItem === 'home'}
                    onClick={this.handleItemClick}
                >
                    <span style={{fontFamily: 'Athelas,Palatino Linotype,Book Antiqua,Palatino'}}>ZQ</span>
                </Menu.Item>

                <Menu.Menu position='right'>
                    {/*Todo make each go to given section*/}
                    {/*<Menu.Item*/}
                        {/*name='About'*/}
                        {/*active={activeItem === 'about'}*/}
                        {/*onClick={this.handleItemClick}*/}
                    {/*>*/}
                        {/*About*/}
                    {/*</Menu.Item>*/}
                    {/*<Menu.Item*/}
                        {/*name='Contact'*/}
                        {/*active={activeItem === 'contact'}*/}
                        {/*onClick={this.handleItemClick}*/}
                    {/*>*/}
                        {/*Contact*/}
                    {/*</Menu.Item>*/}
                    <Menu.Item link href='https://www.linkedin.com/in/zachary-a-quinn/' target='https://www.linkedin.com/in/zachary-a-quinn/'>
                        <Button inverted compact basic>
                            <Button.Content visible>
                                <Icon.Group>
                                    <Icon color='blue' name='linkedin'/>
                                </Icon.Group>
                            </Button.Content>
                        </Button>
                    </Menu.Item>
                </Menu.Menu>
            </Menu>
        )
    }
}

export default Header;