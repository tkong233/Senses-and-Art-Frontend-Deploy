import React from 'react';
import { Layout } from 'antd';
import './Layout.css';

class SideBar extends React.Component {
  render() {
    const { Sider } = Layout;
    return (
            <Sider id="side-bar">
                <a href='/'>
                <img id="sa-text" src='/sa_text.png' />
                </a>
            </Sider>
    );
  }
}

export default SideBar;