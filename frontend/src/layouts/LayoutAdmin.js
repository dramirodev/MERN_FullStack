import React, { useState } from 'react';
import { Route, Redirect } from 'react-router';
import { Layout } from 'antd';
import { LoadRoutes } from '../components/LoadRoutes';
import MenuTop from '../components/Admin/MenuTop';
import MenuSider from '../components/Admin/MenuSider';
import AdminSignIn from '../pages/admin/SigIn';

import './LayoutAdmin.scss';

const LayoutAdmin = (props) => {
  const { routes } = props;
  const { Header, Content, Footer } = Layout;

  const [menuCollapsed, setMenuCollapsed] = useState(false);

  const user = null;

  if (!user) {
    return (
      <>
        <Route path="/admin/login" component={AdminSignIn} />
        <Redirect to="/admin/login" />
      </>
    );
  }

  return (
    <Layout>
      <MenuSider menuCollapsed={menuCollapsed} />
      <Layout
        className="layout-admin"
        style={{
          marginLeft: menuCollapsed ? '80px' : '200px',
        }}
      >
        <Header className="layout-admin__header">
          <MenuTop
            setMenuCollapsed={setMenuCollapsed}
            menuCollapsed={menuCollapsed}
          />
        </Header>
        <Content className="layout-admin__content">
          <LoadRoutes routes={routes} />
        </Content>
        <Footer className="layout-admin__footer">Footer</Footer>
      </Layout>
    </Layout>
  );
};

export default LayoutAdmin;
