import React from 'react';
import { Layout } from 'antd';
import { LoadRoutes } from '../components/LoadRoutes';

import './LayoutAdmin.scss';
import MenuTop from '../components/Admin/MenuTop';

const LayoutAdmin = (props) => {
  const { routes } = props;
  const { Header, Content, Footer } = Layout;

  return (
    <Layout>
      <Layout className="layout-admin">
        <Header className="layout-admin__header">
          <MenuTop />
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
