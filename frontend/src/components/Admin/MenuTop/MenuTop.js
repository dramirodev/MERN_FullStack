import React from 'react';
import './MenuTop.scss';
import { Button } from 'antd';
import {
  MenuUnfoldOutlined,
  PoweroffOutlined,
  MenuFoldOutlined,
} from '@ant-design/icons';
import DavidLogo from '../../../assets/images/png/logo.png';

const MenuTop = ({ setMenuCollapsed, menuCollapsed }) => {
  return (
    <div className="menu-top">
      <div className="menu-top__left">
        <img
          src={DavidLogo}
          alt="logo David ramiro"
          className="menu-top__left-logo"
        />
        <Button type="link" onClick={() => setMenuCollapsed(!menuCollapsed)}>
          {menuCollapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
        </Button>
      </div>

      <div className="menu-top__right">
        <Button type="link">
          <PoweroffOutlined />
        </Button>
      </div>
    </div>
  );
};

export default MenuTop;
