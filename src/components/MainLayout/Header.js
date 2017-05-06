import React from 'react';
import { Menu, Icon } from 'antd';
import { Link } from 'dva/router';

const SubMenu = Menu.SubMenu;

function Header({ location }) {
  return (
    <Menu
      selectedKeys={[location.pathname]}
      mode="horizontal"
      theme="dark"
    >
      <Menu.Item key="/">
        <Link to="/"><Icon type="home" />Home</Link>
      </Menu.Item>
      <Menu.Item key="/about">
        <Link to="/about"><Icon type="environment-o" />About</Link>
      </Menu.Item>
      <SubMenu title={<span><Icon type="rocket" />Games</span>}>
        <Menu.Item key="/games/painting">
          <Link to="/games/painting"><Icon type="picture" />你画我猜</Link>
        </Menu.Item>
        <Menu.Item key="/games/gobang">
          <Link to="/games/gobang"><Icon type="dot-chart" />五子棋</Link>
        </Menu.Item>
      </SubMenu>
      <Menu.Item key="/users">
        <Link to="/users"><Icon type="bars" />Users</Link>
      </Menu.Item>
      <Menu.Item key="/more">
        <a href="https://github.com/zzl1787/mysite"><Icon type="github" />More</a>
      </Menu.Item>
    </Menu>
  );
}

export default Header;
