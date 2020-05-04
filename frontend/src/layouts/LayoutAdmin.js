import React from 'react';
import { Layout } from 'antd';
import { LoadRoutes } from '../components/LoadRoutes';

import './LayoutAdmin.scss';

const LayoutAdmin = (props) => {
  const { routes } = props;
  const { Header, Content, Footer } = Layout;

  return (
    <Layout>
      <Layout>
        <Header>header</Header>
        <Content>
          <LoadRoutes routes={routes} />
        </Content>
        <Footer>Footer</Footer>
      </Layout>
    </Layout>
  );
};

export default LayoutAdmin;
