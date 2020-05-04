import React from 'react';
import { Layout } from 'antd';
import { LoadRoutes } from '../components/LoadRoutes';

import './LayoutBasic.scss';

const LayoutBasic = (props) => {
  const { routes } = props;
  const { Header, Content, Footer } = Layout;

  return (
    <Layout>
      <h1>Basic Layout</h1>
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

export default LayoutBasic;
