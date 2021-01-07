import React from 'react';
import { Layout, Menu } from 'antd';
import { Link } from 'react-router-dom';
import './Layout.css';

class NavBar extends React.Component {
  render() {
    return (
      <Menu className="nav-bar" mode="horizontal">
        
        <Menu.Item id="nav-bar-item" key="Team">
          <Link id='link' to={'/team'}> Team </Link>
        </Menu.Item>

        <Menu.Item id="nav-bar-item" key="Journal" href='/journal'>
          <Link id='link' to={'/journal'}> Journals </Link>
        </Menu.Item>

        <Menu.Item id="nav-bar-item" key="Research">
          <Link id='link' to={'/research'}> Research </Link>
        </Menu.Item>

        <Menu.Item id="nav-bar-item" key="Home" href='/'>
          <Link id='link' to={'/'}> Home </Link>
        </Menu.Item>
      </Menu>
    );
  }
}

export default NavBar;