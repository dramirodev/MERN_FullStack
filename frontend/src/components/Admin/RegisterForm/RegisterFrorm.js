import React from 'react';
import { Form, Button, Checkbox, notification, Input } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import './RegisterFrorm.scss';

const RegisterFrorm = () => {
  return (
    <Form className="register-form" layout="vertical">
      <Form.Item label="E-mail">
        <Input
          prefix={<UserOutlined />}
          type="email"
          name="email"
          placeholder="Correo Electronico"
          className="register-form__input"
        />
      </Form.Item>
      <Form.Item label="Contraseña">
        <Input.Password
          prefix={<LockOutlined />}
          type="password"
          name="password"
          placeholder="Contraseña"
          className="register-form__input"
        />
      </Form.Item>
      <Form.Item
        label="Verificar contraseña"
        rules={[
          {
            required: true,
            message: 'Please input your username!',
          },
        ]}
      >
        <Input.Password
          prefix={<LockOutlined />}
          type="password"
          name="repeatPassword"
          placeholder="Repita su contraseña"
          className="register-form__input"
        />
      </Form.Item>
      <Form.Item>
        <Checkbox name="privacyPolicy">
          Acepto la politica de privacidad
        </Checkbox>
      </Form.Item>
      <Form.Item>
        <Button
          type="primary"
          htmlType="submit"
          className="register-form__button"
        >
          Crear Cuenta
        </Button>
      </Form.Item>
    </Form>
  );
};

export default RegisterFrorm;
