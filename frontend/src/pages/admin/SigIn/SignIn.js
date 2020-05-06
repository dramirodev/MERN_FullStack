import React from 'react';
import { Layout, Tabs } from 'antd';
import { Redirect } from 'react-router-dom';
import Logo from '../../../assets/images/png/logo.png';
import RegisterFrorm from '../../../components/Admin/RegisterForm';

import './SigIn.scss';

const SignIn = () => {
  const { Content } = Layout;
  const { TabPane } = Tabs;
  return (
    <Layout className="sign-in">
      <Content className="sign-in__content">
        <h1 className="sign-in__content-logo">
          <img src={Logo} alt="agustin" />
        </h1>

        <div className="sign-in__content-tabs">
          <Tabs type="card" defaultActiveKey="1">
            <TabPane tab={<span>Entrar</span>} key="1">
              Component RegisterForm
            </TabPane>
            <TabPane tab={<span>Nuevo Usuario</span>} key="2">
              <RegisterFrorm />
            </TabPane>
          </Tabs>
        </div>
      </Content>
    </Layout>
  );
};

export default SignIn;
