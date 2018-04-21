import React, {Component} from 'react';
import {Menu} from 'semantic-ui-react'

class Header extends Component {

    state = {};

    handleItemClick = (e, {name}) => {
        console.log(name);
        this.setState({activeItem: name});
    };

    render() {
        const {activeItem} = this.state;

        return (
            <Menu borderless size='massive' attached='top'>
                <Menu.Item
                    name='Home'
                    active={activeItem === 'home'}
                    onClick={this.handleItemClick}
                >
                    <span style={{fontFamily: "Athelas,Palatino Linotype,Book Antiqua,Palatino"}}>ZQ</span>
                </Menu.Item>

                <Menu.Menu position='right'>
                    <Menu.Item
                        name='About'
                        active={activeItem === 'about'}
                        onClick={this.handleItemClick}
                    >
                        About
                    </Menu.Item>
                    <Menu.Item
                        name='Contact'
                        active={activeItem === 'contact'}
                        onClick={this.handleItemClick}
                    >
                        Contact
                    </Menu.Item>
                </Menu.Menu>
            </Menu>
        )
    }
}

export default Header;